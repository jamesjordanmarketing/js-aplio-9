import React from 'react'
import FadeUpOneByOneAnimation from '../animations/FadeUpOneByOneAnimation'
import Integrationist from '@/data/integrationData'
import Image from 'next/image'

const Integration = () => {
  const { IntegrationData } = Integrationist
  return (
    <section className="relative bg-white dark:bg-dark-300 max-lg:overflow-hidden max-md:overflow-hidden">
      <div className="absolute left-0 right-0 top-25 h-full w-full bg-[url('/images/service-bg.png')] bg-cover bg-center bg-no-repeat opacity-70  sm:hidden"></div>
      <div className="container ">
        <div className="mb-12">
          <p className="section-tagline max-lg:text-center">Top Integration</p>
          <div className="block max-lg:text-center lg:flex">
            <h2 className=" max-lg:mb-5">Connect with your preferred tools.</h2>
            <p className="mx-auto max-w-[520px] lg:ml-auto">
              We assist startups in standing out with exceptional messaging that effectively engages their audience.
            </p>
          </div>
        </div>

        <div className="relative z-10">
          <div className="absolute left-1/2 top-1/2 -z-10 flex -translate-x-1/2 -translate-y-1/2 max-sm:hidden">
            <div className="h-[330px] w-[330px] rounded-full bg-primary-200/20 blur-[145px] xl:h-[442px] xl:w-[442px] "></div>
            <div className="h-[330px] w-[330px] rounded-full bg-primary-200/25 blur-[145px] lg:-ml-[170px] xl:h-[442px] xl:w-[442px]"></div>
            <div className="lg-ml-[170px] h-[330px] w-[330px] rounded-full bg-primary-200/20 blur-[145px] xl:h-[442px] xl:w-[442px]"></div>
          </div>

          <div className="grid grid-cols-3  gap-8 max-lg:grid-cols-2 max-sm:grid-cols-1">
            {IntegrationData?.map((items, i) => (
              <FadeUpOneByOneAnimation
                i={i}
                className="h-full rounded border border-dashed border-gray-100 bg-white p-8 dark:border-borderColor-dark dark:bg-dark-200 max-lg:p-5 "
                key={items.id}>
                <Image src={items.image} alt="image" width={42} height={42} className="mb-6" />
                <h3 className="mb-2.5">{items.title}</h3>
                <p className="mb-6">{items.details}</p>
              </FadeUpOneByOneAnimation>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Integration
