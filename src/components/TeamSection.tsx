import { CustomCarousel } from "./Slider"
import TeamPerson from "./TeamPerson"
import WhatWeDo from "./WhatWeDo"

function TeamSection() {
    return (
        <div className='flex flex-col items-center gap-[50px] pt-[50px] xl:w-[1280px] xl:pt-[100px] xl:gap-[100px] 2xl:pt-[150px] 2xl:gap-[100px] 2xl:w-[1536px] '>
            <div className='flex flex-col gap-[60px]'>
                <div className='flex gap-[12px] xl:gap-[30px] items-center justify-center'>
                    <div className='border-[#70757E] lg:hidden w-full border-opacity-30 border-t h-[1px]'></div>
                    <h1 className='text-[#505D65] w-fit text-[20px] leading-[20px] xl:w-[330px] xl:text-[48px] font-bold xl:leading-[48px]'>President-CEO </h1>
                    <div className='border-[rgb(112,117,126)] w-full xl:w-[800px] 2xl:w-[1079px] border-opacity-30 border-t h-[1px]'></div>
                </div>
                <div className="flex flex-col items-center xl:flex-row xl:gap-[200px] xl:pl-[50px]">
                    <img src="/assets/president.png" alt="" className="w-[250px] h-[220.93px] xl:w-[516px] xl:h-[491px]" />
                    <div className="flex flex-col items-center gap-[12px] xl:gap-[30px]">
                        <h1 className="text-[24px] leading-[26.4px] xl:text-[48px] font-bold xl:leading-[72px] text-[#505D65]">Mr. Ulrich Märki</h1>
                        <h2 className="text-[12px] leading-[18px] xl:text-[24px] xl:leading-[36px] text-[#505D65] font-bold">President-CEO , passionate traveler</h2>
                        <div className="flex flex-col gap-[8px] w-[300px] xl:gap-[16px] xl:w-full">
                            <div className="flex gap-5 items-center">
                                <svg className="w-[14px] h-[14px] xl:w-[20px] xl:h-[20px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none">
                                    <circle cx="10" cy="10" r="9" stroke="#13AFB6" stroke-width="2" />
                                </svg>
                                <p className="text-[#505D65] text-[12px] leading-[24px] xl:text-[15px] xl:leading-[25px]">Internationally recognized businessman</p>
                            </div>
                            <div className="flex gap-5 items-center">
                                <svg className="w-[14px] h-[14px] xl:w-[20px] xl:h-[20px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none">
                                    <circle cx="10" cy="10" r="9" stroke="#13AFB6" stroke-width="2" />
                                </svg>
                                <p className="text-[#505D65] text-[12px] leading-[24px] xl:text-[15px] xl:leading-[25px]">Physicist-mathematician</p>
                            </div>
                            <div className="flex gap-5 items-center">
                                <svg className="w-[14px] h-[14px] xl:w-[20px] xl:h-[20px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none">
                                    <circle cx="10" cy="10" r="9" stroke="#13AFB6" stroke-width="2" />
                                </svg>
                                <p className="text-[#505D65] text-[12px] leading-[24px] xl:text-[15px] xl:leading-[25px]">Founder of an IT company serving the Swiss banking industry</p>
                            </div>
                            <div className="flex gap-5 items-center">
                                <svg className="w-[14px] h-[14px] xl:w-[20px] xl:h-[20px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none">
                                    <circle cx="10" cy="10" r="9" stroke="#13AFB6" stroke-width="2" />
                                </svg>
                                <p className="text-[#505D65] text-[12px] leading-[24px] xl:text-[15px] xl:leading-[25px]">Holder of several patents</p>
                            </div>
                            <div className="flex gap-5 items-center">
                                <svg className="w-[14px] h-[14px] xl:w-[20px] xl:h-[20px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none">
                                    <circle cx="10" cy="10" r="9" stroke="#13AFB6" stroke-width="2" />
                                </svg>
                                <p className="text-[#505D65] text-[12px] leading-[24px] xl:text-[15px] xl:leading-[25px]">Ambassador of KIWANIS Chrildren’s Fund</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-[60px]'>
                <div className='flex gap-[12px] xl:gap-[30px] items-center justify-center'>
                    <div className='border-[#70757E] lg:hidden w-full border-opacity-30 border-t h-[1px]'></div>
                    <h1 className='text-[#505D65] w-fit text-[20px] leading-[20px] xl:w-[400px] xl:text-[48px] font-bold xl:leading-[48px]'>Corporate Team</h1>
                    <div className='border-[#70757E] w-full xl:w-[800px] 2xl:w-[1079px] border-opacity-30 border-t h-[1px]'></div>
                </div>
                <div className="hidden xl:grid grid-cols-1 self-center xl:grid-cols-3 2xl:grid-cols-5 gap-[80px]">

                    <TeamPerson img="/assets/team1.png" name="Mr. Ulrich Märki" description="Chairman of the Board Swizerland" />
                    <TeamPerson img="/assets/team2.png" name="István Varga" description="Director of Business Development Hungary to Dubai" />
                    <TeamPerson img="/assets/team3.png" name="Zoltán Hidas" description="CFO USA" />
                    <TeamPerson img="/assets/team4.png" name="Anatol Pante" description="Chief Accountant Switzerland" />
                    <TeamPerson img="/assets/team5.png" name="Silver Borer" description="Data Protection Supervisor, Lawyer Switzerland" />
                </div>
                <CustomCarousel sliders={[
                    <TeamPerson img="/assets/team1.png" name="Mr. Ulrich Märki" description="Chairman of the Board Swizerland" />,
                    <TeamPerson img="/assets/team2.png" name="István Varga" description="Director of Business Development Hungary to Dubai" />,
                    <TeamPerson img="/assets/team3.png" name="Zoltán Hidas" description="CFO USA" />,
                    <TeamPerson img="/assets/team4.png" name="Anatol Pante" description="Chief Accountant Switzerland" />,
                    <TeamPerson img="/assets/team5.png" name="Silver Borer" description="Data Protection Supervisor, Lawyer Switzerland" />,
                ]} classNames="xl:hidden w-[330px]" dotNavMainContainerClass="hidden" />


            </div>
            <WhatWeDo />

        </div>
    )
}

export default TeamSection