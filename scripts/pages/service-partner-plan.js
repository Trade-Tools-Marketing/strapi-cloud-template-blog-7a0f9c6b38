'use strict';

// Service Partner Plan: pages/service-partner-plan.html in the Fox page designs.
// Page phone (833) 568-9288 replaces the main number in the header and sticky bar.
const { p, ps, items, callBand } = require('./_helpers');

const SEE_PLANS = { label: 'See plans', href: '#plans' };
const JOIN = { label: 'Join the plan', href: '#plans' };
const CALL = { label: 'Call (833) 568-9288', href: 'tel:+18335689288' };
const WHOLE_HOME = 'plus a whole-home plumbing and electrical safety inspection';

const row = (label, ...values) => ({ label, values: items(...values) });

module.exports = {
  title: 'Service Partner Plan',
  slug: 'service-partner-plan',
  headerVariant: 'full',
  footerVariant: 'full',
  phone: '(833) 568-9288',
  seo: {
    metaTitle: 'Fox Service Partner Plan | Plans from $60 a year',
    metaDescription: 'Inspections, maintenance reminders and up to 10% off eligible repairs. More than 1,500 of your neighbours are already members.',
  },
  sections: [
    {
      __component: 'blocks.hero',
      heading: 'One less thing to remember about your home.',
      body: 'Your heating, cooling and home systems need looking after. We’ll help you stay on top of maintenance, remind you when it’s time and save you money on repairs.',
      priceLine: 'Plans start at $60 a year.',
      rating: true,
      showButton: true,
      button: SEE_PLANS,
      photoLabel: 'Technician with homeowner',
      background: 'cream',
      headingLevel: 1,
    },
    {
      __component: 'blocks.trust-bar',
      points: items('1,500+ members', 'Repair discounts up to 10%', 'Maintenance reminders'),
      badge: true,
      linkWarranty: true,
      warrantyHref: '/warranty/',
      background: 'white',
    },
    {
      __component: 'blocks.text-image',
      heading: 'Who it’s for',
      body: ps('Honestly? It’s not for everyone. But if you’d rather stay ahead of problems than wait for something to break, it might be for you. With inspections, repair savings and reminders built in, there’s one less thing to keep track of. More than 1,500 of your neighbours are already members.'),
      showButton: false,
      links: [],
      media: 'photo',
      photoLabel: 'Home photo',
      background: 'cream',
      photoSide: 'right',
    },
    {
      __component: 'blocks.feature-list',
      heading: 'What members get',
      pointStyle: 'ticks',
      background: 'light_blue',
      points: [
        { lead: 'System inspections', text: 'HVAC inspections as needed, plus a whole-home plumbing and electrical safety inspection.' },
        { lead: 'Maintenance reminders', text: 'We’ll let you know when it’s time for a checkup.' },
        { lead: 'Repair savings', text: 'Up to 10% off eligible repairs.' },
        { lead: 'Lower call-out fees', text: 'Pay less, or nothing, when you need us.' },
        { lead: 'Live chat with a technician', text: 'Get help when you have questions.' },
        { lead: 'Fox Funds', text: 'Earn credits toward filters and HVAC services.' },
      ],
      closingLink: { label: 'Compare plans ↓', href: '#plans' },
    },
    {
      __component: 'blocks.plan-compare',
      anchorId: 'plans',
      heading: 'Pick your plan',
      background: 'white',
      plans: [
        {
          name: 'Basic', price: '$60', period: '/year', commitment: 'Cancel anytime', href: '/service-partner-plan/join/?plan=basic',
          key: items('Pays the call-out fee', '5% off eligible repairs', `1 HVAC inspection as needed, ${WHOLE_HOME}`, '$25 Fox Funds sign-up bonus'),
        },
        {
          name: 'Plus', price: '$110', period: '/year', commitment: 'Cancel anytime', popular: true, href: '/service-partner-plan/join/?plan=plus',
          key: items('Call-out fee only for weekend emergencies', '10% off eligible repairs', `1 HVAC inspection as needed, ${WHOLE_HOME}`, '$75 Fox Funds sign-up bonus + $4 a month'),
        },
        {
          name: 'Pro', price: '$350', period: '/year', commitment: '24 months ($120 fee to cancel early)', href: '/service-partner-plan/join/?plan=pro',
          key: items('Never pays a call-out fee', '10% off eligible repairs, 5% off installations', `2 HVAC inspections as needed, ${WHOLE_HOME}`, '$150 Fox Funds sign-up bonus + $5 a month'),
        },
      ],
      features: [
        row('Price', '$60/year', '$110/year', '$350/year'),
        row('Commitment', 'Cancel anytime', 'Cancel anytime', '24 months ($120 fee to cancel early)'),
        row('Call-out fee ($99 regular hours, $139 weekends)', 'Pays the call-out fee', 'Pays only for weekend emergencies', 'Never pays a call-out fee'),
        row('System inspections', `1 HVAC inspection as needed, ${WHOLE_HOME}`, `1 HVAC inspection as needed, ${WHOLE_HOME}`, `2 HVAC inspections as needed, ${WHOLE_HOME}`),
        row('FoxGuard sensors on your equipment', 'No', 'No', 'Yes'),
        row('Fox Funds sign-up bonus', '$25', '$75', '$150'),
        row('Monthly Fox Funds credit', '$0', '$4', '$5'),
        row('Repair discount', '5%', '10%', '10%'),
        row('Installation discount', 'N/A', 'N/A', '5%'),
      ],
      // The design links "Air filters available to buy" to /shop/; common items are plain text.
      common: items('Live chat with a technician', 'Maintenance reminders', 'Air filters available to buy'),
    },
    {
      __component: 'blocks.text-image',
      heading: 'How the plan saves you money.',
      body: [
        { type: 'paragraph', children: [{ type: 'text', text: 'A little attention now can save a bigger headache later.', bold: true }] },
        p('With the Service Partner Plan, you can keep an eye on your home’s systems, get help when something doesn’t seem right and save on eligible repairs. Plus members only pay a call-out fee for weekend emergencies, and Pro members never pay one.'),
        p('And with Fox Funds, you can build up credits toward a future major HVAC expense.'),
      ],
      showButton: false,
      links: [],
      media: 'photo',
      photoLabel: 'Furnace or technician photo',
      background: 'cream',
      photoSide: 'left',
    },
    {
      __component: 'blocks.reviews',
      heading: 'The thing our customers say most: “They explained everything.”',
      reviews: [{ quote: '[Member review]', name: '[Name]', town: '[Town]', rating: 5 }],
      showLink: true,
      link: { label: 'Read all reviews', href: '/reviews/' },
      rating: true,
      background: 'navy',
    },
    {
      __component: 'blocks.faq',
      heading: 'Service Partner Plan questions',
      background: 'white',
      openOnLoad: 1,
      items: [
        { question: 'Can I cancel?', answer: ps('Yes. Basic and Plus members can cancel anytime without penalty. Pro has a minimum 24-month commitment, with a $120 fee for early cancellation. Keep in mind that cancelling your plan also ends any associated Not-a-Dime Warranty coverage.') },
        { question: 'My system is new. Do I still need it?', answer: ps('Yes. Inspections can help catch problems early, and regular maintenance may be required by your equipment’s warranty. We’ll help you understand what your system needs.') },
        { question: 'Which systems are covered?', answer: ps('Basic and Plus include one HVAC inspection as needed, plus a whole-home plumbing and electrical safety inspection. Pro includes two HVAC inspections as needed, plus the same whole-home inspection.') },
        {
          question: 'What’s the difference between Basic, Plus and Pro?',
          answer: ps('Basic includes a 5% repair discount, maintenance reminders, technician chat and a $25 Fox Funds sign-up bonus. Plus increases the repair discount to 10%, adds a $75 sign-up bonus and $4 in monthly Fox Funds credits, and only pays a call-out fee for weekend emergencies. Pro is $350 a year on a 24-month plan. It never pays a call-out fee, includes two HVAC inspections a year and FoxGuard sensors that keep an eye on your equipment, plus a $150 sign-up bonus and $5 a month in Fox Funds.'),
        },
      ],
    },
    callBand({
      variant: 'compact',
      heading: 'Join 1,500+ of your neighbours.',
      body: '',
      button: JOIN,
      secondaryButton: CALL,
      background: 'light_blue',
    }),
  ],
};
