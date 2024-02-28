import Glossary from '@/components/Glossary'
import Footer from '@/components/footers/Footer'
import Header from '@/components/headers/Header'
import ScrollToTop from '@/components/scrollToTop'
import { Toaster } from '@/components/ui/toaster'

export const PrivacyPolicy = () => {
  return (
    <div className='w-full min-h-screen'>
        <ScrollToTop/>
    <Header />
    {/* <MainBanner /> */}
    <div className="flex flex-col items-center w-full">
      <Glossary/>
    </div>
    <Footer />
    <Toaster />
  </div>
  )
}
