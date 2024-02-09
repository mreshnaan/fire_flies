import HorizontalTitle from './HorizontalTitle'

function TokenFaq() {
    return (
        <div className='flex items-center w-full flex-col pt-[150px] pb-[100px]'>
            <div className="flex flex-col xl:w-[1280px] 2xl:w-[1538px] w-full md:gap-[140px] gap-5 md:px-6">
                <div className='flex md:flex-row flex-col items-start md:gap-[60px] gap-2'>
                    <div className="md:block hidden">
                        <HorizontalTitle title='journey map' mainContainerClassName='gap-[60px]' titleClassName='w-[100px]'/>
                    </div>

                    <div className="flex flex-col items-start md:gap-[30px] gap-3">
                        <h1 className='md:w-[671px] w-full md:text-start text-center text-[#505D65] md:text-[48px] text-[25px] leading-[72px] font-bold'>
                            Navigating New Horizons:
                        </h1>

                        <h1 className='md:w-[650px] w-full md:text-left text-center text-[#505D65] md:text-[80px] text-[40px] font-bold md:leading-[88px] uppercase'>
                            The $FFT Token Journey Map
                        </h1>
                    </div>
                </div>

                <div className='md:hidden flex flex-col px-2'>
                    <img
                        className="relative object-contain z-[2] w-full"
                        src="/assets/journey-map.png"
                        alt=""
                    />
                </div>

                <div className='md:flex hidden flex-col'>
                    <div className="relative">
                        <div className="flex-1 flex flex-row justify-start min-w-[168px]">
                            <div className="absolute left-[-10px] flex items-center justify-start gap-[18px] max-w-full text-[#FFF]">
                                <img
                                    className="relative object-contain z-[2] w-[298px] h-[236px]"
                                    alt=""
                                    src="assets/token-faq-shape1.png"
                                />
                                <b className="flex absolute left-[88px] top-[60px] flex-col items-center justify-center uppercase z-[3] ">
                                    <p className="m-0 text-[#FFF] text-[20px] leading-[10px] font-bold uppercase text-center">2024</p>
                                    <p className="m-0 text-[#FFF] text-[80px] leading-[88px] font-bold uppercase">q1</p>
                                </b>
                            </div>

                            <img
                                className="self-stretch flex-1 w-[1440px] h-[236px] relative max-w-full overflow-hidden max-h-full object-contain z-[1]"
                                alt=""
                                src="assets/token-faq-shape2.png"
                            />
                            <div className="text-[#FFF] absolute left-[298px] top-[40px] z-[2]">
                                <div className="flex gap-3 items-center mb-[12px]">
                                    <div className=" rounded-[50%] box-border w-5 h-5 z-[2] border-[2px] border-solid border-[#13AFB6]"/>
                                    <p className="m-0 ">$FFT Smart Contract Development</p>
                                </div>
                                <div className="flex gap-3 items-center mb-[12px]">
                                    <div className=" rounded-[50%] box-border w-5 h-5 z-[2] border-[2px] border-solid border-[#13AFB6]"/>
                                    <p className="m-0">Crowdsale Contract Development</p>
                                </div>
                                <div className="flex gap-3 items-center mb-[12px]">
                                    <div className=" rounded-[50%] box-border w-5 h-5 z-[2] border-[2px] border-solid border-[#13AFB6]"/>
                                    <p className="m-0">$FFT Token Audit</p>
                                </div>
                                <div className="flex gap-3 items-center mb-[12px]">
                                    <div className=" rounded-[50%] box-border w-5 h-5 z-[2] border-[2px] border-solid border-[#13AFB6]"/>
                                    <p className="m-0">Start of $FFT Pre-Sale</p>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="flex-1 flex flex-row justify-start min-w-[168px]">
                            <div className="absolute left-[-10px] flex items-center justify-start gap-[18px] max-w-full text-[#FFF]">
                                <img
                                    className="relative object-contain z-[2] w-[298px] h-[236px]"
                                    alt=""
                                    src="assets/token-faq-shape1.png"
                                />
                                <b className="flex absolute left-[88px] top-[60px] flex-col items-center justify-center uppercase z-[3] ">
                                    <p className="m-0 text-[#FFF] text-[20px] leading-[10px] font-bold uppercase text-center">2024</p>
                                    <p className="m-0 text-[#FFF] text-[80px] leading-[88px] font-bold uppercase">q2</p>
                                </b>
                            </div>

                            <img
                                className="self-stretch flex-1 w-[1440px] h-[236px] relative max-w-full overflow-hidden max-h-full object-contain z-[1]"
                                alt=""
                                src="assets/token-faq-shape2.png"
                            />
                            <div className="text-[#FFF] absolute left-[298px] top-[40px] z-[2]">
                                <div className="flex gap-3 items-center mb-[12px]">
                                    <div className=" rounded-[50%] box-border w-5 h-5 z-[2] border-[2px] border-solid border-[#13AFB6]"/>
                                    <p className="m-0 ">Start of Fireflies Web3 Platform Development</p>
                                </div>
                                <div className="flex gap-3 items-center mb-[12px]">
                                    <div className=" rounded-[50%] box-border w-5 h-5 z-[2] border-[2px] border-solid border-[#13AFB6]"/>
                                    <p className="m-0">Start of High-Spend Traveler Reward Development</p>
                                </div>
                                <div className="flex gap-3 items-center mb-[12px]">
                                    <div className=" rounded-[50%] box-border w-5 h-5 z-[2] border-[2px] border-solid border-[#13AFB6]"/>
                                    <p className="m-0">Start of Tier-Based Staking Options Development</p>
                                </div>
                                <div className="flex gap-3 items-center mb-[12px]">
                                    <div className=" rounded-[50%] box-border w-5 h-5 z-[2] border-[2px] border-solid border-[#13AFB6]"/>
                                    <p className="m-0">Start of Adventure Raffles Development</p>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="flex-1 flex flex-row justify-start min-w-[168px]">
                            <div className="absolute left-[-10px] flex items-center justify-start gap-[18px] max-w-full text-[#FFF]">
                                <img
                                    className="relative object-contain z-[2] w-[298px] h-[236px]"
                                    alt=""
                                    src="assets/token-faq-shape1.png"
                                />
                                <b className="flex absolute left-[88px] top-[60px] flex-col items-center justify-center uppercase z-[3] ">
                                    <p className="m-0 text-[#FFF] text-[20px] leading-[10px] font-bold uppercase text-center">2024</p>
                                    <p className="m-0 text-[#FFF] text-[80px] leading-[88px] font-bold uppercase">q3</p>
                                </b>
                            </div>

                            <img
                                className="self-stretch flex-1 w-[1440px] h-[236px] relative max-w-full overflow-hidden max-h-full object-contain z-[1]"
                                alt=""
                                src="assets/token-faq-shape2.png"
                            />
                            <div className="text-[#FFF] absolute left-[298px] top-[40px] z-[2]">
                                <div className="flex gap-3 items-center mb-[12px]">
                                    <div className=" rounded-[50%] box-border w-5 h-5 z-[2] border-[2px] border-solid border-[#13AFB6]"/>
                                    <p className="m-0 ">$FFT Token Launch</p>
                                </div>
                                <div className="flex gap-3 items-center mb-[12px]">
                                    <div className=" rounded-[50%] box-border w-5 h-5 z-[2] border-[2px] border-solid border-[#13AFB6]"/>
                                    <p className="m-0">DEX Listing</p>
                                </div>
                                <div className="flex gap-3 items-center mb-[12px]">
                                    <div className=" rounded-[50%] box-border w-5 h-5 z-[2] border-[2px] border-solid border-[#13AFB6]"/>
                                    <p className="m-0">Launch of 12-Month Streak NFT Reward Program</p>
                                </div>
                                <div className="flex gap-3 items-center mb-[12px]">
                                    <div className=" rounded-[50%] box-border w-5 h-5 z-[2] border-[2px] border-solid border-[#13AFB6]"/>
                                    <p className="m-0">Launch of Buy & Burn Mechanism</p>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="flex-1 flex flex-row justify-start min-w-[168px]">
                            <div className="absolute left-[-10px] flex items-center justify-start gap-[18px] max-w-full text-[#FFF]">
                                <img className="relative object-contain z-[2] w-[298px] h-[236px]"
                                    alt=""
                                    src="assets/token-faq-shape1.png"
                                />
                                <b className="flex absolute left-[88px] top-[60px] flex-col items-center justify-center uppercase z-[3] ">
                                    <p className="m-0 text-[#FFF] text-[20px] leading-[10px] font-bold uppercase text-center">2024</p>
                                    <p className="m-0 text-[#FFF] text-[80px] leading-[88px] font-bold uppercase">q4</p>
                                </b>
                            </div>

                            <img
                                className="self-stretch flex-1 w-[1440px] h-[236px] relative max-w-full overflow-hidden max-h-full object-contain z-[1]"
                                alt=""
                                src="assets/token-faq-shape2.png"
                            />
                            <div className="text-[#FFF] absolute left-[298px] top-[40px] z-[2]">
                                <div className="flex gap-3 items-center mb-[12px]">
                                    <div className=" rounded-[50%] box-border w-5 h-5 z-[2] border-[2px] border-solid border-[#13AFB6]"/>
                                    <p className="m-0 ">CEX Listing</p>
                                </div>
                                <div className="flex gap-3 items-center mb-[12px]">
                                    <div className=" rounded-[50%] box-border w-5 h-5 z-[2] border-[2px] border-solid border-[#13AFB6]"/>
                                    <p className="m-0">Partnership Expansion Initiatives</p>
                                </div>
                                <div className="flex gap-3 items-center mb-[12px]">
                                    <div className=" rounded-[50%] box-border w-5 h-5 z-[2] border-[2px] border-solid border-[#13AFB6]"/>
                                    <p className="m-0">Launch of Environmental and Social Responsibility NFT Program</p>
                                </div>
                                <div className="flex gap-3 items-center mb-[12px]">
                                    <div className=" rounded-[50%] box-border w-5 h-5 z-[2] border-[2px] border-solid border-[#13AFB6]"/>
                                    <p className="m-0">Launch of User-Generated Content Rewards Program</p>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="flex-1 flex flex-row justify-start relative">
                        <img
                            className="self-stretch  w-[1440px] h-[236px] flex-1 relative max-w-full overflow-hidden max-h-full z-[1]"
                            alt=""
                            src="assets/token-faq-shape3.png"
                        />
                        <div className="text-[#FFF] absolute xl:left-[270px] xl:top-[50px] 2xl:left-[370px] 2xl:top-[56px] z-[2]">
                            <p className="text-[#13AFB6] text-[80px] uppercase font-bold leading-[88px]">2025 Coming soon</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default TokenFaq