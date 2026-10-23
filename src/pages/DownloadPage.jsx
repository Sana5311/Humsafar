import { useState } from 'react'
import { motion } from 'framer-motion'
import { QRCodeSVG } from 'qrcode.react'
import {
  ArrowUpRight,
  Bell,
  CircleCheck,
  Clock,
  Download,
  LoaderCircle,
  Mail,
  Phone,
  Send,
  TriangleAlert,
} from 'lucide-react'
import { FaqList, PageHero, SectionHeading } from '../components/ui'
import { faqs } from '../data/content'
import {
  CONTACT_FORM_ENDPOINT,
  SUPPORT_EMAIL,
  SUPPORT_PHONE,
  fadeUp,
  inView,
  primaryBtn,
  stores,
} from '../lib/site'

/* ------------------------------------------------------------------
   App store cards
------------------------------------------------------------------- */
function StoreCard({ item, index }) {
  const Icon = item.icon
  const live = Boolean(item.url)

  return (
    <motion.div
      {...inView}
      variants={fadeUp}
      custom={index * 0.1}
      className={`flex flex-col rounded-[2rem] border bg-white p-7 sm:p-9 ${
        live ? 'border-gold/40 shadow-sm' : 'border-dashed border-gold/60'
      }`}
    >
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div className="flex items-center gap-4">
          <span className="grid h-14 w-14 place-items-center rounded-2xl bg-ink text-ivory">
            <Icon className="h-7 w-7" fill={item.id === 'android' ? 'currentColor' : 'none'} />
          </span>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">{item.platform}</p>
            <h2 className="whitespace-nowrap font-heading text-xl font-semibold text-maroon-deep">{item.store}</h2>
          </div>
        </div>
        {live ? (
          <span className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-full bg-maroon px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-ivory">
            <CircleCheck className="h-3.5 w-3.5" /> Live
          </span>
        ) : (
          <span className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border border-dashed border-gold bg-gold/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-maroon-deep">
            <Clock className="h-3.5 w-3.5" /> Coming soon
          </span>
        )}
      </div>

      <div className="mt-8 flex flex-1 flex-col items-center justify-center gap-6 sm:flex-row sm:items-center sm:justify-start">
        {live ? (
          <>
            <div className="rounded-2xl border border-gold/40 bg-white p-3">
              <QRCodeSVG value={item.url} size={140} fgColor="#561027" bgColor="#ffffff" level="M" />
            </div>
            <div className="text-center sm:text-left">
              <p className="text-sm leading-7 text-ink/70">
                Scan the QR code with your phone camera, or tap the button below.
              </p>
              <a href={item.url} target="_blank" rel="noreferrer" className={`${primaryBtn} mt-4`}>
                <Download className="h-4 w-4" />
                Get it on {item.store}
              </a>
            </div>
          </>
        ) : (
          <>
            <div className="grid h-[166px] w-[166px] shrink-0 place-items-center rounded-2xl border border-dashed border-gold/60 bg-ivory/60 text-center">
              <span>
                <Clock className="mx-auto h-8 w-8 text-gold" />
                <span className="mt-2 block text-xs font-medium text-ink/55">QR code coming soon</span>
              </span>
            </div>
            <div className="text-center sm:text-left">
              <p className="text-sm leading-7 text-ink/70">
                The {item.platform} app is not on {item.store} yet. We&apos;ll add the
                download link and QR code here as soon as it&apos;s live.
              </p>
              <a
                href={`mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent(
                  `Notify me when the ${item.platform} app launches`,
                )}`}
                className="group mt-4 inline-flex items-center gap-2 text-sm font-semibold text-maroon hover:text-maroon-deep"
              >
                <Bell className="h-4 w-4" />
                Ask us to notify you
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>
          </>
        )}
      </div>
    </motion.div>
  )
}

/* ------------------------------------------------------------------
   Contact form
------------------------------------------------------------------- */
const topics = ['General question', 'Account help', 'Safety concern', 'App download', 'Feedback']

const fieldClass =
  'mt-2 w-full rounded-xl border border-gold/40 bg-white px-4 py-3 text-sm text-ink placeholder:text-ink/40 transition-colors focus:border-maroon focus:outline-none focus:ring-2 focus:ring-maroon/15'

