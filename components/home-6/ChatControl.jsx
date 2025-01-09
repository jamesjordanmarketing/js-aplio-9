'use client'
import Image from 'next/image'
import chatImage from '@/public/images/home-6-img/chatbot-chat-control.png'
import chatImageDark from '@/public/images/home-6-img/chatbot-chat-control-dark.png'
import chatImageChats from '@/public/images/home-6-img/chatbot-chat-control-chats.png'
import chatImageChatsDark from '@/public/images/home-6-img/chatbot-chat-control-chats-dark.png'
import { fadeFromLeftAnimation } from '@/data/animation'
import { motion } from 'framer-motion'
import { useRef } from 'react'
import useWhileInView from '@/hooks/useWhileInView'
import Link from 'next/link'
const ChatControl = () => {
  const ref = useRef(null)
  const controlAnimation = useWhileInView(ref)
  return (
    <section className="relative  overflow-x-hidden pt-[200px]">
      <div className="container relative z-10">
        <div className="grid grid-cols-2 gap-25 max-md:grid-cols-1 1xl:gap-x-24">
          <div className="relative">
            <motion.div
              className="max-lg:w-full lg:h-[500px] lg:w-[420px]"
              initial="initial"
              ref={ref}
              animate={controlAnimation}
              variants={fadeFromLeftAnimation}>
              <Image src={chatImage} alt="explore" className="rounded-medium dark:hidden" />
              <Image src={chatImageDark} alt="explore" className="hidden rounded-medium dark:inline-block" />
            </motion.div>

            <motion.div
              className="absolute rounded-medium max-lg:-left-12 max-lg:-top-20 max-lg:max-w-[275px] lg:-left-[225px] lg:-top-[110px]"
              initial="initial"
              ref={ref}
              animate={controlAnimation}
              variants={fadeFromLeftAnimation}>
              <Image src={chatImageChats} alt="summery" className="dark:hidden " />
              <Image src={chatImageChatsDark} alt="summery" className="hidden dark:inline-block " />
            </motion.div>
          </div>

          <div className="relative  py-10 ">
            <p className="section-tagline">Your chatbot, your control.</p>

            <h2 className="mb-8">Advanced chatbot software for today’s websites.</h2>
            <p className="mb-12">
              Customize it to align with your brand’s personality. Tailor the responses, and interactions to fit your
              business identity.
            </p>

            <Link href="/" className="btn">
              Discover more
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ChatControl
