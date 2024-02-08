import Divider from './Divider'
import HorizontalTitle from './HorizontalTitle'

function RewardProgram() {
    return (
        <div className='flex items-center w-full flex-col pt-[150px] pb-[200px] '>
            <div className="flex flex-col xl:w-[1280px] 2xl:w-[1538px] gap-[140px] px-6 ">
                <div className='flex justify-between '>
                    <div className='flex items-start gap-[60px] '>
                        <HorizontalTitle title='Introducing Fireflies WEB3' mainContainerClassName='gap-[100px]' titleClassName='w-[200px] text-[#505D65]' strokeClassName='border-[#505D65]' />
                        <div className="flex flex-col gap-[30px]">
                            <h1 className=' xl:w-[500px] 2xl:w-[671px] text-[#505D65]  2xl:text-[48px] 2xl:leading-[62.4px] font-bold'>Fireflies Digital Collectibles</h1>
                            <h1 className=' xl:text-[60px] xl:leading-[68px] xl:w-[700px] 2xl:w-[948px] text-left text-[#505D65] 2xl:text-[80px] font-bold 2xl:leading-[88px] uppercase'>12-Month Streak NFT Reward Program</h1>
                        </div>
                    </div>
                    <p className='xl:text-[16px] xl:w-[356px] 2xl:text-[20px] 2xl:w-[456px] text-[#505D65] 2xl:leading-[30px] text-justify'>Earn a special "12-Month Streak NFT" by engaging with various services offered by Fireflies, like booking trips, renting cars, and staying in hotels. This NFT is earned by consistent usage over a 12-month period and is redeemable for exclusive rewards.</p>

                </div>
                <div className='flex justify-around w-full items-start'>

                    <div className='w-[426px] flex flex-col items-center justify-center'>
                        <h1 className='text-[#505D65] text-[24px] leading-[31.2px] uppercase text-center mb-[30px]'>Travel<br></br>
                            Streak Reward</h1>
                        <div className='bg-[url("/assets/shape7.png")] w-[426px] h-[198px] bg-no-repeat bg-contain flex items-center justify-center'>
                            <p className='w-[318px] text-[#FFF] text-center text-[20px] leading-[30px]'><span className='font-bold uppercase'>Criteria:</span> Book a trip every month for 12 months.</p>
                        </div>
                        <div className='bg-[url("/assets/shape8.png")] w-[426px] h-[385px] bg-no-repeat bg-contain flex items-center justify-center'>
                            <div className="flex flex-col gap-4 justify-center items-cente w-[318px] text-center">
                                <h1 className="text-[20px] text-[#FFF] leading-[30px]">Reward:</h1>
                                <p className="text-center text-[#FFF] text-[20px] leading-[30px]">1 Eat for Stay Voucher (without obligation per nights)</p>
                                <Divider className="w-[200px] bg-[#FFF] opacity-50" />
                                <p className="text-center text-[#FFF] text-[20px] leading-[30px]">Unlock Yearly Access to Thousands
                                    of Exclusive Villas and Apartments (BPO Part Should Reach Minimum €3000)</p>
                            </div>
                        </div>
                    </div>

                    <div className='w-[426px] flex flex-col items-center justify-center'>
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

                    <div className='w-[426px] flex flex-col items-center justify-center'>
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