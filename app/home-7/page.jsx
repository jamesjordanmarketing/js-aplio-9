import FooterV2 from '@/components/footer/FooterV2'
import AboutCrypto from '@/components/home-7/AboutCrypto'
import CryptoMarket from '@/components/home-7/CryptoMarket'
import Hero from '@/components/home-7/Hero'
import ProcessInstallation from '@/components/home-7/ProcessInstallation'
import Services from '@/components/home-7/Services'
import TimeLine from '@/components/home-7/TimeLine'
import SecondaryNavbar from '@/components/navbar/SecondaryNavbar'
import Clients from '@/components/shared/Clients'
import FinancialBlog from '@/components/shared/FinancialBlog'
import TeamMembers from '@/components/shared/TeamMembers'
export const metadata = {
  title: 'Crypto Currency',
}
const HomePage7 = () => {
  return (
    <>
      <SecondaryNavbar hideTopBar />
      <main>
        <Hero />
        <AboutCrypto />
        <ProcessInstallation />
        <Services />
        <TeamMembers className="" />
        <TimeLine />
        <CryptoMarket />
        <FinancialBlog className="pb-150 dark:bg-dark-300" />
        <Clients sectionTitle={false} className={'pb-0 pt-0'} />
      </main>
      <FooterV2 />
    </>
  )
}

export default HomePage7
