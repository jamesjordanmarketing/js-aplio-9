import Link from 'next/link'
import FadeUpAnimation from '@/components/animations/FadeUpAnimation'
import SecondaryNavbar from '@/components/navbar/SecondaryNavbar'
import Footer from '@/components/footer/Footer'

export const metadata = {
  title: '404 || Not Found',
}

const NotFound = () => {
  return (
    <>
      <SecondaryNavbar />
      <main className="mb-150 pt-[200px]">
        <FadeUpAnimation className="container relative">
          <div className="mx-auto max-w-[700px] text-center">
            <h1 className="from-0to-primary/0 bg-gradient-to-b from-primary to-90% bg-clip-text text-[140px] font-bold leading-[1] text-transparent dark:text-transparent">
              404
            </h1>
            <p className="section-tagline -mt-16">Error</p>
            <h2 className="mb-9 text-[64px] font-bold leading-[1.22] ">
              Ooops! <br />
              Page Not Found
            </h2>
            <p className="mb-8 text-xl">
              This page doesn’t exist or was removed! <br />
              We suggest you go back to home.
            </p>
            <Link href="/" className="btn">
              Go Back-Home
            </Link>
          </div>
        </FadeUpAnimation>
      </main>
      <Footer />
    </>
  )
}

export default NotFound
