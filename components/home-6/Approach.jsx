'use client'
import { fadeUpAnimation } from '@/data/animation'
import useWhileInView from '@/hooks/useWhileInView'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ApproachImage from '@/public/images/home-6-img/chatbot-approach.png'
import ApproachImageDark from '@/public/images/home-6-img/chatbot-approach-dark.png'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useRef } from 'react'
import Image from 'next/image'
const Approach = () => {
  const ref = useRef(null)
  const controlAnimation = useWhileInView(ref)
  return (
    <section className=" relative pb-25 pt-150 max-md:pb-20">
      <div className="container relative z-10">
        <div className="grid grid-cols-2 gap-10 max-md:grid-cols-1 1xl:gap-x-24">
          <div className="relative">
            <p className="section-tagline">Customer service approach</p>

            <h2 className="mb-8">Data-driven insights for better decision-making.</h2>
            <p className="mb-11">
              Monitor chatbot performance with detailed analytics and reports. Provide live chat support to your
              customers.
            </p>
            <ul className="mb-14 max-w-[490px] [&>*:not(:last-child)]:mb-5">
              <li className="flex items-center gap-x-2 rounded border border-dashed border-gray-100 p-2.5 dark:border-borderColor-dark">
                <span className=" shadow-icon relative h-10 w-10 gap-6 rounded-full bg-[#F3F8E8]  dark:bg-dark-200">
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-primary"
                  />
                </span>
                <span className="font-jakarta_sans font-semibold"> Scalable Systems </span>
              </li>
              <li className="flex items-center gap-x-2 rounded border border-dashed border-gray-100 p-2.5 dark:border-borderColor-dark">
                <span className=" shadow-icon relative h-10 w-10 gap-6 rounded-full bg-[#F3F8E8]  dark:bg-dark-200">
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-primary"
                  />
                </span>
                <span className="font-jakarta_sans font-semibold"> Adaptable Technologies </span>
              </li>
              <li className="flex items-center gap-x-2 rounded border border-dashed border-gray-100 p-2.5 dark:border-borderColor-dark">
                <span className=" shadow-icon relative h-10 w-10 gap-6 rounded-full bg-[#F3F8E8]  dark:bg-dark-200">
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-primary"
                  />
                </span>
                <span className="font-jakarta_sans font-semibold"> Versatile Tools </span>
              </li>
            </ul>
            <Link href="/contact" className="btn">
              Get Started
            </Link>
          </div>

          <div className="relative flex aspect-square items-center justify-end max-md:justify-center">
            <motion.div ref={ref} initial="initial" animate={controlAnimation} variants={fadeUpAnimation}>
              <Image src={ApproachImage} alt="company image" className="dark:hidden" />
              <Image src={ApproachImageDark} alt="company image" className="hidden dark:inline-block" />
            </motion.div>

            <div className="absolute left-1/2 top-1/2 -z-10 flex w-full -translate-x-1/2 -translate-y-1/2 max-md:flex-col">
              <div className="h-[442px] w-full  rounded-full bg-primary-200/25 blur-[145px]"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Approach
