import { cn } from '@/utils/cn'
import Members from './Members'
import TeamBackground from './TeamBackground'

const TeamMembers = ({ className = 'pt-150' }) => {
  return (
    <section
      className={cn(
        'bg-white pb-[170px] dark:bg-dark-300 max-md:overflow-hidden max-md:pb-25 max-md:pt-20',
        className,
      )}>
      <div className="container">
        <div className="relative z-10 mx-auto mb-12 max-w-[475px] text-center">
          <p className="section-tagline">Our Team</p>
          <h2>Our leading, strong and creative team</h2>
        </div>

        <div className="relative z-10">
          <TeamBackground />
          <Members />
        </div>
      </div>
    </section>
  )
}

export default TeamMembers
