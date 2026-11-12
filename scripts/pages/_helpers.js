'use strict';

/** One rich-text paragraph (Strapi "blocks" format). */
const p = (text) => ({ type: 'paragraph', children: [{ type: 'text', text }] });
/** Several paragraphs from plain strings. */
const ps = (...texts) => texts.map(p);
/** Inline link inside a rich-text paragraph. */
const a = (text, url) => ({ type: 'link', url, children: [{ type: 'text', text }] });
/** Bold text inside a rich-text paragraph. */
const b = (text) => ({ type: 'text', text, bold: true });
/** A paragraph mixing plain strings with a() links and b() bold text. */
const para = (...parts) => ({ type: 'paragraph', children: parts.map((x) => (typeof x === 'string' ? { type: 'text', text: x } : x)) });
const inline = (parts) => parts.map((x) => (typeof x === 'string' ? { type: 'text', text: x } : x));
/** Rich-text H2 heading. */
const h2 = (text) => ({ type: 'heading', level: 2, children: [{ type: 'text', text }] });
/** Rich-text bulleted list. Each item is a string, or an array mixing strings with b() / a(). */
const ul = (...listItems) => ({
  type: 'list',
  format: 'unordered',
  children: listItems.map((it) => ({ type: 'list-item', children: inline(Array.isArray(it) ? it : [it]) })),
});
/** Repeatable "Text item" components from plain strings. */
const items = (...texts) => texts.map((text) => ({ text }));

const PHONE = '(778) 486-4772';
const PHONE_HREF = 'tel:+17784864772';

/*
 * Empty values: a null field falls back to the component's built-in demo copy on the site.
 * To show nothing, seed an explicit empty value: '' for text fields, [] for rich text and lists.
 */

/** Reviews block with the design's placeholder reviews (replace with real ones in the admin). */
const placeholderReviews = (over = {}) => ({
  __component: 'blocks.reviews',
  heading: 'The thing our customers say most: “They explained everything.”',
  reviews: [1, 2, 3].map((n) => ({ quote: `[Review ${n}]`, name: '[Name]', town: '[Town]', rating: 5 })),
  showLink: true,
  link: { label: 'Read all reviews', href: '/reviews/' },
  rating: true,
  background: 'navy',
  ...over,
});

/** The standard call band with the call-back form (CallBand defaults written out). */
const callBand = (over = {}) => ({
  __component: 'blocks.call-band',
  heading: 'Sit back, relax, and call Fox.',
  body: 'Calls are answered 24/7, with same-day service.',
  button: { label: 'Call now', href: PHONE_HREF },
  showSecondaryButton: true,
  secondaryButton: { label: 'Book online', href: '/contact/#book' },
  variant: 'full',
  form: true,
  formHeading: 'Prefer we call you back?',
  formIntro: 'Leave your number and we’ll call or text you back.',
  // fields left empty: the site uses its built-in Name / Phone / Postal code / Message fields.
  showMemberCheckbox: true,
  checkboxLabel: 'I’m a More Rewards member',
  showMarketingOptIn: true,
  marketingLabel: 'Yes, send me offers and maintenance reminders from Fox Plumbing Heating Cooling Electrical by text and email. I can unsubscribe anytime.',
  privacyLink: { label: 'Privacy policy', href: '/privacy-policy/' },
  consent: 'We’ll text or email you about your booking.',
  sendLabel: 'Call me back',
  sendingLabel: 'Sending…',
  failedMessage: 'Something went wrong and your message didn’t send. Please call us any time at (778) 486-4772.',
  background: 'navy',
  ...over,
});

/** Media field value: scripts/pages/assets/<file>, uploaded to the media library on seed (once, matched by file name). */
const upload = (file, alt = '') => ({ __upload: file, alt });

/** The standard trust bar under a hero. */
const trustBar = (over = {}) => ({
  __component: 'blocks.trust-bar',
  points: items('Local since 1998', 'Same-day service', 'Flat-rate pricing', 'Not-a-Dime Warranty'),
  badge: true,
  linkWarranty: true,
  warrantyHref: '/warranty/',
  background: 'white',
  ...over,
});

/** "Related services" cards at the foot of a service page. */
const related = (...cards) => ({
  __component: 'blocks.card-grid',
  heading: 'Related services',
  cardStyle: 'service',
  cardVariant: 'tappable',
  maxColumns: 3,
  background: 'cream',
  cards,
});

module.exports = { p, ps, a, b, para, h2, ul, items, upload, PHONE, PHONE_HREF, placeholderReviews, callBand, trustBar, related };
