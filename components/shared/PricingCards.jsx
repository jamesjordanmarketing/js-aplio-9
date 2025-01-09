'use client'
import Pricing from '@/data/pricing'
import PricingBackground from './PricingBackground'
import PricingCard from './PricingCard'
import PricingCardV2 from './PricingCardV2'
import { cn } from '@/utils/cn'

const PricingCards = ({ isAnnual, version }) => {
  const { PricingData } = Pricing
  return (
    <div className="relative md:z-10">
      <PricingBackground />
      <div className={cn('relative flex items-center gap-8 max-lg:flex-col max-md:z-10', version ? 'pb-12' : '')}>
        {version ? (
          <>
            {PricingData.map((price) => (
              <PricingCardV2 price={price} key={price.id} isAnnual={isAnnual} />
            ))}
          </>
        ) : (
          <>
            {PricingData.map((price) => (
              <PricingCard price={price} key={price.id} isAnnual={isAnnual} />
            ))}
          </>
        )}
      </div>
    </div>
  )
}

export default PricingCards
