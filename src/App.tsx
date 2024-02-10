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
      <Toaster />
    </div>
  )
}

export default App
