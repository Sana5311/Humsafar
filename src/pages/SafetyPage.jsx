import { motion } from 'framer-motion'
import {
  ArrowUpRight,
  Ban,
  BadgeCheck,
  CircleCheck,
  Clock,
  ExternalLink,
  Flag,
  Image,
  Info,
  LifeBuoy,
  LockKeyhole,
  Mail,
  Phone,
  ShieldAlert,
  ShieldCheck,
  TriangleAlert,
} from 'lucide-react'
import { Ornament, SectionLabel, StatusBadge } from '../components/ui'
import { SUPPORT_EMAIL, fadeUp, inView, primaryBtn } from '../lib/site'
import {
  LAST_UPDATED,
  helpChannels,
  safePractices,
  safetyTopics,
  scamRedFlags,
} from '../data/safety'

const icons = { BadgeCheck, LockKeyhole, Image, Flag, Ban }

const allFeatures = [
  ...safetyTopics.flatMap((topic) =>
    topic.items.map((item) => ({ ...item, topic: topic.title })),
  ),
  ...helpChannels.map((item) => ({ ...item, topic: 'Getting Help' })),
]
const availableFeatures = allFeatures.filter((f) => f.status === 'available')
const plannedFeatures = allFeatures.filter((f) => f.status === 'planned')

const pageNav = [
  ...safetyTopics.map((t) => ({ id: t.id, label: t.title })),
  { id: 'scams', label: 'Scam Awareness' },
  { id: 'help', label: 'Getting Help' },
]

/* ------------------------------------------------------------------
   Pieces
------------------------------------------------------------------- */
function FeatureItem({ item, index }) {
  const planned = item.status === 'planned'
  return (
    <motion.li
      {...inView}
      variants={fadeUp}
      custom={index * 0.06}
      className={`rounded-2xl border p-5 sm:p-6 ${
        planned
          ? 'border-dashed border-gold/60 bg-ivory/60'
          : 'border-gold/30 bg-white shadow-sm'
      }`}
    >
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <h3
          className={`font-heading text-base font-semibold ${
            planned ? 'text-ink/70' : 'text-maroon-deep'
          }`}
        >
          {item.title}
        </h3>
        <StatusBadge status={item.status} />
      </div>
      <p className={`mt-2 text-sm leading-7 ${planned ? 'text-ink/60' : 'text-ink/75'}`}>
        {item.description}
      </p>
    </motion.li>
  )
}

/* ------------------------------------------------------------------
   Sections
------------------------------------------------------------------- */
function SafetyHero() {
  return (
    <section className="relative overflow-hidden bg-ivory">
      <div
        className="pointer-events-none absolute -right-32 -top-20 h-[460px] w-[460px] rounded-full bg-gold/15 blur-3xl"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 sm:py-24">
        <motion.div variants={fadeUp} initial="hidden" animate="visible">
          <span className="mx-auto grid h-16 w-16 place-items-center rounded-full border border-gold/60 bg-maroon text-gold shadow-lg shadow-maroon/20">
            <ShieldCheck className="h-8 w-8" strokeWidth={1.5} />
          </span>
        </motion.div>

        <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0.05} className="mt-7">
          <SectionLabel>Safety &amp; Trust</SectionLabel>
        </motion.div>

        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.1}
          className="mt-6 font-heading text-[2.2rem] font-semibold leading-tight text-maroon-deep sm:text-5xl"
        >
          Your safety comes first,
          <span className="mt-2 block font-script text-5xl font-normal text-maroon sm:text-7xl">
            at every step.
          </span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.2}
          className="mx-auto mt-6 max-w-2xl text-[15px] leading-8 text-ink/75"
        >
          Finding a life partner means trusting the people you meet. This page
          explains how Humsafar – Daata protects your profile, your photos and
          your privacy, what you can do if something feels wrong, and how to
          stay safe from scams.
        </motion.p>

        {/* Legend */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.3}
          className="mx-auto mt-10 grid max-w-2xl gap-4 text-left sm:grid-cols-2"
        >
          <div className="rounded-2xl border border-gold/30 bg-white p-5">
            <StatusBadge status="available" />
            <p className="mt-3 text-sm leading-6 text-ink/75">
              Live in the app today. You can use it right now.
            </p>
          </div>
          <div className="rounded-2xl border border-dashed border-gold/60 bg-white/60 p-5">
            <StatusBadge status="planned" />
            <p className="mt-3 text-sm leading-6 text-ink/75">
              On our roadmap but <strong className="font-semibold text-ink">not available yet</strong>.
              Please don&apos;t rely on it for now.
            </p>
          </div>
        </motion.div>

        <p className="mt-6 text-xs text-ink/50">Last updated: {LAST_UPDATED}</p>
      </div>
    </section>
  )
}

