import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, CircleCheck, Compass, ShieldCheck } from 'lucide-react'
import { CtaBand, PageHero } from '../components/ui'
import { journeySteps } from '../data/content'
import { getIcon } from '../lib/icons'
import { fadeUp, inView, secondaryBtn } from '../lib/site'

function StepList() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <ol className="relative">
          {/* vertical line */}
          <span
            className="absolute bottom-6 left-[1.375rem] top-6 w-px bg-linear-to-b from-gold via-gold/50 to-gold sm:left-9"
            aria-hidden="true"
          />
          {journeySteps.map((step, i) => {
            const Icon = getIcon(step.icon)
            return (
              <motion.li
                key={step.title}
                {...inView}
                variants={fadeUp}
                className="relative flex gap-3 pb-8 last:pb-0 sm:gap-8 sm:pb-10"
              >
                <div className="relative z-10 flex shrink-0 flex-col items-center">
                  <span className="grid h-11 w-11 place-items-center rounded-full border-4 border-white bg-maroon text-gold shadow-lg shadow-maroon/20 sm:h-[4.5rem] sm:w-[4.5rem]">
                    <Icon className="h-5 w-5 sm:h-7 sm:w-7" strokeWidth={1.75} />
                  </span>
                </div>

                <div className="flex-1 rounded-3xl border border-gold/30 bg-ivory/60 p-6 sm:p-8">
                  <span className="font-heading text-xs font-semibold uppercase tracking-[0.25em] text-gold">
                    Step {String(i + 1).padStart(2, '0')}
                  </span>
                  <h2 className="mt-2 font-heading text-xl font-semibold text-maroon-deep sm:text-2xl">
                    {step.title}
                  </h2>
                  <p className="mt-3 text-[15px] leading-8 text-ink/75">{step.description}</p>
                  <ul className="mt-4 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-x-6">
                    {step.points.map((p) => (
                      <li key={p} className="inline-flex items-start gap-2 text-sm text-ink/75">
                        <CircleCheck className="mt-0.5 h-4 w-4 shrink-0 text-maroon" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}

function SafetyNote() {
  return (
    <section className="bg-ivory px-4 py-20 sm:px-6 sm:py-24">
      <motion.div
        {...inView}
        variants={fadeUp}
        className="mx-auto flex max-w-5xl flex-col items-start gap-6 rounded-[2rem] border border-gold/40 bg-white px-6 py-10 sm:px-10 md:flex-row md:items-center md:justify-between"
      >
        <div className="flex items-start gap-5">
          <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-maroon text-gold">
            <ShieldCheck className="h-7 w-7" strokeWidth={1.75} />
          </span>
          <div>
            <h2 className="font-heading text-xl font-semibold text-maroon-deep sm:text-2xl">
              Stay safe at every step
            </h2>
            <p className="mt-2 max-w-xl text-sm leading-7 text-ink/70">
              Never send money to someone you have not met, keep chats in the app
              until you feel confident, and report anything that feels wrong.
            </p>
          </div>
        </div>
        <Link to="/safety" className={`${secondaryBtn} shrink-0`}>
          Safety &amp; Trust
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </motion.div>
    </section>
  )
}

export default function HowItWorksPage() {
  return (
    <>
      <PageHero
        icon={Compass}
        label="How It Works"
        title="Seven simple steps"
        script="toward forever."
        text="From creating your account to meeting the families, here is how Humsafar – Daata helps you find a compatible life partner."
      />
      <StepList />
      <SafetyNote />
      <CtaBand title="Take the" script="first step today." />
    </>
  )
}
