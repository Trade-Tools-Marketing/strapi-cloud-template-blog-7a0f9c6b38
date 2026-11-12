# Page build checklist

Source: the Fox page designs export (`01 Page designs/pages/*.html`). Each page is one file here, seeded with `npm run seed:pages -- <file>`.

| # | Page | URL | File | Status |
|---|---|---|---|---|
| 1 | Homepage | / | home.js | ✅ Seeded |
| 2 | About | /about/ | about.js | ✅ Seeded |
| 3 | Contact | /contact/ | contact.js | ✅ Seeded |
| 4 | Reviews | /reviews/ | reviews.js | ✅ Seeded |
| 5 | Careers | /careers/ | careers.js | ✅ Seeded |
| 6 | Financing | /financing/ | financing.js | ✅ Seeded |
| 7 | Offers | /offers/ | offers.js | ✅ Seeded |
| 8 | Fur Fur Furnace campaign | /offers/fur-fur-furnace/ | fur-fur-furnace.js | ✅ Seeded |
| 9 | Service Partner Plan | /service-partner-plan/ | service-partner-plan.js | ✅ Seeded |
| 10 | Shop & quotes | /shop/ | shop.js | ✅ Seeded |
| 11 | Plumbing hub | /plumbing/ | plumbing.js | ✅ Seeded |
| 12 | Furnace installation | /heating-cooling/furnace-installation/ | furnace-installation.js | ✅ Seeded |
| 13 | Furnace & heating repair | /heating-cooling/furnace-repair/ | furnace-repair.js | ✅ Seeded |
| 14 | Gemstone Lighting | /gemstone-lighting/ | gemstone-lighting.js | ✅ Seeded |
| 15 | Kamloops | /locations/kamloops/ | kamloops.js | ✅ Seeded |
| 16 | Homeowner guides | /guides/ | guides.js | ✅ Seeded |
| 17 | Guide: Poly-B piping | /guides/poly-b-piping/ | guide-poly-b-piping.js | ✅ Seeded |
| 18 | Privacy policy | /privacy-policy/ | privacy-policy.js | ✅ Seeded |
| 19 | Thank you | /thank-you/ | thank-you.js | ✅ Seeded |

Not CMS pages:
- **404**: the site's `app/not-found.tsx`.
- **Desktop menu, Phone menu, Components states & extras**: design demos of the header and components, not pages.

## Known gaps (decide before launch)

- **No square brackets in URLs.** Next's `<Link>` treats `[...]` as a route segment and the page errors, so placeholder links use the bare domain instead.
- **Links inside rich text** (paragraphs, FAQ answers) must be `https://…`, `/path`, `tel:` or `mailto:`. Strapi rejects a bare `#anchor`, so use the page path: `/gemstone-lighting#gvz-open`. Button and link fields accept `#anchor`.
- **Widgets not on the site yet:** Gemstone AI preview (`#gvz-open`) and chat (`#chat`). Those buttons go nowhere until the widgets are added.
- **Service pages that don't exist yet** but are linked from these: the heating, plumbing and drains sub-pages (e.g. `/plumbing/leak-detection/`, `/heating-cooling/heat-pump-installation/`), the hubs other than Plumbing, and `/guides/signs-your-furnace-needs-replacing/`. See the export's Link audit.

## Blocks added while building pages

- **Embed** (`blocks.embed`): third-party widget panel with an anchor id; grey placeholder until `url` is set. Used for the Contact booking (Netic) and the Shop store (Contractor Commerce).
- **Call band → Show button**, **Reviews → Show heading**: switches to hide those, like the existing "Show …" switches.
- **Anchor ID** on Card grid (Contact `#locations`) and Plan compare (Service Partner Plan `#plans`). Any block with an `anchorId` field becomes an in-page link target.
- **Card grid text** is one line per line; a line that is only a phone number becomes a tap-to-call link.
- **Offer card → Price** is optional (detailed cards like "More ways to save" have none). In an Offer grid, the grid's Variant applies to every card.
- **Page → Phone**: replaces Global's number in the header and sticky bar for that page (Kamloops, Service Partner Plan). Blocks on the page still carry their own buttons.
- **Card icon "tick"** (for "Service Partner Plan" in Related services).
- **Message** (`blocks.message`): centred status message with a tick, buttons and "While you wait" link cards. Used for Thank you.

## Images

Put files in `scripts/pages/assets/` and use `upload('file.png', 'alt text')` in a page file. The seed uploads each file to the media library once (matched by file name) and reuses it after that.

## Placeholders to replace in the admin (per page)

- **Homepage:** 3 reviews; photos for the hero, 3 text-image sections and 3 offer cards.
- **About:** 3 reviews; photos for the 3 text-image sections and the "How we work" feature list; BBB seal image (shows a text label until uploaded).
- **Contact:** Netic booking embed URL (Embed block → URL); 1 photo.
- **Reviews:** 6 reviews; "Leave a Google review" link (currently a Google search for Fox reviews).
- **Careers:** Collage jobs page URL (hero + call band buttons, currently `https://secure.collage.co/jobs/`); team member quote, name and role; 3 photos.
- **Financing:** Financeit application link (hero + steps buttons, currently `https://www.financeit.ca/`); 3 photos.
- **Offers:** photos for the hero and 3 offer cards; `/offers/yuck-unstuck/` and `/rebates/` don't have pages yet.
- **Fur Fur Furnace:** 1 review; terms and conditions; 2 photos. The design's slim footer shows Privacy + Cookie policy links: that's set in Global → footer, not per page.
- **Service Partner Plan:** 1 member review; 3 photos; "Air filters available to buy" isn't linked to /shop/ (plan "common" items are plain text); `/service-partner-plan/join/` sign-up pages don't exist yet.
- **Shop:** Contractor Commerce store embed URL (Embed block → URL).
- **Plumbing:** 3 reviews; 2 photos.
- **Furnace installation:** 3 reviews; what the $7,999 starting price includes (Pricing → Price note); 6 photos.
- **Furnace repair:** 3 reviews; 4 photos.
- **Gemstone Lighting:** 3 reviews; before/after photos; 6 gallery photos; 5 other photos.
- **Kamloops:** 3 Kamloops reviews; 5 photos.
- **Homeowner guides:** 4 card photos; 3 of the 4 guides (furnace replacement, air ducts, tankless) don't have pages yet.
- **Poly-B guide:** "Updated [Month Year]" date; 1 photo.
- **Privacy policy:** the whole policy text and the "Last updated" date (to be supplied by Fox).
- **Thank you:** nothing. Note the call-back forms don't send anywhere yet (`CallBand` → `onSubmit`, see the site's README-FOX.md).
