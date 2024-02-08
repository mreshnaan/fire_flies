
import HorizontalTitle from './HorizontalTitle'
import Divider from './Divider'
import Charitable from './Charitable'

function WinYourDream() {
    return (
        <div className='w-full flex flex-col items-center pb-[100px] '>
            <div className='flex items-center video-bg2 w-full flex-col pt-[150px] pb-[200px] relative '>
                <div className="relative flex flex-col xl:w-[1280px] 2xl:w-[1538px] gap-[140px] px-6 ">
                    <div className='flex  justify-between '>
                        <div className='flex items-start gap-[60px] '>
                            <HorizontalTitle title='WIN YOUR DREAM JOURNeY' mainContainerClassName='gap-[100px]' titleClassName='w-[200px] text-[#505D65]' strokeClassName='border-[#505D65]' />
                            <div className="flex flex-col gap-[30px]">
                                <h1 className='w-[530px] text-left text-[#505D65] text-[80px] font-bold leading-[88px] uppercase'>Adventure Raffles: Win Your Dream Journey</h1>
                                <p className='text-[20px] w-[671px] text-[#505D65] leading-[30px] text-justify mt-[41px]'>Step into a world of thrilling opportunities with Fireflies Raffles, where each ticket holds the potential for life-changing experiences. Unleash the excitement of possibility as you participate in our exclusive raffles, each designed to turn ordinary moments into extraordinary memories.</p>
                            </div>
                        </div>
                        <img src="/assets/win-your-dream2.png" alt="" srcSet="" className='xl:w-[485px] xl:h-[790px] 2xl:w-[685px] 2xl:h-[990px] absolute right-0' />
                        <div className='w-[426px] h-[208px] absolute left-0 top-[750px] bottom-0 bg-[url("/assets/shape9.png")] bg-no-repeat bg-contain' >
                            <p className='text-[#FFF] text-[32px] leading-[48px] font-bold text-center pt-[50px]'>How it works?</p>
                        </div>
                    </div>
                </div>

            </div>
            <div className='pt-[250px] xl:w-[1280px] 2xl:w-[1538px] xl:flex flex-col items-center justify-center'>
                <div className='grid grid-cols-1 gap-10 mb-[100px] sm:grid-cols-2xl xl:grid-cols-4 2xl:grid-cols-5'>
                    <div className='flex flex-col gap-6 w-[270px]'>
                        <h1 className='text-[#13AFB6] text-[20px] leading-[24px] font-semibold'>Select Your Raffle</h1>
                        <Divider className='w-[100px] bg-[#505D65] opacity-100' />
                        <p className='w-[247px] text-[#505D65] text-[20px] leading-[30px]'>Choose from a variety of raffles such as the Global Explorer, Dream Vacation, or Luxury Car Rental Experience.</p>
                    </div>
                    <div className='flex flex-col gap-6 w-[270px]'>
                        <h1 className='text-[#13AFB6] text-[20px] leading-[24px] font-semibold'>Enter with $FFT Tokens</h1>
                        <Divider className='w-[100px] bg-[#505D65] opacity-100' />
                        <p className='w-[247px] text-[#505D65] text-[20px] leading-[30px]'>Use your $FFT tokens to purchase raffle entries. The more you enter, the greater your chances to win.</p>
                    </div>
                    <div className='flex flex-col gap-6 w-[270px]'>
                        <h1 className='text-[#13AFB6] text-[20px] leading-[24px] font-semibold'>Await the Draw</h1>
                        <Divider className='w-[100px] bg-[#505D65] opacity-100' />
                        <p className='w-[247px] text-[#505D65] text-[20px] leading-[30px]'>Once the raffle closes, a draw will be conducted to randomly select the winners.</p>
                    </div>
                    <div className='flex flex-col gap-6 w-[270px]'>
                        <h1 className='text-[#13AFB6] text-[20px] leading-[24px] font-semibold'>Win Amazing Prizes</h1>
                        <Divider className='w-[100px] bg-[#505D65] opacity-100' />
                        <p className='w-[247px] text-[#505D65] text-[20px] leading-[30px]'>If your entry is drawn, you'll win incredible prizes like all-inclusive vacations, 5-star hotel stays, or luxury car experiences.</p>
                    </div>
                    <div className='flex flex-col gap-6 w-[270px]'>
                        <h1 className='text-[#13AFB6] text-[20px] leading-[24px] font-semibold'>Celebrate and Share</h1>
                        <Divider className='w-[100px] bg-[#505D65] opacity-100' />
                        <p className='w-[247px] text-[#505D65] text-[20px] leading-[30px]'>Winners will be announced on our platform. Share your excitement and prepare for your next adventure!</p>
                    </div>
                </div>
                <div className='xl:w-[1180px] 2xl:w-[1440px] h-[239px] flex items-center justify-center bg-[#F1F1F2] mb-[32px]'>
                    <p className='text-[#505D65] text-[12px] leading-[12px] font-bold'>GRAPHIC HERE</p>
                </div>
                <Charitable />
            </div>
        </div>
    )
}

export default WinYourDream