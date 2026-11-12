'use strict';

// Offers: pages/offers.html in the Fox page designs.
const { ps, upload, callBand } = require('./_helpers');

const moreWays = [
  { name: 'Financing', description: 'Get the right system for your home and spread the cost over time.', button: { label: 'See financing', href: '/financing/' } },
  { name: 'Rebates', description: 'There may be rebates available for eligible home upgrades. Ask us what’s current.', button: { label: 'Learn more', href: '/rebates/' } },
  { name: 'Service Partner Plan', description: 'System inspections as needed, maintenance reminders and savings on eligible repairs.', button: { label: 'Join the plan', href: '/service-partner-plan/#plans' } },
  {
    name: 'Attic insulation',
    description: 'Keep the heat in during winter and out in summer, so your furnace and AC don’t have to work as hard. It can help lower your energy bills, and rebates may be available.',
    button: { label: 'Book online', href: '/contact/#book' },
  },
];

module.exports = {
  title: 'Offers',
  slug: 'offers',
  headerVariant: 'full',
  footerVariant: 'full',
  seo: {
    metaTitle: 'Offers | This month at Fox',
    metaDescription: 'Current offers on furnace tune-ups, drain clearing and Gemstone Lighting, plus financing, rebates and the Service Partner Plan.',
  },
  sections: [
    {
      __component: 'blocks.hero',
      heading: 'This month at Fox',
      body: 'A little help with the jobs you’ve been putting off. Take a look at our current offers and see what makes sense for your home.',
      rating: false,
      showButton: false,
      photoLabel: 'Technician at a customer’s door',
      background: 'cream',
      headingLevel: 1,
    },
    {
      __component: 'blocks.offer-grid',
      heading: 'Current offers',
      variant: 'master',
      background: 'white',
      offers: [
        { name: 'Fur Fur Furnace', price: '$129', action: 'tune-up', tag: 'Ends Dec 31', imageLabel: '[Furnace tune-up photo]', href: '/offers/fur-fur-furnace/' },
        { name: 'Yuck Unstuck', price: '$99', action: 'drain clearing', imageLabel: '[Drain clearing photo]', href: '/offers/yuck-unstuck/' },
        { name: 'Gemstone Lighting', price: 'Save 10%', action: 'on installation', tag: 'Ends Dec 31', imageLabel: '[Gemstone house at night]', href: '/gemstone-lighting/#quote', ctaLabel: 'Get a free quote' },
      ],
    },
    {
      __component: 'blocks.offer-grid',
      heading: 'More ways to save',
      variant: 'detailed',
      background: 'light_blue',
      // price '' hides it (an empty price would show the "$[price]" placeholder).
      offers: moreWays.map((o) => ({ ...o, price: '', buttonVariant: 'secondary' })),
    },
    {
      __component: 'blocks.text-image',
      heading: 'Earn More Rewards points with Fox.',
      body: ps('More Rewards is the loyalty program you already use at Save-On-Foods and other stores across Western Canada. As a More Rewards partner, Fox lets you earn points on plumbing, heating, cooling and electrical work, and we run bonus-point offers throughout the year. Just give us your More Rewards number when you book.'),
      showButton: false,
      links: [],
      media: 'logo',
      logo: upload('more-rewards.png', 'More Rewards'),
      logoName: 'More Rewards',
      logoMinWidth: 160,
      background: 'cream',
      photoMobile: 'below',
    },
    {
      __component: 'blocks.small-print',
      text: ps('Terms and conditions apply to each offer.'),
      background: 'white',
    },
    callBand(),
  ],
};
