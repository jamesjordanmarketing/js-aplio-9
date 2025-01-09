import TestimonialList from '@/data/testimonial'
import Image from 'next/image'
import React from 'react'
import TestmonialBg from '../icons/TestmonialBg'
import FadeUpOneByOneAnimation from '../animations/FadeUpOneByOneAnimation'

const TestimonialV2 = () => {
  const { TestimonialData } = TestimonialList
  return (
    <section className=" relative overflow-hidden pb-25 pt-25">
      <div className="container relative">
        <div className="mx-auto mb-15 max-w-[550px] text-center">
          <p className="section-tagline">Testimonials</p>
          <h2>What our customer’s say about our company</h2>
        </div>
        <div className="relative z-10 ">
          <div className="absolute left-1/2 top-1/2 -z-10 -translate-x-1/2 -translate-y-1/2 ">
            <TestmonialBg />
          </div>
          <div className=" grid grid-cols-3 gap-8 max-lg:grid-cols-2 max-md:grid-cols-1 ">
            {TestimonialData.map((testimonial, i) => (
              <FadeUpOneByOneAnimation
                i={i}
                className="rounded-medium bg-white p-2.5 shadow-nav dark:bg-dark-200"
                key={testimonial.id}>
                <div className="h-full rounded border border-dashed border-gray-100 p-8 dark:border-borderColor-dark">
                  <div className="flex items-center pb-7 ">
                    <Image
                      src={testimonial.author.image}
                      alt="avatar"
                      className="mr-4 rounded-full"
                      width={56}
                      height={56}
                    />
                    <div className="block">
                      <h3 className="text-base font-semibold">{testimonial.author.name}</h3>
                      <p className="font-jakarta_sans text-sm  font-medium text-paragraph-light dark:text-[#A1A49D]">
                        {testimonial.author.designation}
                      </p>
                    </div>
                  </div>

                  <blockquote className="mb-7 italic leading-[1.75] text-paragraph dark:text-white">
                    &ldquo;{testimonial.testimonial}&rdquo;
                  </blockquote>
                  <div className="flex items-center justify-between border-t border-dashed border-gray-100 pt-7 dark:border-borderColor-dark">
                    <div>
                      <Image
                        src={testimonial.logoLight}
                        alt="image"
                        className="inline-block dark:hidden"
                        width={110}
                        height={35}
                      />
                      <Image
                        src={testimonial.logoDark}
                        alt="image"
                        className="hidden dark:inline-block"
                        width={110}
                        height={35}
                      />
                    </div>
                    <p className="text-sm text-paragraph-light dark:text-paragraph-light">{testimonial.date}</p>
                  </div>
                </div>
              </FadeUpOneByOneAnimation>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialV2
