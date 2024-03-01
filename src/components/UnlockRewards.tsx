import HorizontalTitle from "@/components/HorizontalTitle.tsx";

const UnlockRewards = () => {
    return (
        <div id='tokenomics'
             className='flex items-center w-full flex-col pt-[10px]  xl:pt-[150px]'>
            <div
                className={`xl:hidden w-full flex flex-row items-center justify-start gap-[20px] pb-[50px]`}
            >
                <div className="w-[267px] h-[0px] opacity-30 border border-zinc-500"></div>
                <p
                    className={
                        "font-bold text-[10px] xl:text-[12px] text-[#505D65] uppercase  w-fit"
                    }
                >
                    Referral program
                </p>
            </div>
            <div className="flex flex-col w-[330px] xl:w-[1280px]  2xl:w-[1538px] gap-[50px] xl:gap-[20px] xl:px-6  ">

                <div className='flex flex-col xl:flex-row gap-[30px] xl:gap-0 justify-between '>
                    <div className='flex items-start gap-[60px] '>
                        <HorizontalTitle title='referral program' mainContainerClassName='gap-[20px] hidden xl:flex'
                                         titleClassName='w-[200px] text-[#505D65]' strokeClassName='border-[#505D65]'/>
                        <div className="flex flex-col gap-[30px]">
                            <div className="block xl:hidden w-[325px] text-center text-gray-600 text-2xl font-bold font-['Sofia Pro'] leading-[31.20px]">$FFT Token<br/>Sales Referral Program</div>
                            <p className='xl:block hidden text-[24px] leading-[31.2px] xl:w-[500px] 2xl:w-[671px] text-[#505D65]  2xl:text-[48px] text-center xl:text-start  2xl:leading-[62.4px] font-bold'>$FFT
                                Token Sales Referral Program</p>
                            <h1 className='text-[40px] leading-[44px] text-center xl:text-left xl:w-[600px] 2xl:w-[900px] text-[#505D65] xl:text-[60px] xl:leading-[68px] 2xl:text-[80px] 2xl:leading-[88px] font-bold uppercase'>Unlock
                                Rewards with Our Referral Program</h1>
                        </div>
                    </div>

                    <div className='hidden xl:block text-gray-600 text-xl font-normal leading-[30px] h-fit  border border-t-[#505D65] border-s-0 border-e-0  border-b-[#505D65] p-5'>
                        Dive into the Fireflies Referral Program and climb our Revenue Ladder. Each referral you
                        make boosts your earnings and strengthens our community. </div>
                        <div className="block xl:hidden border border-t-[#505D65] border-s-0 border-e-0  border-b-[#505D65] p-5 w-full text-start text-gray-600 text-xs font-normal font-['Sofia Pro'] leading-[18px]">Dive into the Fireflies Referral Program and climb our Revenue Ladder. Each referral you make boosts your earnings and strengthens our community.</div>

                </div>
                <div>
                    <img src="/assets/unlockReward-1.svg" alt="" srcSet=""
                         className='xl:block hidden w-[330px] xl:w-[1439px] pt-[70px] object-contain'/>
                    <img src="/assets/unlockRewardMobile.svg" alt="" srcSet=""
                         className='block xl:hidden w-[330px] xl:w-[1439px]  object-contain'/>
                </div>
                <div
                    className='flex flex-col xl:flex-row w-full justify-between items-center py-[27px] px-[50px] border border-t-[#505D65] border-s-0 border-e-0  border-b-[#505D65]'>
                    <h1 className=' xl:block hidden text-[40px] w-1/3 leading-[44px] text-center xl:text-left  xl:text-[60px] xl:leading-[68px] 2xl:text-5xl 2xl:leading-[88px] font-bold uppercase text-teal-500'>
                        Grow Together
                    </h1>
                    <div className="w-[910px] xl:block hidden"><span
                        className="text-gray-600 text-xl font-bold font-['Sofia Pro'] leading-[30px]">By participating in the Fireflies Referral Program, you're actively shaping the future of travel.<br/></span><span
                        className="text-gray-600 text-xl font-normal font-['Sofia Pro'] leading-[30px]">Share the opportunity, expand our community, and let's embark on this rewarding journey together.</span>
                    </div>


                    <div className="block xl:hidden text-teal-500 text-2xl font-bold font-['Sofia Pro'] uppercase leading-relaxed">Grow Together</div>
                    <div className="w-[325px] text-center block xl:hidden"><span
                        className="text-gray-600 text-xs font-bold font-['Sofia Pro'] leading-[18px]">By participating in the Fireflies Referral Program, you're actively shaping the future of travel. </span><span
                        className="text-gray-600 text-xs font-normal font-['Sofia Pro'] leading-[18px]">Share the opportunity, expand our community, and let's embark on this rewarding journey together.</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UnlockRewards;
