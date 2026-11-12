import type { Schema, Struct } from '@strapi/strapi';

export interface BlocksBeforeAfter extends Struct.ComponentSchema {
  collectionName: 'components_blocks_before_afters';
  info: {
    description: 'Headline, text, button and two photos side by side';
    displayName: 'Before / after';
    icon: 'layout';
  };
  attributes: {
    afterCaption: Schema.Attribute.String & Schema.Attribute.DefaultTo<'After'>;
    afterImage: Schema.Attribute.Media<'images'>;
    afterLabel: Schema.Attribute.String;
    background: Schema.Attribute.Enumeration<['white', 'cream', 'light_blue']> &
      Schema.Attribute.DefaultTo<'white'>;
    beforeCaption: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Before'>;
    beforeImage: Schema.Attribute.Media<'images'>;
    beforeLabel: Schema.Attribute.String;
    body: Schema.Attribute.Text;
    button: Schema.Attribute.Component<'shared.button', false>;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    headingLevel: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<2>;
    showButton: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
  };
}

export interface BlocksCallBand extends Struct.ComponentSchema {
  collectionName: 'components_blocks_call_bands';
  info: {
    description: 'Call-to-action band with an optional "call me back" form';
    displayName: 'Call band (+ callback form)';
    icon: 'layout';
  };
  attributes: {
    background: Schema.Attribute.Enumeration<['navy', 'light_blue']> &
      Schema.Attribute.DefaultTo<'navy'>;
    body: Schema.Attribute.String;
    button: Schema.Attribute.Component<'shared.button', false>;
    checkboxLabel: Schema.Attribute.String;
    consent: Schema.Attribute.String;
    failedMessage: Schema.Attribute.String;
    fields: Schema.Attribute.Component<'parts.form-field', true>;
    form: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    formHeading: Schema.Attribute.String;
    formId: Schema.Attribute.String;
    formIntro: Schema.Attribute.String;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    headingLevel: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<2>;
    link: Schema.Attribute.Component<'shared.link', false>;
    logo: Schema.Attribute.Media<'images'>;
    logoName: Schema.Attribute.String;
    marketingLabel: Schema.Attribute.Text;
    privacyLink: Schema.Attribute.Component<'shared.link', false>;
    secondaryButton: Schema.Attribute.Component<'shared.button', false>;
    sendingLabel: Schema.Attribute.String;
    sendLabel: Schema.Attribute.String;
    sentMessage: Schema.Attribute.String;
    sentTitle: Schema.Attribute.String;
    showButton: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    showMarketingOptIn: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<true>;
    showMemberCheckbox: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<true>;
    showSecondaryButton: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<true>;
    variant: Schema.Attribute.Enumeration<['full', 'compact']> &
      Schema.Attribute.DefaultTo<'full'>;
  };
}

export interface BlocksCardGrid extends Struct.ComponentSchema {
  collectionName: 'components_blocks_card_grids';
  info: {
    description: 'Grid of service or photo cards';
    displayName: 'Card grid';
    icon: 'layout';
  };
  attributes: {
    anchorId: Schema.Attribute.String;
    background: Schema.Attribute.Enumeration<['cream', 'white', 'light_blue']> &
      Schema.Attribute.DefaultTo<'cream'>;
    cards: Schema.Attribute.Component<'parts.card-item', true>;
    cardStyle: Schema.Attribute.Enumeration<['service', 'photo']> &
      Schema.Attribute.DefaultTo<'service'>;
    cardVariant: Schema.Attribute.Enumeration<['tappable', 'info']> &
      Schema.Attribute.DefaultTo<'tappable'>;
    heading: Schema.Attribute.String;
    intro: Schema.Attribute.Text;
    lastRow: Schema.Attribute.Enumeration<['stretch', 'center']> &
      Schema.Attribute.DefaultTo<'stretch'>;
    maxColumns: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<5>;
  };
}

export interface BlocksCredentials extends Struct.ComponentSchema {
  collectionName: 'components_blocks_credentialss';
  info: {
    description: '"Licensed and trained" row of ticked credentials, with an optional seal';
    displayName: 'Credentials';
    icon: 'layout';
  };
  attributes: {
    background: Schema.Attribute.Enumeration<['white', 'cream', 'light_blue']> &
      Schema.Attribute.DefaultTo<'white'>;
    heading: Schema.Attribute.String;
    headingLevel: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<2>;
    items: Schema.Attribute.Component<'parts.credential', true>;
    showHeading: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
  };
}

export interface BlocksEmbed extends Struct.ComponentSchema {
  collectionName: 'components_blocks_embeds';
  info: {
    description: 'Third-party widget in a panel (online booking, store). Placeholder until a URL is set';
    displayName: 'Embed';
    icon: 'code';
  };
  attributes: {
    anchorId: Schema.Attribute.String;
    background: Schema.Attribute.Enumeration<['light_blue', 'cream', 'white']> &
      Schema.Attribute.DefaultTo<'light_blue'>;
    height: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<720>;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.String;
  };
}

