'use strict';

// Careers: pages/careers.html in the Fox page designs.
const { p, ps, callBand } = require('./_helpers');

// Placeholder: replace with Fox's Collage jobs page URL (the design had .../jobs/[fox-careers-page]).
const JOBS = { label: 'See all positions', href: 'https://secure.collage.co/jobs/', newTab: true };

const values = [
  { lead: 'Customer first', text: 'Remember whose home we’re working in.' },
  { lead: 'Positive attitude', text: 'Show up ready to make someone’s day better.' },
  { lead: 'Personal integrity', text: 'Our actions match our words.' },
  { lead: 'Commitment to quality', text: 'Do the job properly. No cutting corners.' },
  { lead: 'Solution-minded', text: 'Don’t just point out the problem. Help find the fix.' },
];

module.exports = {
  title: 'Careers',
  slug: 'careers',
  headerVariant: 'full',
  footerVariant: 'full',
  seo: {
    metaTitle: 'Careers at Fox | Building careers, not just filling jobs',
    metaDescription: 'Join a team that looks out for each other, takes pride in doing good work and gives people room to grow.',
  },
  sections: [
    {
      __component: 'blocks.hero',
      variant: 'short',
      heading: 'We’re building careers, not just filling jobs.',
      body: 'Join a team that looks out for each other, takes pride in doing good work and gives people room to grow.',
      rating: false,
      showButton: true,
      button: JOBS,
      background: 'cream',
      headingLevel: 1,
    },
    {
      __component: 'blocks.text-image',
      heading: 'Attitude first. We’ll teach the rest.',
      body: ps('We believe the right attitude matters just as much as experience. Some of our best people came from completely different careers: professional sports, retail, supply chain and even the film industry. What they have in common isn’t where they started. It’s how they show up, help their teammates and look after customers.'),
      showButton: false,
      links: [],
      media: 'photo',
      photoLabel: '[Photo: Fox team on the job]',
      background: 'white',
      photoSide: 'right',
    },
    {
      __component: 'blocks.text-image',
      heading: 'Room to learn. Room to grow.',
      body: ps('You don’t have to know everything on day one. At Fox, we share what we know, help each other out and give people opportunities to build their skills. We want people who take pride in their work, support their teammates and are willing to keep learning.'),
      showButton: false,
      links: [],
      media: 'photo',
      photoLabel: '[Photo: technician training]',
      background: 'cream',
      photoSide: 'left',
    },
    {
      __component: 'blocks.feature-list',
      heading: 'What we expect, and what you can expect from us',
      pointStyle: 'ticks',
      background: 'light_blue',
      points: values,
    },
    {
      __component: 'blocks.text-image',
      heading: 'Hear it from the team',
      // Placeholders from the design: a team member's quote, then their name and role in bold.
      body: [p('“[Team member quote]”'), { type: 'paragraph', children: [{ type: 'text', text: '[Name], [Role]', bold: true }] }],
      showButton: false,
      links: [],
      media: 'photo',
      photoLabel: '[Photo: team member]',
      background: 'white',
      photoSide: 'right',
    },
    callBand({
      variant: 'compact',
      heading: 'Bring more energy than you take? We’d like to meet you.',
      body: '',
      button: JOBS,
      showSecondaryButton: false,
    }),
  ],
};
