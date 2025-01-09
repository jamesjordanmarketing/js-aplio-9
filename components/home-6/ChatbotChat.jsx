'use client'
import Image from 'next/image'
import chatbotChatImage from '@/public/images/home-6-img/chatbot-chat.png'
import chatbotChatImageDark from '@/public/images/home-6-img/chatbot-chat-dark.png'
import chatbotChatImageSummery from '@/public/images/home-6-img/chatbot-chat-summery-dark.png'
import chatbotChatImageSummeryDark from '@/public/images/home-6-img/chatbot-chat-summery-dark.png'
import chatbotChatImageExpense from '@/public/images/home-6-img/chatbot-chat-expense.png'
import chatbotChatImageExpenseDark from '@/public/images/home-6-img/chatbot-chat-expense-dark.png'
import chatbotChatImagePayment from '@/public/images/home-6-img/chatbot-chat-payment-dark.png'
import chatbotChatImagePaymentDark from '@/public/images/home-6-img/chatbot-chat-payment-dark.png'
import {
  fadeUpAnimation,
  fadeFromLeftAnimation,
  fadeFromLeftAnimation2,
  fadeFromLeftAnimation3,
} from '@/data/animation'
import { motion } from 'framer-motion'
import { useRef } from 'react'
import useWhileInView from '@/hooks/useWhileInView'
import Link from 'next/link'
const ChatbotChat = () => {
  const ref = useRef(null)
  const controlAnimation = useWhileInView(ref)
  return (
    <section className="relative overflow-x-hidden pt-[200px] max-md:pt-15">
      <div className="container relative z-10">
        <div className="grid grid-cols-2 gap-25 max-md:grid-cols-1 1xl:gap-x-24">
          <div className="relative  py-10 ">
            <p className="section-tagline">Live chat</p>

            <h2 className="mb-8">Instant chat for outstanding customer experiences.</h2>
            <p className="mb-12">
              Provide live chat support to your customers. Our chatbot effortlessly hands off to human agents when
              necessary.
            </p>

            <Link href="/contact" className="btn">
              Discover more
            </Link>
          </div>
          <div className="relative">
            <motion.div
              initial="initial"
              ref={ref}
              animate={controlAnimation}
              variants={fadeUpAnimation}
              className="max-lg:w-full lg:h-[500px] lg:w-[420px]">
              <Image src={chatbotChatImage} alt="explore" className="rounded-medium dark:hidden" />
              <Image src={chatbotChatImageDark} alt="explore" className="hidden rounded-medium dark:inline-block" />
            </motion.div>

            <motion.div
              className="absolute rounded-medium max-lg:-right-12 max-lg:-top-20 max-lg:max-w-[275px] lg:-top-[170px] lg:right-0"
              initial="initial"
              ref={ref}
              animate={controlAnimation}
              variants={fadeFromLeftAnimation}>
              <Image src={chatbotChatImageSummery} alt="summery" className=" dark:hidden " />
              <Image src={chatbotChatImageSummeryDark} alt="summery" className="hidden dark:inline-block " />
            </motion.div>
            <motion.div
              className="absolute rounded-medium max-lg:-right-12 max-lg:top-[220px] max-lg:max-w-[275px] max-xs:top-[220px] lg:right-0 lg:top-[75px]"
              initial="initial"
              ref={ref}
              animate={controlAnimation}
              variants={fadeFromLeftAnimation2}>
              <Image src={chatbotChatImageExpense} alt="summery" className="dark:hidden" />
              <Image src={chatbotChatImageExpenseDark} alt="summery" className="hidden dark:inline-block" />
            </motion.div>
            <motion.div
              className="absolute rounded-medium max-lg:-right-12 max-lg:top-[80px] max-lg:max-w-[275px] max-xs:top-[110px] lg:right-0 lg:top-[280px] "
              initial="initial"
              ref={ref}
              animate={controlAnimation}
              variants={fadeFromLeftAnimation3}>
              <Image src={chatbotChatImagePayment} alt="summery" className="dark:hidden " />
              <Image src={chatbotChatImagePaymentDark} alt="summery" className="hidden dark:inline-block" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ChatbotChat
