'use strict';

// Gemstone Lighting: pages/gemstone.html in the Fox page designs.
// "#gvz-open" opens the AI preview and "#chat" the chat widget: neither widget is on the site yet.
const { ps, a, para, upload, placeholderReviews, callBand, trustBar } = require('./_helpers');

const QUOTE = { label: 'Get a free quote', href: '#quote' };
const PREVIEW = { label: 'See them on your house', href: '#gvz-open' };

module.exports = {
  title: 'Gemstone Lighting',
  slug: 'gemstone-lighting',
  headerVariant: 'full',
  footerVariant: 'full',
  seo: {
    metaTitle: 'Gemstone Lighting | Permanent house lights | Fox',
    metaDescription: 'Never put up Christmas lights again. Permanent lights that stay up all year, installed by Fox’s electricians and controlled from your phone.',
  },
  sections: [
    {
      __component: 'blocks.hero',
      eyebrow: 'Gemstone Lighting',
      heading: 'Never put up Christmas lights again.',
      body: 'Permanent lights that look better than strings, stay up all year and change with a tap of your phone.',
      rating: true,
      showButton: true,
      button: QUOTE,
      link: PREVIEW,
      photoLabel: 'House at night with Gemstone lights',
      background: 'cream',
      headingLevel: 1,
    },
    trustBar(),
    {
      __component: 'blocks.feature-list',
      heading: 'Why people love them',
      layout: 'image',
      pointStyle: 'ticks',
      photoLabel: '[Gemstone house at night]',
      background: 'light_blue',
      points: [
        { lead: 'Your house, lit up every night.', text: 'They look better than strings and stay up all year.' },
        { lead: 'No ladders, ever again.', text: 'Installed once by our electricians.' },
        { lead: 'Any colour, right from your phone.', text: 'Change colours and patterns with a tap.' },
        { lead: 'Not just for Christmas.', text: 'Halloween, Canada Day, game nights or a warm white every evening.' },
      ],
    },
    {
      __component: 'blocks.before-after',
      heading: 'See Gemstone lights on your house.',
      body: 'Try our AI preview to see how Gemstone lights could look on your home, before you book a quote.',
      showButton: true,
      button: PREVIEW,
      beforeLabel: '[Same house, daytime]',
      beforeCaption: 'Before',
      afterLabel: '[Same house, lit at night]',
      afterCaption: 'After',
      background: 'white',
    },
    {
      __component: 'blocks.text-image',
      heading: 'Have some fun with it.',
      body: ps('We’ve seen neighbours have hockey battles with their houses, each lit up in their team’s colours and flashing when their team scores. Once one house on the street has them, the neighbours usually aren’t far behind.'),
      showButton: false,
      links: [],
      media: 'photo',
      photoLabel: 'House in team colours',
      background: 'white',
      photoSide: 'right',
    },
    {
      __component: 'blocks.gallery',
      heading: 'Real Fox installs, day and night',
      background: 'cream',
      photos: [1, 2, 3, 4, 5, 6].map((n) => ({ label: `Gemstone install ${n}` })),
    },
    {
      __component: 'blocks.text-image',
      heading: 'Installed by electricians.',
      body: ps('Gemstone lights are installed by Fox’s own electricians, tucked neatly along your roofline so you barely see them during the day.'),
      showButton: false,
      links: [],
      media: 'photo',
      photoLabel: 'Roofline close-up, daytime',
      logo: upload('gemstone.png', 'Authorized Dealer of Gemstone Lights'),
      logoName: 'Authorized Dealer of Gemstone Lights',
      logoMinWidth: 192,
      background: 'white',
      photoSide: 'left',
    },
    {
      __component: 'blocks.pricing',
      variant: 'range',
      heading: 'What Gemstone Lights cost',
      showPrice: false,
      note: 'Every home is different, so we’ll price yours. You’ll see your options and a locked-in price before we start.',
      showFinancing: true,
      financingText: 'Prefer monthly payments?',
      financingLinkLabel: 'Apply for financing with Financeit →',
      financingHref: 'https://www.financeit.ca/',
      showButton: true,
      button: QUOTE,
      background: 'cream',
    },
    {
      __component: 'blocks.steps',
      heading: 'How it works',
      layout: 'auto',
      background: 'white',
      steps: [
        { title: 'Free quote', text: 'Tell us about your home and we’ll come take a look.' },
        { title: 'We design your layout', text: 'We plan where the lights go along your roofline.' },
        { title: 'Our electricians install', text: 'Fox’s own electricians, tucked neatly along your roofline.' },
        { title: 'We set up the app', text: 'We show you how to change colours and patterns from your phone.' },
      ],
    },
    {
      __component: 'blocks.text-image',
      heading: 'Got questions? Ask away.',
      body: ps('Wondering how the app works or what colours you can choose? Chat with us, or see them on your house with our AI preview.'),
      showButton: false,
      secondaryButton: { label: 'Chat with us', href: '#chat' },
      links: [PREVIEW],
      media: 'none',
      background: 'cream',
    },
    placeholderReviews(),
    {
      __component: 'blocks.faq',
      heading: 'Gemstone Lighting questions',
      background: 'white',
      openOnLoad: 1,
      items: [
        { question: 'Do they stay up all year?', answer: ps('Yes. They’re designed to.') },
        {
          question: 'Can I see what it will look like on my house first?',
          // The design shows a "See them on your house" button here; rich text has a link instead.
          // Rich-text links must be absolute, /path, tel: or mailto: (no bare #hash), so it includes the page path.
          answer: [para('Yes. Try our AI preview to see how Gemstone lights could look on your home.'), para(a('See them on your house', '/gemstone-lighting#gvz-open'))],
        },
        {
          question: 'How long does install take?',
          answer: ps('Most installations take one to two days, depending on the size of your home. Larger homes can take longer, and we’ll walk you through the timeline before we start.'),
        },
      ],
    },
    callBand({
      showSecondaryButton: false,
      formId: 'quote',
      formHeading: 'Get your free Gemstone quote',
      sendLabel: 'Get my free quote',
    }),
  ],
};