export interface BlocksFaq extends Struct.ComponentSchema {
  collectionName: 'components_blocks_faqs';
  info: {
    description: 'Headline and 2\u20138 questions that open one at a time';
    displayName: 'FAQ';
    icon: 'layout';
  };
  attributes: {
    background: Schema.Attribute.Enumeration<['white', 'cream']> &
      Schema.Attribute.DefaultTo<'white'>;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    headingLevel: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<2>;
    items: Schema.Attribute.Component<'parts.faq-item', true>;
    openOnLoad: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<1>;
  };
}

export interface BlocksFeatureList extends Struct.ComponentSchema {
  collectionName: 'components_blocks_feature_lists';
  info: {
    description: 'Headline with a list of points, with a photo, as cards or in two columns';
    displayName: 'Feature list';
    icon: 'layout';
  };
  attributes: {
    background: Schema.Attribute.Enumeration<['light_blue', 'cream', 'white']> &
      Schema.Attribute.DefaultTo<'light_blue'>;
    closing: Schema.Attribute.String;
    closingLink: Schema.Attribute.Component<'shared.link', false>;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    headingLevel: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<2>;
    intro: Schema.Attribute.Text;
    layout: Schema.Attribute.Enumeration<['image', 'split', 'cards']> &
      Schema.Attribute.DefaultTo<'image'>;
    photo: Schema.Attribute.Media<'images'>;
    photoLabel: Schema.Attribute.String;
    points: Schema.Attribute.Component<'parts.feature-point', true>;
    pointStyle: Schema.Attribute.Enumeration<['ticks', 'none']> &
      Schema.Attribute.DefaultTo<'ticks'>;
  };
}

export interface BlocksFinancingBand extends Struct.ComponentSchema {
  collectionName: 'components_blocks_financing_bands';
  info: {
    description: 'Ticks and a link on the left, Financeit logo on the right';
    displayName: 'Financing band';
    icon: 'layout';
  };
  attributes: {
    background: Schema.Attribute.Enumeration<['light_blue', 'cream', 'white']> &
      Schema.Attribute.DefaultTo<'light_blue'>;
    heading: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Prefer monthly payments?'>;
    headingLevel: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<2>;
    link: Schema.Attribute.Component<'shared.link', false>;
    logo: Schema.Attribute.Media<'images'>;
    note: Schema.Attribute.String;
    points: Schema.Attribute.Component<'shared.text-item', true>;
    showLink: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    showLogo: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    showNote: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
  };
}

export interface BlocksGallery extends Struct.ComponentSchema {
  collectionName: 'components_blocks_gallerys';
  info: {
    description: 'Grid of photos that open full screen';
    displayName: 'Photo gallery';
    icon: 'layout';
  };
  attributes: {
    background: Schema.Attribute.Enumeration<['white', 'cream', 'light_blue']> &
      Schema.Attribute.DefaultTo<'white'>;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    headingLevel: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<2>;
    intro: Schema.Attribute.Text;
    photos: Schema.Attribute.Component<'parts.gallery-photo', true>;
  };
}

export interface BlocksGuideArticle extends Struct.ComponentSchema {
  collectionName: 'components_blocks_guide_articles';
  info: {
    description: 'Long-form article with short answer, body, related links and a compact call band';
    displayName: 'Article (guide or legal page)';
    icon: 'layout';
  };
  attributes: {
    background: Schema.Attribute.Enumeration<['white', 'cream']> &
      Schema.Attribute.DefaultTo<'white'>;
    button: Schema.Attribute.Component<'shared.button', false>;
    callBandBackground: Schema.Attribute.Enumeration<['navy', 'light_blue']> &
      Schema.Attribute.DefaultTo<'navy'>;
    eyebrow: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Guide'>;
    image: Schema.Attribute.Media<'images'>;
    imageLabel: Schema.Attribute.String;
    meta: Schema.Attribute.String;
    related: Schema.Attribute.Component<'shared.link', true>;
    relatedHeading: Schema.Attribute.String;
    sections: Schema.Attribute.Component<'parts.article-section', true>;
    shortAnswer: Schema.Attribute.Text;
    shortAnswerLabel: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Short answer'>;
    showButton: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    showCallBand: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    showShortAnswer: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<true>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    updated: Schema.Attribute.String;
    video: Schema.Attribute.Component<'parts.video', false>;
  };
}

export interface BlocksGuideHub extends Struct.ComponentSchema {
  collectionName: 'components_blocks_guide_hubs';
  info: {
    description: 'Featured guide, a grid of guide cards, topic filters and Load more';
    displayName: 'Guides list';
    icon: 'layout';
  };
  attributes: {
    background: Schema.Attribute.Enumeration<['white', 'cream']> &
      Schema.Attribute.DefaultTo<'white'>;
    defaultTopic: Schema.Attribute.String;
    featured: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    filterMin: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<9>;
    guides: Schema.Attribute.Component<'parts.guide-card', true>;
    loadMore: Schema.Attribute.Enumeration<['auto', 'on', 'off']> &
      Schema.Attribute.DefaultTo<'auto'>;
    loadMoreHref: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'/guides/page/2/'>;
    loadMoreLabel: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Load more'>;
    pageSize: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<9>;
    topics: Schema.Attribute.Component<'shared.text-item', true>;
  };
}

