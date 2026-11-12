'use strict';

// Shop & quotes: pages/shop.html in the Fox page designs.
const { callBand } = require('./_helpers');

module.exports = {
  title: 'Shop & quotes',
  slug: 'shop',
  headerVariant: 'full',
  footerVariant: 'full',
  seo: {
    metaTitle: 'Shop filters and get instant quotes | Fox',
    metaDescription: 'Shop furnace filters and get instant quotes for eligible home services online, whenever it’s convenient for you.',
  },
  sections: [
    {
      __component: 'blocks.hero',
      variant: 'short',
      heading: 'Filters, quotes and a few less things on your to-do list.',
      body: 'Shop furnace filters and get instant quotes for eligible home services online, whenever it’s convenient for you.',
      rating: false,
      showButton: false,
      background: 'cream',
      headingLevel: 1,
    },
    {
      __component: 'blocks.embed',
      anchorId: 'store',
      label: 'Contractor Commerce store: Filter Service · Services · HVAC System Quote · Water Heater Quote · Gemstone Lighting · Attic Insulation',
      // url: set to the Contractor Commerce store embed URL (the same store as the current site).
      height: 900,
      background: 'white',
    },
    callBand(),
  ],
};
