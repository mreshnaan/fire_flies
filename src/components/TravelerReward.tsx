import HorizontalTitle from "./HorizontalTitle"

function TravelerReward() {
    return (
        <div className='flex video-bg1 items-center w-full flex-col md:pt-[150px] pt-10 pb-[100px]'>
            <div className="flex flex-col xl:w-[1280px] 2xl:w-[1538px] max-w-[100%] md:gap-[140px] gap-10 md:px-8 px-5">
                <div className='flex items-start gap-[60px]'>
                    <div className="md:block hidden">
                        <HorizontalTitle title='traveler rewards' mainContainerClassName={"gap-20"} titleClassName='md:w-[120px] w-[0px] text-[#FFF]' strokeClassName="border-[#FFF]"/>
                    </div>

                    <div className="flex flex-col xl:items-start 2xl:items-start items-center gap-[30px]">
                        <h1 className='xl:w-[600px] 2xl:w-[896px] xl:text-left text-[#13AFB6] xl:text-[60px] xl:leading-[68px] 2xl:text-[80px] text-[45px] font-bold 2xl:leading-[88px] uppercase text-center md:pr-0 pr-5'>
                            High-Spend Traveler Rewards
                        </h1>

                        <p className="xl:w-[500px] 2xl:w-[676px] text-[#FFF] md:text-[20px] text-[18px] leading-[30px] text-justify">
                            Recognizing and rewarding substantial $FFT token spending on the platform, with escalating perks from flight upgrades to personalized travel adventures.
                        </p>
                    </div>
                </div>

                <div className='flex items-start gap-[60px]'>
                    <div className='w-[30.58px] md:block hidden'></div>

                    <div>
                        <h1 className="text-[#FFF] md:text-[48px] text-[28px] leading-[48px] md:text-start text-center font-bold">
                            Detailed Spending Thresholds and Rewards
                        </h1>

                        <p className="md:w-[671px] w-full md:text-[20px] text-[17px] leading-[30px] text-justify text-[#FFF] mt-[20px]">
                            With $FFT Tokens, travel becomes more than just an experience; it's an investment in your future adventures. Embrace a world where exploration meets innovation, and every journey adds value to your token portfolio.
                        </p>

                        <div className="block md:hidden mt-10 w-full">
                            <img
                                className="w-[90%]"
                                alt=""
                                src="/assets/reward-group.png"
                            />
                        </div>

                        <div className="md:block hidden mt-[40px] w-full">
                            <div className="flex flex-col">
                                <div className="relative">
                                    <div className="flex-1 flex flex-row justify-start min-w-[168px]">
                                    <div className="absolute left-[-10px] flex  items-center justify-start gap-[18px] max-w-full text-[#FFF]">
                                            <img
                                                className="relative z-[2] xl:h-[226px] 2xl:w-[298px] 2xl:h-[220px]"
                                                alt=""
                                                src="/assets/token-faq-shape1.png"
                                            />

                                            <b className="flex absolute left-[68px] top-[70px] flex-col items-center justify-center z-[3] text-[24px] leading-[26.4px] uppercase text-center">
                                                <p className="m-0">$5,000</p>
                                                <p className="m-0">Token Spent</p>
                                            </b>
                                        </div>

                                        <img
                                            className="self-stretch flex-1 w-[1440px] h-[220px] pt-[2px] relative max-w-full overflow-hidden max-h-full z-[1]"
                                            alt=""
                                            src="/assets/token-faq-shape2.png"
                                        />

                                        <div className="text-[#FFF] absolute left-[298px] top-[40px] z-[2]">
                                            <p className="m-0">
                                                <b>REWARD</b>
                                            </p>
                                            <p className="m-0">&nbsp;</p>
                                            <div className="flex gap-3 items-center mb-[12px]">
                                                <div className=" rounded-[50%] box-border w-5 h-5 z-[2] border-[2px] border-solid border-[#13AFB6]" />
                                                <p className="m-0 ">5 Premium BPO</p>
                                            </div>
                                            <div className="flex gap-3 items-center mb-[12px]">
                                                <div className=" rounded-[50%] box-border w-5 h-5 z-[2] border-[2px] border-solid border-[#13AFB6]" />
                                                <p className="m-0">1 Eat For Stay Voucher</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="relative">
                                    <div className="flex-1 flex md:flex-row flex-col justify-start min-w-[168px]">
                                        <div className="absolute left-[-10px] flex items-center justify-start gap-[18px] max-w-full text-[#FFF]">
                                            <img
                                                className="relative z-[2] w-[298px] h-[316px]"
                                                alt=""
                                                src="assets/travel-rewards-shape3.png"
                                            />
                                
                                            <b className="flex absolute left-[68px] top-[130px] flex-col items-center justify-center z-[3] text-[24px] leading-[26.4px] uppercase text-center">
                                                <p className="m-0">$20,000</p>
                                                <p className="m-0">Token Spent</p>
                                            </b>
                                        </div>
                                
                                        <img
                                            className="self-stretch flex-1 w-[1440px] h-[316px] relative max-w-full overflow-hidden max-h-full z-[1]"
                                            alt=""
                                            src="assets/travel-rewards-shape4.png"
                                        />
                                
                                        <div className="text-[#FFF] absolute left-[298px] top-[40px] z-[2]">
                                            <p className="m-0">
                                                <b>REWARD</b>
                                            </p>
                                            <p className="m-0">&nbsp;</p>
                                            <div className="flex gap-3 items-center mb-[12px]">
                                                <div className=" rounded-[50%] box-border w-5 h-5 z-[2] border-[2px] border-solid border-[#13AFB6]" />
                                                <p className="m-0 ">Unlock 1-year Access to Thousands of Exclusive Villas and Apartments</p>
                                            </div>
                                            <div className="flex gap-3 items-center mb-[12px]">
                                                <div className=" rounded-[50%] box-border w-5 h-5 z-[2] border-[2px] border-solid border-[#13AFB6]" />
                                                <p className="m-0">2 Eat For Stay Voucher</p>
                                            </div>
                                            <div className="flex gap-3 items-center mb-[12px]">
                                                <div className=" rounded-[50%] box-border w-5 h-5 z-[2] border-[2px] border-solid border-[#13AFB6]" />
                                                <p className="m-0">2 VIP Discount Pass</p>
                                            </div>
                                            <div className="flex gap-3 items-center">
                                                <div className=" rounded-[50%] box-border w-5 h-5 z-[2] border-[2px] border-solid border-[#13AFB6]" />
                                                <p className="m-0">Zero Distribution Fee for 1 Year</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex-1 flex md:flex-row flex-col justify-start items-center relative mt-[20px]">
                                    <div className="flex flex-row md:w-full w-[50%] md:h-full h-[200px]">
                                        <img
                                            className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full md:w-[1440px] md:h-[236px] w-full z-[1]"
                                            alt=""
                                            src="/assets/travel-rewards-shape5.png"
                                        />
                                    </div>

                                    <div className="text-[#FFF] absolute left-[270px] top-[74px] z-[10]">
                                        <p className="text-[#13AFB6] text-[32px] uppercase font-bold leading-[35.2px]]">$50,000 Token Spent - COMING SOON</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex items-start gap-[60px] '>
                    <div className="md:block hidden">
                        <HorizontalTitle title='PROGRESS' mainContainerClassName={"gap-20"} titleClassName='w-[120px] text-[#FFF]' strokeClassName="border-[#FFF]" />
                    </div>

                    <div className="flex flex-col md:gap-[50px] gap-[20px]">
                        <h1 className='md:text-left text-center text-[#FFF] md:text-[48px] text-[25px] font-bold leading-[48px] md:uppercase'>
                            Annual Giving Campaign to Your Progress
                        </h1>

                        <div className="md:block hidden">
                            <img src="/assets/bar.svg" alt="" srcSet="" className="mt-[88px] "/>
                        </div>

                        <div className="block md:hidden">
                            <img src="/assets/bar-mobile.png" alt="" srcSet="" className=" "/>
                        </div>

                        <p className="md:text-[15px] text-[10px] md:text-start text-center leading-[22.5px] text-[#FFF]">
                            *Available only for bookings and services payed with $FFT tokens<br></br>
                            *The process restarts every year
                        </p>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default TravelerReward