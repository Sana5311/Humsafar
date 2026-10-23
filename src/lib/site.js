import { Apple, Play } from 'lucide-react'

/* ==================================================================
   SITE SETTINGS — edit these values, the whole site updates.
   ================================================================== */

// Support contacts. Leave SUPPORT_PHONE empty ('') to hide the phone option.
export const SUPPORT_EMAIL = 'YOUR-OFFICIAL-EMAIL@example.com'
export const SUPPORT_PHONE = '' // e.g. '+91 98765 43210'

// App store links. Leave empty ('') while a listing is not live yet:
// the site then shows a "Coming soon" state instead of a button/QR code.
export const PLAY_STORE_URL = ''
export const APP_STORE_URL = ''

// Contact form. Paste a form endpoint here (e.g. from Formspree or Web3Forms)
// to receive messages directly. If left empty, the form opens the visitor's
// email app with their message pre-filled to SUPPORT_EMAIL.
export const CONTACT_FORM_ENDPOINT = ''

// App stores (used by the store buttons and the Download page QR codes)
export const stores = [
  { id: 'android', store: 'Google Play', platform: 'Android', caption: 'Get it on', url: PLAY_STORE_URL, icon: Play },
  { id: 'ios', store: 'App Store', platform: 'iOS', caption: 'Download on the', url: APP_STORE_URL, icon: Apple },
]

/* ==================================================================
   Navigation
   ================================================================== */
export const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'How It Works', to: '/how-it-works' },
  { label: 'Safety & Trust', to: '/safety' },
  { label: 'Download & Contact', to: '/download' },
]

export const footerColumns = [
  {
    title: 'Navigation',
    links: [
      { label: 'About', to: '/about' },
      { label: 'How It Works', to: '/how-it-works' },
      { label: 'Safety', to: '/safety' },
      { label: 'Contact', to: '/download#contact' },
      { label: 'FAQ', to: '/download#faq' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', to: '/privacy-policy' },
      { label: 'Terms of Use', to: '/terms' },
      { label: 'Community Guidelines', to: '/community-guidelines' },
      { label: 'Delete Account', to: '/delete-account' },
    ],
  },
]

/* ==================================================================
   Shared styles & animation presets
   ================================================================== */
export const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
  }),
}

export const inView = {
  initial: 'hidden',
  whileInView: 'visible',
  viewport: { once: true, amount: 0.15 },
}

export const primaryBtn =
  'group inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-maroon px-7 py-3 text-sm font-medium text-ivory shadow-lg shadow-maroon/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-maroon-deep hover:shadow-maroon/30'

export const secondaryBtn =
  'group inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-gold/70 bg-transparent px-7 py-3 text-sm font-medium text-maroon transition-all duration-300 hover:-translate-y-0.5 hover:border-maroon hover:bg-maroon/5'
