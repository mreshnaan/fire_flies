import HorizontalTitle from './HorizontalTitle'
import { CustomCarousel } from './Slider'

function IntroductionSection() {
    return (
        <div id='fweb3' className='w-full flex flex-col items-center gap-[50px] xl:gap-0 pb-[50px] xl:pb-[100px]'>
            <div
                className={`xl:hidden w-full flex flex-row items-center justify-start gap-[20px]`}
            >
                <div className="w-[190px] h-[0px] opacity-30 border border-zinc-500"></div>
                <p
                    className={
                        "font-bold text-[10px] xl:text-[12px] text-[#505D65] uppercase  w-fit"
                    }
                >
                    introducing Firelies web3
                </p>
            </div>

            <div className='flex items-center video-bg1 w-full flex-col pt-[50px] pb-[70px] xl:pt-[150px] xl:pb-[200px] relative'>
                <div className="relative flex flex-col items-center xl:items-stretch w-[330px] gap-[30px] xl:w-[1280px] 2xl:w-[1538px] xl:gap-[80px] 2xl:gap-[140px]">
                    <div className='flex justify-between xl:px-10'>
                        <div className='flex items-center xl:items-start xl:gap-[60px] '>
                            <HorizontalTitle title='Introducing Fireflies WEB3' mainContainerClassName='gap-[100px] hidden xl:flex' titleClassName='w-[200px] text-[#FFF]' strokeClassName='border-[#FFF]' />
                            <div className="flex flex-col gap-[30px]">
                                <h1 className='text-[24px] leading-[31.2px] xl:w-[400px] xl:text-[38px] xl:leading-[38px] 2xl:w-[799.416px] text-left text-[#FFF] 2xl:text-[48px] font-bold 2xl:leading-[48px] uppercase'>Introducing Fireflies web3</h1>
                                <p className='w-[325px] text-[12px] leading-[18px] xl:text-[20px] xl:w-[671px] text-[#FFF] xl:leading-[30px] text-justify xl:mt-[41px]'>With Fireflies Web3, we're elevating our platform to new heights, merging the familiar with the cutting-edge world of Web3. This evolution marks a significant leap forward in how we explore and experience the globe, ready to offer you a seamless, innovative, connected way of travel.</p>
                            </div>
                        </div>
                        <div className='hidden xl:flex pt-[100px] flex-col gap-[16px]'>
                            <p className='text-[32px] text-[#13AFB6] leading-[35.2px] uppercase font-black pl-4'>Seamless</p>
                            <p className='text-[32px] text-[#13AFB6] leading-[35.2px] uppercase font-light pl-2 '>INNOVATIVE</p>
                            <p className='text-[32px] text-[#13AFB6] leading-[35.2px] uppercase font-black'>Connected</p>
                        </div>
                    </div>
                    <h1 className='text-[#13AFB6] text-center text-[24px] leading-[31.2px] xl:text-[48px] xl:leading-[72px] font-bold'>What’s Exciting in Fireflies Web3?</h1>
                    <CustomCarousel sliders={[
                        <div className='bg-[url("/assets/mb-shape1.png")] bg-no-repeat bg-contain w-[330px] h-[181px] flex items-center justify-center '>
                            <div className='text-center flex flex-col gap-3 w-[230px]'>
                                <p className='text-[#FFF] text-[24px] leading-[36px] font-bold '>Website Upgrade</p>
                                <p className='text-[#FFF] text-[12px] leading-[18px] '>A significant enhancement integrating both traditional and Web3 features for an intuitive, seamless travel booking experience.</p>
                            </div>
                        </div>,
                        <div className='bg-[url("/assets/mb-shape1.png")] bg-no-repeat bg-contain w-[330px] h-[181px] flex items-center justify-center '>
                            <div className='text-center flex flex-col gap-3 w-[230px]'>
                                <p className='text-[#FFF] text-[24px] leading-[36px] font-bold '>Launch of $FFT Token</p>
                                <p className='text-[#FFF] text-[12px] leading-[18px] '>Our bespoke utility token designed to unlock exclusive travel benefits and offers...</p>
                            </div>
                        </div>,
                        <div className='bg-[url("/assets/mb-shape1.png")] bg-no-repeat bg-contain w-[330px] h-[181px] flex items-center justify-center '>
                            <div className='text-center flex flex-col gap-3 w-[230px]'>
                                <p className='text-[#FFF] text-[24px] leading-[36px] font-bold '>Fireflies NFTs Debut</p>
                                <p className='text-[#FFF] text-[12px] leading-[18px] '>Unique digital collectibles that
                                    open doors to unparalleled travel perks, available exclusively
                                    through $FFT Tokens.</p>
                            </div>
                        </div>,
                    ]} classNames="absolute top-[280px] left-[20px] xl:hidden w-[330px]" dotNavBtnClass={"w-[27.586px] h-[3px]"} navContainerClass='mt-[0px]' dotNavMainContainerClass="" />

                    <div className=' hidden absolute top-[500px] xl:flex justify-around w-full items-center'>
                        <div className='bg-[url("/assets/shape1.png")] bg-no-repeat bg-contain w-[426px] h-[358px] flex items-center justify-center '>
                            <div className='text-center flex flex-col gap-5  w-[330px]'>
                                <p className='text-[#FFF] text-[32px] leading-[48px] font-bold '>Website Upgrade</p>
                                <p className='text-[#FFF] text-[20px] leading-[28px] '>A significant enhancement integrating both traditional and Web3 features for an intuitive, seamless travel booking experience.</p>
                            </div>
                        </div>
                        <div className='bg-[url("/assets/shape1.png")] bg-no-repeat bg-contain w-[426px] h-[358px] flex items-center justify-center '>
                            <div className='text-center flex flex-col gap-5  w-[330px]'>
                                <p className='text-[#FFF] text-[32px] leading-[48px] font-bold '>Launch of $FFT Token</p>
                                <p className='text-[#FFF] text-[20px] leading-[28px] '>Our bespoke utility token designed to unlock exclusive travel benefits and offers...</p>
                            </div>
                        </div>
                        <div className='bg-[url("/assets/shape1.png")] bg-no-repeat bg-contain w-[426px] h-[358px] flex items-center justify-center '>
                            <div className='text-center flex flex-col gap-5  w-[330px]'>
                                <p className='text-[#FFF] text-[32px] leading-[48px] font-bold '>Fireflies NFTs Debut</p>
                                <p className='text-[#FFF] text-[20px] leading-[28px] '>Unique digital collectibles that
                                    open doors to unparalleled travel perks, available exclusively
                                    through $FFT Tokens.</p>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
            <div className='pt-[200px] xl:pt-[250px]'>
                <p className='w-[330px] text-[12px] leading-[18px] xl:w-[1000px] 2xl:w-[1279px] text-[#505D65] xl:text-[24px] xl:leading-[36px] text-center'>Get ready to embark on a journey where the latest in technology meets the joy of travel.
                    Fireflies Web3 is not just an upgrade; it's a transformation of your travel experiences into something truly extraordinary.</p>
            </div>
        </div>

    )
}

export default IntroductionSection
