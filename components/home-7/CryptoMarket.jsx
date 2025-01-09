import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
export const cryptoMarketItems = [
  {
    id: 1,
    title: 'Cryptocurrency Market',
    description:
      'he concept of cryptocurrency is born when an anonymous individual or group known as Satoshi Nakamoto publishes the Bitcoin whitepaper titled "Bitcoin: A Peer to Peer Electronic Cash System."',
    link: '/sales',
    imgLight: '/images/home-7-img/crypto-market-1.png',
    imgDark: '/images/home-7-img/crypto-market-1-dark.png',
    isFeatured: true,
  },
  {
    id: 2,
    title: 'Bitcoin source',
    description: 'Bitcoin was created by an unknown person or group of people using the pseudonym Satoshi Nakamoto.',
    link: '/finance-analyse',
    imgLight: '/images/home-7-img/crypto-market-2.png',
    imgDark: '/images/home-7-img/crypto-market-2-dark.png',
    isFeatured: false,
  },
  {
    id: 3,
    title: 'Crypto currencies',
    description: 'Cryptocurrencies are digital or virtual currencies that use cryptography for security.',
    link: '/investment-bank',
    imgLight: '/images/home-7-img/crypto-market-3.png',
    imgDark: '/images/home-7-img/crypto-market-3-dark.png',
    isFeatured: false,
  },
  {
    id: 4,
    title: 'Market charts',
    description:
      'Market charts are representations of data that track the performance of financial or commodities over time.',
    link: '/investment-bank',
    imgLight: '/images/home-7-img/crypto-market-4.png',
    imgDark: '/images/home-7-img/crypto-market-4-dark.png',
    isFeatured: false,
  },
]
const CryptoMarket = () => {
  return (
    <div className="relative pb-150">
      <div className="absolute left-1/2 top-1/2 -z-10 h-[550px] w-full -translate-x-1/2 -translate-y-1/2   bg-[url('/images/hero-gradient.png')] bg-cover bg-center bg-no-repeat opacity-70 md:hidden"></div>
      <div className="container relative">
        <div className="absolute left-1/2 top-1/2 -z-10 flex -translate-x-1/2 -translate-y-1/2 max-md:hidden max-md:flex-col ">
          <div className="rounded-full bg-primary-200/20  blur-[145px] max-1xl:h-[335px]  max-1xl:w-[335px] 1xl:h-[442px] 1xl:w-[442px]"></div>
          <div className="-ml-[170px] rounded-full  bg-primary-200/25 blur-[145px]  max-1xl:h-[335px] max-1xl:w-[335px] max-md:ml-0 1xl:h-[442px] 1xl:w-[442px]"></div>
          <div className="-ml-[170px] rounded-full  bg-primary-200/20 blur-[145px]  max-1xl:h-[335px] max-1xl:w-[335px] max-md:ml-0 1xl:h-[442px] 1xl:w-[442px]"></div>
        </div>
        <div className="cryptoMarketItems grid grid-cols-12 gap-8 max-xs:gap-x-0 max-xs:gap-y-8 [&>*:nth-child(2)]:sm:col-span-12 [&>*:nth-child(2)]:lg:col-span-4">
          {cryptoMarketItems.map((items) =>
            items.isFeatured ? (
              <div className="col-span-12 rounded-medium bg-white p-2.5 shadow-nav dark:bg-dark-200" key={items.id}>
                <div className="rounded border border-dashed border-gray-100 p-10 dark:border-borderColor-dark max-lg:p-5 ">
                  <div className="grid grid-cols-12 gap-6 ">
                    <div className="col-span-12 md:col-span-6 1xl:col-span-7 1xl:pr-20">
                      <h3 className="mb-8 leading-8">{items.title}</h3>
                      <p className="mb-8">{items.description}</p>
                      <Link href={items.link} className="btn-outline btn-sm">
                        Read More
                      </Link>
                    </div>
                    <div className="col-span-12 md:col-span-6 1xl:col-span-5">
                      <Image
                        src={items.imgLight}
                        width={480}
                        height={222}
                        alt="image"
                        className="inline-block w-full rounded-lg dark:hidden max-lg:h-full"
                      />
                      <Image
                        src={items.imgDark}
                        width={480}
                        height={222}
                        alt="image"
                        className="hidden w-full rounded-lg dark:inline-block max-lg:h-full"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div
                className="col-span-12 rounded-medium  bg-white p-2.5 shadow-nav dark:bg-dark-200 sm:col-span-6 lg:col-span-4"
                key={items.id}>
                <div className="flex h-full flex-col rounded border border-dashed border-gray-100 p-10 dark:border-borderColor-dark max-lg:p-5">
                  <div className="cryptoMarketItems-image">
                    <Image
                      src={items.imgLight}
                      alt="image"
                      width={307}
                      height={200}
                      className="inline-block w-full rounded-lg dark:hidden"
                    />
                    <Image
                      src={items.imgDark}
                      alt="image"
                      width={307}
                      height={200}
                      className="hidden w-full rounded-lg dark:inline-block"
                    />
                  </div>
                  <div className="">
                    <h3 className="mb-2.5 leading-8">{items.title}</h3>
                    <p className="mb-6">{items.description}</p>
                    <Link href={items.link} className="btn-sm btn-outline ">
                      Read More
                    </Link>
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

export default CryptoMarket
