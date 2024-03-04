import HorizontalTitle from "@/components/HorizontalTitle.tsx";
import {DynamicAccordion} from "@/components/DynamicAccordion.tsx";
import {cn} from "@/lib/utils.ts";

const PreSale = () => {
    return (
        <div id='faq'
             className='flex items-center w-full flex-col pt-[50px] video-bg2 pb-[50px] xl:pt-[150px] xl:pb-[100px]'>
            <div
                className={`xl:hidden w-full flex flex-row items-center justify-start gap-[20px] pb-[50px]`}
            >
                <div
                    className={"border-b-2 w-[290px] h-[1px] border-[#505D65]"}
                ></div>
                <p
                    className={
                        "font-bold text-[10px] xl:text-[12px] text-[#505D65] uppercase  w-fit"
                    }
                >
                    Pre Sales
                </p>
            </div>
            <div className="flex flex-col w-[300px] xl:w-[1280px] 2xl:w-[1538px] gap-[70px] xl:gap-[140px] px-6 ">
                <div className='flex flex-col items-center xl:flex-row xL:items-start gap-[60px] '>
                    <HorizontalTitle title='Pre Sales' mainContainerClassName='gap-[10px] hidden xl:flex'/>
                    <div className="flex flex-col gap-[30px]">
                        <h1 className='text-[40px] leading-[44px] text-center xl:w-[799.416px] xl:text-left text-[#13AFB6] xl:text-[80px] font-bold xl:leading-[88px] uppercase'>FireFlies
                            Pre Sales
                        </h1>
                    </div>
                </div>

                <div>
                    <DynamicAccordion
                        titleClassName='text-[12px] max-w-[268px] text-left xl:max-w-[917.478px] leading-[18px] xl:text-[24px] xl:leading-[36px]'
                        contentClassName='text-[12px] leading-[18px] xl:text-[20px] xl:leading-[30px]' items={[
                        {
                            title: "Pre Sale 1",
                            content:
                                <div>
                                    <div>Total Token Amount: 30,000,000</div>
                                    <div>Price: 0.012 USDT</div>
                                    <div>TGE 30 days Unlock: 8%</div>
                                    <div>1st year Linear release: 45%</div>
                                    <div>2nd year Linear release: 47%</div>
                                </div>,
                        },
                        {
                            title: "Pre Sale 2",
                            content:
                                <div>
                                    <div>Total Token Amount: 40,000,000</div>
                                    <div>Price: 0.014 USDT</div>
                                    <div>TGE 35 days Unlock: 8%</div>
                                    <div>1st year Linear release: 42.5%</div>
                                    <div>2nd year Linear release: 49.5%</div>
                                </div>,
                        },
                        {
                            title: "Pre Sale 3",
                            content:
                                <div>
                                    <div>Total Token Amount: 50,000,000</div>
                                    <div>Price: 0.017 USDT</div>
                                    <div>TGE 40 days Unlock: 8%</div>
                                    <div>1st year Linear release: 41%</div>
                                    <div>2nd year Linear release: 51%</div>
                                </div>,
                        },
                        {
                            title: "Public Sale",
                            content:
                                <div>
                                    <div>Total Token Amount: 150,000,000</div>
                                    <div>Price: 0.023 USDT</div>
                                    <div>TGE 45 days Unlock: 8%</div>
                                    <div>1st year Linear release: 40%</div>
                                    <div>2nd year Linear release: 52%</div>
                                </div>,
                        },
                    ]}/>
                    <div className={cn(`text-[24px] text-[#505D65] font-bold leading-[18.7px] xl:text-[24px] xl:leading-[36px] mt-8`, 'text-[12px] max-w-[268px] text-left xl:max-w-[917.478px] leading-[18px] xl:text-[24px] xl:leading-[36px]')}>
                    Listing Price: 0.025 USDT
                  </div>
                </div>

            </div>

        </div>
    );
};

export default PreSale;
