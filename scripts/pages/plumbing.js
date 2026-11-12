'use strict';

// Plumbing hub: pages/plumbing-hub.html in the Fox page designs.
const { ps, PHONE_HREF, placeholderReviews, callBand, trustBar } = require('./_helpers');

const card = (title, text, href) => ({ title, text, href });

module.exports = {
  title: 'Plumbing',
  slug: 'plumbing',
  headerVariant: 'full',
  footerVariant: 'full',
  seo: {
    metaTitle: 'Plumbing | Same-day service | Fox',
    metaDescription: 'Leaks, water heaters and repiping, with same-day service in Vernon, Kamloops, Kelowna and the Shuswap.',
  },
  sections: [
    {
      __component: 'blocks.hero',
      heading: 'Nobody plans for a plumbing problem. We do.',
      body: 'Leaks, water heaters and repiping, with same-day service in Vernon, Kamloops, Kelowna and the Shuswap.',
      rating: true,
      showButton: true,
      button: { label: 'Call now', href: PHONE_HREF },
      photoLabel: 'Plumbing photo',
      background: 'cream',
      headingLevel: 1,
    },
    trustBar(),
    {
      __component: 'blocks.card-grid',
      heading: 'What’s going on?',
      cardStyle: 'service',
      cardVariant: 'tappable',
      maxColumns: 3,
      lastRow: 'center',
      background: 'cream',
      cards: [
        card('No hot water', 'Water heater repair', '/plumbing/water-heater-repair/'),
        card('Leak or burst pipe', 'Plumbing repair', '/plumbing/plumbing-repair/'),
        card('Hidden leak or a high water bill', 'Leak detection', '/plumbing/leak-detection/'),
        card('Low water pressure', 'Plumbing repair', '/plumbing/plumbing-repair/'),
        card('Poly-B pipes', 'Repiping & Poly-B replacement', '/plumbing/repiping-poly-b-replacement/'),
        card('Old or leaking water tank', 'Water heater installation', '/plumbing/water-heater-installation/'),
      ],
    },
    {
      __component: 'blocks.text-image',
      heading: 'Plumbing is where we started.',
      body: ps('Fox began in 1998 as a plumbing company, run out of a one-car garage in Vernon by Ted Fox and his dad. Nearly 30 years later, it’s still the work we know best. Whatever’s dripping, leaking or not heating, we’ll find out why and fix it properly.'),
      showButton: false,
      links: [],
      media: 'photo',
      photoLabel: 'Team or van photo',
      background: 'white',
      photoSide: 'right',
    },
    {
      __component: 'blocks.card-grid',
      heading: 'Plumbing services',
      cardStyle: 'service',
      cardVariant: 'tappable',
      maxColumns: 3,
      lastRow: 'center',
      background: 'light_blue',
      cards: [
        card('Plumbing repair', 'Leaks, drips and low pressure', '/plumbing/plumbing-repair/'),
        card('Water heater installation', 'Tank, tankless or heat pump', '/plumbing/water-heater-installation/'),
        card('Water heater repair', 'No hot water or a leaking tank', '/plumbing/water-heater-repair/'),
        card('Tankless water heaters', 'Hot water that doesn’t run out', '/plumbing/tankless-water-heaters/'),
        card('Leak detection', 'Find hidden leaks with less mess', '/plumbing/leak-detection/'),
        card('Repiping & Poly-B', 'Know what’s in your walls', '/plumbing/repiping-poly-b-replacement/'),
        card('Water treatment', 'Better water from every tap', '/plumbing/water-treatment/'),
      ],
    },
    placeholderReviews({ background: 'cream' }),
    callBand(),
  ],
};
