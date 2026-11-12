'use strict';

// Guide: Poly-B piping. pages/guide-poly-b.html in the Fox page designs.
// The whole article is one Guide article block; its body is one rich-text section.
const { p, b, para, h2, ul } = require('./_helpers');

module.exports = {
  title: 'Poly-B piping, what BC homeowners should know',
  slug: 'guides/poly-b-piping',
  headerVariant: 'full',
  footerVariant: 'full',
  seo: {
    metaTitle: 'Poly-B piping: what BC homeowners should know | Fox',
    metaDescription: 'Home built between the mid-1980s and late 1990s? Check for grey Poly-B pipe. It can fail without warning and affect your home insurance.',
  },
  sections: [
    {
      __component: 'blocks.guide-article',
      eyebrow: 'Guide',
      title: 'Poly-B piping, what BC homeowners should know',
      // The design leaves the date as the component placeholder.
      updated: 'Updated [Month Year]',
      imageLabel: 'Poly-B pipe photo',
      showShortAnswer: true,
      shortAnswerLabel: 'Short answer',
      shortAnswer: 'If your home was built between the mid-1980s and the late 1990s, check for grey plastic pipe. Poly-B can fail without warning, and it can affect your home insurance. No need to panic, but it’s worth finding out what you have.',
      showButton: true,
      button: { label: 'Book online', href: '/contact/#book' },
      relatedHeading: 'Related',
      related: [
        { label: 'Repiping & Poly-B replacement', href: '/plumbing/repiping-poly-b-replacement/' },
        { label: 'Leak detection', href: '/plumbing/leak-detection/' },
      ],
      showCallBand: true,
      callBandBackground: 'light_blue',
      background: 'white',
      sections: [
        {
          content: [
            h2('What is Poly-B?'),
            p('Polybutylene, or Poly-B, is a flexible grey plastic pipe that was used for water lines in a lot of BC homes from about the mid-80s until the late 90s. It was cheap and easy to install, so it was everywhere. Over time, it turned out the pipe and its fittings can break down, especially where the water is treated with chlorine. The pipe gets brittle from the inside, and the fittings can crack or let go.'),
            p('The tricky part is that it can look perfectly fine from the outside right up until it fails.'),

            h2('How do I know if I have it?'),
            p('Look in a few places:'),
            ul('Near your water heater', 'Under your kitchen and bathroom sinks', 'At your main water shut-off, usually in the basement or utility room'),
            p('Poly-B is usually grey and often stamped “PB2110”. It may have copper or plastic crimp rings at the fittings. If you’re not sure what you’re looking at, we can check for you.'),

            h2('Why does it matter?'),
            para(b('Leaks.'), ' When Poly-B fails, it can let go suddenly. A burst line can flood a room before you notice.'),
            para(b('Insurance.'), ' Some insurance companies have restrictions on homes with Poly-B piping. They may charge more, apply a higher deductible, limit water damage coverage or require replacement. Others may insure the home without extra conditions. Every policy is different, so check with your insurer or broker to see what applies to your home.'),
            para(b('Selling your home.'), ' Poly-B often comes up in home inspections, and buyers may ask for it to be replaced or for a lower price.'),

            h2('Do I need to replace it right away?'),
            p('Not always. It depends on your home, the condition of the pipe and fittings, and your insurance. Your options usually look like this:'),
            ul(
              [b('Full repipe:'), ' replace all of the Poly-B in the home. It’s the most complete long-term solution.'],
              [b('Phased replacement:'), ' start with the most at-risk sections, like the fittings or the lines near the water heater. Any Poly-B left in place still carries some risk.'],
              [b('Fittings only:'), ' in some cases, replacing the original fittings can address a specific issue, but it won’t eliminate the risk in the remaining pipe.'],
            ),
            p('We’ll show you each option side by side, with a flat-rate price, so you can decide what makes sense.'),

            h2('What’s a repipe like?'),
            p('Usually less disruptive than you’d think.'),
            p('We map where your pipes run, plan the most direct route and make small access openings where needed. A full-home repipe typically takes one to five days, depending on the size of your home and what’s involved. Your technician will explain the expected timeline and when your water will need to be turned off. When we’re done, we’ll walk you through the work and provide documentation for your records.'),
            p('In most cases, we restore your water at the end of each workday. If we need to open walls, we can provide a separate quote for drywall repairs, or you can arrange them yourself.'),

            h2('What replaces it?'),
            p('Usually PEX, a flexible, durable pipe that’s widely used in homes today. Copper is another option. We’ll explain the differences and help you choose what makes sense for your home.'),

            h2('The bottom line'),
            p('If you have Poly-B, you don’t need to panic, but you shouldn’t ignore it. Find out what you have, check with your insurer and get a clear picture of your options.'),
          ],
        },
      ],
    },
  ],
};
