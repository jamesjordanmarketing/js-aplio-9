import Image from 'next/image'
import aboutImage from '@/public/images/home-7-img/aboutCrypto.png'
import aboutImageDark from '@/public/images/home-7-img/aboutCrypto-dark.png'
import aboutImageShape from '@/public/images/home-7-img/aboutCrypto-shape.png'
import aboutImageShapeDark from '@/public/images/home-7-img/aboutCrypto-shape-dark.png'
import TabContent from './TabContent'

const AboutCrypto = () => {
  return (
    <section className=" relative overflow-hidden bg-white pb-150 dark:bg-dark-300 max-md:pb-20">
      <div className="container relative z-10">
        <div className="grid grid-cols-2 items-center gap-10 max-md:grid-cols-1 1xl:gap-x-24">
          <div className="relative flex items-center justify-end max-md:justify-center">
            <Image
              src={aboutImage}
              alt="crypto image"
              className="max-w-[250px] dark:hidden lg:max-w-[320px] xl:max-w-[420px]"
            />
            <Image
              src={aboutImageDark}
              alt="crypto image"
              className="hidden max-w-[250px]  dark:inline-block lg:max-w-[320px] xl:max-w-[420px]"
            />
            <div className="absolute bottom-8 left-0 right-auto top-auto max-w-[180px] md:max-w-[250px] xl:max-w-[344px] ">
              <Image src={aboutImageShape} alt="crypto image" className="dark:hidden" />
              <Image src={aboutImageShapeDark} alt="crypto image" className="hidden dark:inline-block " />
            </div>
          </div>
          <div>
            <p className="section-tagline">ABOUT</p>
            <h2 className="mb-8 max-md:mb-4">Crypto is the premier crowdsale service!</h2>
            <TabContent />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutCrypto
