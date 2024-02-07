import HowItWorksSection from "./components/HowItWorksSection"
import Partners from "./components/Partners"
import TeamSection from "./components/TeamSection"
import TokenBenefits from "./components/TokenBenefits"
import TravelerReward from "./components/TravelerReward"
import VideoSection from "./components/VideoSection"
import WhoWeAre from "./components/WhoWeAre"
import MainBanner from "./components/banners/MainBanner"
import Header from "./components/headers/Header"



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
        <VideoSection mainContainerClassName='video-bg2' />
        <TokenBenefits />
        <TravelerReward />
      </div>

    </div>
  )
}

export default App
