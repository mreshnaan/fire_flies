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
import StackingOptions from "./components/StackingOptions"
import WinYourDream from "./components/WinYourDream"
import TokenFaq from "./components/TokenFaq"
import { useEffect } from "react"
import { Toaster } from "@/components/ui/toaster"
import ScrollToTop from "./components/scrollToTop"
import Tokenomics from "@/components/Tokenomics.tsx";
import UnlockRewards from "@/components/UnlockRewards.tsx";


function App() {
 
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://consent.cookiebot.com/uc.js";
    script.async = true;
    script.id = "Cookiebot";
    script.setAttribute("data-cbid", "d5680a78-100a-41f5-8d0a-62e9bb62721d");
    script.setAttribute("data-blockingmode", "auto");
    script.type = "text/javascript";
    document.head.appendChild(script);

    // Corrected Cleanup function
    return () => {
      const existingScript = document.getElementById("Cookiebot");
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);
 

  // useEffect(() => {
  //   const script = document.createElement("script");
  //   script.src = "https://consent.cookiebot.com/d5680a78-100a-41f5-8d0a-62e9bb62721d/cd.js";
  //   script.async = true;
  //   script.id = "CookieDeclaration";
  //   script.type = "text/javascript";
  //   document.body.appendChild(script); // or document.head.appendChild(script), depending on your specific requirement

  //   // Cleanup function
  //   return () => {
  //     const existingScript = document.getElementById("CookieDeclaration");
  //     if (existingScript) {
  //       document.body.removeChild(existingScript); // or document.head.removeChild(existingScript), matching the appendChild call
  //     }
  //   };
  // }, []); 

  return (
    <div className='w-full min-h-screen'>
      <ScrollToTop/>
      <Header />
      <MainBanner />
      <div className="flex flex-col items-center w-full">
        <WhoWeAre />
        <VideoSection  mainContainerClassName="video-bg1" videoUrl="https://res.cloudinary.com/dtrnrn7am/video/upload/v1707620103/y2mate.is_-_Firefiles_image_video-er_qG7lcM4g-1080pp-1707619695_hczx1p.mp4" coverImageUrl="/assets/video1.jpg"/>
        <TeamSection />
        <HowItWorksSection />
        <Partners />
        <IntroductionSection />
        <VideoSection  mainContainerClassName='video-bg2' videoUrl="https://res.cloudinary.com/dtrnrn7am/video/upload/v1707620069/y2mate.is_-_Fireflies_Web3_video-3Dq7s2j0Sek-1080pp-1707619737_gt5srr.mp4" coverImageUrl="/assets/video2.jpg"/>
        <TokenBenefits />
         <TravelerReward />
        <StackingOptions />
        <WinYourDream />
        <RewardProgram />
        <MakingDifferenceSection />
        <TheWorldIsYours />
        <Tokenomics/>
        <UnlockRewards/>
        <TokenFaq />
        <NewsLetter />
        <Faq />
      </div>
      <Footer />
      <Toaster />
    </div>
  )
}

export default App
