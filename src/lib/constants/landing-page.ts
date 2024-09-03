export const pricingFeaturesFree = [
  { feature: "Updates", available: false },
  { feature: "Next Js v14.2", available: true },
  { feature: "shadcn/ui", available: true },
  { feature: "Unlimited SaaS apps", available: true },
  { feature: "Marketing pages + SEO", available: true },
  { feature: "/admin and /app portals", available: true },
  { feature: "Entity Builder", available: false },
  { feature: "Accounts Management", available: false },
  { feature: "Stripe Subscriptions", available: false },
  { feature: "Transactional Emails", available: false },
  { feature: "Page Block Builder", available: false },
  { feature: "Roles and Permissions", available: false },
  { feature: "Internationalization", available: false },
  { feature: "GDPR management", available: false },
  { feature: "Workflows", available: false },
  { feature: "Google & GitHub Sign-In", available: true },
  { feature: "Blogging", available: true },
  { feature: "Knowledge Base", available: true },
  { feature: "In-app Notifications", available: false },
  { feature: "Metrics", available: true },
  { feature: "Affiliates", available: false },
  { feature: "Templates", available: false },
  { feature: "B2B2C Portals", available: false },
  { feature: "Email Marketing", available: false },
  { feature: "Analytics", available: true },
  { feature: "Unit Tests", available: false },
  { feature: "Onboarding", available: false },
  { feature: "Feature Flags", available: false },
];
export const pricingFeaturesStandard = [
  { feature: "I major Update", available: false },
  { feature: "Next Js v14.2", available: true },
  { feature: "shadcn/ui", available: true },
  { feature: "Unlimited SaaS apps", available: true },
  { feature: "Marketing pages + SEO", available: true },
  { feature: "/admin and /app portals", available: true },
  { feature: "Entity Builder", available: true },
  { feature: "Accounts Management", available: true },
  { feature: "Stripe Subscriptions", available: true },
  { feature: "Transactional Emails", available: true },
  { feature: "Page Block Builder", available: true },
  { feature: "Roles and Permissions", available: false },
  { feature: "Internationalization", available: true },
  { feature: "GDPR management", available: true },
  { feature: "Workflows", available: true },
  { feature: "Google & GitHub Sign-In", available: true },
  { feature: "Blogging", available: true },
  { feature: "Knowledge Base", available: true },
  { feature: "In-app Notifications", available: true },
  { feature: "Metrics", available: true },
  { feature: "Affiliates", available: true },
  { feature: "Templates", available: false },
  { feature: "B2B2C Portals New!", available: true },
  { feature: "Email Marketing", available: true },
  { feature: "Analytics", available: true },
  { feature: "Unit Tests", available: false },
  { feature: "Onboarding", available: true },
  { feature: "Feature Flags", available: false },
];
export const pricingFeaturesPlus = [
  { feature: "Updates + Priority Support", available: true },
  { feature: "Next Js v14.2", available: true },
  { feature: "shadcn/ui", available: true },
  { feature: "Unlimited SaaS apps", available: true },
  { feature: "Marketing pages + SEO", available: true },
  { feature: "/admin and /app portals", available: true },
  { feature: "Entity Builder", available: true },
  { feature: "Accounts Management", available: true },
  { feature: "Stripe Subscriptions", available: true },
  { feature: "Transactional Emails", available: true },
  { feature: "Page Block Builder", available: true },
  { feature: "Roles and Permissions", available: true },
  { feature: "Internationalization", available: true },
  { feature: "GDPR management", available: false },
  { feature: "Workflows", available: true },
  { feature: "Google & GitHub Sign-In", available: true },
  { feature: "Blogging", available: true },
  { feature: "Knowledge Base", available: true },
  { feature: "In-app Notifications", available: true },
  { feature: "Metrics", available: true },
  { feature: "Affiliates", available: true },
  { feature: "Templates", available: false },
  { feature: "B2B2C Portals", available: true },
  { feature: "Email Marketing", available: true },
  { feature: "Analytics", available: true },
  { feature: "Unit Tests", available: true },
  { feature: "Onboarding", available: true },
  { feature: "Feature Flags", available: true },
];
export const pricingFeaturesEnterprise = [
  { feature: "Updates", available: true },
  { feature: "Next Js v14.2", available: true },
  { feature: "shadcn/ui", available: true },
  { feature: "Unlimited SaaS apps", available: true },
  { feature: "Marketing pages + SEO", available: true },
  { feature: "/admin and /app portals", available: true },
  { feature: "Entity Builder", available: true },
  { feature: "Accounts Management", available: true },
  { feature: "Stripe Subscriptions", available: true },
  { feature: "Transactional Emails", available: true },
  { feature: "Page Block Builder", available: true },
  { feature: "Roles and Permissions", available: true },
  { feature: "Internationalization", available: true },
  { feature: "GDPR management", available: true },
  { feature: "Workflows", available: true },
  { feature: "Google & GitHub Sign-In", available: true },
  { feature: "Blogging", available: true },
  { feature: "Knowledge Base", available: true },
  { feature: "In-app Notifications", available: true },
  { feature: "Metrics", available: true },
  { feature: "Affiliates", available: true },
  { feature: "Templates", available: true },
  { feature: "B2B2C Portals New!", available: true },
  // { feature: "Widgets", available: true },
  { feature: "Email Marketing", available: true },
  { feature: "Analytics", available: true },
  { feature: "Unit Tests", available: true },
  { feature: "Onboarding", available: true },
  { feature: "Feature Flags", available: true },
];
export const pricingCards = [
  {
    title: 'Free',
    description: 'Perfect for trying out Livery',
    price: '$0',
    duration: 'free',
    highlight: 'Key features',
    features: [...pricingFeaturesFree],
    priceId: '',
  },
  {
    title: 'Standard',
    description: 'Everything you need to Launch',
    price: '$99',
    duration: 'once',
    highlight: 'Key features',
    features: [...pricingFeaturesStandard],

    priceId: 'price_45lksdfjsdfoaiuJASDF',
  },
  {
    title: 'Plus',
    description: 'For serious agency owners',
    price: '$199',
    duration: 'once',
    highlight: 'Everything in Starter, plus',
    features: [...pricingFeaturesPlus],
    priceId: 'price_2347fgsdfgksdfjsdfoaiuJASDF',
  },
  {
    title: 'Enterprise',
    description: 'For Established enterprises',
    price: '$2999',
    duration: 'month',
    highlight: 'Everything in Starter, plus',
    features: [...pricingFeaturesEnterprise],
    priceId: 'price_2347fgsdfgksdfjsdfoaiuJASDF',
  },
]

export const techStack = [
  {
    link: "https://react.dev",
    src: "/icons/react-icon.png",
    name: "React",
  },
  {
    link: "https://www.typescriptlang.org/",
    src: "/icons/typescript-icon.png",
    name: "Typescript",
  },
  {
    link: "https://prisma.io",
    src: "/icons/prisma-icon.png",
    name: "Prisma",
  },
  {
    link: "https://nextjs.org",
    src: "/icons/next-js.svg",
    name: "Next",
  },
  {
    link: "https://tailwindcss.com",
    src: "/icons/tailwind-icon.png",
    name: "Tailwind",
  },
  {
    link: "https://stripe.com/",
    src: "/icons/stripe-icon.png",
    name: "Stripe",
  },
  {
    link: "https://postmarkapp.com",
    src: "/icons/postmark-icon.png",
    name: "Postmark",
  },
];


export const colorVariants = {
  orange: "group-hover:bg-orange-500",
  green: "group-hover:bg-emerald-500",
  blue: "group-hover:bg-cyan-500",
  yellow: "group-hover:bg-yellow-500",
  indigo: "group-hover:bg-indigo-500",
  purple: "group-hover:bg-purple-500",
};