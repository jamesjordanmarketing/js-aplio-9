'use client'

import { useEffect, useState } from 'react'

const Timer = () => {
  const [days, setDays] = useState(0)
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)

  useEffect(() => {
    const target = new Date('12/31/2024 23:59:59')
    const interval = setInterval(() => {
      const now = new Date()
      const difference = target.getTime() - now.getTime()

      const d = Math.floor(difference / (1000 * 60 * 60 * 24))
      {
        d < 10 ? setDays('0' + d) : setDays(d)
      }

      const h = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      {
        h < 10 ? setHours('0' + h) : setHours(h)
      }

      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
      {
        m < 10 ? setMinutes('0' + m) : setMinutes(m)
      }

      const s = Math.floor((difference % (1000 * 60)) / 1000)
      {
        s < 10 ? setSeconds('0' + s) : setSeconds(s)
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="col-span-12 mx-auto md:-mt-150">
      <div className="relative z-50 mb-8 inline-block rounded-[230px] bg-white p-2.5 shadow-box dark:bg-dark-200">
        <div className="relative flex h-full w-[630px] items-center justify-center rounded-[210px] border border-dashed border-gray-100 py-2.5  text-center dark:border-borderColor-dark max-md:w-full">
          <div className="absolute left-1/2 top-1/2 h-20 w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-200/40 blur-[145px] dark:bg-primary-200/10"></div>
          <h2 className="text-[64px] max-md:px-2.5  max-md:text-[24px]">
            {days}:{hours}:{minutes}:{seconds}
          </h2>
        </div>
      </div>
    </div>
  )
}

export default Timer
