'use strict';

// Homeowner guides: pages/guides.html in the Fox page designs.
// Each guide card is added by hand. Topic filter chips appear once there are 9 or more guides.
const { items, callBand } = require('./_helpers');

module.exports = {
  title: 'Homeowner guides',
  slug: 'guides',
  headerVariant: 'full',
  footerVariant: 'full',
  seo: {
    metaTitle: 'Homeowner guides | Fox',
    metaDescription: 'Straight answers to the questions we hear most about heating, cooling, plumbing and electrical.',
  },
  sections: [
    {
      __component: 'blocks.hero',
      variant: 'short',
      heading: 'Homeowner guides',
      body: 'Straight answers to the questions we hear most.',
      rating: false,
      showButton: false,
      background: 'cream',
      headingLevel: 1,
    },
    {
      __component: 'blocks.guide-hub',
      featured: true,
      filterMin: 9,
      pageSize: 9,
      loadMore: 'auto',
      background: 'white',
      topics: items('Heating & cooling', 'Plumbing', 'Electrical', 'Gemstone'),
      guides: [
        {
          title: 'Signs your furnace needs replacing',
          topic: 'Heating & cooling',
          summary: 'If your furnace is 15+ years old and needs repairs every winter, it may be time to plan a replacement.',
          imageLabel: '[Furnace photo]',
          href: '/guides/signs-your-furnace-needs-replacing/',
        },
        {
          title: 'How often should you clean your air ducts?',
          topic: 'Heating & cooling',
          summary: 'Every 3 to 5 years is a common guideline. Some homes need it sooner.',
          imageLabel: '[Air duct photo]',
          href: '/guides/air-duct-cleaning/',
        },
        {
          title: 'Tankless water heaters, the honest pros and cons',
          topic: 'Plumbing',
          summary: 'Endless hot water, but a higher upfront cost.',
          imageLabel: '[Tankless water heater photo]',
          href: '/guides/tankless-water-heaters/',
        },
        {
          title: 'Poly-B piping, what BC homeowners should know',
          topic: 'Plumbing',
          summary: 'Home built between the mid-80s and late 90s? Check for grey Poly-B pipe.',
          imageLabel: '[Poly-B pipe photo]',
          href: '/guides/poly-b-piping/',
        },
      ],
    },
    callBand(),
  ],
};
