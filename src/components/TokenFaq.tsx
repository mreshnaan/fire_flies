import Divider from './Divider'
import HorizontalTitle from './HorizontalTitle'
import { CustomCarousel } from './Slider'

function TokenFaq() {
    return (
        <div id='roadmap' className='flex items-center w-full flex-col xl:pt-[150px] '>
            <div
                className={`xl:hidden w-full flex flex-row items-center justify-start gap-[20px] py-[50px]`}
            >
                <div className="w-[267px] h-[0px] opacity-30 border border-zinc-500"></div>
                <p
                    className={
                        "font-bold text-[10px] xl:text-[12px] text-[#505D65] uppercase  w-fit"
                    }
                >
                    Journey map
                </p>
            </div>
            <div className="flex flex-col w-[330px] xl:w-[1280px] 2xl:w-[1538px] xl:gap-[140px] px-6 ">

                <div className='flex items-start gap-[60px] '>
                    <HorizontalTitle title='journey map' mainContainerClassName='gap-[60px] hidden xl:flex' titleClassName='w-[100px]' />

                    <div className="flex flex-col xl:gap-[30px] gap-3">
                        <h1 className='xl:w-[671px] xl:text-left text-center text-[#505D65] xl:text-[48px] text-[22px] xl:leading-[72px] font-bold'>Navigating New Horizons:</h1>
                        <h1 className='xl:w-[650px] xl:text-left text-center text-[#505D65] xl:text-[80px] text-[40px] font-bold xl:leading-[88px] uppercase'>The $FFT Token Journey Map</h1>
                    </div>
                </div>

                <div className='flex flex-col'>
                    <CustomCarousel sliders={[
                        <div className='min-w-[330px] min-h-[400px] relative'>
                            <div className="flex flex-col items-center xl:hidden mt-10 w-full gap-8">
                                <div className="flex flex-col items-center w-full">
                                    <div
                                        className="absolute justify-center flex items-center gap-[18px] max-w-full text-[#FFF]">
                                        <img
                                            src="/assets/shape9.png"
                                            alt=""
                                            className="w-[196px] h-[120px]"
                                        />

                                        <b className="flex absolute justify-center flex-col items-center top-3 z-[3] text-[24px] leading-[26.4px] uppercase text-center  gap-3">
                                            <p className="m-0">2024</p>
                                            <p className="m-0 text-[50px]">Q1</p>
                                        </b>
                                    </div>
                                </div>
                                <div className="flex flex-col items-center w-full mt-[100px]">
                                    <div
                                        className="absolute justify-center flex items-center gap-[18px] max-w-full text-[#FFF]">
                                        <img
                                            src="/assets/shape6.png"
                                            alt=""
                                            className="w-[325px] h-[250.5px]"
                                        />
                                        <b className="flex absolute top-[40px] justify-start flex-col z-[3] text-[14px] leading-[20.8px]  gap-2">
                                            <div className="flex gap-3 items-center">
                                                <div
                                                    className="rounded-[50%] box-border w-5 h-5 z-[2] border-[2px] border-solid border-[#13AFB6]" />
                                                <p className="m-0">$FFT Smart Contract<br /> Development</p>
                                            </div>

                                            <div className="flex gap-3 items-center">
                                                <div
                                                    className="rounded-[50%] box-border w-5 h-5 z-[2] border-[2px] border-solid border-[#13AFB6]" />
                                                <p className="m-0">Crowdsale Contract<br /> Development</p>
                                            </div>

                                            <div className="flex gap-3 items-center">
                                                <div
                                                    className="rounded-[50%] box-border w-5 h-5 z-[2] border-[2px] border-solid border-[#13AFB6]" />
                                                <p className="m-0">$FFT Token Audit</p>
                                            </div>

                                            <div className="flex gap-3 items-center">
                                                <div
                                                    className="rounded-[50%] box-border w-5 h-5 z-[2] border-[2px] border-solid border-[#13AFB6]" />
                                                <p className="m-0">Start of $FFT Pre-Sale</p>
                                            </div>
                                        </b>
                                    </div>
                                </div>
                            </div>
                        </div>,
                        <div className='min-w-[330px] min-h-[450px] relative'>
                            <div className="flex flex-col items-center xl:hidden mt-10 w-full gap-8">
                                <div className="flex flex-col items-center w-full">
                                    <div
                                        className="absolute justify-center flex items-center gap-[18px] max-w-full text-[#FFF]">
                                        <img
                                            src="/assets/shape9.png"
                                            alt=""
                                            className="w-[196px] h-[120px]"
                                        />

                                        <b className="flex absolute justify-center flex-col items-center top-3 z-[3] text-[24px] leading-[26.4px] uppercase text-center  gap-3">
                                            <p className="m-0">2024</p>
                                            <p className="m-0 text-[50px]">Q2</p>
                                        </b>
                                    </div>
                                </div>
                                <div className="flex flex-col items-center w-full mt-[100px]">
                                    <div
                                        className="absolute justify-center flex items-center gap-[18px] max-w-full text-[#FFF]">
                                        <img
                                            src="/assets/shape6.png"
                                            alt=""
                                            className="w-[325px] h-[280.5px]"
                                        />
                                        <b className="flex absolute top-[45px] justify-start flex-col z-[3]  text-[14px] leading-[16.8px] gap-2">
                                            <div className="flex gap-3 items-center">
                                                <div className="rounded-[50%] box-border w-5 h-5 z-[2] border-[2px] border-solid border-[#13AFB6]" />
                                                <p className="m-0">Start of Fireflies Web3<br /> Platform Development</p>
                                            </div>

                                            <div className="flex gap-3 items-center">
                                                <div className="rounded-[50%] box-border w-5 h-5 z-[2] border-[2px] border-solid border-[#13AFB6]" />
                                                <p className="m-0">Start of High-Spend<br /> Traveler Reward<br /> Development</p>
                                            </div>

                                            <div className="flex gap-3 items-center">
                                                <div className="rounded-[50%] box-border w-5 h-5 z-[2] border-[2px] border-solid border-[#13AFB6]" />
                                                <p className="m-0">Start of Tier-Based<br /> Staking Options<br /> Development</p>
                                            </div>

                                            <div className="flex gap-3 items-center">
                                                <div className="rounded-[50%] box-border w-5 h-5 z-[2] border-[2px] border-solid border-[#13AFB6]" />
                                                <p className="m-0">Start of Adventure<br /> Raffles Development</p>
                                            </div>
                                        </b>
                                    </div>
                                </div>
                            </div>
                        </div>,
                        <div className='min-w-[330px] min-h-[400px] relative'>
                            <div className="flex flex-col items-center xl:hidden mt-10 w-full gap-8">
                                <div className="flex flex-col items-center w-full">
                                    <div
                                        className="absolute justify-center flex items-center gap-[18px] max-w-full text-[#FFF]">
                                        <img
                                            src="/assets/shape9.png"
                                            alt=""
                                            className="w-[196px] h-[120px]"
                                        />

                                        <b className="flex absolute justify-center flex-col items-center top-3 z-[3] text-[24px] leading-[26.4px] uppercase text-center  gap-3">
                                            <p className="m-0">2024</p>
                                            <p className="m-0 text-[50px]">Q3</p>
                                        </b>
                                    </div>
                                </div>
                                <div className="flex flex-col items-center w-full mt-[100px]">
                                    <div
                                        className="absolute justify-center flex items-center gap-[18px] max-w-full text-[#FFF]">
                                        <img
                                            src="/assets/shape6.png"
                                            alt=""
                                            className="w-[325px] h-[250.5px]"
                                        />
                                        <b className="flex absolute top-[40px] justify-start flex-col z-[3]  text-[14px] leading-[16.8px] gap-2">
                                            <div className="flex gap-3 items-center">
                                                <div className="rounded-[50%] box-border w-5 h-5 z-[2] border-[2px] border-solid border-[#13AFB6]" />
                                                <p className="m-0">$FFT Token Launch</p>
                                            </div>

                                            <div className="flex gap-3 items-center">
                                                <div className="rounded-[50%] box-border w-5 h-5 z-[2] border-[2px] border-solid border-[#13AFB6]" />
                                                <p className="m-0">DEX Listing</p>
                                            </div>

                                            <div className="flex gap-3 items-center">
                                                <div className="rounded-[50%] box-border w-5 h-5 z-[2] border-[2px] border-solid border-[#13AFB6]" />
                                                <p className="m-0">Launch of 12-Month<br /> Streak NFT Reward Program</p>
                                            </div>

                                            <div className="flex gap-3 items-center">
                                                <div className="rounded-[50%] box-border w-5 h-5 z-[2] border-[2px] border-solid border-[#13AFB6]" />
                                                <p className="m-0">Launch of Buy & Burn <br />Mechanism</p>
                                            </div>
                                        </b>
                                    </div>
                                </div>
                            </div>
                        </div>,
                        <div className='min-w-[330px] min-h-[400px] relative'>
                            <div className="flex flex-col items-center xl:hidden mt-10 w-full gap-8">
                                <div className="flex flex-col items-center w-full">
                                    <div
                                        className="absolute justify-center flex items-center gap-[18px] max-w-full text-[#FFF]">
                                        <img
                                            src="/assets/shape9.png"
                                            alt=""
                                            className="w-[196px] h-[120px]"
                                        />

                                        <b className="flex absolute justify-center flex-col items-center top-3 z-[3] text-[24px] leading-[26.4px] uppercase text-center  gap-3">
                                            <p className="m-0">2024</p>
                                            <p className="m-0 text-[50px]">Q4</p>
                                        </b>
                                    </div>
                                </div>
                                <div className="flex flex-col items-center w-full mt-[100px]">
                                    <div
                                        className="absolute justify-center flex items-center gap-[18px] max-w-full text-[#FFF]">
                                        <img
                                            src="/assets/shape6.png"
                                            alt=""
                                            className="w-[325px] h-[250.5px]"
                                        />
                                        <b className="flex absolute top-[46px] justify-start flex-col z-[3]  text-[14px] leading-[16.8px] gap-2">
                                            <div className="flex gap-3 items-center">
                                                <div className="rounded-[50%] box-border w-5 h-5 z-[2] border-[2px] border-solid border-[#13AFB6]" />
                                                <p className="m-0">CEX Listing</p>
                                            </div>

                                            <div className="flex gap-3 items-center">
                                                <div className="rounded-[50%] box-border w-5 h-5 z-[2] border-[2px] border-solid border-[#13AFB6]" />
                                                <p className="m-0">Partnership Expansion <br />Initiatives</p>
                                            </div>

                                            <div className="flex gap-3 items-center">
                                                <div className="rounded-[50%] box-border w-5 h-5 z-[2] border-[2px] border-solid border-[#13AFB6]" />
                                                <p className="m-0">
                                                    Launch of Environmental <br />
                                                    and Social Responsibility<br /> NFT Program
                                                </p>
                                            </div>

                                            <div className="flex gap-3 items-center">
                                                <div className="rounded-[50%] box-border w-5 h-5 z-[2] border-[2px] border-solid border-[#13AFB6]" />
                                                <p className="m-0">Launch of User-Generated<br /> Content Rewards Program</p>
                                            </div>
                                        </b>
                                    </div>
                                </div>
                            </div>
                        </div>,

                    ]} classNames="xl:hidden w-[330px]" dotNavBtnClass={"w-[27.586px] h-[3px]"} navContainerClass='mt-[0px]' dotNavMainContainerClass="" />


                    <div className="hidden xl:block relative">

                        <div className="flex-1 flex flex-row justify-start min-w-[168px]">
                            <div
                                className="absolute left-[-10px] flex items-center justify-start gap-[18px] max-w-full text-[#FFF]">
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
                                    <div className=" rounded-[50%] box-border w-5 h-5 z-[2] border-[2px] border-solid border-[#13AFB6]" />
                                    <p className="m-0 ">$FFT Smart Contract Development</p>
                                </div>
                                <div className="flex gap-3 items-center mb-[12px]">
                                    <div className=" rounded-[50%] box-border w-5 h-5 z-[2] border-[2px] border-solid border-[#13AFB6]" />
                                    <p className="m-0">Crowdsale Contract Development</p>
                                </div>
                                <div className="flex gap-3 items-center mb-[12px]">
                                    <div className=" rounded-[50%] box-border w-5 h-5 z-[2] border-[2px] border-solid border-[#13AFB6]" />
                                    <p className="m-0">$FFT Token Audit</p>
                                </div>
                                <div className="flex gap-3 items-center mb-[12px]">
                                    <div className=" rounded-[50%] box-border w-5 h-5 z-[2] border-[2px] border-solid border-[#13AFB6]" />
                                    <p className="m-0">Start of $FFT Pre-Sale</p>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="hidden xl:block relative">
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
                                    <div className=" rounded-[50%] box-border w-5 h-5 z-[2] border-[2px] border-solid border-[#13AFB6]" />
                                    <p className="m-0 ">Start of Fireflies Web3 Platform Development</p>
                                </div>
                                <div className="flex gap-3 items-center mb-[12px]">
                                    <div className=" rounded-[50%] box-border w-5 h-5 z-[2] border-[2px] border-solid border-[#13AFB6]" />
                                    <p className="m-0">Start of High-Spend Traveler Reward Development</p>
                                </div>
                                <div className="flex gap-3 items-center mb-[12px]">
                                    <div className=" rounded-[50%] box-border w-5 h-5 z-[2] border-[2px] border-solid border-[#13AFB6]" />
                                    <p className="m-0">Start of Tier-Based Staking Options Development</p>
                                </div>
                                <div className="flex gap-3 items-center mb-[12px]">
                                    <div className=" rounded-[50%] box-border w-5 h-5 z-[2] border-[2px] border-solid border-[#13AFB6]" />
                                    <p className="m-0">Start of Adventure Raffles Development</p>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="hidden xl:block relative">
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
                                    <div className=" rounded-[50%] box-border w-5 h-5 z-[2] border-[2px] border-solid border-[#13AFB6]" />
                                    <p className="m-0 ">$FFT Token Launch</p>
                                </div>
                                <div className="flex gap-3 items-center mb-[12px]">
                                    <div className=" rounded-[50%] box-border w-5 h-5 z-[2] border-[2px] border-solid border-[#13AFB6]" />
                                    <p className="m-0">DEX Listing</p>
                                </div>
                                <div className="flex gap-3 items-center mb-[12px]">
                                    <div className=" rounded-[50%] box-border w-5 h-5 z-[2] border-[2px] border-solid border-[#13AFB6]" />
                                    <p className="m-0">Launch of 12-Month Streak NFT Reward Program</p>
                                </div>
                                <div className="flex gap-3 items-center mb-[12px]">
                                    <div className=" rounded-[50%] box-border w-5 h-5 z-[2] border-[2px] border-solid border-[#13AFB6]" />
                                    <p className="m-0">Launch of Buy & Burn Mechanism</p>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="hidden xl:block relative">
                        <div className="flex-1 flex flex-row justify-start min-w-[168px]">
                            <div className="absolute left-[-10px] flex items-center justify-start gap-[18px] max-w-full text-[#FFF]">
                                <img
                                    className="relative object-contain z-[2] w-[298px] h-[236px]"
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
                                    <div className=" rounded-[50%] box-border w-5 h-5 z-[2] border-[2px] border-solid border-[#13AFB6]" />
                                    <p className="m-0 ">CEX Listing</p>
                                </div>
                                <div className="flex gap-3 items-center mb-[12px]">
                                    <div className=" rounded-[50%] box-border w-5 h-5 z-[2] border-[2px] border-solid border-[#13AFB6]" />
                                    <p className="m-0">Partnership Expansion Initiatives</p>
                                </div>
                                <div className="flex gap-3 items-center mb-[12px]">
                                    <div className=" rounded-[50%] box-border w-5 h-5 z-[2] border-[2px] border-solid border-[#13AFB6]" />
                                    <p className="m-0">Launch of Environmental and Social Responsibility NFT Program</p>
                                </div>
                                <div className="flex gap-3 items-center mb-[12px]">
                                    <div className=" rounded-[50%] box-border w-5 h-5 z-[2] border-[2px] border-solid border-[#13AFB6]" />
                                    <p className="m-0">Launch of User-Generated Content Rewards Program</p>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="hidden xl:flex flex-1  flex-row justify-start relative">
                        <img
                            className="self-stretch  w-[1440px] h-[236px] flex-1 relative max-w-full overflow-hidden max-h-full z-[1]"
                            alt=""
                            src="assets/token-faq-shape3.png"
                        />
                        <div className="text-[#FFF] absolute xl:left-[270px] xl:top-[70px] 2xl:left-[370px] 2xl:top-[70px] z-[2]">
                            <p className="text-[#13AFB6] text-[80px] uppercase font-bold leading-[88px]" >2025 Coming soon</p>
                        </div>
                    </div>
                    <Divider className='bg-[#505D65] opacity-30 xl:mt-[100px] hidden xl:block' />
                </div>
            </div>
        </div>
    )
}

export default TokenFaq
