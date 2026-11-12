'use strict';

// Kamloops: pages/kamloops.html in the Fox page designs.
// Page phone (250) 800-9330 replaces the main number in the header and sticky bar.
const { ps, a, para, items, callBand, trustBar } = require('./_helpers');

const KAMLOOPS = '(250) 800-9330';
const KAMLOOPS_HREF = 'tel:+12508009330';

const towns = [
  'Kamloops', 'Sun Peaks', 'Heffley Creek', 'Whitecroft', 'Westsyde', 'McLure', 'Barriere', 'Little Fort', 'Monte Creek',
  'Monte Lake', 'Westwold', 'Knutsford', 'Pritchard', 'Lac Le Jeune', 'Logan Lake', 'Cherry Creek', 'Tobiano', 'Savona',
  'Walhachin', 'Cache Creek', 'Aberdeen', 'Sahali', 'North Shore', 'Brocklehurst', 'Batchelor Heights', 'Juniper Ridge',
  'Valleyview', 'Dallas', 'Campbell Creek', 'Barnhartvale', 'Rayleigh', 'Pineview Valley', 'Dufferin', 'Rose Hill',
  'Noble Creek', 'Tranquille',
];

module.exports = {
  title: 'Kamloops',
  slug: 'locations/kamloops',
  headerVariant: 'full',
  footerVariant: 'full',
  phone: KAMLOOPS,
  seo: {
    metaTitle: 'Kamloops plumbing, heating, cooling & electrical | Fox',
    metaDescription: 'Plumbing, heating, cooling and electrical from a local team, with same-day service in Kamloops and surrounding communities.',
  },
  sections: [
    {
      __component: 'blocks.hero',
      heading: 'Kamloops, we’ve got you.',
      body: 'Plumbing, heating, cooling and electrical from a local team that knows the area, with same-day service in Kamloops and surrounding communities.',
      rating: true,
      showButton: true,
      button: { label: `Call ${KAMLOOPS}`, href: KAMLOOPS_HREF },
      photoLabel: 'Kamloops photo',
      background: 'cream',
      headingLevel: 1,
    },
    trustBar({ points: items('Same-day service', 'Next-day install', 'Flat-rate pricing') }),
    {
      __component: 'blocks.card-grid',
      heading: 'Services in Kamloops',
      cardStyle: 'service',
      cardVariant: 'tappable',
      maxColumns: 3,
      lastRow: 'center',
      background: 'cream',
      cards: [
        { title: 'Heating & Cooling', text: 'No heat, uneven rooms, new furnace', href: '/heating-cooling/' },
        { title: 'Plumbing', text: 'No hot water, a leak, old pipes', href: '/plumbing/' },
        { title: 'Drains & Sewers', text: 'Slow drains, backups, sewer lines', href: '/drains-sewers/' },
        { title: 'Electrical & Lighting', text: 'Panels, EV chargers, generators', href: '/electrical-lighting/' },
        { title: 'Gemstone Lighting', text: 'Permanent lights, all year round', href: '/gemstone-lighting/' },
      ],
    },
    {
      __component: 'blocks.map-section',
      heading: 'Towns we serve from Kamloops',
      intro: '',
      media: 'service_area',
      mediaLabel: 'Service area map',
      links: [],
      places: items(...towns),
      background: 'white',
    },
    {
      __component: 'blocks.text-image',
      heading: 'Local, wherever you are.',
      body: ps('When you call, we send the technician best suited to your job, so you get the right person, not just whoever’s closest.'),
      showButton: false,
      links: [],
      media: 'photo',
      photoLabel: 'Technician photo',
      background: 'light_blue',
      photoSide: 'right',
    },
    {
      __component: 'blocks.text-image',
      heading: 'What we see in Kamloops homes',
      body: ps(
        'Kamloops homes deal with a lot. Hot, dry summers, freezing winters and older plumbing that wasn’t built to last forever. Some homes from the 80s and 90s still have Poly-B pipes, while others struggle with upstairs rooms that get too hot in July or heating systems that can’t keep up in January.',
        'We’ve seen these problems before. We’ll find out what’s happening in your home and walk you through the options, without making things more complicated than they need to be.',
      ),
      showButton: false,
      links: [],
      media: 'photo',
      photoLabel: 'Home photo',
      background: 'white',
      photoSide: 'left',
    },
    {
      __component: 'blocks.reviews',
      heading: 'The thing our customers say most: “They explained everything.”',
      reviews: [1, 2, 3].map((n) => ({ quote: `[Kamloops review ${n}]`, name: '[Name]', town: '[Town]', rating: 5 })),
      showLink: true,
      link: { label: 'Read all reviews', href: '/reviews/' },
      rating: true,
      background: 'navy',
    },
    {
      __component: 'blocks.text-image',
      heading: 'Call us',
      body: [para('Serving Kamloops and surrounding communities · ', a(KAMLOOPS, KAMLOOPS_HREF), ' · Calls answered 24/7.')],
      showButton: false,
      links: [],
      media: 'photo',
      photoLabel: 'Van photo',
      background: 'cream',
      photoSide: 'right',
    },
    {
      __component: 'blocks.faq',
      heading: 'Kamloops questions',
      background: 'white',
      openOnLoad: 1,
      items: [
        {
          question: 'Do you serve Sun Peaks and surrounding communities?',
          answer: ps('Yes. We serve Sun Peaks, Heffley Creek, Whitecroft and other communities around Kamloops. Our Shuswap service area covers Chase, Sorrento and Blind Bay.'),
        },
        {
          question: 'Do you repair water mains in Kamloops?',
          answer: [
            para(
              'Yes. We repair and replace residential water service lines. If you’re dealing with low pressure, a leak or a soggy yard, we’ll help find the cause. See ',
              a('Water line repair', '/drains-sewers/water-line-repair-replacement/'),
              '.',
            ),
          ],
        },
        { question: 'Can you come today?', answer: ps('Yes. We offer same-day service. Call us and we’ll confirm the earliest available appointment.') },
      ],
    },
    callBand({
      button: { label: 'Call now', href: KAMLOOPS_HREF },
      failedMessage: `Something went wrong and your message didn’t send. Please call us any time at ${KAMLOOPS}.`,
    }),
  ],
};
