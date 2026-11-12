'use strict';

/*
 * Seeds Pages from the Fox page designs. Each page's content is one file in scripts/pages/.
 *
 *   npm run seed:pages              seed every page
 *   npm run seed:pages -- about     seed only scripts/pages/about.js (several names allowed)
 *
 * Stop `strapi develop` first so SQLite isn't shared.
 * Re-running a page REPLACES its content (including edits made in the admin since), then publishes it.
 * Progress and remaining placeholders: scripts/pages/CHECKLIST.md
 */

const fs = require('fs');
const path = require('path');
const mime = require('mime-types');

const dir = path.join(__dirname, 'pages');
const all = fs.readdirSync(dir).filter((f) => f.endsWith('.js') && !f.startsWith('_')).map((f) => f.replace(/\.js$/, ''));

/** Uploads scripts/pages/assets/<file> to the media library once (matched by file name) and returns its id. */
async function uploadAsset(file, alt) {
  const existing = await strapi.db.query('plugin::upload.file').findOne({ where: { name: file } });
  if (existing) return existing.id;
  const filepath = path.join(dir, 'assets', file);
  const [uploaded] = await strapi.plugin('upload').service('upload').upload({
    files: { filepath, originalFileName: file, size: fs.statSync(filepath).size, mimetype: mime.lookup(file) || 'application/octet-stream' },
    data: { fileInfo: { name: file, alternativeText: alt || '' } },
  });
  console.log(`  uploaded ${file}`);
  return uploaded.id;
}

/** Replaces every upload() marker from _helpers.js with the uploaded file's id. */
async function resolveUploads(value) {
  if (Array.isArray(value)) return Promise.all(value.map(resolveUploads));
  if (value && typeof value === 'object') {
    if (value.__upload) return uploadAsset(value.__upload, value.alt);
    const out = {};
    for (const [k, v] of Object.entries(value)) out[k] = await resolveUploads(v);
    return out;
  }
  return value;
}

async function seedPage(name) {
  const page = await resolveUploads(require(path.join(dir, name)));
  const pages = strapi.documents('api::page.page');
  const existing = await pages.findFirst({ filters: { slug: page.slug } });
  const { documentId } = existing
    ? await pages.update({ documentId: existing.documentId, data: page })
    : await pages.create({ data: page });
  await pages.publish({ documentId });
  console.log(`${existing ? 'Updated' : 'Created'} /${page.slug === 'home' ? '' : page.slug} (${page.sections.length} sections)`);
}

async function main() {
  const names = process.argv.slice(2);
  const unknown = names.filter((n) => !all.includes(n));
  if (unknown.length) throw new Error(`No page file for: ${unknown.join(', ')}. Available: ${all.join(', ')}`);

  const { createStrapi, compileStrapi } = require('@strapi/strapi');
  const app = await createStrapi(await compileStrapi()).load();
  app.log.level = 'error';
  for (const name of names.length ? names : all) await seedPage(name);
  await app.destroy();
  process.exit(0);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
