'use strict';

// Thank you: pages/thank-you.html in the Fox page designs (shown after a booking or call-back request).
const { PHONE_HREF } = require('./_helpers');

module.exports = {
  title: 'Thank you',
  slug: 'thank-you',
  headerVariant: 'full',
  footerVariant: 'full',
  seo: {
    metaTitle: 'Thanks, we’ve got your request | Fox',
    metaDescription: 'We’ll confirm the details shortly. Need us sooner? Calls are answered 24/7.',
  },
  sections: [
    {
      __component: 'blocks.message',
      icon: true,
      heading: 'Thanks, we’ve got your request.',
      body: 'We’ll confirm the details shortly. Need us sooner? Give us a call. You can reach us 24/7.',
      button: { label: 'Call now', href: PHONE_HREF },
      cardsHeading: 'While you wait',
      cards: [
        { label: 'Service Partner Plan', href: '/service-partner-plan/' },
        { label: 'Current offers', href: '/offers/' },
        { label: 'Reviews', href: '/reviews/' },
      ],
      background: 'white',
    },
  ],
};
