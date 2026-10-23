import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, CircleCheck, Heart, Target } from 'lucide-react'
import { CtaBand, Ornament, PageHero, SectionHeading } from '../components/ui'
import { audience, values } from '../data/content'
import { getIcon } from '../lib/icons'
import { fadeUp, inView, secondaryBtn } from '../lib/site'

const approach = [
  {
    title: 'Values before appearances',
    text: 'Profiles highlight family background, beliefs, lifestyle and what each person is looking for, not just photos.',
  },
  {
    title: 'Preferences you control',
    text: 'You set what matters to you in a partner, and recommendations follow your preferences.',
  },
  {
    title: 'Mutual interest first',
    text: 'Conversations start only when both people agree, so every connection begins with respect.',
  },
  {
    title: 'Room for families',
    text: 'Families can be part of the journey, from creating a profile to the first meeting.',
  },
]

function WhyWeExist() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <motion.div {...inView} variants={fadeUp}>
          <h2 className="font-heading text-3xl font-semibold leading-tight text-maroon-deep sm:text-4xl">
            Why Humsafar
            <span className="mt-2 block font-script text-5xl font-normal text-maroon sm:text-6xl">exists.</span>
          </h2>
          <div className="mt-6 space-y-5 text-[15px] leading-8 text-ink/75">
            <p>
              Finding a life partner is one of the biggest decisions anyone makes.
              Yet much of today&apos;s online matchmaking feels like casual dating:
              endless swiping, unclear intentions and too little privacy.
            </p>
            <p>
              <strong className="font-semibold text-maroon-deep">Humsafar</strong> means
              &ldquo;companion on life&apos;s journey&rdquo;. We created Humsafar – Daata
              for people who want exactly that: a serious, respectful place to find
              someone to share their life with.
            </p>
          </div>
        </motion.div>

        <motion.div
          {...inView}
          variants={fadeUp}
          custom={0.1}
          className="relative overflow-hidden rounded-[2rem] bg-linear-to-br from-maroon to-maroon-deep p-8 text-ivory sm:p-10"
        >
          <div
            className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full border border-gold/20"
            aria-hidden="true"
          />
          <span className="grid h-12 w-12 place-items-center rounded-xl bg-gold text-maroon-deep">
            <Target className="h-6 w-6" />
          </span>
          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.28em] text-gold">Our mission</p>
          <p className="mt-4 font-heading text-2xl font-semibold leading-snug sm:text-[1.7rem]">
            To help people who are ready for marriage find a compatible life
            partner, with trust, privacy and respect at every step.
          </p>
          <div className="mt-8 flex items-center gap-3 text-gold">
            <span className="h-px w-10 bg-gold" />
            <Heart className="h-4 w-4" fill="currentColor" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function Values() {
  return (
    <section className="bg-ivory py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading label="Our Values" title="What we" script="stand for." />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => {
            const Icon = getIcon(v.icon)
            return (
              <motion.div
                key={v.title}
                {...inView}
                variants={fadeUp}
                custom={i * 0.08}
                className="rounded-3xl border border-gold/30 bg-white p-7 text-center"
              >
                <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-maroon text-gold">
                  <Icon className="h-6 w-6" strokeWidth={1.75} />
                </span>
                <h3 className="mt-5 font-heading text-lg font-semibold text-maroon-deep">{v.title}</h3>
                <p className="mt-3 text-sm leading-7 text-ink/70">{v.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function Audience() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <SectionHeading label="Who It's For" title="Made for people" script="ready for marriage." />
        <motion.ul {...inView} variants={fadeUp} className="mt-12 grid gap-4 sm:grid-cols-2">
          {audience.map((a) => (
            <li key={a} className="flex items-start gap-3 rounded-2xl border border-gold/30 bg-ivory/60 p-5">
              <CircleCheck className="mt-0.5 h-5 w-5 shrink-0 text-maroon" />
              <span className="text-sm leading-7 text-ink/80">{a}</span>
            </li>
          ))}
        </motion.ul>
        <motion.p
          {...inView}
          variants={fadeUp}
          className="mt-8 text-center text-sm leading-7 text-ink/60"
        >
          Humsafar – Daata is for adults (18+) looking for marriage. It is not a casual dating app.
        </motion.p>
      </div>
    </section>
  )
}

function Approach() {
  return (
    <section className="bg-ivory py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Our Approach"
          title="Meaningful compatibility,"
          script="not just a match."
          text="Lasting marriages are built on shared values and understanding. That's why we focus on these."
        />
        <div className="mt-6">
          <Ornament />
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {approach.map((a, i) => (
            <motion.div
              key={a.title}
              {...inView}
              variants={fadeUp}
              custom={(i % 2) * 0.08}
              className="flex gap-5 rounded-3xl border border-gold/30 bg-white p-7"
            >
              <span className="font-heading text-3xl font-semibold text-gold">0{i + 1}</span>
              <div>
                <h3 className="font-heading text-lg font-semibold text-maroon-deep">{a.title}</h3>
                <p className="mt-2 text-sm leading-7 text-ink/70">{a.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link to="/how-it-works" className={secondaryBtn}>
            See how it works
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default function AboutPage() {
  return (
    <>
      <PageHero
        icon={Heart}
        label="About Humsafar"
        title="A companion"
        script="for life's journey."
        text="Humsafar – Daata is a marriage-first matchmaking app. We help people who are ready for marriage find a compatible life partner, respectfully, privately and with their families by their side."
      />
      <WhyWeExist />
      <Values />
      <Audience />
      <Approach />
      <CtaBand />
    </>
  )
}
