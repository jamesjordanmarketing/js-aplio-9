'use client'
import Link from 'next/link'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

const Integration = () => {
  const sliderItems = [
    {
      id: 1,
      image: 'images/figma.svg',
    },
    {
      id: 2,
      image: 'images/dropbox.svg',
    },
    {
      id: 3,
      image: 'images/twitter.svg',
    },
    {
      id: 4,
      image: 'images/slack.svg',
    },
    {
      id: 5,
      image: 'images/google-drive.svg',
    },
    {
      id: 6,
      image: 'images/asana.svg',
    },
    {
      id: 7,
      image: 'images/svelte.png',
    },
    {
      id: 8,
      image: 'images/notion.png',
    },
    {
      id: 9,
      image: 'images/snapchat.svg',
    },
    {
      id: 10,
      image: 'images/reddit.png',
    },
  ]
  return (
    <section className="bg-white pt-150  dark:bg-dark-300 max-md:pb-20">
      <div className="container relative z-10">
        <div className="mx-auto mb-10 max-w-[620px] text-center">
          <p className="section-tagline">Top Integration</p>

          <h2 className="mb-8">Make productivity easier with 50+ Integrations</h2>
          <p className="mb-10">
            Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. It&lsquo;s not Latin
            though it looks like nothing.
          </p>

          <Link href="/contact" className="btn-outline">
            Start Your Journey
          </Link>
        </div>
      </div>
      <div className="integration-slider relative overflow-hidden">
        <div className="integration-slider-shape"></div>
        <Swiper
          modules={[Autoplay]}
          loop={true}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 5,
            },
            1024: {
              slidesPerView: 9,
            },
          }}
          className="swiper container"
          id="integration">
          {sliderItems?.map((items) => (
            <SwiperSlide className="swiper-slide group !flex aspect-square !items-center" key={items.id}>
              <div className=" mx-auto aspect-square w-20 origin-center  scale-100 rounded-full bg-white p-2.5 shadow-box transition-transform duration-500 group-[.swiper-slide-active]:scale-150  group-[.swiper-slide-active]:transition-transform group-[.swiper-slide-active]:duration-500 dark:bg-dark-200">
                <div className="flex aspect-square items-center justify-center rounded-full border border-dashed border-gray-100 text-center dark:border-borderColor-dark">
                  <img src={items.image} alt="value image" className="inline-block h-8 w-8" />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default Integration
