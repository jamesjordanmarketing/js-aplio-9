import Footer from '@/components/footer/Footer'
import SecondaryNavbar from '@/components/navbar/SecondaryNavbar'
import ServiceContent from '@/components/service/ServiceContent'
import MembersCounter from '@/components/shared/MembersCounter'
import NewsLetter from '@/components/shared/NewsLetter'
import Pricing from '@/components/shared/Pricing'
import ServiceList from '@/data/serviceData'

export async function generateMetadata({ params }) {
  return {
    title: params.slug,
  }
}

export async function generateStaticParams() {
  const { ServiceData } = ServiceList
  return ServiceData.map((item) => ({
    slug: item.slug,
  }))
}

const ServiceDetails = (props) => {
  const { ServiceData } = ServiceList
  const slug = props.params.slug
  const data = ServiceData.find((post) => post.slug === slug)

  return (
    <>
      <SecondaryNavbar />
      <main>
        <ServiceContent data={data} />
        <MembersCounter />
        <Pricing className={'pt-150 max-md:pt-20'} />
        <NewsLetter />
      </main>
      <Footer />
    </>
  )
}

export default ServiceDetails
