import Divider from "./Divider"
import HorizontalTitle from "./HorizontalTitle"
import { CustomCarousel } from "./Slider"


function TheWorldIsYours() {
    return (
        <div className='w-full flex flex-col items-center pb-[50px] xl:pb-[100px]'>
            <div className='flex items-center video-bg2 w-full flex-col pt-[50px] xl:pt-[150px] xl:pb-[150px]'>
                <div className="relative flex flex-col w-[330px] xl:w-[1280px] 2xl:w-[1538px] gap-[140px] px-6 ">
                    <div className='flex flex-col xl:flex-row items-center justify-between xl:items-end '>
                        <div className='flex items-start gap-[60px] '>
                            <HorizontalTitle title='Share your journey' mainContainerClassName='gap-[50px] hidden xl:flex' titleClassName='w-[200px] text-[#505D65]' strokeClassName='border-[#505D65]' />

                            <div className="flex flex-col gap-[30px]">
                                <h1 className='text-[24px] leading-[31.2px] w-[330px] text-center xl:w-[571px] 2xl:w-[671px] xl:text-left text-[#505D65] xl:text-[48px] font-bold xl:leading-[62.4px]'>User-Generated Content Rewards Program</h1>
                                <h1 className="text-[40px] leading-[44px] text-center xl:w-[571px] 2xl:w-[650px] text-[#13AFB6] xl:text-[60px] xl:text-left xl:leading-[68px] 2xl:text-[80px] 2xl:leading-[88px] font-bold uppercase mt-[40px]">Share Your Journey, Earn Rewards.
                                    The World Is Yours.</h1>

                                <p className="hidden xl:block text-[#505D65] xl:text-[20px] text-justify xl:leading-[30px] xl:mt-[75px] xl:w-[571px] 2xl:w-[650px]">Become a storyteller of your travels with Fireflies' User-Generated Content Rewards Program. Share your captivating videos and photos, showcasing your unique experiences with accommodations, destinations, and activities booked through Fireflies, and get featured across our platforms. In return, your creativity and insights are rewarded with exclusive digital collectibles, enriching your future travel adventures.</p>

                            </div>
                        </div>
                        <img src="/assets/win-your-dream5.png" alt="" className=" w-[330px] h-auto object-contain  xl:block xl:w-[504px] xl:h-[527px] 2xl:w-[704px] 2xl:h-[727px]" />
                    </div>
                </div>
            </div>
            <div className="w-[330px] xl:w-[1280px] 2xl:w-[1538px] gap-[40px] pt-[50px] xl:pt-[100px] flex flex-col xl:flex-row xl:gap-[100px] 2xl:gap-[140px]">
                <p className=" xl:hidden text-[#505D65] xl:text-[20px] text-justify xl:leading-[30px] xl:mt-[75px] xl:w-[571px] 2xl:w-[650px]">Become a storyteller of your travels with Fireflies' User-Generated Content Rewards Program. Share your captivating videos and photos, showcasing your unique experiences with accommodations, destinations, and activities booked through Fireflies, and get featured across our platforms. In return, your creativity and insights are rewarded with exclusive digital collectibles, enriching your future travel adventures.</p>
                <CustomCarousel sliders={[
                    <div className="w-[330px] flex flex-col items-center justify-center">
                        <img src="/assets/win-icon1.svg" alt="" srcSet="" className="w-[121.921px] h-[121.921px]" />
                        <div className="flex flex-col gap-4 justify-center items-center">
                            <h1 className="text-[24px] text-[#505D65] font-bold leading-[36px]">Culinary Voyager NFT</h1>
                            <p className="text-center text-[#505D65] text-[16px]  leading-[24px]">Awarded for reviews focusing on local cuisines or dining experiences.</p>
                            <Divider className="w-[200px] bg-[#505D65] opacity-50" />
                            <p className="text-center text-[#505D65] text-[16px] leading-[24px]">Reward: Discounts at selected gourmet restaurants or invitations to exclusive culinary events.</p>
                        </div>
                    </div>,
                    <div className="w-[330px] flex flex-col items-center justify-center">
                        <img src="/assets/win-icon2.svg" alt="" srcSet="" className="w-[121.921px] h-[121.921px]" />
                        <div className="flex flex-col gap-4 justify-center items-center">
                            <h1 className="text-[24px] text-[#505D65] font-bold leading-[36px]">Culture Enthusiast NFT </h1>
                            <p className="text-center text-[#505D65] text-[16px]  leading-[24px]">or reviews that capture the cultural essence of travel destinations.</p>
                            <Divider className="w-[200px] bg-[#505D65] opacity-50" />
                            <p className="text-center text-[#505D65] text-[16px] leading-[24px]">Reward: Access to private cultural tours or special cultural event tickets.</p>
                        </div>
                    </div>,
                    <div className="w-[330px] flex flex-col items-center justify-center">
                        <img src="/assets/win-icon3.svg" alt="" srcSet="" className="w-[121.921px] h-[121.921px]" />
                        <div className="flex flex-col gap-4 justify-center items-center">
                            <h1 className="text-[24px] text-[#505D65] font-bold leading-[36px]">Eco-Advocate NFT</h1>
                            <p className="text-center text-[#505D65] text-[16px]  leading-[24px]">Given for reviews highlighting sustainable and eco-friendly travel experiences.</p>
                            <Divider className="w-[200px] bg-[#505D65] opacity-50" />
                            <p className="text-center text-[#505D65] text-[16px] leading-[24px]">Reward: Contributions to a sustainability fund in the user’s name or eco-friendly travel gift packages.</p>
                        </div>
                    </div>,
                ]} classNames="xl:hidden w-[330px]" dotNavBtnClass={"w-[27.586px] h-[3px]"} navContainerClass='mt-[0px]' dotNavMainContainerClass="" />

                <div className="hidden xl:w-[280px] 2xl:w-[386px] xl:flex flex-col items-center justify-center">
                    <img src="/assets/win-icon1.svg" alt="" srcSet="" className="xl:w-[140px] xl:h-[140px] 2xl:w-[164px] 2xl:h-[164px]" />
                    <div className="flex flex-col gap-4 justify-center items-center">
                        <h1 className="xl:text-[22px] 2xl:text-[32px] text-[#505D65] font-bold leading-[48px]">Culinary Voyager NFT</h1>
                        <p className="text-center text-[#505D65] xl:text-[16px] 2xl:text-[20px] leading-[30px]">Awarded for reviews focusing on local cuisines or dining experiences.</p>
                        <Divider className="w-[200px] bg-[#505D65] opacity-50" />
                        <p className="text-center text-[#505D65] xl:text-[16px] 2xl:text-[20px] leading-[30px]">Reward: Discounts at selected gourmet restaurants or invitations to exclusive culinary events.</p>
                    </div>
                </div>
                <div className="hidden xl:w-[280px] 2xl:w-[386px] xl:flex flex-col items-center justify-center">
                    <img src="/assets/win-icon2.svg" alt="" srcSet="" className="xl:w-[140px] xl:h-[140px] 2xl:w-[164px] 2xl:h-[164px]" />
                    <div className="flex flex-col gap-4 justify-center items-center">
                        <h1 className="xl:text-[22px] 2xl:text-[32px] text-[#505D65] font-bold leading-[48px]">Culture Enthusiast NFT  </h1>
                        <p className="text-center text-[#505D65] xl:text-[16px] 2xl:text-[20px] leading-[30px]">For reviews that capture the cultural essence of travel destinations.</p>
                        <Divider className="w-[200px] bg-[#505D65] opacity-50" />
                        <p className="text-center text-[#505D65] xl:text-[16px] 2xl:text-[20px] leading-[30px]">Reward: Access to private cultural tours or special cultural event tickets.</p>
                    </div>
                </div>
                <div className="hidden w-[386px] xl:flex flex-col items-center justify-center">
                    <img src="/assets/win-icon3.svg" alt="" srcSet="" className="xl:w-[140px] xl:h-[140px] 2xl:w-[164px] 2xl:h-[164px]" />
                    <div className="flex flex-col gap-4 justify-center items-center">
                        <h1 className="xl:text-[22px] 2xl:text-[32px] text-[#505D65] font-bold leading-[48px]">Eco-Advocate NFT</h1>
                        <p className="text-center text-[#505D65] xl:text-[16px] 2xl:text-[20px] leading-[30px]">Given for reviews highlighting sustainable and eco-friendly travel experiences.    </p>
                        <Divider className="w-[200px] bg-[#505D65] opacity-50" />
                        <p className="text-center text-[#505D65] xl:text-[16px] 2xl:text-[20px] leading-[30px]">Reward: Contributions to a sustainability fund in the user’s name or eco-friendly travel gift packages.</p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default TheWorldIsYours