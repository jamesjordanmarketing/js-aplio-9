import React from 'react'
import dataDark1 from '@/public/images/home-6-img/chatbot-feature-1-dark.png'
import data1 from '@/public/images/home-6-img/chatbot-feature-1.png'
import dataDark2 from '@/public/images/home-6-img/chatbot-feature-2-dark.png'
import data2 from '@/public/images/home-6-img/chatbot-feature-2.png'
import dataDark3 from '@/public/images/home-6-img/chatbot-feature-3-dark.png'
import data3 from '@/public/images/home-6-img/chatbot-feature-3.png'
import Image from 'next/image'
const Feature = () => {
  const userManageCard = [
    {
      id: 1,
      img: data1,
      darkImg: dataDark1,
      title: 'Sales Automation',
      description: 'Chatbots can engage website visitors, qualify leads, and capture contact information',
    },
    {
      id: 2,
      img: data2,
      darkImg: dataDark2,
      title: 'AI- Powered Service',
      description:
        'AI-powered services utilize artificial intelligence to perform tasks that typically require human intelligence.',
    },
    {
      id: 3,
      img: data3,
      darkImg: dataDark3,
      title: 'Simple Plug and play',
      description:
        'Refers to a simple and user-friendly setup process where a device or software can connected or installed.',
    },
  ]
  return (
    <section className="relative bg-white pb-20 dark:bg-dark-300">
      <div className="container">
        <div className="mx-auto mb-16 max-w-[550px] text-center">
          <p className="section-tagline">Get started</p>
          <h2 className="mb-10">Streamline sales and support with chatbots.</h2>
          <p className="mb-15">
            Unlock unparalleled benefits for your business with our services. Reach more customers, save time and money.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-8 max-md:grid-cols-1">
          {userManageCard?.map((userCard) => (
            <div className="rounded-medium bg-white p-2.5 shadow-nav dark:bg-dark-200" key={userCard.id}>
              <div className="h-full rounded border border-dashed border-gray-100 p-10 dark:border-borderColor-dark max-lg:p-5">
                <Image src={userCard.img} alt="image" className="mb-10 inline-block w-full rounded dark:hidden" />
                <Image src={userCard.darkImg} alt="image" className="mb-10 hidden w-full rounded dark:inline-block" />
                <h3 className="mb-2.5 leading-8">{userCard.title}</h3>
                <p>{userCard.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Feature