export interface BlocksHero extends Struct.ComponentSchema {
  collectionName: 'components_blocks_heros';
  info: {
    description: 'Top section of a page: label, headline, text, Google rating, one button and a photo with the fox tail';
    displayName: 'Hero';
    icon: 'layout';
  };
  attributes: {
    background: Schema.Attribute.Enumeration<['cream', 'white', 'light_blue']> &
      Schema.Attribute.DefaultTo<'cream'>;
    body: Schema.Attribute.Text;
    button: Schema.Attribute.Component<'shared.button', false>;
    eyebrow: Schema.Attribute.String;
    financing: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    financingHref: Schema.Attribute.String;
    financingLinkLabel: Schema.Attribute.String;
    financingText: Schema.Attribute.String;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    headingLevel: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<1>;
    link: Schema.Attribute.Component<'shared.link', false>;
    longHeadline: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    media: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    note: Schema.Attribute.String;
    photo: Schema.Attribute.Media<'images'>;
    photoLabel: Schema.Attribute.String;
    photoSide: Schema.Attribute.Enumeration<['right', 'left']> &
      Schema.Attribute.DefaultTo<'right'>;
    priceLine: Schema.Attribute.String;
    rating: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    ratingSize: Schema.Attribute.Enumeration<['inline', 'card']> &
      Schema.Attribute.DefaultTo<'inline'>;
    showButton: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    tail: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    variant: Schema.Attribute.Enumeration<['full', 'short']> &
      Schema.Attribute.DefaultTo<'full'>;
  };
}

export interface BlocksMapSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_map_sections';
  info: {
    description: 'Service-area map or an embed, with location links or towns';
    displayName: 'Map / service area';
    icon: 'layout';
  };
  attributes: {
    background: Schema.Attribute.Enumeration<['cream', 'white', 'light_blue']> &
      Schema.Attribute.DefaultTo<'cream'>;
    embedUrl: Schema.Attribute.String;
    heading: Schema.Attribute.String;
    headingLevel: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<2>;
    intro: Schema.Attribute.Text;
    links: Schema.Attribute.Component<'shared.link', true>;
    media: Schema.Attribute.Enumeration<
      ['service_area', 'embed', 'placeholder']
    > &
      Schema.Attribute.DefaultTo<'service_area'>;
    mediaLabel: Schema.Attribute.String;
    mediaTitle: Schema.Attribute.String;
    places: Schema.Attribute.Component<'shared.text-item', true>;
  };
}

export interface BlocksMedia extends Struct.ComponentSchema {
  collectionName: 'components_blocks_medias';
  info: {
    description: 'A photo, a wide video or a vertical video, full width or beside text';
    displayName: 'Media (photo or video)';
    icon: 'layout';
  };
  attributes: {
    background: Schema.Attribute.Enumeration<['white', 'cream', 'light_blue']> &
      Schema.Attribute.DefaultTo<'white'>;
    body: Schema.Attribute.Text;
    caption: Schema.Attribute.String;
    heading: Schema.Attribute.String;
    headingLevel: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<2>;
    layout: Schema.Attribute.Enumeration<['full', 'beside']> &
      Schema.Attribute.DefaultTo<'full'>;
    mediaSide: Schema.Attribute.Enumeration<['right', 'left']> &
      Schema.Attribute.DefaultTo<'right'>;
    photo: Schema.Attribute.Media<'images'>;
    photoLabel: Schema.Attribute.String;
    photos: Schema.Attribute.Media<'images', true>;
    type: Schema.Attribute.Enumeration<['photo', 'video', 'vertical', 'two']> &
      Schema.Attribute.DefaultTo<'photo'>;
    video: Schema.Attribute.Component<'parts.video', false>;
  };
}

export interface BlocksMessage extends Struct.ComponentSchema {
  collectionName: 'components_blocks_messages';
  info: {
    description: 'Centred status message with buttons and link cards (Thank you page)';
    displayName: 'Message';
    icon: 'check';
  };
  attributes: {
    background: Schema.Attribute.Enumeration<['white', 'cream']> &
      Schema.Attribute.DefaultTo<'white'>;
    body: Schema.Attribute.Text;
    button: Schema.Attribute.Component<'shared.button', false>;
    cards: Schema.Attribute.Component<'shared.link', true>;
    cardsHeading: Schema.Attribute.String;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    icon: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    secondaryButton: Schema.Attribute.Component<'shared.button', false>;
  };
}

