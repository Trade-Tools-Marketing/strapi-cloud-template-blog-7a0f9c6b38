'use strict';

// Financing: pages/financing.html in the Fox page designs.
const { ps, callBand } = require('./_helpers');

// Placeholder: replace with Fox's Financeit application link (the design had .../[fox-application-link]).
const APPLY = { label: 'Apply for financing', href: 'https://www.financeit.ca/', newTab: true };

module.exports = {
  title: 'Financing',
  slug: 'financing',
  headerVariant: 'full',
  footerVariant: 'full',
  seo: {
    metaTitle: 'Financing | Comfort now, payments over time',
    metaDescription: 'Financing options through Financeit for furnaces, heat pumps, water heaters and other home upgrades.',
  },
  sections: [
    {
      __component: 'blocks.hero',
      heading: 'Comfort now. Payments over time.',
      body: 'Financing options for furnaces, heat pumps, water heaters and other home upgrades.',
      rating: true,
      showButton: true,
      button: APPLY,
      photoLabel: '[Photo: comfortable family at home]',
      background: 'cream',
      tail: false,
      headingLevel: 1,
    },
    {
      __component: 'blocks.text-image',
      heading: 'Nobody plans for a new furnace.',
      body: ps('And nobody loves finding out their water heater needs replacing either. When a big home repair or upgrade comes up, financing can help you choose the system that makes sense for your home without paying the full amount upfront.'),
      showButton: false,
      links: [],
      media: 'photo',
      photoLabel: '[Photo: technician with homeowner]',
      background: 'white',
      photoSide: 'right',
    },
    {
      __component: 'blocks.feature-list',
      heading: 'How it works',
      layout: 'image',
      pointStyle: 'ticks',
      photoLabel: '[Photo: reviewing options with a homeowner]',
      background: 'light_blue',
      points: [
        { lead: 'Financing through Financeit' },
        { lead: 'No down payment required on eligible financing plans, with up to 100% of the project cost financed' },
        { lead: 'Terms of up to 12 years, with no penalty for early repayment' },
        { lead: 'Ask about any current promotional payment options' },
      ],
    },
    {
      __component: 'blocks.steps',
      heading: 'Getting started',
      layout: 'auto',
      background: 'white',
      steps: [
        { title: 'Choose the system that’s right for your home, with help from our team.' },
        { title: 'Apply for financing and review your payment options.' },
        { title: 'Once everything is approved, we’ll schedule your installation. Next-day installation is often available.' },
      ],
      button: APPLY,
    },
    {
      __component: 'blocks.faq',
      heading: 'Financing questions',
      background: 'cream',
      openOnLoad: 1,
      items: [
        { question: 'Does applying affect my credit?', answer: ps('Yes. Applying includes a credit check.') },
        { question: 'What can I finance?', answer: ps('Financing may be available for furnaces, heat pumps, water heaters and other eligible home upgrades. Ask us about your project and we’ll explain the options.') },
      ],
    },
    callBand(),
  ],
};
