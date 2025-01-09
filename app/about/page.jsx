import AboutCoreValue from '@/components/about/AboutCoreValue'
import AboutDetails from '@/components/about/AboutDetails'
import Footer from '@/components/footer/Footer'
import SecondaryNavbar from '@/components/navbar/SecondaryNavbar'
import CallToAction from '@/components/shared/CallToAction'
import Counter from '@/components/shared/Counter'
import PageHero from '@/components/shared/PageHero'
import PaymentFeatures from '@/components/shared/PaymentFeatures'
import TeamMembers from '@/components/shared/TeamMembers'
import TestimonialSlider from '@/components/shared/TestimonialSlider'
import AboutFeature from '@/data/aboutFeaturesData'

export const metadata = {
  title: 'About',
}
const About = () => {
  const { AboutFeaturesData } = AboutFeature
  return (
    <>
      <SecondaryNavbar />
      <main>
        <PageHero
          subtitle="ABOUT COMPANY"
          title="The future of business is being <br> shaped by aplio"
          paragraph="Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. It's not Latin, though it looks like it"
        />
        <AboutDetails />
        <PaymentFeatures
          features={AboutFeaturesData}
          sectionTag={'OUR VALUE'}
          sectionTitle={'Our business is steered by our core values'}
          className={'relative bg-white py-150 dark:bg-dark-300 max-md:overflow-hidden max-md:py-25'}
        />
        <AboutCoreValue />
        <TestimonialSlider />
        <Counter />
        <TeamMembers />
        <CallToAction title="Start your best payment experience now!" />
      </main>
      <Footer />
    </>
  )
}

export default About
