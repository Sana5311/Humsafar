import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  BadgeCheck,
  CircleCheck,
  Download,
  Eye,
  Flag,
  Heart,
  Quote,
  ShieldCheck,
  Sparkles,
} from 'lucide-react'
import { AppGallery } from '../components/AppScreens'
import { CtaBand, FaqList, Ornament, SectionHeading } from '../components/ui'
import { faqs, heroImage, homeSteps, testimonials, valueProps } from '../data/content'
import { safetyTopics } from '../data/safety'
import { getIcon } from '../lib/icons'
import { fadeUp, inView, primaryBtn, secondaryBtn } from '../lib/site'

/* ==================================================================
   HOME PAGE — section order
   01 Header (shared Navbar)   02 Hero   03 Value proposition
   04 How it works   05 App preview   06 Trust & privacy
   07 FAQ + final CTA   08 Footer (shared)
   ================================================================== */

/* ---------------- 02 HERO ---------------- */
function HeroVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.94 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      className="relative mx-auto w-full max-w-[400px]"
    >
      <div className="absolute -inset-4 rounded-t-full rounded-b-3xl border border-gold/50" aria-hidden="true" />

      <div className="relative h-[440px] overflow-hidden rounded-t-full rounded-b-3xl border-[6px] border-white bg-linear-to-b from-maroon to-maroon-deep shadow-2xl shadow-maroon/30 sm:h-[480px]">
        {heroImage.src ? (
          <img src={heroImage.src} alt={heroImage.alt} className="h-full w-full object-cover" />
        ) : (
          <>
            <div className="absolute inset-4 rounded-t-full rounded-b-2xl border border-gold/40" aria-hidden="true" />
            <div
              className="absolute left-1/2 top-1/3 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/20 blur-2xl"
              aria-hidden="true"
            />
            <div className="relative flex h-full flex-col items-center justify-center gap-5 px-8 text-center">
              <motion.div
                animate={{ scale: [1, 1.08, 1] }}
                transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
                className="grid h-28 w-28 place-items-center rounded-full border border-gold/60 bg-maroon-deep/40"
              >
                <Heart className="h-14 w-14 text-gold" fill="currentColor" strokeWidth={1} />
              </motion.div>
              <span className="font-script text-4xl text-ivory">
                Two hearts.
                <br />
                One journey.
              </span>
              <Ornament />
            </div>
          </>
        )}
      </div>

      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -left-2 bottom-12 flex items-center gap-3 rounded-2xl border border-gold/30 bg-white px-4 py-3.5 shadow-xl shadow-ink/10 sm:-left-12"
      >
        <span className="grid h-10 w-10 place-items-center rounded-full bg-maroon text-gold">
          <Heart className="h-4 w-4" fill="currentColor" />
        </span>
        <span className="text-left">
          <strong className="block text-sm font-semibold text-ink">Interest accepted</strong>
          <small className="block text-xs text-ink/60">Your story starts here</small>
        </span>
      </motion.div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -right-2 top-16 flex items-center gap-3 rounded-2xl border border-gold/30 bg-white px-4 py-3 shadow-xl shadow-ink/10 sm:-right-10"
      >
        <span className="grid h-9 w-9 place-items-center rounded-full bg-gold text-maroon-deep">
          <ShieldCheck className="h-4 w-4" />
        </span>
        <span className="text-left">
          <strong className="block text-xs font-semibold text-ink">Privacy first</strong>
          <small className="block text-[11px] text-ink/60">Number stays hidden</small>
        </span>
      </motion.div>
    </motion.div>
  )
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-ivory">
      <div className="pointer-events-none absolute -right-40 top-10 h-[520px] w-[520px] rounded-full bg-gold/15 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute -left-40 bottom-0 h-[380px] w-[380px] rounded-full bg-maroon/10 blur-3xl" aria-hidden="true" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-4 py-14 sm:px-6 md:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
        <div className="text-center lg:text-left">
          <motion.span
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="inline-flex items-center gap-2.5 rounded-full border border-gold/50 bg-white/60 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.25em] text-maroon"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            Marriage-first matchmaking
          </motion.span>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.1}
            className="mt-7 font-heading text-[2.3rem] font-semibold leading-[1.15] text-maroon-deep sm:text-5xl lg:text-[3.4rem]"
          >
            Your journey to a blessed Nikah
            <span className="mt-2 block font-script text-[3.4rem] font-normal leading-none text-maroon sm:text-7xl lg:text-[5rem]">
              starts here.
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.2}
            className="mx-auto mt-6 max-w-xl text-base leading-8 text-ink/75 lg:mx-0"
          >
            A matrimonial app made for Muslims. Find a righteous, compatible life partner who shares your deen, values and vision for marriage, with your family by your side.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.3}
            className="mt-9 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start"
          >
            <Link to="/download" className={primaryBtn}>
              <Download className="h-4 w-4" />
              Download Humsafar
            </Link>
            <Link to="/how-it-works" className={secondaryBtn}>
              Explore how it works
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>

          <motion.ul
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.4}
            className="mt-9 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-ink/70 lg:justify-start"
          >
            {['Contact details stay private', 'Photos reviewed', 'Report & block anytime'].map((t) => (
              <li key={t} className="inline-flex items-center gap-2">
                <CircleCheck className="h-4 w-4 text-maroon" />
                {t}
              </li>
            ))}
          </motion.ul>
        </div>

        <HeroVisual />
      </div>
    </section>
  )
}