export interface BlocksOfferGrid extends Struct.ComponentSchema {
  collectionName: 'components_blocks_offer_grids';
  info: {
    description: 'Row of offer cards';
    displayName: 'Offers';
    icon: 'layout';
  };
  attributes: {
    background: Schema.Attribute.Enumeration<['white', 'cream', 'light_blue']> &
      Schema.Attribute.DefaultTo<'white'>;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    intro: Schema.Attribute.Text;
    link: Schema.Attribute.Component<'shared.link', false>;
    offers: Schema.Attribute.Component<'parts.offer-card', true>;
    variant: Schema.Attribute.Enumeration<['master', 'detailed']> &
      Schema.Attribute.DefaultTo<'master'>;
  };
}

export interface BlocksPlanCompare extends Struct.ComponentSchema {
  collectionName: 'components_blocks_plan_compares';
  info: {
    description: 'Compares 2\u20133 plans with the "Most popular" tab';
    displayName: 'Plan comparison';
    icon: 'layout';
  };
  attributes: {
    anchorId: Schema.Attribute.String;
    background: Schema.Attribute.Enumeration<['white', 'cream']> &
      Schema.Attribute.DefaultTo<'white'>;
    common: Schema.Attribute.Component<'shared.text-item', true>;
    compareLabel: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Compare all {n} plans'>;
    features: Schema.Attribute.Component<'parts.table-row', true>;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    headingLevel: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<2>;
    intro: Schema.Attribute.Text;
    joinLabel: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Join the plan'>;
    plans: Schema.Attribute.Component<'parts.compare-plan', true>;
    popularLabel: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Most popular'>;
    tableHeading: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Compare all features'>;
  };
}

export interface BlocksPricing extends Struct.ComponentSchema {
  collectionName: 'components_blocks_pricings';
  info: {
    description: 'Starting price, package cards, plan cards or a plan table';
    displayName: 'Pricing';
    icon: 'layout';
  };
  attributes: {
    anchorId: Schema.Attribute.String;
    background: Schema.Attribute.Enumeration<['white', 'cream', 'light_blue']> &
      Schema.Attribute.DefaultTo<'white'>;
    button: Schema.Attribute.Component<'shared.button', false>;
    columns: Schema.Attribute.Component<'parts.plan-column', true>;
    financingHref: Schema.Attribute.String;
    financingLinkLabel: Schema.Attribute.String;
    financingText: Schema.Attribute.String;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    headingLevel: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<2>;
    intro: Schema.Attribute.Text;
    joinLabel: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Join the plan'>;
    note: Schema.Attribute.String;
    packages: Schema.Attribute.Component<'parts.package', true>;
    plans: Schema.Attribute.Component<'parts.plan-card', true>;
    popularLabel: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Most popular'>;
    price: Schema.Attribute.String;
    priceLabel: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Starting at'>;
    priceNote: Schema.Attribute.String;
    rows: Schema.Attribute.Component<'parts.table-row', true>;
    showButton: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    showFinancing: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    showPrice: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    tableNote: Schema.Attribute.String;
    variant: Schema.Attribute.Enumeration<
      ['range', 'packages', 'plans', 'table']
    > &
      Schema.Attribute.DefaultTo<'range'>;
  };
}

export interface BlocksReviews extends Struct.ComponentSchema {
  collectionName: 'components_blocks_reviewss';
  info: {
    description: 'Google rating card and 1\u20136 review cards';
    displayName: 'Reviews';
    icon: 'layout';
  };
  attributes: {
    background: Schema.Attribute.Enumeration<['navy', 'cream', 'white']> &
      Schema.Attribute.DefaultTo<'navy'>;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    link: Schema.Attribute.Component<'shared.link', false>;
    rating: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    reviews: Schema.Attribute.Component<'parts.review', true>;
    showHeading: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    showLink: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
  };
}

export interface BlocksSmallPrint extends Struct.ComponentSchema {
  collectionName: 'components_blocks_small_prints';
  info: {
    description: 'Small grey terms-and-conditions text';
    displayName: 'Small print';
    icon: 'layout';
  };
  attributes: {
    background: Schema.Attribute.Enumeration<['white', 'cream']> &
      Schema.Attribute.DefaultTo<'white'>;
    text: Schema.Attribute.Blocks & Schema.Attribute.Required;
  };
}

export interface BlocksSteps extends Struct.ComponentSchema {
  collectionName: 'components_blocks_stepss';
  info: {
    description: 'Numbered steps, in a row or as a timeline beside a photo';
    displayName: 'Steps';
    icon: 'layout';
  };
  attributes: {
    background: Schema.Attribute.Enumeration<['white', 'cream', 'light_blue']> &
      Schema.Attribute.DefaultTo<'white'>;
    button: Schema.Attribute.Component<'shared.button', false>;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    headingLevel: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<2>;
    layout: Schema.Attribute.Enumeration<['auto', 'horizontal', 'vertical']> &
      Schema.Attribute.DefaultTo<'auto'>;
    photo: Schema.Attribute.Media<'images'>;
    photoLabel: Schema.Attribute.String;
    steps: Schema.Attribute.Component<'parts.step', true>;
  };
}

