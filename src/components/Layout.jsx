import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Download, Heart, Mail, Menu, Phone, X } from 'lucide-react'
import { StoreButtons } from './ui'
import {
  SUPPORT_EMAIL,
  SUPPORT_PHONE,
  footerColumns,
  navLinks,
  primaryBtn,
} from '../lib/site'

/* ------------------------------------------------------------------
   Brand mark
------------------------------------------------------------------- */
export function Brand({ light = false }) {
  return (
    <Link to="/" className="inline-flex shrink-0 items-center gap-3" aria-label="Humsafar home">
      <span
        className={`grid h-11 w-11 place-items-center rounded-full border ${
          light ? 'border-gold/60 bg-maroon-deep text-gold' : 'border-gold/50 bg-maroon text-gold'
        }`}
      >
        <Heart className="h-5 w-5" fill="currentColor" strokeWidth={1.5} />
      </span>
      <span className="leading-none">
        <strong
          className={`block font-heading text-xl font-semibold tracking-wide ${
            light ? 'text-ivory' : 'text-maroon'
          }`}
        >
          Humsafar
        </strong>
      </span>
    </Link>
  )
}

/* ------------------------------------------------------------------
   Scrolls to top on page change, or to #section when a hash is given
------------------------------------------------------------------- */
export function ScrollManager() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      // the page may still be loading, so keep looking for the section briefly
      const id = decodeURIComponent(hash.slice(1))
      let tries = 0
      const timer = setInterval(() => {
        const el = document.getElementById(id)
        if (el || ++tries > 40) {
          clearInterval(timer)
          el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }, 50)
      return () => clearInterval(timer)
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [pathname, hash])

  return null
}

/* ------------------------------------------------------------------
   Navbar
------------------------------------------------------------------- */
export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()

  // close the mobile menu whenever the page changes
  const [lastPath, setLastPath] = useState(pathname)
  if (lastPath !== pathname) {
    setLastPath(pathname)
    setOpen(false)
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const desktopLink = ({ isActive }) =>
    `relative whitespace-nowrap text-sm transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-px after:bg-gold after:transition-all after:duration-300 hover:text-maroon hover:after:w-full ${
      isActive ? 'font-medium text-maroon after:w-full' : 'text-ink/80 after:w-0'
    }`

  const mobileLink = ({ isActive }) =>
    `rounded-lg px-3 py-3 text-sm hover:bg-maroon/5 hover:text-maroon ${
      isActive ? 'bg-maroon/5 font-medium text-maroon' : 'text-ink/80'
    }`

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ${
        scrolled || open
          ? 'border-gold/30 bg-ivory/95 shadow-sm backdrop-blur-md'
          : 'border-transparent bg-ivory'
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-3 px-4 sm:gap-6 sm:px-6 lg:px-8">
        <Brand />

        <nav className="hidden items-center gap-6 lg:flex xl:gap-8" aria-label="Main">
          {navLinks.map((link) => (
            <NavLink key={link.to} to={link.to} end={link.to === '/'} className={desktopLink}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to="/download"
            className={`${primaryBtn} min-h-10! gap-1.5! px-4! text-xs! sm:min-h-11! sm:px-6! sm:text-sm!`}
          >
            <Download className="hidden h-4 w-4 sm:block" />
            Download App
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="grid h-11 w-11 place-items-center rounded-full border border-gold/50 text-maroon lg:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="overflow-hidden border-t border-gold/30 bg-ivory lg:hidden"
            aria-label="Mobile"
          >
            <div className="flex flex-col gap-1 px-4 py-4">
              {navLinks.map((link) => (
                <NavLink key={link.to} to={link.to} end={link.to === '/'} className={mobileLink}>
                  {link.label}
                </NavLink>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}

/* ------------------------------------------------------------------
   Footer
------------------------------------------------------------------- */
export function Footer() {
  return (
    <footer className="bg-ink text-ivory">
      <div className="mx-auto max-w-7xl px-4 pb-8 pt-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_2fr]">
          <div>
            <Brand light />
            <p className="mt-5 font-hand text-xl text-gold">
              Every beautiful story begins with a connection.
            </p>
            <p className="mt-3 max-w-sm text-sm leading-7 text-ivory/65">
              A marriage-first matchmaking app for people who are ready to find a
              life partner.
            </p>
            <div className="mt-6">
              <StoreButtons light compact />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {footerColumns.map((col) => (
              <div key={col.title}>
                <h3 className="font-heading text-sm font-semibold tracking-wider text-gold">
                  {col.title}
                </h3>
                <ul className="mt-4 space-y-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link to={link.to} className="text-sm text-ivory/70 transition-colors hover:text-gold">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="col-span-2 sm:col-span-1">
              <h3 className="font-heading text-sm font-semibold tracking-wider text-gold">Contact</h3>
              <ul className="mt-4 space-y-3 text-sm text-ivory/70">
                <li>
                  <a
                    href={`mailto:${SUPPORT_EMAIL}`}
                    className="inline-flex items-start gap-2 break-all transition-colors hover:text-gold"
                  >
                    <Mail className="mt-0.5 h-4 w-4 shrink-0" />
                    {SUPPORT_EMAIL}
                  </a>
                </li>
                {SUPPORT_PHONE && (
                  <li>
                    <a
                      href={`tel:${SUPPORT_PHONE.replace(/\s/g, '')}`}
                      className="inline-flex items-center gap-2 transition-colors hover:text-gold"
                    >
                      <Phone className="h-4 w-4 shrink-0" />
                      {SUPPORT_PHONE}
                    </a>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-ivory/10 pt-6 text-xs text-ivory/50 sm:flex-row">
          <span>© {new Date().getFullYear()} Humsafar. All rights reserved.</span>
          <span className="inline-flex items-center gap-1.5">
            Made with <Heart className="h-3 w-3 text-gold" fill="currentColor" /> for meaningful marriages
          </span>
        </div>
      </div>
    </footer>
  )
}
