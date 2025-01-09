'use client'
import { fadeUpAnimation, fadeFromLeftAnimation, fadeFromRightAnimation } from '@/data/animation'
import { motion } from 'framer-motion'
import { useRef } from 'react'
import useWhileInView from '@/hooks/useWhileInView'
import Image from 'next/image'
import cryptoCard from '@/public/images/home-7-img/service-card.png'
import cryptoScore from '@/public/images/home-7-img/service-score.png'
import cryptoScoreDark from '@/public/images/home-7-img/service-score-dark.png'
const Services = () => {
  const ref = useRef(null)
  const controlAnimation = useWhileInView(ref)
  return (
    <div className="relative pb-150 pt-150">
      <div className="absolute left-1/2 top-0 -z-10 h-full w-full -translate-x-1/2  bg-[url('/images/hero-gradient.png')] bg-cover bg-center bg-no-repeat opacity-70 md:hidden"></div>
      <div className="container relative">
        <div className=" mb-14 text-center">
          <p className="section-tagline mb-3">Our services</p>

          <h2 className="mb-12">
            Comprehensive Guide to Cryptocurrency Services <br />
            Aplio.
          </h2>
        </div>

        <div className="relative flex items-center gap-8 max-md:flex-col">
          <div className="absolute left-1/2 top-1/2 -z-10 flex -translate-x-1/2 -translate-y-1/2 max-md:hidden max-md:flex-col ">
            <div className="rounded-full bg-primary-200/20  blur-[145px] max-1xl:h-[335px]  max-1xl:w-[335px] 1xl:h-[442px] 1xl:w-[442px]"></div>
            <div className="-ml-[170px] rounded-full  bg-primary-200/25 blur-[145px]  max-1xl:h-[335px] max-1xl:w-[335px] max-md:ml-0 1xl:h-[442px] 1xl:w-[442px]"></div>
            <div className="-ml-[170px] rounded-full  bg-primary-200/20 blur-[145px]  max-1xl:h-[335px] max-1xl:w-[335px] max-md:ml-0 1xl:h-[442px] 1xl:w-[442px]"></div>
          </div>
          <motion.div
            className="w-[32%] max-md:w-full"
            initial="initial"
            ref={ref}
            animate={controlAnimation}
            variants={fadeFromRightAnimation}>
            <div className="mb-8 rounded-medium bg-white p-2.5 shadow-nav dark:bg-dark-200">
              <div className=" rounded border border-dashed border-gray-100 p-10 dark:border-borderColor-dark max-lg:p-5">
                <div className="mb-6 inline-block rounded-full bg-white p-2.5 shadow-nav dark:bg-dark-200  max-lg:p-2">
                  <div className="h-full rounded-full border border-dashed border-gray-100 p-5 dark:border-borderColor-dark max-lg:p-5">
                    <Image
                      src="/images/home-7-img/wallet.svg"
                      alt="account icon"
                      className="aspect-square w-[30px] dark:hidden"
                      width={30}
                      height={30}
                    />
                    <Image
                      src="/images/home-7-img/wallet-dark.svg"
                      alt="account icon"
                      className="hidden aspect-square  w-[30px] dark:inline-block"
                      width={30}
                      height={30}
                    />
                  </div>
                </div>
                <div className="mb-8">
                  <h3 className="mb-6 leading-8">Wallets</h3>
                  <p>Software Wallets: Coinbase Wallet, MetaMask, Trust Wallet.</p>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="mb-2.5 leading-8">10/24</h3>
                    <p>Use Strong Passwords</p>
                  </div>
                  <div>
                    <div className="relative size-[70px] shrink-0">
                      <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M70 35.0006C70 54.3306 54.33 70.0006 35 70.0006C15.67 70.0006 0 54.3306 0 35.0006C0 15.6706 15.67 0.000610352 35 0.000610352C54.33 0.000610352 70 15.6706 70 35.0006ZM7.6939 35.0006C7.6939 50.0813 19.9193 62.3067 35 62.3067C50.0807 62.3067 62.3061 50.0813 62.3061 35.0006C62.3061 19.9199 50.0807 7.69452 35 7.69452C19.9193 7.69452 7.6939 19.9199 7.6939 35.0006Z"
                          fill=""
                          className="fill-[#E8F0D8] dark:fill-[#2F3524]"
                        />
                        <path
                          d="M35 3.92036C35 1.75554 36.7605 -0.0220878 38.9117 0.219847C45.1582 0.922339 51.1265 3.29801 56.1704 7.12926C62.2592 11.7541 66.6659 18.2456 68.7171 25.6113C70.7682 32.9771 70.351 40.8119 67.529 47.9182C65.1913 53.805 61.3099 58.9235 56.3256 62.7535C54.609 64.0725 52.1831 63.4607 51.0642 61.6074C49.9453 59.7542 50.5633 57.365 52.2363 55.9912C55.7742 53.086 58.5378 49.3188 60.243 45.0248C62.4328 39.5103 62.7567 33.4304 61.1649 27.7144C59.5732 21.9985 56.1535 16.961 51.4286 13.3721C47.7494 10.5775 43.4365 8.78084 38.9062 8.12245C36.7639 7.8111 35 6.08518 35 3.92036Z"
                          fill=""
                          className="fill-primary"
                        />
                      </svg>
                      <h3 className=" absolute start-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 transform items-center text-base">
                        <span>40</span>%
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-medium bg-white p-2.5 shadow-nav dark:bg-dark-200">
              <div className="rounded border border-dashed border-gray-100 p-10  dark:border-borderColor-dark max-lg:p-5">
                <div className="mb-6 inline-block rounded-full bg-white p-2.5 shadow-nav dark:bg-dark-200  max-lg:p-2">
                  <div className="h-full rounded-full border border-dashed border-gray-100 p-5 dark:border-borderColor-dark max-lg:p-5">
                    <Image
                      src="/images/home-7-img/sales.svg"
                      alt="account icon"
                      className="aspect-square w-[30px] dark:hidden"
                      width={30}
                      height={30}
                    />
                    <Image
                      src="/images/home-7-img/sales-dark.svg"
                      alt="account icon"
                      className="hidden aspect-square w-[30px] dark:inline-block"
                      width={30}
                      height={30}
                    />
                  </div>
                </div>
                <div>
                  <h3 className="mb-6 leading-8">Crypto Lending</h3>
                  <p>Centralized Lending: Blockfi, Celsius Network, Nexo.</p>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="flex w-[36%] flex-col items-center justify-center max-md:w-full"
            initial="initial"
            ref={ref}
            animate={controlAnimation}
            variants={fadeUpAnimation}>
            <Image src={cryptoScore} alt="service-score" className="mb-8 max-w-full dark:hidden" />
            <Image src={cryptoScoreDark} alt="service-score" className="mb-12 hidden max-w-full  dark:inline-block" />

            <Image src={cryptoCard} alt="service-card" className="max-w-full" />
          </motion.div>
          <motion.div
            className="w-[32%] max-md:w-full"
            initial="initial"
            ref={ref}
            animate={controlAnimation}
            variants={fadeFromLeftAnimation}>
            <div className="mb-8 rounded-medium bg-white p-2.5 shadow-nav dark:bg-dark-200">
              <div className="rounded border border-dashed border-gray-100 p-10 dark:border-borderColor-dark max-lg:p-5">
                <div className="mb-6 inline-block rounded-full bg-white p-2.5 shadow-nav dark:bg-dark-200  max-lg:p-2">
                  <div className="h-full rounded-full border border-dashed border-gray-100 p-5 dark:border-borderColor-dark max-lg:p-5">
                    <Image
                      src="/images/home-7-img/exchange.svg"
                      alt="account icon"
                      className="aspect-square w-[30px] dark:hidden"
                      width={30}
                      height={30}
                    />
                    <Image
                      src="/images/home-7-img/exchange-dark.svg"
                      alt="account icon"
                      className="hidden aspect-square  w-[30px] dark:inline-block"
                      width={30}
                      height={30}
                    />
                  </div>
                </div>
                <div>
                  <h3 className="mb-6 leading-8">Exchanges</h3>
                  <p>Decentralized Exchanges: Uniswap, SushiSwap, PancakeSwap.</p>
                </div>
              </div>
            </div>
            <div className="rounded-medium bg-white p-2.5 shadow-nav dark:bg-dark-200 ">
              <div className="rounded border border-dashed border-gray-100 p-10  dark:border-borderColor-dark max-lg:p-5">
                <div className="mb-6 inline-block rounded-full bg-white p-2.5 shadow-nav dark:bg-dark-200  max-lg:p-2">
                  <div className="h-full rounded-full border border-dashed border-gray-100 p-5  dark:border-borderColor-dark max-lg:p-5">
                    <Image
                      src="/images/home-7-img/payment.svg"
                      alt="account icon"
                      className="aspect-square w-[30px] dark:hidden"
                      width={30}
                      height={30}
                    />
                    <Image
                      src="/images/home-7-img/payment-dark.svg"
                      alt="account icon"
                      className="hidden aspect-square  w-[30px] dark:inline-block"
                      width={30}
                      height={30}
                    />
                  </div>
                </div>
                <div className="mb-8">
                  <h3 className="mb-6 leading-8">Payment Services</h3>
                  <p>Crypto Payment Gateways: BitPay, CoinGate, Coinbase Commerce.</p>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="mb-2.5 leading-8">13/24</h3>
                    <p>Security Measures</p>
                  </div>
                  <div>
                    <div className="relative size-[70px] shrink-0">
                      <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M70 35.0018C70 54.3318 54.33 70.0018 35 70.0018C15.67 70.0018 0 54.3318 0 35.0018C0 15.6719 15.67 0.00183105 35 0.00183105C54.33 0.00183105 70 15.6719 70 35.0018ZM7.6939 35.0018C7.6939 50.0826 19.9193 62.3079 35 62.3079C50.0807 62.3079 62.3061 50.0826 62.3061 35.0018C62.3061 19.9211 50.0807 7.69574 35 7.69574C19.9193 7.69574 7.6939 19.9211 7.6939 35.0018Z"
                          className="fill-[#E8F0D8] dark:fill-[#2F3524]"
                        />
                        <path
                          d="M35 3.92158C35 1.75676 36.7604 -0.0208492 38.9116 0.221094C43.0933 0.691391 47.1669 1.91326 50.9327 3.83858C55.8652 6.36037 60.1286 10.017 63.3723 14.5077C66.6161 18.9984 68.7476 24.1949 69.5915 29.6699C70.4354 35.145 69.9677 40.7422 68.2267 46.0012C66.4858 51.2602 63.5213 56.0309 59.5772 59.9209C55.6331 63.8109 50.8219 66.7092 45.5393 68.3773C40.2567 70.0454 34.6536 70.4358 29.1908 69.5164C25.02 68.8144 21.0219 67.3642 17.3856 65.2464C15.515 64.1569 15.163 61.6801 16.4547 59.9428C17.7464 58.2056 20.1918 57.8731 22.0967 58.9016C24.7103 60.3126 27.5456 61.2897 30.492 61.7856C34.7312 62.4991 39.0793 62.1962 43.1787 60.9017C47.278 59.6072 51.0116 57.3581 54.0723 54.3394C57.133 51.3207 59.4334 47.6186 60.7844 43.5375C62.1354 39.4564 62.4984 35.1129 61.8435 30.8642C61.1886 26.6155 59.5345 22.5829 57.0173 19.0981C54.5001 15.6132 51.1917 12.7757 47.364 10.8187C44.7037 9.45859 41.8455 8.55087 38.9062 8.1237C36.7639 7.81235 35 6.0864 35 3.92158Z"
                          fill=""
                          className="fill-primary"
                        />
                      </svg>

                      <h3 className="absolute start-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 transform items-center text-base">
                        <span>60</span>%
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Services
