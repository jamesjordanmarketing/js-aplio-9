import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
export const RobustFeaturesData = [
  {
    id: 1,
    title: 'Integrate and synchronize',
    iconLight: '/images/home-8-img/ai-feature-1.svg',
    iconDark: '/images/home-8-img/ai-feature-1-dark.svg',
    desc: 'The prevailing view asumed lorem ipsum was born as nonsense text.',
  },
  {
    id: 2,
    title: 'Personalize your site',
    iconLight: '/images/home-8-img/ai-feature-2.svg',
    iconDark: '/images/home-8-img/ai-feature-2-dark.svg',
    desc: 'The prevailing view asumed lorem ipsum was born as nonsense text.',
  },
  {
    id: 3,
    title: 'Enhance and automate',
    iconLight: '/images/home-8-img/ai-feature-3.svg',
    iconDark: '/images/home-8-img/ai-feature-3-dark.svg',
    desc: 'The prevailing view asumed lorem ipsum was born as nonsense text.',
  },
  {
    id: 4,
    title: 'AI Companion',
    iconLight: '/images/home-8-img/ai-feature-4.svg',
    iconDark: '/images/home-8-img/ai-feature-4-dark.svg',
    desc: 'The prevailing view asumed lorem ipsum was born as nonsense text.',
  },
]
const RubustFeature = () => {
  return (
    <section className="relative max-lg:overflow-hidden">
      <div className="absolute left-0 right-0 top-0 h-full w-full bg-[url('/images/core-gradient.png')] bg-[length:600px_1100px] bg-center bg-no-repeat opacity-70 md:hidden"></div>
      <div className="container">
        <div className="relative z-10">
          <div className="grid grid-cols-12 items-center">
            <div className="md:sol-span-5 col-span-12 lg:col-span-4 1xl:pr-5">
              <div className="mb-12">
                <p className="section-tagline">Robust Features</p>

                <h2 className="mb-8">Simplify operations for your business.</h2>
                <p className="mb-8">
                  With concepts in mind, we carefully design and perfect every detail to match your vision and goals.
                </p>
                <Link href="/services" className="btn btn-sm">
                  Read More
                </Link>
              </div>
            </div>
            <div className="md:sol-span-7 relative z-10 col-span-12 lg:col-span-8">
              <div className="absolute left-1/2 top-1/2 -z-10 flex -translate-x-1/2 -translate-y-1/2 max-md:hidden max-md:flex-col">
                <div className="rounded-full bg-primary-200/20  blur-[145px] max-1xl:h-[335px]  max-1xl:w-[335px] 1xl:h-[442px] 1xl:w-[442px]"></div>
                <div className="-ml-[170px] rounded-full  bg-primary-200/25 blur-[145px]  max-1xl:h-[335px] max-1xl:w-[335px] max-md:ml-0 1xl:h-[442px] 1xl:w-[442px]"></div>
                <div className="-ml-[170px] rounded-full  bg-primary-200/20 blur-[145px]  max-1xl:h-[335px] max-1xl:w-[335px] max-md:ml-0 1xl:h-[442px] 1xl:w-[442px]"></div>
              </div>
              <div className="relative flex  flex-col [&>*:not(:last-child)]:after:absolute [&>*:not(:last-child)]:after:bottom-0 [&>*:not(:last-child)]:after:h-0.5 [&>*:not(:last-child)]:after:w-full [&>*:not(:last-child)]:after:overflow-hidden [&>*:not(:last-child)]:after:content-[url('/images/home-8-img/seperator.png')] dark:[&>*:not(:last-child)]:after:content-[url('/images/home-8-img/seperator-dark.png')] max-lg:[&>*:not(:last-child)]:after:hidden">
                <div className="relative grid grid-cols-2 max-lg:grid-cols-1 [&>*:nth-child(2n+1)]:before:absolute [&>*:nth-child(2n+1)]:before:left-0 [&>*:nth-child(2n+1)]:before:top-1/2 [&>*:nth-child(2n+1)]:before:h-full [&>*:nth-child(2n+1)]:before:w-[1px] [&>*:nth-child(2n+1)]:before:-translate-y-1/2 [&>*:nth-child(2n+1)]:before:content-[url('/images/payment/coreborder-right.svg')] dark:[&>*:nth-child(2n+1)]:before:content-[url('/images/payment/coreborder-right-dark.svg')] max-lg:[&>*:nth-child(2n+1)]:before:hidden">
                  {RobustFeaturesData.slice(0, 2).map((items) => (
                    <div
                      className=" ]  group relative px-0 py-12 after:absolute after:overflow-hidden max-lg:top-auto max-lg:after:bottom-0 max-lg:after:left-1/2 max-lg:after:h-[1px] max-lg:after:w-full max-lg:after:-translate-x-1/2 max-lg:after:content-[url('/images/payment/coreborder-bottom-mobile.svg')] dark:max-lg:after:content-[url('/images/payment/coreborder-bottom-mobile-dark.svg')]  lg:px-12 lg:after:right-0 lg:after:top-1/2 lg:after:h-full lg:after:w-[1px] lg:after:-translate-y-1/2 lg:after:content-[url('/images/payment/coreborder-right.svg')] lg:dark:after:content-[url('/images/payment/coreborder-right-dark.svg')]"
                      key={items.id}>
                      <Image
                        src={items.iconLight}
                        alt="ai logo"
                        width={40}
                        height={40}
                        className="mb-6 inline-block dark:hidden"
                      />
                      <Image
                        src={items.iconDark}
                        alt="ai logo"
                        width={40}
                        height={40}
                        className="mb-6 hidden dark:inline-block"
                      />
                      <h3 className="relative mb-2.5">{items.title}</h3>
                      <p>{items.desc}</p>
                    </div>
                  ))}
                </div>
                <div className="relative grid grid-cols-2 max-lg:grid-cols-1 [&>*:nth-child(2n+1)]:before:absolute [&>*:nth-child(2n+1)]:before:left-0 [&>*:nth-child(2n+1)]:before:top-1/2 [&>*:nth-child(2n+1)]:before:h-full [&>*:nth-child(2n+1)]:before:w-[1px] [&>*:nth-child(2n+1)]:before:-translate-y-1/2 [&>*:nth-child(2n+1)]:before:content-[url('/images/payment/coreborder-right.svg')] dark:[&>*:nth-child(2n+1)]:before:content-[url('/images/payment/coreborder-right-dark.svg')] max-lg:[&>*:nth-child(2n+1)]:before:hidden [&>*:nth-row(n+2)]:mb-32 ">
                  {RobustFeaturesData.slice(2, 4).map((items) => (
                    <div
                      className=" group  relative px-0 py-12 after:absolute after:overflow-hidden max-lg:top-auto max-lg:after:bottom-0 max-lg:after:left-1/2 max-lg:after:h-[1px] max-lg:after:w-full max-lg:after:-translate-x-1/2 max-lg:after:content-[url('/images/payment/coreborder-bottom-mobile.svg')] dark:max-lg:after:content-[url('/images/payment/coreborder-bottom-mobile-dark.svg')] lg:px-12  lg:after:right-0 lg:after:top-1/2 lg:after:h-full lg:after:w-[1px] lg:after:-translate-y-1/2 lg:after:content-[url('/images/payment/coreborder-right.svg')] lg:dark:after:content-[url('/images/payment/coreborder-right-dark.svg')] "
                      key={items.id}>
                      <Image
                        src={items.iconLight}
                        alt="ai logo"
                        width={40}
                        height={40}
                        className="mb-6 inline-block dark:hidden"
                      />
                      <Image
                        src={items.iconDark}
                        alt="ai logo"
                        width={40}
                        height={40}
                        className="mb-6 hidden dark:inline-block"
                      />
                      <h3 className="relative mb-2.5">{items.title}</h3>
                      <p>{items.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RubustFeature
