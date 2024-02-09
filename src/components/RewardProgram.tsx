import Divider from './Divider'
import HorizontalTitle from './HorizontalTitle'
import { CustomCarousel } from './Slider'

function RewardProgram() {
    return (
        <div className='flex items-center w-full flex-col  pb-[50px] xl:pt-[150px] xl:pb-[200px] '>
            <div className="flex flex-col w-[330px] xl:w-[1280px] 2xl:w-[1538px] gap-[70px] xl:gap-[140px] px-6 ">
                <div className='flex flex-col gap-[30px] xl:gap-0 xl:flex-row justify-between '>
                    <div className='flex items-start gap-[60px] '>
                        <HorizontalTitle title='Introducing Fireflies WEB3' mainContainerClassName='gap-[100px] hidden xl:flex' titleClassName='w-[200px] text-[#505D65]' strokeClassName='border-[#505D65]' />
                        <div className="flex flex-col gap-[30px]">
                            <h1 className=' text-[24px] leading-[31.2px] xl:w-[500px] 2xl:w-[671px] text-[#505D65]  2xl:text-[48px]  2xl:leading-[62.4px] font-bold'>Fireflies Digital Collectibles</h1>
                            <h1 className=' text-[40px] leading-[44px] text-center xl:text-[60px] xl:leading-[68px] xl:w-[700px] 2xl:w-[948px] xl:text-left text-[#505D65] 2xl:text-[80px] font-bold 2xl:leading-[88px] uppercase'>12-Month Streak NFT Reward Program</h1>
                        </div>
                    </div>
                    <p className='text-[12px] leading-[18px] xl:text-[16px] xl:w-[356px] 2xl:text-[20px] 2xl:w-[456px] text-[#505D65] 2xl:leading-[30px] text-justify'>Earn a special "12-Month Streak NFT" by engaging with various services offered by Fireflies, like booking trips, renting cars, and staying in hotels. This NFT is earned by consistent usage over a 12-month period and is redeemable for exclusive rewards.</p>

                </div>
                <div className='flex justify-around w-full items-start'>

                    <CustomCarousel sliders={[
                        <div className='w-[330px] flex flex-col gap-[30px] items-center justify-center'>
                            <h1 className='text-[#505D65] text-[24px] leading-[31.2px] uppercase text-center mb-[30px]'>Travel<br></br>
                                Streak Reward</h1>
                            <div className='bg-[url("/assets/mb-shape7.png")] w-[330px] h-[108px] bg-no-repeat bg-contain flex items-center justify-center'>
                                <p className='w-[250px] text-[#FFF] text-center text-[16px] leading-[27px]'><span className='font-bold uppercase'>Criteria:</span> Book a trip every month for 12 months.</p>
                            </div>
                            <div className='bg-[url("/assets/mb-shape8.png")] w-[330px] h-[325px] bg-no-repeat bg-contain flex items-center justify-center'>
                                <div className="flex flex-col gap-4 justify-center items-cente w-[250px] text-center">
                                    <h1 className="text-[16px] leading-[27px] text-[#FFF]">Reward:</h1>
                                    <p className=" text-[16px] leading-[27px]  text-center text-[#FFF]">1 Eat for Stay Voucher (without obligation per nights)</p>
                                    <Divider className="w-[200px] bg-[#FFF] opacity-50" />
                                    <p className="text-center text-[#FFF] text-[16px] leading-[27px]">Unlock Yearly Access to Thousands
                                        of Exclusive Villas and Apartments (BPO Part Should Reach Minimum €3000)</p>
                                </div>
                            </div>
                        </div>,
                        <div className='w-[330px] flex flex-col gap-[30px] items-center justify-center'>
                            <h1 className='text-[#505D65] text-[24px] leading-[31.2px] uppercase text-center mb-[30px]'>Travel<br></br>
                                Streak Reward
                            </h1>
                            <div className='bg-[url("/assets/mb-shape7.png")] w-[330px] h-[108px] bg-no-repeat bg-contain flex items-center justify-center'>
                                <p className='w-[250px] text-[#FFF] text-center text-[14px] leading-[17px]'><span className='font-bold uppercase'>Criteria:</span> Stay a total of 50 nights in hotels booked through Fireflies within a 12-month period.</p>
                            </div>
                            <div className='bg-[url("/assets/mb-shape8.png")] w-[330px] h-[325px] bg-no-repeat bg-contain flex items-center justify-center'>
                                <div className="flex flex-col gap-4 justify-center items-cente w-[250px] text-center">
                                    <h1 className="text-[14px] leading-[27px] text-[#FFF]">Reward:</h1>
                                    <p className=" text-[14px] leading-[27px]  text-center text-[#FFF]">Complimentary 5-night stay for two adults with breakfast at a 5-star hotel in a major city (e.g., Paris, Rome, Barcelona). This includes spa treatments, and a fine dining experience at the hotel’s top restaurant.</p>
                                </div>
                            </div>
                        </div>,
                        <div className='w-[330px] flex flex-col gap-[30px] items-center justify-center'>
                            <h1 className='text-[#505D65] text-[24px] leading-[31.2px] uppercase text-center mb-[30px]'>Travel<br></br>
                                Streak Reward</h1>
                            <div className='bg-[url("/assets/mb-shape7.png")] w-[330px] h-[108px] bg-no-repeat bg-contain flex items-center justify-center'>
                                <p className='w-[250px] text-[#FFF] text-center text-[16px] leading-[27px]'><span className='font-bold uppercase'>Criteria:</span> Book a trip every month for 12 months.</p>
                            </div>
                            <div className='bg-[url("/assets/mb-shape8.png")] w-[330px] h-[325px] bg-no-repeat bg-contain flex items-center justify-center'>
                                <div className="flex flex-col gap-4 justify-center items-cente w-[250px] text-center">
                                    <h1 className="text-[16px] leading-[27px] text-[#FFF]">Reward:</h1>
                                    <p className=" text-[16px] leading-[27px]  text-center text-[#FFF]">A unique cultural experience tailored to the user’s interests, such as a private art viewing in Paris, a traditional tea ceremony in Japan, or a behind-the-scenes tour of Broadway in New York.</p>
                                </div>
                            </div>
                        </div>


                    ]} classNames="xl:hidden w-[330px]" dotNavBtnClass={"w-[27.586px] h-[3px]"} navContainerClass='mt-[0px]' dotNavMainContainerClass="" />


                    <div className='hidden  xl:flex  xl:w-[426px] flex-col gap-[30px] xl:gap-0 items-center justify-center'>
                        <h1 className='text-[#505D65] text-[24px] leading-[31.2px] uppercase text-center mb-[30px]'>Travel<br></br>
                            Streak Reward</h1>
                        <div className='bg-[url("/assets/shape7.png")] w-[426px] h-[198px] bg-no-repeat bg-contain flex items-center justify-center'>
                            <p className='w-[318px] text-[#FFF] text-center text-[20px] leading-[30px]'><span className='font-bold uppercase'>Criteria:</span> Book a trip every month for 12 months.</p>
                        </div>
                        <div className='bg-[url("/assets/shape8.png")] w-[426px] h-[385px] bg-no-repeat bg-contain flex items-center justify-center'>
                            <div className="flex flex-col gap-4 justify-center items-cente w-[318px] text-center">
                                <h1 className="text-[20px] text-[#FFF] leading-[30px]">Reward:</h1>
                                <p className="  text-center text-[#FFF] text-[20px] leading-[30px]">1 Eat for Stay Voucher (without obligation per nights)</p>
                                <Divider className="w-[200px] bg-[#FFF] opacity-50" />
                                <p className="text-center text-[#FFF]  text-[20px] leading-[30px]">Unlock Yearly Access to Thousands
                                    of Exclusive Villas and Apartments (BPO Part Should Reach Minimum €3000)</p>
                            </div>
                        </div>
                    </div>

                    <div className='hidden w-[426px] xl:flex flex-col items-center justify-center'>
                        <h1 className='text-[#505D65] text-[24px] leading-[31.2px] uppercase text-center mb-[30px]'>Travel<br></br>
                            Streak Reward</h1>
                        <div className='bg-[url("/assets/shape7.png")] w-[426px] h-[198px] bg-no-repeat bg-contain flex items-center justify-center'>
                            <p className='w-[318px] text-[#FFF] text-center text-[20px] leading-[30px]'><span className='font-bold uppercase'>Criteria:</span>Stay a total of 50 nights in hotels booked through Fireflies within a 12-month period.</p>
                        </div>
                        <div className='bg-[url("/assets/shape8.png")] w-[426px] h-[385px] bg-no-repeat bg-contain flex items-center justify-center'>
                            <div className="flex flex-col gap-4 justify-center items-cente w-[318px] text-center">
                                <h1 className="text-[20px] text-[#FFF] leading-[30px]">Reward:</h1>
                                <p className="text-center text-[#FFF] text-[20px] leading-[30px]">Complimentary 5-night stay for two adults with breakfast at a 5-star hotel in a major city (e.g., Paris, Rome, Barcelona). This includes spa treatments, and a fine dining experience at the hotel’s top restaurant.</p>

                            </div>
                        </div>
                    </div>

                    <div className='hidden w-[426px] xl:flex flex-col items-center justify-center'>
                        <h1 className='text-[#505D65] text-[24px] leading-[31.2px] uppercase text-center mb-[30px]'>Travel<br></br>
                            Streak Reward</h1>
                        <div className='bg-[url("/assets/shape7.png")] w-[426px] h-[198px] bg-no-repeat bg-contain flex items-center justify-center'>
                            <p className='w-[318px] text-[#FFF] text-center text-[20px] leading-[30px]'><span className='font-bold uppercase'>Criteria:</span> Book a trip every month for 12 months.</p>
                        </div>
                        <div className='bg-[url("/assets/shape8.png")] w-[426px] h-[385px] bg-no-repeat bg-contain flex items-center justify-center'>
                            <div className="flex flex-col gap-4 justify-center items-cente w-[318px] text-center">
                                <h1 className="text-[20px] text-[#FFF] leading-[30px]">Reward:</h1>
                                <p className="text-center text-[#FFF] text-[20px] leading-[30px]">A unique cultural experience tailored to the user’s interests, such as a private art viewing in Paris, a traditional tea ceremony in Japan, or a behind-the-scenes tour of Broadway in New York.</p>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>


    )
}

export default RewardProgram