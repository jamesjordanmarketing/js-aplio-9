import line from '@/public/images/home-7-img/line.png'
import Image from 'next/image'
const TimeLineCard = ({ title, yearRange, item, i }) => {
  return (
    <li className="stack-cards--item js-stack-cards--item cardContainer">
      <div
        className="relative flex items-center gap-2.5 md:gap-5 lg:gap-20"
        style={{ top: `calc(-5vh + ${i * 25}px)` }}>
        <div className="item-center relative flex shrink-0 justify-center">
          <div className="relative  w-[240px] rounded-medium   bg-white p-2.5 shadow-nav dark:bg-dark-200 max-md:w-auto max-xs:p-2">
            <div className="flex w-full items-center justify-center rounded border border-dashed border-gray-100 dark:border-borderColor-dark max-1xl:p-5 max-xs:p-2 1xl:p-10">
              <h3 className="max-md:text-base">{yearRange}</h3>
            </div>
          </div>
          <Image
            src={line}
            alt="line"
            className="absolute right-[-200px] top-1/2 -z-10 max-w-[none] -translate-y-1/2 "
          />
        </div>

        <div className="w-[300px] rounded-medium bg-white p-2.5 shadow-nav dark:bg-dark-200 max-xs:p-2 1xl:w-[400px]">
          <div className="flex h-full flex-col justify-center rounded border border-dashed border-gray-100 p-5 dark:border-borderColor-dark max-xs:p-2 1xl:p-8">
            <h3 className="mb-3 leading-8">{title}</h3>

            <ul className="lg:list-disc">
              {item.map((list, i) => (
                <li className="mb-2.5 last:mb-0" key={i}>
                  <strong>{list.year}</strong>: {list.details}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </li>
  )
}

export default TimeLineCard
