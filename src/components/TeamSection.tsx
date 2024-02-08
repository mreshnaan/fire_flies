import TeamPerson from "./TeamPerson"
import WhatWeDo from "./WhatWeDo"

function TeamSection() {
    return (
        <div className='flex flex-col items-center xl:w-[1280px] xl:pt-[100px] xl:gap-[100px] 2xl:pt-[150px] 2xl:gap-[100px] 2xl:w-[1536px] '>
            <div className='flex flex-col gap-[60px]'>
                <div className='flex gap-[30px] items-center justify-center'>
                    <h1 className='text-[#505D65] text-[48px] font-bold leading-[48px]'>President-CEO</h1>
                    <div className='border-[#70757E] xl:w-[800px] 2xl:w-[1079px] border-opacity-30 border-t h-[1px]'></div>
                </div>
                <div className="flex gap-[200px] pl-[50px]">
                    <img src="/assets/president.png" alt="" />
                    <div className="flex flex-col gap-[30px]">
                        <h1 className="text-[48px] font-bold leading-[72px] text-[#505D65]">Mr. Ulrich Märki</h1>
                        <h2 className="text-[24px] leading-[36px] font-bold">President-CEO, passionate traveler</h2>
                        <div className="flex flex-col gap-[16px]">
                            <div className="flex gap-5 items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <circle cx="10" cy="10" r="9" stroke="#13AFB6" stroke-width="2" />
                                </svg>
                                <p className="text-[#505D65] text-[15px] leading-[25px]">Internationally recognized businessman</p>
                            </div>
                            <div className="flex gap-5 items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <circle cx="10" cy="10" r="9" stroke="#13AFB6" stroke-width="2" />
                                </svg>
                                <p className="text-[#505D65] text-[15px] leading-[25px]">physicist-mathematician</p>
                            </div>
                            <div className="flex gap-5 items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <circle cx="10" cy="10" r="9" stroke="#13AFB6" stroke-width="2" />
                                </svg>
                                <p className="text-[#505D65] text-[15px] leading-[25px]">Founder of an IT company serving the Swiss banking industry</p>
                            </div>
                            <div className="flex gap-5 items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <circle cx="10" cy="10" r="9" stroke="#13AFB6" stroke-width="2" />
                                </svg>
                                <p className="text-[#505D65] text-[15px] leading-[25px]">Holder of several patents</p>
                            </div>
                            <div className="flex gap-5 items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <circle cx="10" cy="10" r="9" stroke="#13AFB6" stroke-width="2" />
                                </svg>
                                <p className="text-[#505D65] text-[15px] leading-[25px]">Ambassador of KIWANIS Chrildren’s Fund</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-[60px]'>
                <div className='flex gap-[30px] items-center justify-center'>
                    <h1 className='text-[#505D65] text-[48px] font-bold leading-[48px]'>Corporate Team</h1>
                    <div className='border-[#70757E] xl:w-[800px] 2xl:w-[1050px] border-opacity-30 border-t h-[1px]'></div>
                </div>
                <div className="grid grid-cols-1 xl:grid-cols-3 2xl:grid-cols-5 gap-[80px]">
                    <TeamPerson img="/assets/team1.png" name="Mr. Ulrich Märki" description="Chairman of the Board Swizerland" />
                    <TeamPerson img="/assets/team2.png" name="István Varga" description="Director of Business Development Hungary" />
                    <TeamPerson img="/assets/team3.png" name="Zoltán Hidas" description="CFO USA" />
                    <TeamPerson img="/assets/team4.png" name="Anatol Pante" description="Chief Accountant Switzerland" />
                    <TeamPerson img="/assets/team5.png" name="Silver Borer" description="Data Protection Supervisor, Lawyer Switzerland" />
                </div>
            </div>
            <WhatWeDo />

        </div>
    )
}

export default TeamSection