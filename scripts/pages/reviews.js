'use strict';

// Reviews: pages/reviews.html in the Fox page designs.
const { placeholderReviews, callBand } = require('./_helpers');

// Until Global → googleReviewsUrl is wired in, the design falls back to a Google search for Fox reviews.
const GOOGLE_REVIEWS = 'https://www.google.com/search?q=Fox+Plumbing+Heating+Cooling+Electrical+reviews';
const review = (service) => ({ quote: '[Customer review]', name: '[First name]', town: '[Town]', service, rating: 5 });

module.exports = {
  title: 'Reviews',
  slug: 'reviews',
  headerVariant: 'full',
  footerVariant: 'full',
  seo: {
    metaTitle: 'Fox reviews | “They explained everything.”',
    metaDescription: 'What homeowners in Vernon, Kamloops, Kelowna and the Shuswap say about Fox Plumbing Heating Cooling Electrical.',
  },
  sections: [
    {
      __component: 'blocks.hero',
      variant: 'short',
      heading: 'They explained everything.',
      body: 'It’s one of the things we love hearing from customers: our team showed up, listened, explained the options and made a stressful day a little easier.',
      rating: true,
      ratingSize: 'card',
      showButton: false,
      background: 'white',
      headingLevel: 1,
    },
    placeholderReviews({
      showHeading: false,
      heading: 'Customer reviews',
      background: 'cream',
      showLink: false,
      reviews: ['Heating', 'Heating', 'Plumbing', 'Plumbing', 'Electrical', 'Gemstone Lighting'].map(review),
    }),
    callBand(),
    callBand({
      variant: 'compact',
      heading: 'Had a great experience?',
      body: 'We’d love to hear how it went. Your review helps other homeowners know what to expect when they call us.',
      button: { label: 'Leave a Google review', href: GOOGLE_REVIEWS, newTab: true },
      showSecondaryButton: false,
    }),
  ],
};
