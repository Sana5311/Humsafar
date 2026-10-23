import { useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import {
  ArrowUpRight,
  ChevronDown,
  CircleCheck,
  Clock,
  Heart,
} from 'lucide-react'
import { fadeUp, inView, stores } from '../lib/site'

/* ------------------------------------------------------------------
   Headings & ornaments
------------------------------------------------------------------- */
export function SectionLabel({ children, light = false }) {
  return (
    <div
      className={`inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.28em] ${
        light ? 'text-gold' : 'text-maroon'
      }`}
    >
      <span className="h-px w-8 bg-gold" />
      {children}
      <span className="h-px w-8 bg-gold" />
    </div>
  )
}

export function Ornament() {
  return (
    <div className="flex items-center justify-center gap-3 text-gold" aria-hidden="true">
      <span className="h-px w-12 bg-linear-to-r from-transparent to-gold" />
      <Heart className="h-3.5 w-3.5" fill="currentColor" />
      <span className="h-px w-12 bg-linear-to-l from-transparent to-gold" />
    </div>
  )
}

export function SectionHeading({ label, title, script, text, light = false, className = '' }) {
  return (
    <motion.div {...inView} variants={fadeUp} className={`mx-auto max-w-2xl text-center ${className}`}>
      {label && <SectionLabel light={light}>{label}</SectionLabel>}
      <h2
        className={`mt-6 font-heading text-3xl font-semibold leading-tight sm:text-[2.6rem] ${
          light ? 'text-ivory' : 'text-maroon-deep'
        }`}
      >
        {title}
        {script && (
          <span
            className={`mt-2 block font-script text-5xl font-normal sm:text-6xl ${
              light ? 'text-gold' : 'text-maroon'
            }`}
          >
            {script}
          </span>
        )}
      </h2>
      {text && (
        <p className={`mt-5 text-[15px] leading-8 ${light ? 'text-ivory/80' : 'text-ink/75'}`}>{text}</p>
      )}
    </motion.div>
  )
}

/* Top banner used on inner pages */
export function PageHero({ label, title, script, text, icon: Icon, children }) {
  return (
    <section className="relative overflow-hidden bg-ivory">
      <div
        className="pointer-events-none absolute -right-32 -top-20 h-[460px] w-[460px] rounded-full bg-gold/15 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-40 bottom-0 h-[340px] w-[340px] rounded-full bg-maroon/10 blur-3xl"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 sm:py-24">
        {Icon && (
          <motion.div variants={fadeUp} initial="hidden" animate="visible">
            <span className="mx-auto mb-7 grid h-16 w-16 place-items-center rounded-full border border-gold/60 bg-maroon text-gold shadow-lg shadow-maroon/20">
              <Icon className="h-8 w-8" strokeWidth={1.5} />
            </span>
          </motion.div>
        )}
        <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0.05}>
          <SectionLabel>{label}</SectionLabel>
        </motion.div>
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.1}
          className="mt-6 font-heading text-[2.2rem] font-semibold leading-tight text-maroon-deep sm:text-5xl"
        >
          {title}
          {script && (
            <span className="mt-2 block font-script text-5xl font-normal text-maroon sm:text-7xl">
              {script}
            </span>
          )}
        </motion.h1>
        {text && (
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.2}
            className="mx-auto mt-6 max-w-2xl text-[15px] leading-8 text-ink/75"
          >
            {text}
          </motion.p>
        )}
        {children && (
          <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0.3}>
            {children}
          </motion.div>
        )}
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------
   Status badge (Safety page)
------------------------------------------------------------------- */
export function StatusBadge({ status }) {
  if (status === 'available') {
    return (
      <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-maroon px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-ivory">
        <CircleCheck className="h-3.5 w-3.5" />
        Available now
      </span>
    )
  }
  return (
    <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-dashed border-gold bg-gold/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-maroon-deep">
      <Clock className="h-3.5 w-3.5" />
      Planned
    </span>
  )
}

/* ------------------------------------------------------------------
   App store buttons — show "Coming soon" automatically when the
   store URL in src/lib/site.js is empty.
------------------------------------------------------------------- */

