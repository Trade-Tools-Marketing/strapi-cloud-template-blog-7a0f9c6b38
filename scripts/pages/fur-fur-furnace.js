'use strict';

// Fur Fur Furnace campaign: pages/campaign-fur-fur-furnace.html in the Fox page designs.
// Landing page: slim header and footer (no menus), no call band.
const { ps, items } = require('./_helpers');

const BOOK = { label: 'Book online', href: '/contact/#book' };

module.exports = {
  title: 'Fur Fur Furnace',
  slug: 'offers/fur-fur-furnace',
  headerVariant: 'slim',
  footerVariant: 'slim',
  seo: {
    metaTitle: 'Fur Fur Furnace | $129 furnace tune-up',
    metaDescription: 'Get your furnace ready for winter for $129: a 22-point furnace check and light non-chemical cleaning, November 1 to December 31, 2026.',
  },
  sections: [
    {
      __component: 'blocks.hero',
      heading: 'Get your furnace ready for winter, for $129.',
      body: 'A 22-point furnace check and light non-chemical cleaning, November 1 to December 31, 2026.',
      rating: true,
      showButton: true,
      button: BOOK,
      photoLabel: 'Technician servicing a furnace',
      background: 'cream',
      headingLevel: 1,
    },
    {
      __component: 'blocks.text-image',
      heading: 'What’s included',
      body: [],
      showButton: false,
      links: [],
      media: 'photo',
      photoLabel: '[Technician servicing a furnace]',
      background: 'white',
      photoSide: 'right',
      offerCard: {
        variant: 'detailed',
        name: '$129 furnace tune-up',
        price: '$129',
        tag: 'Ends Dec 31',
        items: items(
          '22-point furnace inspection',
          'Light non-chemical cleaning',
          'Safety and performance checks',
          'Airflow and efficiency checks',
          'A clear explanation of anything we find, with no pressure to do more',
        ),
        button: BOOK,
      },
    },
    {
      __component: 'blocks.steps',
      heading: 'How it works',
      layout: 'auto',
      background: 'cream',
      steps: [
        { title: 'Book', text: 'Book online or call us any time.' },
        { title: 'We come to you', text: 'We’ll find the earliest available appointment, often the same day.' },
        { title: 'Your tune-up', text: 'We check your furnace, explain what we find and complete your $129 tune-up.' },
      ],
    },
    {
      __component: 'blocks.reviews',
      heading: 'The thing our customers say most: “They explained everything.”',
      reviews: [{ quote: '[One short review]', name: '[Name]', town: '[Town]', rating: 5 }],
      showLink: false,
      rating: true,
      background: 'navy',
    },
    {
      __component: 'blocks.small-print',
      text: ps('[Terms and conditions]'),
      background: 'white',
    },
  ],
};
