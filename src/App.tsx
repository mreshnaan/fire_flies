import Faq from "./components/Faq"
import HowItWorksSection from "./components/HowItWorksSection"
import MakingDifferenceSection from "./components/MakingDifferenceSection"
import NewsLetter from "./components/NewsLetter"
import Partners from "./components/Partners"
import RewardProgram from "./components/RewardProgram"
import TeamSection from "./components/TeamSection"
import TokenBenefits from "./components/TokenBenefits"
import TravelerReward from "./components/TravelerReward"
import VideoSection from "./components/VideoSection"
import WhoWeAre from "./components/WhoWeAre"
import TheWorldIsYours from "./components/TheWorldIsYours"
import MainBanner from "./components/banners/MainBanner"
import Footer from "./components/footers/Footer"
import Header from "./components/headers/Header"
import IntroductionSection from "./components/IntroductionSection"
import Charitable from "./components/Charitable"
import StackingOptions from "./components/StackingOptions"
import WinYourDream from "./components/WinYourDream"
import TokenFaq from "./components/TokenFaq"



function App() {


  return (
    <div className='w-full min-h-screen'>
      <Header />
      <MainBanner />
      <div className="flex flex-col items-center w-full">
        <WhoWeAre />
        <VideoSection mainContainerClassName="video-bg1" />
        <TeamSection />
        <HowItWorksSection />
        <Partners />
        <IntroductionSection />
        <VideoSection mainContainerClassName='video-bg2' />
        <TokenBenefits />
        <TravelerReward />
        <StackingOptions />
        <WinYourDream />
        <RewardProgram />
        <MakingDifferenceSection />
        <TheWorldIsYours />
        <TokenFaq />
        <NewsLetter />
        <Faq />
      </div>
      <Footer />
    </div>
  )
}

export default App