export interface BlocksTextImage extends Struct.ComponentSchema {
  collectionName: 'components_blocks_text_images';
  info: {
    description: 'Photo beside a headline, text, up to two buttons and arrow links';
    displayName: 'Text + Image';
    icon: 'layout';
  };
  attributes: {
    background: Schema.Attribute.Enumeration<
      ['white', 'cream', 'light_blue', 'navy']
    > &
      Schema.Attribute.DefaultTo<'white'>;
    body: Schema.Attribute.Blocks;
    button: Schema.Attribute.Component<'shared.button', false>;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    headingLevel: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<2>;
    links: Schema.Attribute.Component<'shared.link', true>;
    logo: Schema.Attribute.Media<'images'>;
    logoMinWidth: Schema.Attribute.Integer;
    logoName: Schema.Attribute.String;
    media: Schema.Attribute.Enumeration<['photo', 'logo', 'none']> &
      Schema.Attribute.DefaultTo<'photo'>;
    offerCard: Schema.Attribute.Component<'parts.offer-card', false>;
    photo: Schema.Attribute.Media<'images'>;
    photoLabel: Schema.Attribute.String;
    photoMobile: Schema.Attribute.Enumeration<['above', 'below']> &
      Schema.Attribute.DefaultTo<'above'>;
    photoSide: Schema.Attribute.Enumeration<['right', 'left']> &
      Schema.Attribute.DefaultTo<'right'>;
    planTeaser: Schema.Attribute.Component<'parts.plan-teaser', false>;
    secondaryButton: Schema.Attribute.Component<'shared.button', false>;
    showButton: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
  };
}

export interface BlocksTrustBar extends Struct.ComponentSchema {
  collectionName: 'components_blocks_trust_bars';
  info: {
    description: 'Navy card with 3\u20135 ticked selling points and the paw badge, right under the hero';
    displayName: 'Trust bar';
    icon: 'layout';
  };
  attributes: {
    background: Schema.Attribute.Enumeration<['cream', 'white']> &
      Schema.Attribute.DefaultTo<'cream'>;
    badge: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    linkWarranty: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    points: Schema.Attribute.Component<'shared.text-item', true>;
    warrantyHref: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'/warranty/'>;
  };
}

