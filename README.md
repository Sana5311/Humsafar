# Humsafar – Daata Website

React + Vite + Tailwind CSS · framer-motion · lucide-react · deployed on Vercel

## Run locally

```bash
npm install
npm run dev
```

## Pages

| Page | URL | File |
|---|---|---|
| Home | `/` | `src/pages/HomePage.jsx` |
| About Humsafar | `/about` | `src/pages/AboutPage.jsx` |
| How It Works | `/how-it-works` | `src/pages/HowItWorksPage.jsx` |
| Safety & Trust | `/safety` | `src/pages/SafetyPage.jsx` |
| Download & Contact | `/download` | `src/pages/DownloadPage.jsx` |
| Delete Account | `/delete-account` | `src/pages/DeleteAccountPage.jsx` |

## Where to edit things

- **`src/lib/site.js`**: support email/phone, Google Play & App Store links (empty = "Coming soon"), contact form endpoint, navbar & footer links.
- **`src/data/content.js`**: hero image, FAQs, How It Works steps, About page values, home features, **testimonials** (genuine only; section stays hidden while empty), **real app screenshots** for the phone mockup.
- **`src/data/safety.js`**: Safety & Trust content and each feature's `available` / `planned` status.
- **`src/index.css`**: theme colours and fonts.

## Contact form

With `CONTACT_FORM_ENDPOINT` empty, the form opens the visitor's email app with the message filled in.
To receive messages directly, create a free form at Formspree or Web3Forms and paste its endpoint URL.

## Deploy

`vercel.json` makes direct links like `/safety` work on Vercel.
