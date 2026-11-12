'use strict';

// Contact: pages/contact.html in the Fox page designs.
const { ps, callBand } = require('./_helpers');

module.exports = {
  title: 'Contact',
  slug: 'contact',
  headerVariant: 'full',
  footerVariant: 'full',
  seo: {
    metaTitle: 'Contact Fox | Book online or call 24/7',
    metaDescription: 'Book online in a minute, or call us any time of day. Calls are answered 24/7.',
  },
  sections: [
    {
      __component: 'blocks.hero',
      heading: 'Let’s get you sorted.',
      body: 'Book online in a minute, or call us any time of day. Calls are answered 24/7.',
      rating: true,
      showButton: false,
      media: false,
      background: 'cream',
      headingLevel: 1,
    },
    {
      __component: 'blocks.embed',
      anchorId: 'book',
      label: '[Netic online booking]',
      // url: set to the Netic booking embed URL when it's ready.
      height: 720,
      background: 'light_blue',
    },
    callBand({
      heading: 'Prefer to send us a note?',
      body: '',
      showButton: false,
      showSecondaryButton: false,
      showMemberCheckbox: false,
    }),
    {
      __component: 'blocks.text-image',
      heading: 'Why we don’t quote over the phone',
      body: ps('Every home is different, and guessing at a price over the phone wouldn’t be fair to you. We’ll explain the current call-out fee when you book. Then we’ll come take a look, explain your options and give you a flat-rate price before any work begins.'),
      showButton: false,
      links: [],
      media: 'photo',
      photoLabel: 'Technician talking with a homeowner',
      background: 'white',
      photoSide: 'right',
    },
    {
      __component: 'blocks.card-grid',
      anchorId: 'locations',
      heading: 'Our locations',
      cardStyle: 'service',
      cardVariant: 'info',
      maxColumns: 4,
      lastRow: 'center',
      background: 'light_blue',
      // One line per line; a line that is just a phone number becomes a tap-to-call link.
      cards: [
        { title: 'Vernon', text: '1741 Kosmina Dr, Vernon, BC V1T 8T1\n(778) 486-4772\nOffice Monday to Friday, 8:00 a.m. to 4:30 p.m.\nCalls answered 24/7' },
        { title: 'Kamloops', text: 'Serving Kamloops and surrounding communities\n(250) 800-9330\nCalls answered 24/7' },
        { title: 'Kelowna', text: 'Serving Kelowna, Lake Country and West Kelowna\n(778) 486-4773\nCalls answered 24/7' },
        { title: 'Shuswap', text: 'Served from Vernon and Kamloops\n(778) 486-4882\nCalls answered 24/7' },
      ],
    },
  ],
};
