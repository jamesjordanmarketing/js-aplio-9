import React from 'react'
import FadeUpOneByOneAnimation from '../animations/FadeUpOneByOneAnimation'
export const StepsData = [
  {
    id: 1,
    title: 'Sign up for a free account',
    details: 'Get started quickly by creating a free is of account with just your email address.',
  },
  {
    id: 2,
    title: 'Personalize and enhance',
    details: 'Discover our user-friendly customization tools. Designs, add your personal flair.',
  },
  {
    id: 3,
    title: 'Scale your business quickly',
    details: 'watching your vision come to life as a stunning digital masterpiece.',
  },
]
const Steps = () => {
  return (
    <section className="relative bg-white pb-150 dark:bg-dark-300 max-md:overflow-hidden max-md:pb-25">
      <div className="absolute left-0 right-0 top-25 h-full w-full bg-[url('/images/core-gradient.png')] bg-[length:600px_1000px] bg-center bg-no-repeat opacity-70 md:hidden"></div>
      <div className="container ">
        <div className="mx-auto mb-12  text-center">
          <p className="section-tagline">How it works</p>

          <h2 className="mb-8">Easy steps, endless possibilities</h2>
          <p>Armed with concepts, we carefully design and refine every detail to align with your vision and goals.</p>
        </div>

        <div className="relative z-10">
          <div className="absolute left-1/2 top-1/2 -z-10 flex -translate-x-1/2 -translate-y-1/2 max-md:hidden max-md:flex-col">
            <div className="rounded-full bg-primary-200/20  blur-[145px] max-1xl:h-[335px]  max-1xl:w-[335px] 1xl:h-[442px] 1xl:w-[442px]"></div>
            <div className="-ml-[170px] rounded-full  bg-primary-200/25 blur-[145px]  max-1xl:h-[335px] max-1xl:w-[335px] max-md:ml-0 1xl:h-[442px] 1xl:w-[442px]"></div>
            <div className="-ml-[170px] rounded-full  bg-primary-200/20 blur-[145px]  max-1xl:h-[335px] max-1xl:w-[335px] max-md:ml-0 1xl:h-[442px] 1xl:w-[442px]"></div>
          </div>
          <div className=" grid grid-cols-3 gap-8 max-md:grid-cols-1">
            {StepsData?.map((items, i) => (
              <FadeUpOneByOneAnimation
                i={i}
                key={items.id}
                className="rounded-medium bg-white p-2.5 shadow-box dark:bg-dark-200">
                <div className=" h-full rounded border border-dashed border-gray-100 p-10 text-center dark:border-borderColor-dark max-lg:p-5">
                  <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary shadow-box dark:bg-primary/5">
                    <div className="flex h-15 w-15 items-center justify-center rounded-full border border-dashed border-white dark:border-borderColor-dark">
                      <span className="font-jakarta_sans text-[36px] font-bold leading-normal">{items.id}</span>
                    </div>
                  </div>
                  <h3 className="mb-2.5">{items.title}</h3>
                  <p>{items.details}</p>
                </div>
              </FadeUpOneByOneAnimation>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Steps
