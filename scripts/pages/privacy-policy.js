'use strict';

// Privacy policy: pages/privacy-policy.html in the Fox page designs.
// Legal layout: eyebrow "Legal", no image, no short answer, button, related links or call band.
// The policy text is still to be supplied by Fox: replace the placeholder section in the admin.
const { p, h2, ul } = require('./_helpers');

const section = () => [h2('[Section heading]'), p('[Policy text to be supplied by Fox]')];

module.exports = {
  title: 'Privacy policy',
  slug: 'privacy-policy',
  headerVariant: 'full',
  footerVariant: 'full',
  seo: {
    metaTitle: 'Privacy policy | Fox',
    metaDescription: 'How Fox Plumbing Heating Cooling Electrical collects, uses and protects your personal information.',
  },
  sections: [
    {
      __component: 'blocks.guide-article',
      eyebrow: 'Legal',
      title: 'Privacy policy',
      updated: '',
      meta: 'Last updated: [date]',
      showShortAnswer: false,
      showButton: false,
      relatedHeading: '',
      related: [],
      showCallBand: false,
      background: 'white',
      sections: [
        {
          content: [...section(), ...section(), ul('[List item]', '[List item]', '[List item]'), ...section()],
        },
      ],
    },
  ],
};