/* ---------------- 03 VALUE PROPOSITION ---------------- */
function ValueProposition() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading label="Why Humsafar" title="More than a profile." script="A meaningful connection." />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {valueProps.map((v, i) => {
            const Icon = getIcon(v.icon)
            return (
              <motion.article
                key={v.title}
                {...inView}
                variants={fadeUp}
                custom={i * 0.1}
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden rounded-3xl border border-gold/30 bg-ivory/50 p-7 transition-shadow duration-300 hover:shadow-xl hover:shadow-maroon/10"
              >
                <span className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-linear-to-r from-maroon via-gold to-maroon transition-transform duration-500 group-hover:scale-x-100" />
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-maroon text-gold">
                  <Icon className="h-6 w-6" strokeWidth={1.75} />
                </div>
                <h3 className="mt-6 font-heading text-lg font-semibold text-maroon-deep">{v.title}</h3>
                <p className="mt-3 text-sm leading-7 text-ink/70">{v.description}</p>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* ---------------- 04 HOW IT WORKS ---------------- */
function HowItWorks() {
  return (
    <section className="bg-ivory py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading label="How It Works" title="Four simple steps" script="to your Humsafar." />

        <div className="relative mt-16">
          {/* connecting line on desktop */}
          <span
            className="absolute left-[12.5%] right-[12.5%] top-8 hidden h-px bg-linear-to-r from-gold/20 via-gold to-gold/20 lg:block"
            aria-hidden="true"
          />
          <ol className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {homeSteps.map((step, i) => {
              const Icon = getIcon(step.icon)
              return (
                <motion.li key={step.title} {...inView} variants={fadeUp} custom={i * 0.1} className="relative text-center">
                  <span className="relative mx-auto grid h-16 w-16 place-items-center rounded-full border-4 border-ivory bg-maroon text-gold shadow-lg shadow-maroon/20">
                    <Icon className="h-6 w-6" strokeWidth={1.75} />
                    <span className="absolute -right-2 -top-2 grid h-7 w-7 place-items-center rounded-full border-2 border-ivory bg-gold font-heading text-xs font-bold text-maroon-deep">
                      {i + 1}
                    </span>
                  </span>
                  <h3 className="mt-6 font-heading text-lg font-semibold text-maroon-deep">{step.title}</h3>
                  <p className="mx-auto mt-2 max-w-[240px] text-sm leading-7 text-ink/70">{step.text}</p>
                </motion.li>
              )
            })}
          </ol>
        </div>

        <div className="mt-14 text-center">
          <Link to="/how-it-works" className={secondaryBtn}>
            Explore how it works
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  )
}

/* ---------------- 05 APP PREVIEW ---------------- */
function AppPreview() {
  return (
    <section className="overflow-hidden bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="App Preview"
          title="Everything you need,"
          script="in one app."
          text="Your profile, matches, interests, private chat and privacy settings, all in one place."
        />
        <div className="mt-12">
          <AppGallery />
        </div>
      </div>
    </section>
  )
}

/* ---------------- 06 TRUST & PRIVACY ---------------- */
// Built from src/data/safety.js so it always matches the Safety & Trust page.
function availableIn(...ids) {
  return safetyTopics
    .filter((t) => ids.includes(t.id))
    .flatMap((t) => t.items)
    .filter((item) => item.status === 'available')
}

const trustCards = [
  {
    icon: BadgeCheck,
    title: 'Profile checks we perform',
    items: availableIn('verification', 'photos'),
    link: '/safety#verification',
  },
  {
    icon: Eye,
    title: 'Who can see your photos & contact details',
    items: availableIn('privacy').slice(0, 3),
    link: '/safety#privacy',
  },
  {
    icon: Flag,
    title: 'How to report or block someone',
    items: availableIn('reporting', 'blocking'),
    link: '/safety#reporting',
  },
]

function TrustPrivacy() {
  return (
    <section className="bg-ivory py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Trust & Privacy"
          title="Your privacy matters"
          script="at every step."
          text="Here is what is in place today. Planned protections are listed separately on our Safety & Trust page."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {trustCards.map((card, i) => {
            const Icon = card.icon
            return (
              <motion.div
                key={card.title}
                {...inView}
                variants={fadeUp}
                custom={i * 0.1}
                className="flex flex-col rounded-3xl border border-gold/30 bg-white p-7"
              >
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-maroon text-gold">
                  <Icon className="h-6 w-6" strokeWidth={1.75} />
                </span>
                <h3 className="mt-5 font-heading text-lg font-semibold leading-snug text-maroon-deep">{card.title}</h3>
                <ul className="mt-5 flex-1 space-y-4">
                  {card.items.map((item) => (
                    <li key={item.title} className="flex items-start gap-3">
                      <CircleCheck className="mt-0.5 h-4 w-4 shrink-0 text-maroon" />
                      <span>
                        <span className="block text-sm font-semibold text-ink">{item.title}</span>
                        <span className="mt-0.5 block text-sm leading-6 text-ink/65">{item.description}</span>
                      </span>
                    </li>
                  ))}
                </ul>
                <Link
                  to={card.link}
                  className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-maroon hover:text-maroon-deep"
                >
                  Learn more
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.div>
            )
          })}
        </div>

        <div className="mt-12 text-center">
          <Link to="/safety" className={primaryBtn}>
            <ShieldCheck className="h-4 w-4" />
            Visit Safety &amp; Trust
          </Link>
        </div>
      </div>
    </section>
  )
}

/* Testimonials: hidden until genuine ones are added in src/data/content.js */
function Testimonials() {
  if (!testimonials.length) return null
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading label="Stories" title="In their" script="own words." />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.figure key={t.name + i} {...inView} variants={fadeUp} custom={i * 0.08} className="rounded-3xl border border-gold/30 bg-ivory/50 p-7">
              <Quote className="h-7 w-7 text-gold" />
              <blockquote className="mt-4 text-[15px] leading-8 text-ink/80">{t.quote}</blockquote>
              <figcaption className="mt-5 font-heading text-sm font-semibold text-maroon-deep">
                {t.name}
                {t.detail && <span className="font-sans font-normal text-ink/55"> · {t.detail}</span>}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------------- 07 FAQ + FINAL CTA ---------------- */
function FaqPreview() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <SectionHeading label="FAQ" title="Questions," script="answered." />
        <motion.div {...inView} variants={fadeUp} className="mt-12">
          <FaqList items={faqs.filter((f) => f.home)} />
        </motion.div>
        <div className="mt-8 text-center">
          <Link to="/download#faq" className="group inline-flex items-center gap-2 text-sm font-semibold text-maroon hover:text-maroon-deep">
            <Sparkles className="h-4 w-4 text-gold" />
            See all FAQs
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <ValueProposition />
      <HowItWorks />
      <AppPreview />
      <TrustPrivacy />
      <Testimonials />
      <FaqPreview />
      <CtaBand
        title="Your Humsafar could be"
        script="one step away."
        text="Start your journey on the Humsafar app."
      />
    </>
  )
}
