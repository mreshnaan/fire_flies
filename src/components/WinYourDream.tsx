
import HorizontalTitle from './HorizontalTitle'
import Divider from './Divider'
import Charitable from './Charitable'
import { CustomCarousel } from './Slider'

function WinYourDream() {
    return (
        <div className='w-full flex flex-col items-center gap-[20px] xl:gap-0 pb-[50px] xl:pb-[100px] '>
            <div className={`xl:hidden flex items-center justify-center gap-10`}>
                <div className={"border-b-2 w-[188px] h-[1px] border-[#505D65]"}></div>
                <p className={"font-bold text-[10px] xl:text-[12px] text-[#505D65] uppercase min-w-[140px] w-fit"}>WIN YOUR DREAM JOURNeY</p>
            </div>
            <div className='flex items-center video-bg2 w-full flex-col pt-[50px] pb-[50px] xl:pt-[150px] xl:pb-[200px] relative '>
                <div className="relative flex flex-col sm:w-[330px] xl:w-[1280px] 2xl:w-[1538px] gap-[140px] px-6 ">
                    <div className='flex flex-col xl:flex-row gap-8 xl:gap-0 justify-between '>
                        <div className='flex items-start gap-[60px] '>
                            <HorizontalTitle title='WIN YOUR DREAM JOURNeY' mainContainerClassName='gap-[100px] hidden xl:flex' titleClassName='w-[200px] text-[#505D65]' strokeClassName='border-[#505D65]' />
                            <div className="flex flex-col gap-[30px]">
                                <h1 className=' text-[40px] leading-[44px] text-center xl:text-left xl:w-[530px] text-[#505D65] xl:text-[80px] font-bold xl:leading-[88px] uppercase'>Adventure Raffles: Win Your Dream Journey</h1>
                                <p className='text-[12px] leading-[18px] text-center xl:text-[20px] xl:w-[671px] text-[#505D65] xl:leading-[30px] xl:text-justify mt-[16px] xl:mt-[41px]'>Step into a world of thrilling opportunities with Fireflies Raffles, where each ticket holds the potential for life-changing experiences. Unleash the excitement of possibility as you participate in our exclusive raffles, each designed to turn ordinary moments into extraordinary memories.</p>
                            </div>
                        </div>
                        <img src="/assets/win-your-dream3.png" alt="" srcSet="" className='xl:w-[555px] xl:h-[790px] 2xl:w-[685px] 2xl:h-[990px] xl:absolute right-0' />
                        <div className='w-[325px] h-[109px] xl:w-[426px] xl:h-[208px] absolute top-[790px] left-[40px] xl:left-0 xl:top-[690px] xl:bottom-0 bg-[url("/assets/shape9.png")] bg-no-repeat bg-contain' >
                            <p className='text-[#FFF] text-[24px] leading-[36px ] text-left xl:text-center  xl:text-[32px] xl:leading-[48px] font-bold px-[50px] py-[28px] xl:pt-[50px]'>How it works?</p>
                        </div>
                    </div>
                </div>

            </div>
            <div className='pt-[100px] xl:pt-[250px] xl:w-[1280px] 2xl:w-[1538px] gap-[30px] flex flex-col items-center justify-center'>
                <CustomCarousel sliders={[
                    <div className='flex flex-col items-center gap-6 w-[270px]'>
                        <h1 className='text-[#13AFB6] text-[24px] leading-[28.8px] xl:text-[20px] xl:leading-[24px] text-center xl:text-left font-semibold'>Select Your Raffle</h1>
                        <Divider className='w-[100px] bg-[#505D65] opacity-100' />
                        <p className='w-[247px] text-[#505D65] text-[12px] leading-[16px] xl:text-[20px] text-center xl:leading-[30px]'>Choose from a variety of raffles such as the Global Explorer, Dream Vacation, or Luxury Car Rental Experience.</p>
                    </div>,
                    <div className='flex flex-col items-center gap-6 w-[270px]'>
                        <h1 className='text-[#13AFB6] text-[24px] leading-[28.8px] xl:text-[20px] xl:leading-[24px] text-center xl:text-left font-semibold'>Enter with $FFT Tokens</h1>
                        <Divider className='w-[100px] bg-[#505D65] opacity-100' />
                        <p className='w-[247px] text-[#505D65] text-[12px] leading-[16px] xl:text-[20px] text-center xl:leading-[30px]'>Use your $FFT tokens to purchase raffle entries. The more you enter, the greater your chances to win.</p>
                    </div>,
                    <div className='flex flex-col items-center gap-6 w-[270px]'>
                        <h1 className='text-[#13AFB6] text-[24px] leading-[28.8px] xl:text-[20px] xl:leading-[24px] text-center xl:text-left font-semibold'>Await the Draw</h1>
                        <Divider className='w-[100px] bg-[#505D65] opacity-100' />
                        <p className='w-[247px] text-[#505D65] text-[12px] leading-[16px] xl:text-[20px] text-center xl:leading-[30px]'>Once the raffle closes, a draw will be conducted to randomly select the winners.</p>
                    </div>,
                    <div className='flex flex-col items-center gap-6 w-[270px]'>
                        <h1 className='text-[#13AFB6] text-[24px] leading-[28.8px] xl:text-[20px] xl:leading-[24px] text-center xl:text-left font-semibold'>Win Amazing Prizes</h1>
                        <Divider className='w-[100px] bg-[#505D65] opacity-100' />
                        <p className='w-[247px] text-[#505D65] text-[12px] leading-[16px] xl:text-[20px] text-center xl:leading-[30px]'>If your entry is drawn, you'll win incredible prizes like all-inclusive vacations, 5-star hotel stays, or luxury car experiences.</p>
                    </div>,
                    <div className='flex flex-col items-center gap-6 w-[270px]'>
                        <h1 className='text-[#13AFB6] text-[24px] leading-[28.8px] xl:text-[20px] xl:leading-[24px] text-center xl:text-left font-semibold'>Celebrate and Share</h1>
                        <Divider className='w-[100px] bg-[#505D65] opacity-100' />
                        <p className='w-[247px] text-[#505D65] text-[12px] leading-[16px] xl:text-[20px] text-center xl:leading-[30px]'>Winners will be announced on our platform. Share your excitement and prepare for your next adventure!</p>
                    </div>
                ]} classNames="xl:hidden w-[330px]" dotNavBtnClass={"w-[27.586px] h-[3px]"} navContainerClass='mt-[0px]' dotNavMainContainerClass="" />

                <div className='hidden xl:grid grid-cols-1 gap-10 xl:mb-[100px] justify-center sm:grid-cols-2xl xl:grid-cols-4 2xl:grid-cols-5'>
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
                {/* <div className='w-[330px] h-[403px] xl:w-[1180px] 2xl:w-[1440px] xl:h-[239px] flex items-center justify-center bg-[#F1F1F2] mb-[32px]'>
                    <p className='text-[#505D65] text-[12px] leading-[12px] font-bold'>GRAPHIC HERE</p>
                </div> */}
                <Charitable />
            </div>
        </div>
    )
}

export default WinYourDream