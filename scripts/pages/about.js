'use strict';

// About: pages/about.html in the Fox page designs.
const { ps, items, placeholderReviews, callBand } = require('./_helpers');

module.exports = {
  title: 'About',
  slug: 'about',
  headerVariant: 'full',
  footerVariant: 'full',
  seo: {
    metaTitle: 'About Fox | Plumbing, Heating, Cooling & Electrical since 1998',
    metaDescription: 'Started in a one-car garage in Vernon in 1998. Today about 70 people serving the North Okanagan, Kamloops, Kelowna and the Shuswap.',
  },
  sections: [
    {
      __component: 'blocks.hero',
      variant: 'short',
      heading: 'Started in a one-car garage. Still treating your home like it matters.',
      body: '',
      rating: false,
      showButton: false,
      background: 'cream',
      headingLevel: 1,
    },
    {
      __component: 'blocks.text-image',
      heading: 'Our story',
      body: ps(
        'In 1998, Ted Fox had just finished his fourth year of plumbing school, and his dad was ready to start something of his own. They opened Fox out of their one-car garage in Vernon.',
        'For 14 years, it stayed small: Ted, his dad and an apprentice, fixing things and doing good work. In 2012, Ted bought his dad’s half of the business, and his wife Sue left her nursing career to join him. They decided to grow, and they did.',
        'Today, Fox has grown to a team of about 70 people serving the North Okanagan, Kamloops, Kelowna and the Shuswap. Ted’s family has been in Vernon for seven generations. We’ve got more trucks and more people now, but the job is still the same: show up, do good work and treat people right.',
      ),
      showButton: false,
      links: [],
      media: 'photo',
      photoLabel: '[Photo: the original Fox garage in Vernon]',
      background: 'white',
      photoSide: 'right',
    },
    {
      __component: 'blocks.feature-list',
      heading: 'How we work',
      layout: 'image',
      pointStyle: 'ticks',
      photoLabel: '[Technician talking with a homeowner]',
      background: 'light_blue',
      points: [
        { lead: 'We listen.', text: 'You know your home. We’re the visitor.' },
        { lead: 'We explain.', text: 'Clear options and a flat-rate price before any work starts.' },
        { lead: 'We take care of it.', text: 'We aim for same-day service, next-day installation when available and a home left cleaner than we found it.' },
        { lead: 'We follow through.', text: 'We walk you through the work and make sure you know what happens next.' },
      ],
    },
    {
      __component: 'blocks.text-image',
      heading: 'Raising the bar',
      body: ps(
        'When Fox started offering flat-rate pricing, it was a different way of doing things around here. Same with putting our name on our trucks. Not everyone loved it at first. But we believed homeowners deserved to know who was coming to their door and what the work would cost before it started.',
        'Now plenty of local companies do the same, and that’s good for everyone. It means better service for homeowners, and better careers in the trades.',
      ),
      showButton: false,
      links: [],
      media: 'photo',
      photoLabel: '[Fox truck with the name on the side]',
      background: 'white',
      photoSide: 'left',
    },
    {
      __component: 'blocks.feature-list',
      heading: 'What we stand for',
      pointStyle: 'ticks',
      background: 'cream',
      points: [
        { lead: 'Customer first', text: 'Remember whose home we’re working in.' },
        { lead: 'Positive attitude', text: 'Show up ready to make someone’s day better.' },
        { lead: 'Personal integrity', text: 'Our actions match our words.' },
        { lead: 'Commitment to quality', text: 'Do the job properly. No cutting corners.' },
        { lead: 'Solution-minded', text: 'Don’t just point out the problem. Help find the fix.' },
      ],
    },
    {
      __component: 'blocks.text-image',
      heading: 'Meet the team',
      body: [],
      showButton: false,
      links: [],
      media: 'photo',
      photoLabel: '[Photo: Ted and Sue Fox]',
      background: 'white',
      photoSide: 'right',
    },
    {
      __component: 'blocks.credentials',
      showHeading: true,
      heading: 'Licensed and trained',
      background: 'light_blue',
      items: [
        ...items('Red Seal trades', 'Certified gas fitters', 'HPCN member', 'NexStar member'),
        {
          sealLabel: 'BBB seal',
          sealName: 'BBB Accredited Business',
          sealHref: 'https://www.bbb.org/ca/bc/vernon/profile/plumber/fox-plumbing-heating-cooling-electrical-0037-1216691',
        },
        { text: 'Technical Safety BC: Gas LGA0005800 · Electrical LEL0203875' },
      ],
    },
    placeholderReviews(),
    callBand(),
  ],
};
