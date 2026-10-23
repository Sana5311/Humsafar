import { motion } from 'framer-motion'
import {
  Ban,
  Bell,
  Check,
  ChevronRight,
  EyeOff,
  Heart,
  LockKeyhole,
  MapPin,
  Pencil,
  Send,
  ShieldCheck,
  Sparkles,
  Trash2,
  X,
} from 'lucide-react'
import { appScreenshots } from '../data/content'
import { fadeUp, inView } from '../lib/site'

/* ==================================================================
   App preview screens, drawn in code.
   These are ILLUSTRATIVE. To show real app screens instead, add your
   screenshots to `appScreenshots` in src/data/content.js.
   ================================================================== */

function ScreenHeader({ title }) {
  return (
    <div className="flex items-center justify-between bg-maroon px-4 pb-3 pt-9 text-ivory">
      <span className="font-heading text-sm font-semibold tracking-wide">{title}</span>
      <Heart className="h-4 w-4 text-gold" fill="currentColor" />
    </div>
  )
}

function ProfileScreen() {
  return (
    <div className="flex h-full flex-col bg-ivory">
      <ScreenHeader title="My Profile" />
      <div className="p-3">
        <div className="flex items-center gap-3 rounded-2xl bg-white p-3 shadow-sm">
          <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-linear-to-br from-gold/60 to-maroon/60 font-heading text-lg font-semibold text-white">
            P
          </span>
          <div className="min-w-0 flex-1">
            <p className="text-sm font-semibold text-ink">Homa, 26</p>
            <p className="text-[10px] text-ink/60">Teacher · Aligarh</p>
            <span className="mt-1 inline-flex items-center gap-1 rounded-full bg-maroon/10 px-2 py-0.5 text-[9px] font-semibold text-maroon">
              <ShieldCheck className="h-3 w-3" /> Mobile verified
            </span>
          </div>
          <Pencil className="h-4 w-4 text-ink/40" />
        </div>

        <div className="mt-3 rounded-2xl bg-white p-3 shadow-sm">
          <div className="flex items-center justify-between text-[10px]">
            <span className="font-semibold text-ink">Profile complete</span>
            <span className="font-semibold text-maroon">80%</span>
          </div>
          <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-ivory">
            <div className="h-full w-4/5 rounded-full bg-linear-to-r from-maroon to-gold" />
          </div>
          <p className="mt-2 text-[9px] text-ink/55">Add family details to get better matches</p>
        </div>

        {[
          ['About me', 'Family-oriented, loves music and travel.'],
          ['Partner preferences', '27–32 · Andhra Pradesh, Telangana · Graduate'],
        ].map(([title, text]) => (
          <div key={title} className="mt-3 rounded-2xl bg-white p-3 shadow-sm">
            <p className="text-[10px] font-semibold uppercase tracking-wider text-gold">{title}</p>
            <p className="mt-1 text-[11px] leading-snug text-ink/75">{text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

function MatchScreen() {
  return (
    <div className="flex h-full flex-col bg-ivory">
      <ScreenHeader title="Matches" />
      <div className="flex-1 p-3">
        <div className="overflow-hidden rounded-2xl bg-white shadow-md">
          <div className="relative grid h-32 place-items-center bg-linear-to-br from-gold/40 via-maroon/30 to-maroon/60">
            <span className="grid h-16 w-16 place-items-center rounded-full bg-white/70 font-heading text-xl font-semibold text-maroon">
              A
            </span>
            <span className="absolute left-2 top-2 inline-flex items-center gap-1 rounded-full bg-white/90 px-2 py-0.5 text-[9px] font-semibold text-maroon">
              <ShieldCheck className="h-3 w-3" /> Verified
            </span>
            <span className="absolute bottom-2 right-2 inline-flex items-center gap-1 rounded-full bg-maroon/80 px-2 py-0.5 text-[9px] text-ivory">
              <EyeOff className="h-3 w-3" /> Photo private
            </span>
          </div>
          <div className="p-3">
            <p className="text-sm font-semibold text-ink">Aliya, 27</p>
            <p className="mt-0.5 flex items-center gap-1 text-[10px] text-ink/60">
              <MapPin className="h-3 w-3" /> Software Engineer · Hyderabad
            </p>
            <div className="mt-2 flex flex-wrap gap-1">
              {['Family-oriented', 'Vegetarian', 'Telugu'].map((t) => (
                <span key={t} className="rounded-full bg-ivory px-2 py-0.5 text-[9px] text-maroon">
                  {t}
                </span>
              ))}
            </div>
            <div className="mt-3 flex items-center gap-1.5 rounded-lg bg-gold/15 px-2 py-1.5 text-[10px] text-maroon-deep">
              <Sparkles className="h-3 w-3 text-gold" /> Matches 8 of your preferences
            </div>
          </div>
        </div>
        <div className="mt-3 grid grid-cols-[auto_1fr] gap-2">
          <span className="grid h-10 w-10 place-items-center rounded-full border border-ink/15 bg-white text-ink/60">
            <X className="h-4 w-4" />
          </span>
          <span className="inline-flex items-center justify-center gap-1.5 rounded-full bg-maroon text-xs font-medium text-ivory">
            <Heart className="h-3.5 w-3.5" fill="currentColor" /> Send Interest
          </span>
        </div>
      </div>
    </div>
  )
}

function InterestsScreen() {
  const people = [
    ['R', 'Ali Saqlain, 30', 'Engineer · Aliagrh'],
    ['K', 'Okasha, 29', 'Doctor · Chennai'],
    ['S', 'Sameer, 31', 'Architect · Bengaluru'],
  ]
  return (
    <div className="flex h-full flex-col bg-ivory">
      <ScreenHeader title="Interests" />
      <div className="flex gap-2 px-3 pt-3 text-[10px]">
        <span className="rounded-full bg-maroon px-3 py-1 text-ivory">Received</span>
        <span className="rounded-full bg-white px-3 py-1 text-ink/60">Sent</span>
        <span className="rounded-full bg-white px-3 py-1 text-ink/60">Accepted</span>
      </div>
      <div className="space-y-2 p-3">
        {people.map(([initial, name, meta]) => (
          <div key={name} className="rounded-xl bg-white p-2.5 shadow-sm">
            <div className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-linear-to-br from-gold/50 to-maroon/50 font-heading text-sm font-semibold text-white">
                {initial}
              </span>
              <div className="min-w-0">
                <p className="text-xs font-semibold text-ink">{name}</p>
                <p className="truncate text-[9px] text-ink/60">{meta}</p>
              </div>
            </div>
            <div className="mt-2 grid grid-cols-2 gap-1.5 text-[10px]">
              <span className="rounded-full bg-maroon py-1 text-center text-ivory">Accept</span>
              <span className="rounded-full border border-ink/15 py-1 text-center text-ink/60">Decline</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function ChatScreen() {
  return (
    <div className="flex h-full flex-col bg-ivory">
      <ScreenHeader title="Ali" />
      <div className="mx-3 mt-3 flex items-center gap-1.5 rounded-lg bg-white px-2.5 py-1.5 text-[9px] text-ink/70">
        <LockKeyhole className="h-3 w-3 text-maroon" />
        Private chat · your phone number stays hidden
      </div>
      <div className="flex-1 space-y-2 p-3 text-[10px] leading-snug">
        <p className="max-w-[78%] rounded-2xl rounded-tl-sm bg-white p-2.5 text-ink shadow-sm">
          Asslamualaikum! Thank you for accepting. I liked that family matters a lot to you too.
        </p>
        <p className="ml-auto max-w-[78%] rounded-2xl rounded-tr-sm bg-maroon p-2.5 text-ivory">
          Walaikumasslam! Yes, very much. Would you like our families to talk this weekend?
        </p>
        <p className="max-w-[78%] rounded-2xl rounded-tl-sm bg-white p-2.5 text-ink shadow-sm">
          That sounds lovely. Let&apos;s plan a video call first 😊
        </p>
        <p className="flex items-center justify-end gap-1 text-[9px] text-ink/50">
          <Check className="h-3 w-3" /> Seen
        </p>
      </div>
      <div className="m-3 flex items-center gap-2 rounded-full bg-white px-3 py-2 text-[10px] text-ink/40 shadow-sm">
        Type a message…
        <span className="ml-auto grid h-6 w-6 place-items-center rounded-full bg-maroon text-ivory">
          <Send className="h-3 w-3" />
        </span>
      </div>
    </div>
  )
}

function Toggle({ on }) {
  return (
    <span className={`relative h-4 w-7 shrink-0 rounded-full ${on ? 'bg-maroon' : 'bg-ink/20'}`}>
      <span className={`absolute top-0.5 h-3 w-3 rounded-full bg-white transition-all ${on ? 'left-3.5' : 'left-0.5'}`} />
    </span>
  )
}

function SettingsScreen() {
  const rows = [
    { label: 'Photo visibility', value: 'Accepted only' },
    { label: 'Show contact details', toggle: false },
    { label: 'Hide my profile', toggle: false },
    { label: 'Notifications', toggle: true, icon: Bell },
  ]
  return (
    <div className="flex h-full flex-col bg-ivory">
      <ScreenHeader title="Privacy & Settings" />
      <div className="p-3">
        <p className="px-1 text-[10px] font-semibold uppercase tracking-wider text-gold">Privacy</p>
        <div className="mt-2 divide-y divide-ivory overflow-hidden rounded-2xl bg-white shadow-sm">
          {rows.map((r) => (
            <div key={r.label} className="flex items-center justify-between gap-2 px-3 py-2.5 text-[11px] text-ink">
              <span>{r.label}</span>
              {'toggle' in r ? (
                <Toggle on={r.toggle} />
              ) : (
                <span className="inline-flex items-center gap-0.5 text-[10px] text-maroon">
                  {r.value} <ChevronRight className="h-3 w-3" />
                </span>
              )}
            </div>
          ))}
        </div>

        <p className="mt-4 px-1 text-[10px] font-semibold uppercase tracking-wider text-gold">Safety</p>
        <div className="mt-2 divide-y divide-ivory overflow-hidden rounded-2xl bg-white shadow-sm">
          <div className="flex items-center justify-between px-3 py-2.5 text-[11px] text-ink">
            <span className="inline-flex items-center gap-2">
              <Ban className="h-3.5 w-3.5 text-maroon" /> Blocked members
            </span>
            <ChevronRight className="h-3 w-3 text-ink/40" />
          </div>
          <div className="flex items-center justify-between px-3 py-2.5 text-[11px] text-ink">
            <span className="inline-flex items-center gap-2">
              <LockKeyhole className="h-3.5 w-3.5 text-maroon" /> Change password
            </span>
            <ChevronRight className="h-3 w-3 text-ink/40" />
          </div>
        </div>

        <div className="mt-4 flex items-center gap-2 rounded-2xl bg-white px-3 py-2.5 text-[11px] text-maroon shadow-sm">
          <Trash2 className="h-3.5 w-3.5" /> Delete account
        </div>
      </div>
    </div>
  )
}


const builtInScreens = [
  { key: 'profile', label: 'Profile', node: <ProfileScreen /> },
  { key: 'matches', label: 'Matches', node: <MatchScreen /> },
  { key: 'interests', label: 'Interests', node: <InterestsScreen /> },
  { key: 'chat', label: 'Private chat', node: <ChatScreen /> },
  { key: 'settings', label: 'Privacy settings', node: <SettingsScreen /> },
]

export function PhoneFrame({ children, className = '' }) {
  return (
    <div className={`relative rounded-[2.3rem] border border-ink/20 bg-ink p-2 shadow-2xl shadow-maroon/25 ${className}`}>
      <div className="absolute left-1/2 top-3.5 z-20 h-4 w-20 -translate-x-1/2 rounded-full bg-ink" />
      <div className="relative h-[500px] overflow-hidden rounded-[1.9rem] bg-ivory">{children}</div>
    </div>
  )
}

/* Row of phones: swipeable on mobile, a staggered row on desktop */
export function AppGallery() {
  const screens = appScreenshots.length
    ? appScreenshots.map((s) => ({
        key: s.src,
        label: s.label,
        node: <img src={s.src} alt={`${s.label} screen`} className="h-full w-full object-cover object-top" loading="lazy" />,
      }))
    : builtInScreens

  return (
    <div>
      <div className="-mx-4 flex snap-x snap-mandatory gap-6 overflow-x-auto px-4 pb-6 pt-4 [scrollbar-width:none] sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 xl:mx-0 xl:justify-center xl:gap-5 xl:overflow-visible xl:px-0 [&::-webkit-scrollbar]:hidden">
        {screens.map((s, i) => (
          <motion.figure
            key={s.key}
            {...inView}
            variants={fadeUp}
            custom={i * 0.08}
            className={`w-[230px] shrink-0 snap-center xl:w-[215px] ${i % 2 === 1 ? 'xl:mt-12' : ''}`}
          >
            <PhoneFrame>{s.node}</PhoneFrame>
            <figcaption className="mt-4 text-center font-heading text-sm font-semibold text-maroon-deep">
              {s.label}
            </figcaption>
          </motion.figure>
        ))}
      </div>
      {!appScreenshots.length && (
        <p className="mt-2 text-center text-xs text-ink/50">
          Illustrative preview. Sample names and details, not real members.
        </p>
      )}
    </div>
  )
}
