import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, CircleCheck, Mail, Smartphone, Trash2, TriangleAlert } from 'lucide-react'
import { PageHero } from '../components/ui'
import { SUPPORT_EMAIL, fadeUp, inView, primaryBtn, secondaryBtn } from '../lib/site'

/* CHECK: make sure these steps match the exact menu names in your app. */
const appSteps = [
  'Open the Humsafar – Daata app and sign in.',
  'Go to Settings.',
  'Tap Delete account.',
  'Confirm with the OTP sent to your registered mobile number.',
]

const requestBody = `Hello Humsafar team,

Please delete my Humsafar – Daata account.

Registered mobile number:
Profile name / ID:

Thank you.`

export default function DeleteAccountPage() {
  return (
    <>
      <PageHero
        icon={Trash2}
        label="Delete Account"
        title="Delete your"
        script="Humsafar account."
        text="You can permanently delete your Humsafar – Daata account at any time, from the app or by sending us a request."
      />

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto grid max-w-5xl gap-6 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <motion.div {...inView} variants={fadeUp} className="rounded-[2rem] border border-gold/40 bg-ivory/60 p-7 sm:p-9">
            <span className="grid h-12 w-12 place-items-center rounded-xl bg-maroon text-gold">
              <Smartphone className="h-6 w-6" />
            </span>
            <h2 className="mt-5 font-heading text-xl font-semibold text-maroon-deep">Option 1: In the app</h2>
            <ol className="mt-5 space-y-3">
              {appSteps.map((step, i) => (
                <li key={step} className="flex gap-3 text-sm leading-7 text-ink/80">
                  <span className="font-heading font-semibold text-gold">{i + 1}.</span>
                  {step}
                </li>
              ))}
            </ol>
          </motion.div>

          <motion.div {...inView} variants={fadeUp} custom={0.1} className="rounded-[2rem] border border-gold/40 bg-ivory/60 p-7 sm:p-9">
            <span className="grid h-12 w-12 place-items-center rounded-xl bg-maroon text-gold">
              <Mail className="h-6 w-6" />
            </span>
            <h2 className="mt-5 font-heading text-xl font-semibold text-maroon-deep">Option 2: Send us a request</h2>
            <p className="mt-4 text-sm leading-7 text-ink/80">
              Can&apos;t open the app? Email us from any device with your registered
              mobile number and profile name or ID. We&apos;ll confirm your identity
              and delete the account.
            </p>
            <a
              href={`mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent('Account deletion request')}&body=${encodeURIComponent(requestBody)}`}
              className={`${primaryBtn} mt-6`}
            >
              <Mail className="h-4 w-4" />
              Request deletion by email
            </a>
          </motion.div>
        </div>

        <motion.div {...inView} variants={fadeUp} className="mx-auto mt-6 max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-[2rem] border border-gold/30 bg-white p-7 sm:p-9">
            <h2 className="font-heading text-xl font-semibold text-maroon-deep">What happens when you delete</h2>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {[
                'Your profile is removed and no longer appears to other members.',
                'Your photos, preferences, interests and chats are deleted.',
                'You are signed out of the app on all devices.',
                'Deletion is permanent. To use Humsafar again, you will need a new account.',
              ].map((t) => (
                <li key={t} className="flex items-start gap-3 text-sm leading-7 text-ink/80">
                  <CircleCheck className="mt-1 h-4 w-4 shrink-0 text-maroon" />
                  {t}
                </li>
              ))}
            </ul>
            <p className="mt-6 flex items-start gap-3 rounded-2xl bg-ivory p-4 text-xs leading-6 text-ink/65">
              <TriangleAlert className="mt-0.5 h-4 w-4 shrink-0 text-maroon" />
              Some limited information may be kept for a period where the law requires
              it, or to prevent fraud and abuse. See our Privacy Policy for details.
            </p>
          </div>
          <div className="mt-8 text-center">
            <Link to="/download#contact" className={secondaryBtn}>
              Need help? Contact us
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </motion.div>
      </section>
    </>
  )
}
