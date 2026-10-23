import { Suspense, lazy, useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { Footer, Navbar, ScrollManager } from './components/Layout'
import HomePage from './pages/HomePage'

// Other pages load only when visited, so the home page opens faster
const AboutPage = lazy(() => import('./pages/AboutPage'))
const HowItWorksPage = lazy(() => import('./pages/HowItWorksPage'))
const SafetyPage = lazy(() => import('./pages/SafetyPage'))
const DownloadPage = lazy(() => import('./pages/DownloadPage'))
const DeleteAccountPage = lazy(() => import('./pages/DeleteAccountPage'))
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'))

/* ------------------------------------------------------------------
   Pages. To add a new page: create it in src/pages, add it here,
   and add a link in navLinks (src/lib/site.js).
------------------------------------------------------------------- */
const pages = [
  { path: '/', element: <HomePage />, title: 'Humsafar| Find Your Life Partner' },
  { path: '/about', element: <AboutPage />, title: 'About Humsafar | Humsafar' },
  { path: '/how-it-works', element: <HowItWorksPage />, title: 'How It Works | Humsafar' },
  { path: '/safety', element: <SafetyPage />, title: 'Safety & Trust | Humsafar' },
  { path: '/download', element: <DownloadPage />, title: 'Download & Contact | Humsafar' },
  { path: '/delete-account', element: <DeleteAccountPage />, title: 'Delete Account | Humsafar' },
]

function PageTitle() {
  const { pathname } = useLocation()
  useEffect(() => {
    const path = pathname.replace(/\/+$/, '') || '/'
    const page = pages.find((p) => p.path === path)
    document.title = page ? page.title : 'Page not found | Humsafar'
  }, [pathname])
  return null
}

function App() {
  return (
    <div className="min-h-screen overflow-x-clip bg-ivory font-sans text-ink">
      <ScrollManager />
      <PageTitle />
      <Navbar />
      <main>
        <Suspense fallback={<div className="min-h-[70vh]" />}>
          <Routes>
            {pages.map((p) => (
              <Route key={p.path} path={p.path} element={p.element} />
            ))}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  )
}

export default App