function StoreButton({ item, light, compact, byPlatform }) {
  const Icon = item.icon
  const live = Boolean(item.url)
  const base = `relative inline-flex items-center gap-3 rounded-xl border text-left transition-all duration-300 ${
    compact ? 'px-3.5 py-2' : 'px-5 py-3'
  }`
  const colors = light
    ? 'border-gold/40 bg-white/5 text-ivory'
    : 'border-ink bg-ink text-ivory'
  const content = (
    <>
      <Icon className={compact ? 'h-5 w-5' : 'h-6 w-6'} fill={item.id === 'android' ? 'currentColor' : 'none'} />
      <span className="leading-tight">
        <span className="block text-[10px] uppercase tracking-wider opacity-75">
          {byPlatform ? (live ? 'Download for' : 'Coming soon for') : live ? item.caption : 'Coming soon on'}
        </span>
        <span className={`block font-semibold ${compact ? 'text-sm' : 'text-base'}`}>
          {byPlatform ? item.platform : item.store}
        </span>
      </span>
    </>
  )

  if (live) {
    return (
      <a
        href={item.url}
        target="_blank"
        rel="noreferrer"
        className={`${base} ${colors} hover:-translate-y-0.5 hover:shadow-lg ${light ? 'hover:bg-white/10' : 'hover:bg-maroon-deep'}`}
      >
        {content}
      </a>
    )
  }
  return (
    <span
      className={`${base} cursor-default border-dashed ${
        light ? 'border-gold/40 text-ivory/70' : 'border-ink/30 bg-white/60 text-ink/60'
      }`}
      aria-label={`${item.store} app coming soon`}
    >
      {content}
    </span>
  )
}

export function StoreButtons({ light = false, compact = false, byPlatform = false, className = '' }) {
  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      {stores.map((item) => (
        <StoreButton key={item.id} item={item} light={light} compact={compact} byPlatform={byPlatform} />
      ))}
    </div>
  )
}

/* ------------------------------------------------------------------
   FAQ accordion
------------------------------------------------------------------- */
export function FaqList({ items }) {
  const [open, setOpen] = useState(0)
  return (
    <div className="divide-y divide-gold/25 overflow-hidden rounded-3xl border border-gold/30 bg-white">
      {items.map((faq, i) => {
        const isOpen = open === i
        return (
          <div key={faq.q}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? -1 : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-ivory/60"
            >
              <span className="text-[15px] font-medium text-maroon-deep">{faq.q}</span>
              <ChevronDown
                className={`h-5 w-5 shrink-0 text-gold transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
              />
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                  className="overflow-hidden"
                >
                  <p className="px-6 pb-6 text-sm leading-7 text-ink/75">{faq.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}

/* ------------------------------------------------------------------
   Download call-to-action band (end of pages)
------------------------------------------------------------------- */
export function CtaBand({
  title = 'Ready to begin',
  script = 'something beautiful?',
  text = 'Take the first step towards your next chapter with Humsafar – Daata.',
}) {
  return (
    <section className="relative overflow-hidden bg-linear-to-br from-maroon via-maroon to-maroon-deep py-20 text-center sm:py-24">
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[480px] w-[480px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-gold/20"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[680px] w-[680px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-gold/10"
        aria-hidden="true"
      />
      <motion.div {...inView} variants={fadeUp} className="relative mx-auto max-w-3xl px-4 sm:px-6">
        <SectionLabel light>Your Story Awaits</SectionLabel>
        <h2 className="mt-6 font-heading text-3xl font-semibold leading-tight text-ivory sm:text-5xl">
          {title}
          <span className="mt-2 block font-script text-5xl font-normal text-gold sm:text-7xl">{script}</span>
        </h2>
        <p className="mx-auto mt-6 max-w-lg text-[15px] leading-8 text-ivory/80">{text}</p>
        <StoreButtons light byPlatform className="mt-9 justify-center" />
        <Link
          to="/download"
          className="group mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-gold hover:text-ivory"
        >
          Download & contact details
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </Link>
      </motion.div>
    </section>
  )
}
