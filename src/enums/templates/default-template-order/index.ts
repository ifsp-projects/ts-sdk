const PRIMARY_TEMPLATE_DEFAULT_ORDER = [
  "header",
  "details",
  "moreInfoAbout",
  "ourMission",
  "depoiments",
  "faq",
] as const;

const SECONDARY_TEMPLATE_DEFAULT_ORDER = [
  "header",
  "howItWorks",
  "moreInfoAbout",
  "aboutUs",
  "faq",
] as const;

const TERTIARY_TEMPLATE_DEFAULT_ORDER = [
  "header",
  "howItWorks",
  "testimonials",
  "moreInfoAbout",
  "initiatives",
  "aboutUs",
  "faq",
] as const;

const QUATERNARY_TEMPLATE_DEFAULT_ORDER = [
  "header",
  "causes",
  "timeline",
  "getInvolved",
  "faq",
] as const;

export const DEFAULT_TEMPLATES_ORDER = {
  primary: PRIMARY_TEMPLATE_DEFAULT_ORDER,
  secondary: SECONDARY_TEMPLATE_DEFAULT_ORDER,
  tertiary: TERTIARY_TEMPLATE_DEFAULT_ORDER,
  quarternary: QUATERNARY_TEMPLATE_DEFAULT_ORDER,
} as const;