function AtAGlance() {
  return (
    <section className="border-y border-gold/30 bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div {...inView} variants={fadeUp} className="text-center">
          <h2 className="font-heading text-2xl font-semibold text-maroon-deep sm:text-3xl">
            At a glance
          </h2>
          <div className="mt-4">
            <Ornament />
          </div>
        </motion.div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <motion.div
            {...inView}
            variants={fadeUp}
            className="rounded-3xl border border-gold/30 bg-ivory p-6 sm:p-8"
          >
            <div className="flex items-center justify-between gap-3">
              <h3 className="font-heading text-lg font-semibold text-maroon-deep">
                Available now
              </h3>
              <span className="rounded-full bg-maroon px-3 py-1 text-xs font-semibold text-ivory">
                {availableFeatures.length}
              </span>
            </div>
            <ul className="mt-5 space-y-3">
              {availableFeatures.map((f) => (
                <li key={`${f.topic}-${f.title}`} className="flex items-start gap-3 text-sm text-ink/80">
                  <CircleCheck className="mt-0.5 h-4 w-4 shrink-0 text-maroon" />
                  <span>
                    {f.title}
                    <span className="text-ink/50"> · {f.topic}</span>
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            {...inView}
            variants={fadeUp}
            custom={0.1}
            className="rounded-3xl border border-dashed border-gold/70 bg-white p-6 sm:p-8"
          >
            <div className="flex items-center justify-between gap-3">
              <h3 className="font-heading text-lg font-semibold text-maroon-deep">
                Planned, not live yet
              </h3>
              <span className="rounded-full border border-gold bg-gold/10 px-3 py-1 text-xs font-semibold text-maroon-deep">
                {plannedFeatures.length}
              </span>
            </div>
            <ul className="mt-5 space-y-3">
              {plannedFeatures.map((f) => (
                <li key={`${f.topic}-${f.title}`} className="flex items-start gap-3 text-sm text-ink/70">
                  <Clock className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                  <span>
                    {f.title}
                    <span className="text-ink/50"> · {f.topic}</span>
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Jump links */}
        <nav aria-label="Safety topics" className="mt-10 flex flex-wrap justify-center gap-2.5">
          {pageNav.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="rounded-full border border-gold/50 bg-white px-4 py-2 text-xs font-medium text-maroon transition-colors hover:border-maroon hover:bg-maroon hover:text-ivory"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </section>
  )
}

function TopicSection({ topic, index }) {
  const Icon = icons[topic.icon] ?? ShieldCheck
  const tinted = index % 2 === 0
  return (
    <section id={topic.id} className={`py-16 sm:py-20 ${tinted ? 'bg-ivory' : 'bg-white'}`}>
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 lg:px-8">
        <motion.div {...inView} variants={fadeUp} className="lg:sticky lg:top-28 lg:self-start">
          <span className="grid h-14 w-14 place-items-center rounded-2xl bg-maroon text-gold">
            <Icon className="h-6 w-6" strokeWidth={1.75} />
          </span>
          <span className="mt-6 block font-heading text-sm font-semibold text-gold">
            0{index + 1}
          </span>
          <h2 className="mt-1 font-heading text-2xl font-semibold text-maroon-deep sm:text-3xl">
            {topic.title}
          </h2>
          <p className="mt-3 text-[15px] leading-7 text-ink/75">{topic.summary}</p>
        </motion.div>

        <ul className="space-y-4">
          {topic.items.map((item, i) => (
            <FeatureItem key={item.title} item={item} index={i} />
          ))}
        </ul>
      </div>
    </section>
  )
}

function ScamAwareness() {
  return (
    <section id="scams" className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div {...inView} variants={fadeUp} className="mx-auto max-w-2xl text-center">
          <SectionLabel>Scam Awareness</SectionLabel>
          <h2 className="mt-6 font-heading text-3xl font-semibold leading-tight text-maroon-deep sm:text-4xl">
            Know the warning signs
            <span className="mt-2 block font-script text-5xl font-normal text-maroon sm:text-6xl">
              and protect your heart.
            </span>
          </h2>
          <p className="mt-5 text-[15px] leading-8 text-ink/75">
            Most matrimonial scams follow the same patterns. If you notice any
            of these, stop talking, block the member and report them.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <motion.div
            {...inView}
            variants={fadeUp}
            className="rounded-3xl border border-maroon/20 bg-maroon/[0.04] p-6 sm:p-8"
          >
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-maroon text-ivory">
                <TriangleAlert className="h-5 w-5" />
              </span>
              <h3 className="font-heading text-lg font-semibold text-maroon-deep">Red flags</h3>
            </div>
            <ul className="mt-6 space-y-4">
              {scamRedFlags.map((flag) => (
                <li key={flag} className="flex items-start gap-3 text-sm leading-7 text-ink/80">
                  <ShieldAlert className="mt-1 h-4 w-4 shrink-0 text-maroon" />
                  {flag}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            {...inView}
            variants={fadeUp}
            custom={0.1}
            className="rounded-3xl border border-gold/40 bg-ivory p-6 sm:p-8"
          >
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-gold text-maroon-deep">
                <ShieldCheck className="h-5 w-5" />
              </span>
              <h3 className="font-heading text-lg font-semibold text-maroon-deep">
                Stay safe
              </h3>
            </div>
            <ul className="mt-6 space-y-4">
              {safePractices.map((tip) => (
                <li key={tip} className="flex items-start gap-3 text-sm leading-7 text-ink/80">
                  <CircleCheck className="mt-1 h-4 w-4 shrink-0 text-maroon" />
                  {tip}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function GettingHelp() {
  return (
    <section id="help" className="bg-ivory py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div {...inView} variants={fadeUp} className="mx-auto max-w-2xl text-center">
          <SectionLabel>Getting Help</SectionLabel>
          <h2 className="mt-6 font-heading text-3xl font-semibold leading-tight text-maroon-deep sm:text-4xl">
            We&apos;re here
            <span className="mt-2 block font-script text-5xl font-normal text-maroon sm:text-6xl">
              when you need us.
            </span>
          </h2>
        </motion.div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Support channels */}
          <motion.div
            {...inView}
            variants={fadeUp}
            className="rounded-3xl border border-gold/30 bg-white p-6 sm:p-8"
          >
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-maroon text-gold">
                <LifeBuoy className="h-5 w-5" />
              </span>
              <h3 className="font-heading text-lg font-semibold text-maroon-deep">
                How to request assistance
              </h3>
            </div>

            <ol className="mt-6 space-y-3 text-sm leading-7 text-ink/80">
              <li className="flex gap-3">
                <span className="font-heading font-semibold text-gold">1.</span>
                Block and report the member from their profile or the chat.
              </li>
              <li className="flex gap-3">
                <span className="font-heading font-semibold text-gold">2.</span>
                Email us with the member&apos;s profile name or ID, what happened, and screenshots if you have them.
              </li>
              <li className="flex gap-3">
                <span className="font-heading font-semibold text-gold">3.</span>
                Our team reviews your request and replies by email.
              </li>
            </ol>

            <ul className="mt-8 space-y-3">
              {helpChannels.map((ch) => (
                <li
                  key={ch.title}
                  className={`flex flex-col gap-2 rounded-2xl border p-4 sm:flex-row sm:items-start sm:justify-between ${
                    ch.status === 'planned' ? 'border-dashed border-gold/60' : 'border-gold/30'
                  }`}
                >
                  <div>
                    <p className="text-sm font-semibold text-ink">{ch.title}</p>
                    <p className="mt-1 text-sm leading-6 text-ink/65">{ch.description}</p>
                  </div>
                  <StatusBadge status={ch.status} />
                </li>
              ))}
            </ul>

            <a href={`mailto:${SUPPORT_EMAIL}`} className={`${primaryBtn} mt-8 w-full sm:w-auto`}>
              <Mail className="h-4 w-4" />
              Contact Support
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </motion.div>

          {/* Emergency */}
          <motion.div
            {...inView}
            variants={fadeUp}
            custom={0.1}
            className="rounded-3xl bg-linear-to-br from-maroon to-maroon-deep p-6 text-ivory shadow-xl shadow-maroon/20 sm:p-8"
          >
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-gold text-maroon-deep">
                <Phone className="h-5 w-5" />
              </span>
              <h3 className="font-heading text-lg font-semibold">In an emergency</h3>
            </div>
            <p className="mt-5 text-sm leading-7 text-ivory/85">
              If you are in immediate danger, contact the authorities first.
              Humsafar – Daata support is not an emergency service.
            </p>

            <div className="mt-6 space-y-3">
              <a
                href="tel:112"
                className="flex items-center justify-between rounded-2xl border border-gold/40 bg-white/5 px-5 py-4 transition-colors hover:bg-white/10"
              >
                <span>
                  <span className="block text-xs uppercase tracking-wider text-gold">Emergency</span>
                  <span className="text-sm text-ivory/85">Police, fire, ambulance</span>
                </span>
                <span className="font-heading text-2xl font-semibold">112</span>
              </a>
              <a
                href="tel:1930"
                className="flex items-center justify-between rounded-2xl border border-gold/40 bg-white/5 px-5 py-4 transition-colors hover:bg-white/10"
              >
                <span>
                  <span className="block text-xs uppercase tracking-wider text-gold">Cyber crime helpline</span>
                  <span className="text-sm text-ivory/85">Online fraud &amp; money scams</span>
                </span>
                <span className="font-heading text-2xl font-semibold">1930</span>
              </a>
              <a
                href="https://cybercrime.gov.in"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between gap-3 rounded-2xl border border-gold/40 bg-white/5 px-5 py-4 transition-colors hover:bg-white/10"
              >
                <span>
                  <span className="block text-xs uppercase tracking-wider text-gold">Report online</span>
                  <span className="text-sm text-ivory/85">cybercrime.gov.in</span>
                </span>
                <ExternalLink className="h-5 w-5 text-gold" />
              </a>
            </div>
          </motion.div>
        </div>

        <motion.p
          {...inView}
          variants={fadeUp}
          className="mx-auto mt-12 flex max-w-3xl items-start gap-3 rounded-2xl border border-gold/30 bg-white p-5 text-xs leading-6 text-ink/65"
        >
          <Info className="mt-0.5 h-4 w-4 shrink-0 text-maroon" />
          Features marked &ldquo;Planned&rdquo; are not available yet and may change
          before release. We will update this page as new protections go live.
          No safety system is perfect, so please always follow the safety tips
          above.
        </motion.p>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------
   Page
------------------------------------------------------------------- */
export default function SafetyPage() {
  return (
    <>
      <SafetyHero />
      <AtAGlance />
      {safetyTopics.map((topic, index) => (
        <TopicSection key={topic.id} topic={topic} index={index} />
      ))}
      <ScamAwareness />
      <GettingHelp />
    </>
  )
}
