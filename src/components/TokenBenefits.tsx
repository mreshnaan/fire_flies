import Divider from "./Divider"
import HorizontalTitle from "./HorizontalTitle"

function TokenBenefits() {
    return (
        <div className='flex flex-col pt-[50px] pb-[50px] xl:pt-[150px] xl:gap-[30px] w-[330px] xl:w-[1250px] 2xl:w-[1538px] xl:px-4'>
            <div className='flex flex-col items-center justify-center gap-10 xl:justify-between xl:flex-row xl:gap-[80px] 2xl:gap-[105px]'>
                <div className={`xl:hidden flex items-center justify-center gap-10`}>
                <div className={"border-b-2 w-[228px] h-[1px] border-[#505D65]"}></div>
                    <p className={"font-bold text-[10px] xl:text-[12px] text-[#505D65] uppercase min-w-[100px] w-fit"}>exclusive benefits</p>
                </div>
                <div className='flex items-start gap-[60px]'>
                    <HorizontalTitle title='exclusive benefits' mainContainerClassName={"gap-20 hidden xl:flex"} titleClassName='w-[120px]' />
                    <h1 className='text-[40px] leading-[44px] text-center xl:w-[500px] 2xl:w-[676px] xl:text-left text-[#13AFB6] xl:text-[60px] xl:leading-[68px] 2xl:text-[80px] font-bold 2xl:leading-[88px] uppercase'>Exclusive Travel Benefits with $FFT Tokens</h1>
                </div>

                <img src="/assets/token.png" alt="" srcSet="" className="w-[325px] h-[254.808px] object-contain xl:w-[475px] xl:h-[432px]" />
            </div>

            <div className='flex flex-col items-center xl:items-start gap-[60px]'>
                <div className="xl:pl-[75px] 2xl:pl-[120px] h-7"></div>
                <div className="flex flex-col items-center xl:flex-row xl:gap-24">
                    <div className="flex flex-col gap-[40px]">
                        <div className="flex flex-col gap-[20px]">
                            <h1 className="text-[#505D65] text-[24px] font-semibold text-center leading-[31.2px] xl:text-left xl:text-[24px] xl:leading-[32px] 2xl:text-[32px] 2xl:leading-[41px]">Significant Savings on Bookings</h1>
                            <p className="text-[#505D65] text-[12px] leading-[18px] text-justify  xl:text-[18px]  xl:leading-[28px] 2xl:text-[20px] 2xl:leading-[30px]">Enjoy cost-effective travel using $FFT tokens.</p>
                        </div>
                        <div className="flex flex-col gap-[20px]">
                            <h1 className="text-[#505D65] text-[24px] text-center leading-[31.2px] xl:text-left xl:text-[24px] font-semibold xl:leading-[32px] 2xl:text-[32px] 2xl:leading-[41px]">Buy and Burn Mechanism</h1>
                            <p className="text-[#505D65] text-[12px] leading-[18px] text-justify xl:text-[18px] xl:leading-[28px] 2xl:text-[20px] 2xl:leading-[30px]">To enhance the value of $FFT Tokens, we implement a strategic Buy and Burn mechanism. A portion of the token fees collected from transactions is used to purchase $FFT Tokens from the market and burn them. This process reduces the overall token supply, creating deflationary pressure which can potentially increase the token's value over time. As a token holder, this mechanism not only offers you immediate benefits on travel bookings but also holds the promise of growing value, making your investment in $FFT Tokens a smarter choice for both travel and financial returns.</p>
                            <img src="/assets/tokenGraph.png" alt="" srcSet="" className="w-[330px] h-[285px] xl:w-[544.149px] xl:h-[476px]" />
                        </div>
                    </div>
                    <div className="flex flex-col gap-[40px]">
                        <div className="flex flex-col gap-[20px]">
                            <h1 className="text-[#505D65] text-[24px] leading-[31.2px] font-semibold xl:text-[24px] xl:leading-[32px] 2xl:text-[32px] 2xl:leading-[41px]">Enhanced Savings with Discount Schemes</h1>
                            <p className="text-[#505D65] text-[12px] leading-[18px] xl:text-[18px] xl:leading-[28px] 2xl:text-[20px] 2xl:leading-[30px]">Maximize your travel benefits with Fireflies' exclusive discount schemes, available only when you use $FFT Tokens. Enjoy a uniform 20% discount across various travel services, elevating your journey to new levels of affordability and pleasure. Whether it's securing the Best Price Option (BPO) for unmatched deals, savoring unique dining experiences with Eat for Stay, unlocking value in Distributorship, indulging in VIP luxuries with the VIP Discount Pass, or accessing coveted event tickets, your $FFT Tokens are the key to unlocking these irresistible savings. Embrace the joy of travel with cost-efficiency and exclusive perks, making each trip with Fireflies not just memorable, but also more rewarding.</p>
                        </div>
                        <Divider className='bg-[#505D65] opacity-30' />
                        <div className="flex flex-col gap-[40px]">
                            <div className="flex flex-col gap-4">
                                <p className="text-[#505D65] text-[12px] font-semibold xl:text-[24px] xl:leading-[48px]">Best Price Option (BPO): <span className="text-[#F6484F] text-[18px] xl:text-[36px] ">20% discount</span> </p>
                                <p className="text-[#505D65] text-[12px] font-semibold xl:text-[24px] xl:leading-[48px]">Eat for Stay: <span className="text-[#F6484F] text-[18px] xl:text-[36px] ">20% discount</span> </p>
                                <p className="text-[#505D65] text-[12px] font-semibold xl:text-[24px] xl:leading-[48px]">Distributorship: <span className="text-[#F6484F] text-[18px] xl:text-[36px] ">20% discount</span> </p>
                                <p className="text-[#505D65] text-[12px] font-semibold xl:text-[24px] xl:leading-[48px]">VIP Discount Pass: <span className="text-[#F6484F] text-[18px] xl:text-[36px] ">20% discount</span> </p>
                                <p className="text-[#505D65] text-[12px] font-semibold xl:text-[24px] xl:leading-[48px]">Event Tickets: <span className="text-[#F6484F] text-[18px] xl:text-[36px] ">20% discount</span> </p>
                            </div>
                            <a href="https://cmmnwxfnonpnqpsrhicb.supabase.co/storage/v1/object/public/fireflies/Fireflies%20Guide.pdf?t=2024-02-10T09%3A52%3A37.455Z" target="_blank" className="flex items-center justify-center gap-4 download-btn-bg px-[30px] py-[24px] w-[325px] h-[50px] xl:w-[370px] xl:h-[70px] rounded-[50px] text-[#FFF] text-[12px] leading-[18px] xl:text-[18px] font-bold uppercase xl:leading-[23.4px]">
                                <svg className="w-[24px] h-[24px] xl:w-[32px] xl:h-[32px]" xmlns="http://www.w3.org/2000/svg" width="33" height="32" viewBox="0 0 33 32" fill="none">
                                    <path d="M20.9039 27.3403L30.4024 9.31352C32.6603 5.03624 28.0979 0.385674 23.769 2.54764L18.7239 5.06735C17.3224 5.76727 15.6719 5.76727 14.2704 5.06735L9.2253 2.54764C4.89645 0.385673 0.349601 5.03624 2.59188 9.31352L12.0904 27.3403C13.959 30.8866 19.0353 30.8866 20.9039 27.3403Z" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                Download Presentation</a>
                            <p className="text-[12px] leading-[18px] xl:text-[20px] text-[#505D65] text-center xl:text-justify xl:leading-[30px] font-bold">You can find more details about the products in our presentation.</p>
                            <Divider className='bg-[#505D65] opacity-30 xl:mt-[50px] hidden xl:block' />
                        </div>
                    </div>
                </div>

            </div>







        </div>
    )
}

export default TokenBenefits