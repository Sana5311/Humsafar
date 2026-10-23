import { Link } from 'react-router-dom'
import { ArrowRight, Compass } from 'lucide-react'
import { PageHero } from '../components/ui'
import { primaryBtn } from '../lib/site'

export default function NotFoundPage() {
  return (
    <PageHero
      icon={Compass}
      label="Page not found"
      title="This page isn’t here"
      script="yet."
      text="The page you are looking for may have moved or is still being prepared."
    >
      <Link to="/" className={`${primaryBtn} mt-9`}>
        Back to Home
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </Link>
    </PageHero>
  )
}
