import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import React from 'react'
export const aiStartData = [
  {
    id: 1,
    title: 'Create a complete website with content and images.',
    description:
      'Whether youre building a site from the ground up or giving an old one a makeover, our tools will elevate your process. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate modi velit voluptatum nostrum quae nesciunt assumenda explicabo numquam! Illo, labore quia reiciendis ullam commodi sint molestiae maiores facilis voluptatem reprehenderit!',
    listItem: [
      {
        itemName: 'Create and launch without any coding required.',
      },
      {
        itemName: 'Get straight to business and boost your sales.',
      },
      {
        itemName: 'We drive rapid growth through digital innovation.',
      },
      {
        itemName: 'We understand the needs of your business.',
      },
    ],
    isFeatured: true,
  },
  {
    id: 2,
    title: 'User-friendly website builder',
    description:
      'Tailor every element of your website with ease. Our intuitive interface empowers you to create a unique online presence.',
    imgLight: '/images/home-8-img/getstart-1.png',
    imgDark: '/images/home-8-img/getstart-1-dark.png',
    isFeatured: false,
  },
  {
    id: 3,
    title: 'AI-powered content generation',
    description:
      'Generates compelling text and source captivating images, providing you with everything you need in minutes.',
    imgLight: '/images/home-8-img/getstart-2.png',
    imgDark: '/images/home-8-img/getstart-2-dark.png',
    isFeatured: false,
  },
]
const GetStart = () => {
  return (
    <div className="relative pb-150 max-lg:overflow-hidden">
      <div className="absolute left-1/2 top-1/2 -z-10 h-[550px] w-full -translate-x-1/2 -translate-y-1/2  bg-[url('/images/hero-gradient.png')] bg-cover bg-center bg-no-repeat opacity-70 md:hidden"></div>
      <div className="container relative">
        <div className="mb-12 text-center">
          <p className="section-tagline">Get Started</p>
          <h2 className="mb-8">Design your pixel-perfect website.</h2>
          <p className="mx-auto max-w-[520px]">
            We provide everything you need to create websites. Expand your customer base, save time and money, and
            increase sales.
          </p>
        </div>
      </div>
      <div className="container relative">
        <div className="absolute left-1/2 top-1/2 -z-10 flex -translate-x-1/2 -translate-y-1/2 max-md:hidden max-md:flex-col ">
          <div className="rounded-full bg-primary-200/20  blur-[145px] max-1xl:h-[335px]  max-1xl:w-[335px] 1xl:h-[442px] 1xl:w-[442px]"></div>
          <div className="-ml-[170px] rounded-full  bg-primary-200/25 blur-[145px]  max-1xl:h-[335px] max-1xl:w-[335px] max-md:ml-0 1xl:h-[442px] 1xl:w-[442px]"></div>
          <div className="-ml-[170px] rounded-full  bg-primary-200/20 blur-[145px]  max-1xl:h-[335px] max-1xl:w-[335px] max-md:ml-0 1xl:h-[442px] 1xl:w-[442px]"></div>
        </div>
        <div className="grid grid-cols-12 items-center gap-y-8 md:gap-x-8 ">
          {aiStartData?.map((items) =>
            items.isFeatured ? (
              <div className="col-span-12 rounded-medium bg-white p-2.5 shadow-nav dark:bg-dark-200" key={items.id}>
                <div className="rounded border border-dashed border-gray-100 p-10 dark:border-borderColor-dark max-lg:p-5">
                  <div className="grid grid-cols-12 items-center gap-6">
                    <div className="col-span-12 md:col-span-6 1xl:pr-20">
                      <h3 className="mb-8 leading-8">{items.title}</h3>
                      <p>{items.description}</p>
                    </div>
                    <div className="col-span-12 md:col-span-6">
                      <ul className="">
                        {items.listItem.map((item, index) => (
                          <li
                            className=" mb-5 flex items-center gap-3.5 rounded-lg border border-dashed border-gray-100 p-2.5 last:mb-0 dark:border-borderColor-dark"
                            key={index}>
                            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded bg-primary-100 dark:bg-dark-300">
                              <i className="fa-solid fa-check text-primary dark:text-primary"></i>
                              <FontAwesomeIcon icon={faCheck} />
                            </div>

                            <p>{item.itemName}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div
                className="col-span-12 rounded-medium bg-white p-2.5 shadow-nav dark:bg-dark-200 sm:col-span-6 "
                key={items.id}>
                <div className=" rounded border border-dashed border-gray-100 p-10 dark:border-borderColor-dark max-lg:p-5">
                  <div className="mb-6 text-center">
                    <h3 className="mb-2.5 leading-8">{items.title}</h3>
                    <p className="mb-6">{items.description}</p>
                  </div>
                  <div className="">
                    <Image
                      src={items.imgLight}
                      alt="image"
                      width={450}
                      height={350}
                      className="inline-block w-full rounded-lg dark:hidden"
                    />
                    <Image
                      src={items.imgDark}
                      alt="image"
                      width={450}
                      height={350}
                      className="hidden w-full rounded-lg dark:inline-block"
                    />
                  </div>
                </div>
              </div>
            ),
          )}
        </div>
      </div>
    </div>
  )
}

export default GetStart