function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', topic: topics[0], message: '' })
  const [state, setState] = useState('idle') // idle | sending | sent | error

  const update = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  async function handleSubmit(e) {
    e.preventDefault()

    // No form service connected: open the visitor's email app instead
    if (!CONTACT_FORM_ENDPOINT) {
      const body = [
        `Name: ${form.name}`,
        `Email: ${form.email}`,
        form.phone && `Phone: ${form.phone}`,
        `Topic: ${form.topic}`,
        '',
        form.message,
      ]
        .filter((line) => line !== '' && line !== false)
        .join('\n')
      window.location.href = `mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent(
        `[Humsafar] ${form.topic}`,
      )}&body=${encodeURIComponent(body)}`
      setState('sent')
      return
    }

    setState('sending')
    try {
      const res = await fetch(CONTACT_FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error('Request failed')
      setState('sent')
      setForm({ name: '', email: '', phone: '', topic: topics[0], message: '' })
    } catch {
      setState('error')
    }
  }

  if (state === 'sent') {
    return (
      <div className="flex h-full flex-col items-center justify-center rounded-[2rem] border border-gold/40 bg-white p-10 text-center">
        <span className="grid h-16 w-16 place-items-center rounded-full bg-maroon text-gold">
          <CircleCheck className="h-8 w-8" />
        </span>
        <h3 className="mt-6 font-heading text-2xl font-semibold text-maroon-deep">Thank you!</h3>
        <p className="mt-3 max-w-sm text-sm leading-7 text-ink/70">
          {CONTACT_FORM_ENDPOINT
            ? 'Your message has been sent. Our team will reply to your email.'
            : 'Your email app should now open with your message. Just press send.'}
        </p>
        <button
          type="button"
          onClick={() => setState('idle')}
          className="mt-6 text-sm font-semibold text-maroon hover:text-maroon-deep"
        >
          Send another message
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-[2rem] border border-gold/40 bg-white p-6 sm:p-9">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm font-medium text-ink/80">
          Full name *
          <input name="name" required value={form.name} onChange={update} autoComplete="name" className={fieldClass} placeholder="Your name" />
        </label>
        <label className="block text-sm font-medium text-ink/80">
          Email *
          <input name="email" type="email" required value={form.email} onChange={update} autoComplete="email" className={fieldClass} placeholder="you@example.com" />
        </label>
        <label className="block text-sm font-medium text-ink/80">
          Mobile number
          <input name="phone" type="tel" value={form.phone} onChange={update} autoComplete="tel" className={fieldClass} placeholder="Optional" />
        </label>
        <label className="block text-sm font-medium text-ink/80">
          Topic
          <select name="topic" value={form.topic} onChange={update} className={fieldClass}>
            {topics.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </label>
        <label className="block text-sm font-medium text-ink/80 sm:col-span-2">
          Message *
          <textarea
            name="message"
            required
            rows={5}
            value={form.message}
            onChange={update}
            className={`${fieldClass} resize-y`}
            placeholder="How can we help? If it's about a member, include their profile name or ID."
          />
        </label>
      </div>

      {state === 'error' && (
        <p className="mt-5 flex items-start gap-2 rounded-xl bg-maroon/5 p-3 text-sm text-maroon" role="alert">
          <TriangleAlert className="mt-0.5 h-4 w-4 shrink-0" />
          Sorry, your message could not be sent. Please try again or email {SUPPORT_EMAIL}.
        </p>
      )}

      <div className="mt-7 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs leading-6 text-ink/55">
          Never share passwords, OTPs or bank details in this form.
        </p>
        <button type="submit" disabled={state === 'sending'} className={`${primaryBtn} disabled:opacity-60`}>
          {state === 'sending' ? (
            <LoaderCircle className="h-4 w-4 animate-spin" />
          ) : (
            <Send className="h-4 w-4" />
          )}
          {state === 'sending' ? 'Sending…' : 'Send message'}
        </button>
      </div>
    </form>
  )
}

function ContactSection() {
  return (
    <section id="contact" className="bg-ivory py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Contact Us"
          title="We're here"
          script="for your questions."
          text="Need help with your account, the app or a safety concern? Reach out and our team will get back to you."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[0.75fr_1.25fr]">
          <motion.div {...inView} variants={fadeUp} className="space-y-4">
            <a
              href={`mailto:${SUPPORT_EMAIL}`}
              className="group flex items-start gap-4 rounded-3xl border border-gold/40 bg-white p-6 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-maroon/10"
            >
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-maroon text-gold">
                <Mail className="h-5 w-5" />
              </span>
              <span className="min-w-0">
                <span className="block text-xs font-semibold uppercase tracking-wider text-gold">Email support</span>
                <span className="mt-1 block break-all font-medium text-maroon-deep">{SUPPORT_EMAIL}</span>
              </span>
            </a>

            {SUPPORT_PHONE && (
              <a
                href={`tel:${SUPPORT_PHONE.replace(/\s/g, '')}`}
                className="group flex items-start gap-4 rounded-3xl border border-gold/40 bg-white p-6 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-maroon/10"
              >
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-maroon text-gold">
                  <Phone className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-xs font-semibold uppercase tracking-wider text-gold">Call us</span>
                  <span className="mt-1 block font-medium text-maroon-deep">{SUPPORT_PHONE}</span>
                </span>
              </a>
            )}

            <div className="rounded-3xl bg-linear-to-br from-maroon to-maroon-deep p-6 text-ivory">
              <p className="font-heading text-base font-semibold">Safety concern?</p>
              <p className="mt-2 text-sm leading-7 text-ivory/80">
                Block and report the member in the app first, then tell us what
                happened. If you are in danger, call <strong className="text-gold">112</strong>.
              </p>
            </div>
          </motion.div>

          <motion.div {...inView} variants={fadeUp} custom={0.1}>
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default function DownloadPage() {
  return (
    <>
      <PageHero
        icon={Download}
        label="Download & Contact"
        title="Get Humsafar"
        script="on your phone."
        text="Download the Humsafar – Daata app for Android or iPhone, and reach our team whenever you need help."
      />

      <section id="download-app" className="bg-white py-20 sm:py-24">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          {stores.map((item, i) => (
            <StoreCard key={item.id} item={item} index={i} />
          ))}
        </div>
      </section>

      <ContactSection />

      <section id="faq" className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <SectionHeading label="FAQs" title="Frequently asked" script="questions." />
          <motion.div {...inView} variants={fadeUp} className="mt-12">
            <FaqList items={faqs} />
          </motion.div>
        </div>
      </section>
    </>
  )
}
