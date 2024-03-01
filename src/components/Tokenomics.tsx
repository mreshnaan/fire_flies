import HorizontalTitle from "@/components/HorizontalTitle.tsx";

const Tokenomics = () => {
    return (
        <div id="digital-collectibles"
             className='flex video-bg1 items-center w-full flex-col xl:pt-[150px] top-[100px] xl:h-auto h-[980px] pt-10 xl:mb-[0px] mb-[100px]'>
            <div
                className={`xl:hidden w-full flex flex-row items-center justify-start gap-[20px] pb-[50px]`}
            >
                <div className="w-[232px] h-[0px] opacity-30 border border-white"></div>
                <div
                    className="text-right text-white text-[10px] font-bold font-['Sofia Pro'] uppercase leading-[15px] tracking-wide">Referral
                    program
                </div>
            </div>
            <div className="flex flex-col xl:w-[1280px] 2xl:w-[1538px] max-w-[100%] xl:gap-[60px] gap-10 xl:px-8 px-5">
                <div className='flex xl:flex-row flex-col items-start gap-[60px]'>
                    <div className="xl:block hidden">
                        <HorizontalTitle title='Tokenomics' mainContainerClassName={"gap-20"}
                                         titleClassName='xl:w-[120px] w-[0px] text-[#FFF]'
                                         strokeClassName="border-[#FFF]"/>
                    </div>

                    <div className="flex flex-col xl:items-start w-full 2xl:items-start items-center gap-[30px]">
                        <h1 className='xl:w-[600px] 2xl:w-[896px] xl:text-left text-[#13AFB6] xl:text-[60px] xl:leading-[68px] 2xl:text-[80px] text-[40px] font-bold 2xl:leading-[88px] uppercase text-center xl:pr-0 pr-5'>
                            Tokenomics
                        </h1>


                    </div>
                </div>


                <div
                    className='xl:flex items-center hidden justify-between xl:justify-normal gap-[60px] w-full  xl:mt-0 mt-[200px] pb-[150px]'>
                    <img src={"/assets/tokenomics.svg"} alt={"Tokenomics"} className={"flex w-full"}/>
                    {/*<img src={"/assets/tokenomicsList.svg"} alt={"Tokenomics List"} className={"flex w-1/2"}/>*/}
                </div>
                <div
                    className='flex flex-col items-center xl:hidden justify-between xl:justify-normal gap-[60px] w-full  xl:mt-0'>
                    <img src={"/assets/tokenomicMobile.svg"} alt={"Tokenomics"} className={"flex"}/>

                </div>
            </div>


        </div>
    );
};

export default Tokenomics;