export interface GlobalAnnouncementBar extends Struct.ComponentSchema {
  collectionName: 'components_global_announcement_bars';
  info: {
    description: 'Navy message bar above the header. Never on Campaign, Thank You or 404';
    displayName: 'Announcement bar';
    icon: 'globe';
  };
  attributes: {
    dismissible: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    label: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Announcement'>;
    link: Schema.Attribute.Component<'shared.link', false>;
    message: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface GlobalCookieBanner extends Struct.ComponentSchema {
  collectionName: 'components_global_cookie_banners';
  info: {
    description: 'Cookie consent bar';
    displayName: 'Cookie banner';
    icon: 'globe';
  };
  attributes: {
    acceptLabel: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Accept'>;
    declineLabel: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Decline'>;
    dismissible: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    policyHref: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'/privacy-policy/'>;
    policyLabel: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Privacy policy'>;
    show: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    text: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface GlobalFooter extends Struct.ComponentSchema {
  collectionName: 'components_global_footers';
  info: {
    description: 'Site footer';
    displayName: 'Footer';
    icon: 'globe';
  };
  attributes: {
    copyright: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    hours: Schema.Attribute.String;
    legalLinks: Schema.Attribute.Component<'shared.link', true>;
    licence: Schema.Attribute.String;
    links: Schema.Attribute.Component<'shared.link', true>;
    locations: Schema.Attribute.Component<'parts.footer-location', true>;
    partners: Schema.Attribute.Component<'parts.partner', true>;
    showLogo: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    social: Schema.Attribute.Component<'parts.social-link', true>;
    tagline: Schema.Attribute.String;
  };
}

export interface GlobalHeader extends Struct.ComponentSchema {
  collectionName: 'components_global_headers';
  info: {
    description: 'Site header, desktop menus and phone menu';
    displayName: 'Header';
    icon: 'globe';
  };
  attributes: {
    announcement: Schema.Attribute.Component<'global.announcement-bar', false>;
    bookLabel: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Book online'>;
    featured: Schema.Attribute.Component<'parts.featured-tile', false>;
    links: Schema.Attribute.Component<'parts.nav-link', true>;
    locationsMenu: Schema.Attribute.Component<'shared.link', true>;
    megaFooter: Schema.Attribute.Component<'shared.link', true>;
    megaMenu: Schema.Attribute.Component<'parts.mega-column', true>;
    mobileLinks: Schema.Attribute.Component<'shared.link', true>;
    mobileLocations: Schema.Attribute.Component<'shared.link', true>;
    mobileNote: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Calls answered 24/7'>;
    mobileServices: Schema.Attribute.Component<'shared.link', true>;
    showAnnouncement: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    showFeatured: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    showMobileNote: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
  };
}

export interface GlobalPhoneBar extends Struct.ComponentSchema {
  collectionName: 'components_global_phone_bars';
  info: {
    description: 'Bottom bar on phones with Book online and Call now';
    displayName: 'Phone bar (Book + Call)';
    icon: 'globe';
  };
  attributes: {
    bookHref: Schema.Attribute.String;
    callHref: Schema.Attribute.String;
    show: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
  };
}

export interface PartsArticleSection extends Struct.ComponentSchema {
  collectionName: 'components_parts_article_sections';
  info: {
    description: 'Text, optionally followed by a photo or video';
    displayName: 'Article section';
    icon: 'puzzle';
  };
  attributes: {
    content: Schema.Attribute.Blocks;
    media: Schema.Attribute.Component<'blocks.media', false>;
  };
}

export interface PartsCardItem extends Struct.ComponentSchema {
  collectionName: 'components_parts_card_items';
  info: {
    description: 'Card in a card grid';
    displayName: 'Card';
    icon: 'puzzle';
  };
  attributes: {
    href: Schema.Attribute.String;
    icon: Schema.Attribute.Enumeration<
      ['heating', 'plumbing', 'drains', 'electrical', 'lighting', 'tick']
    >;
    image: Schema.Attribute.Media<'images'>;
    imageLabel: Schema.Attribute.String;
    linkLabel: Schema.Attribute.String;
    text: Schema.Attribute.Text;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface PartsComparePlan extends Struct.ComponentSchema {
  collectionName: 'components_parts_compare_plans';
  info: {
    description: 'A plan in the plan comparison';
    displayName: 'Compare plan';
    icon: 'puzzle';
  };
  attributes: {
    commitment: Schema.Attribute.String;
    ctaLabel: Schema.Attribute.String;
    href: Schema.Attribute.String;
    key: Schema.Attribute.Component<'shared.text-item', true>;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    period: Schema.Attribute.String & Schema.Attribute.DefaultTo<'/year'>;
    popular: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    price: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface PartsCredential extends Struct.ComponentSchema {
  collectionName: 'components_parts_credentials';
  info: {
    description: 'A ticked credential, or a seal (fill the seal fields)';
    displayName: 'Credential';
    icon: 'puzzle';
  };
  attributes: {
    sealHref: Schema.Attribute.String;
    sealImage: Schema.Attribute.Media<'images'>;
    sealLabel: Schema.Attribute.String;
    sealName: Schema.Attribute.String;
    text: Schema.Attribute.String;
  };
}

export interface PartsFaqItem extends Struct.ComponentSchema {
  collectionName: 'components_parts_faq_items';
  info: {
    description: 'Question and answer';
    displayName: 'FAQ question';
    icon: 'puzzle';
  };
  attributes: {
    answer: Schema.Attribute.Blocks & Schema.Attribute.Required;
    question: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface PartsFeaturePoint extends Struct.ComponentSchema {
  collectionName: 'components_parts_feature_points';
  info: {
    description: 'Bold title + one line';
    displayName: 'Feature point';
    icon: 'puzzle';
  };
  attributes: {
    lead: Schema.Attribute.String & Schema.Attribute.Required;
    text: Schema.Attribute.String;
  };
}

export interface PartsFeaturedTile extends Struct.ComponentSchema {
  collectionName: 'components_parts_featured_tiles';
  info: {
    description: 'Mega menu featured tile';
    displayName: 'Featured tile';
    icon: 'puzzle';
  };
  attributes: {
    column: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<3>;
    href: Schema.Attribute.String & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images'>;
    imageLabel: Schema.Attribute.String;
    linkLabel: Schema.Attribute.String & Schema.Attribute.Required;
    text: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface PartsFooterLocation extends Struct.ComponentSchema {
  collectionName: 'components_parts_footer_locations';
  info: {
    description: 'Location in the footer';
    displayName: 'Footer location';
    icon: 'puzzle';
  };
  attributes: {
    lines: Schema.Attribute.Text;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    phone: Schema.Attribute.String;
  };
}

export interface PartsFormField extends Struct.ComponentSchema {
  collectionName: 'components_parts_form_fields';
  info: {
    description: 'A field in the callback form';
    displayName: 'Form field';
    icon: 'puzzle';
  };
  attributes: {
    autoComplete: Schema.Attribute.String;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    multiline: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    optional: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    required: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    requiredMessage: Schema.Attribute.String;
    type: Schema.Attribute.Enumeration<['text', 'tel', 'email']> &
      Schema.Attribute.DefaultTo<'text'>;
  };
}

export interface PartsGalleryPhoto extends Struct.ComponentSchema {
  collectionName: 'components_parts_gallery_photos';
  info: {
    description: 'Photo with optional Day/Night tag';
    displayName: 'Gallery photo';
    icon: 'puzzle';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'>;
    label: Schema.Attribute.String;
    tag: Schema.Attribute.String;
  };
}

export interface PartsGuideCard extends Struct.ComponentSchema {
  collectionName: 'components_parts_guide_cards';
  info: {
    description: 'A guide in the guides list (newest first)';
    displayName: 'Guide card';
    icon: 'puzzle';
  };
  attributes: {
    href: Schema.Attribute.String & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images'>;
    imageLabel: Schema.Attribute.String;
    summary: Schema.Attribute.Text;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    topic: Schema.Attribute.String;
  };
}

export interface PartsMegaColumn extends Struct.ComponentSchema {
  collectionName: 'components_parts_mega_columns';
  info: {
    description: 'Services mega menu column';
    displayName: 'Mega menu column';
    icon: 'puzzle';
  };
  attributes: {
    href: Schema.Attribute.String & Schema.Attribute.Required;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    links: Schema.Attribute.Component<'shared.link', true>;
  };
}

export interface PartsNavLink extends Struct.ComponentSchema {
  collectionName: 'components_parts_nav_links';
  info: {
    description: 'Desktop header link';
    displayName: 'Header link';
    icon: 'puzzle';
  };
  attributes: {
    href: Schema.Attribute.String & Schema.Attribute.Required;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    menu: Schema.Attribute.Enumeration<['none', 'services', 'locations']> &
      Schema.Attribute.DefaultTo<'none'>;
  };
}

export interface PartsOfferCard extends Struct.ComponentSchema {
  collectionName: 'components_parts_offer_cards';
  info: {
    description: 'A single offer';
    displayName: 'Offer card';
    icon: 'puzzle';
  };
  attributes: {
    action: Schema.Attribute.String;
    button: Schema.Attribute.Component<'shared.button', false>;
    buttonVariant: Schema.Attribute.Enumeration<['primary', 'secondary']> &
      Schema.Attribute.DefaultTo<'primary'>;
    ctaLabel: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    href: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    imageLabel: Schema.Attribute.String;
    items: Schema.Attribute.Component<'shared.text-item', true>;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    price: Schema.Attribute.String;
    tag: Schema.Attribute.String;
    variant: Schema.Attribute.Enumeration<['master', 'detailed']> &
      Schema.Attribute.DefaultTo<'master'>;
  };
}

export interface PartsPackage extends Struct.ComponentSchema {
  collectionName: 'components_parts_packages';
  info: {
    description: 'Pricing package card';
    displayName: 'Package';
    icon: 'puzzle';
  };
  attributes: {
    included: Schema.Attribute.Component<'shared.text-item', true>;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    popular: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    price: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface PartsPartner extends Struct.ComponentSchema {
  collectionName: 'components_parts_partners';
  info: {
    description: 'Partner logo in the footer';
    displayName: 'Partner logo';
    icon: 'puzzle';
  };
  attributes: {
    href: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    label: Schema.Attribute.String;
    minWidth: Schema.Attribute.Integer;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    newTab: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
  };
}

export interface PartsPlanCard extends Struct.ComponentSchema {
  collectionName: 'components_parts_plan_cards';
  info: {
    description: 'Maintenance plan pricing card';
    displayName: 'Plan card';
    icon: 'puzzle';
  };
  attributes: {
    badge: Schema.Attribute.String;
    benefits: Schema.Attribute.Component<'shared.text-item', true>;
    ctaLabel: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'See the plan'>;
    ctaVariant: Schema.Attribute.Enumeration<['secondary', 'primary']> &
      Schema.Attribute.DefaultTo<'secondary'>;
    href: Schema.Attribute.String;
    note: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Cancel anytime'>;
    period: Schema.Attribute.String & Schema.Attribute.DefaultTo<'a year'>;
    price: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface PartsPlanColumn extends Struct.ComponentSchema {
  collectionName: 'components_parts_plan_columns';
  info: {
    description: 'One plan column in the pricing table';
    displayName: 'Plan table column';
    icon: 'puzzle';
  };
  attributes: {
    ctaLabel: Schema.Attribute.String;
    href: Schema.Attribute.String;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    popular: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
  };
}

export interface PartsPlanTeaser extends Struct.ComponentSchema {
  collectionName: 'components_parts_plan_teasers';
  info: {
    description: 'Service Partner Plan teaser card (Text + Image extra slot)';
    displayName: 'Plan teaser';
    icon: 'puzzle';
  };
  attributes: {
    button: Schema.Attribute.Component<'shared.button', false>;
    label: Schema.Attribute.String;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    note: Schema.Attribute.String;
    period: Schema.Attribute.String & Schema.Attribute.DefaultTo<'a year'>;
    points: Schema.Attribute.Component<'shared.text-item', true>;
    price: Schema.Attribute.String & Schema.Attribute.Required;
    pricePrefix: Schema.Attribute.String & Schema.Attribute.DefaultTo<'From'>;
  };
}

export interface PartsReview extends Struct.ComponentSchema {
  collectionName: 'components_parts_reviews';
  info: {
    description: 'One customer review. Never invent reviews';
    displayName: 'Review';
    icon: 'puzzle';
  };
  attributes: {
    name: Schema.Attribute.String & Schema.Attribute.Required;
    quote: Schema.Attribute.Text & Schema.Attribute.Required;
    rating: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<5>;
    service: Schema.Attribute.String;
    town: Schema.Attribute.String;
  };
}

export interface PartsSocialLink extends Struct.ComponentSchema {
  collectionName: 'components_parts_social_links';
  info: {
    description: 'Social icon link';
    displayName: 'Social link';
    icon: 'puzzle';
  };
  attributes: {
    href: Schema.Attribute.String & Schema.Attribute.Required;
    icon: Schema.Attribute.Enumeration<
      ['youtube', 'facebook', 'instagram', 'linkedin']
    > &
      Schema.Attribute.Required;
    label: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface PartsStep extends Struct.ComponentSchema {
  collectionName: 'components_parts_steps';
  info: {
    description: 'Numbered step';
    displayName: 'Step';
    icon: 'puzzle';
  };
  attributes: {
    text: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface PartsTableRow extends Struct.ComponentSchema {
  collectionName: 'components_parts_table_rows';
  info: {
    description: 'A feature row: label + one value per plan, in plan order';
    displayName: 'Table row';
    icon: 'puzzle';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
    values: Schema.Attribute.Component<'shared.text-item', true>;
  };
}

export interface PartsVideo extends Struct.ComponentSchema {
  collectionName: 'components_parts_videos';
  info: {
    description: 'YouTube video or file, loads on tap';
    displayName: 'Video';
    icon: 'puzzle';
  };
  attributes: {
    src: Schema.Attribute.String;
    thumbnail: Schema.Attribute.Media<'images'>;
    thumbnailLabel: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Video'>;
    youtube: Schema.Attribute.String;
  };
}

export interface SharedButton extends Struct.ComponentSchema {
  collectionName: 'components_shared_buttons';
  info: {
    description: 'Button label and link';
    displayName: 'Button';
    icon: 'link';
  };
  attributes: {
    href: Schema.Attribute.String;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    newTab: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
  };
}

export interface SharedLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_links';
  info: {
    description: 'A label and a link';
    displayName: 'Link';
    icon: 'link';
  };
  attributes: {
    href: Schema.Attribute.String & Schema.Attribute.Required;
    label: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: 'Page title and description for search engines';
    displayName: 'SEO';
    icon: 'link';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text;
    metaTitle: Schema.Attribute.String;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

export interface SharedTextItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_text_items';
  info: {
    description: 'One line of text (for lists)';
    displayName: 'Text item';
    icon: 'link';
  };
  attributes: {
    text: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export namespace Public {
    export interface ComponentSchemas {
      'blocks.before-after': BlocksBeforeAfter;
      'blocks.call-band': BlocksCallBand;
      'blocks.card-grid': BlocksCardGrid;
      'blocks.credentials': BlocksCredentials;
      'blocks.embed': BlocksEmbed;
      'blocks.faq': BlocksFaq;
      'blocks.feature-list': BlocksFeatureList;
      'blocks.financing-band': BlocksFinancingBand;
      'blocks.gallery': BlocksGallery;
      'blocks.guide-article': BlocksGuideArticle;
      'blocks.guide-hub': BlocksGuideHub;
      'blocks.hero': BlocksHero;
      'blocks.map-section': BlocksMapSection;
      'blocks.media': BlocksMedia;
      'blocks.message': BlocksMessage;
      'blocks.offer-grid': BlocksOfferGrid;
      'blocks.plan-compare': BlocksPlanCompare;
      'blocks.pricing': BlocksPricing;
      'blocks.reviews': BlocksReviews;
      'blocks.small-print': BlocksSmallPrint;
      'blocks.steps': BlocksSteps;
      'blocks.text-image': BlocksTextImage;
      'blocks.trust-bar': BlocksTrustBar;
      'global.announcement-bar': GlobalAnnouncementBar;
      'global.cookie-banner': GlobalCookieBanner;
      'global.footer': GlobalFooter;
      'global.header': GlobalHeader;
      'global.phone-bar': GlobalPhoneBar;
      'parts.article-section': PartsArticleSection;
      'parts.card-item': PartsCardItem;
      'parts.compare-plan': PartsComparePlan;
      'parts.credential': PartsCredential;
      'parts.faq-item': PartsFaqItem;
      'parts.feature-point': PartsFeaturePoint;
      'parts.featured-tile': PartsFeaturedTile;
      'parts.footer-location': PartsFooterLocation;
      'parts.form-field': PartsFormField;
      'parts.gallery-photo': PartsGalleryPhoto;
      'parts.guide-card': PartsGuideCard;
      'parts.mega-column': PartsMegaColumn;
      'parts.nav-link': PartsNavLink;
      'parts.offer-card': PartsOfferCard;
      'parts.package': PartsPackage;
      'parts.partner': PartsPartner;
      'parts.plan-card': PartsPlanCard;
      'parts.plan-column': PartsPlanColumn;
      'parts.plan-teaser': PartsPlanTeaser;
      'parts.review': PartsReview;
      'parts.social-link': PartsSocialLink;
      'parts.step': PartsStep;
      'parts.table-row': PartsTableRow;
      'parts.video': PartsVideo;
      'shared.button': SharedButton;
      'shared.link': SharedLink;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
      'shared.text-item': SharedTextItem;
    }
  }
}
