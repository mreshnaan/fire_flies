import HorizontalTitle from './HorizontalTitle'

function IntroductionSection() {
    return (
        <div className='w-full flex flex-col items-center pb-[100px]'>
            <div className='flex items-center video-bg1 w-full flex-col pt-[150px] pb-[200px] relative'>
                <div className="relative flex flex-col  xl:w-[1280px] 2xl:w-[1538px] xl:gap-[80px] 2xl:gap-[140px]">
                    <div className='flex justify-between xl:px-10'>
                        <div className='flex items-start gap-[60px] '>
                            <HorizontalTitle title='Introducing Fireflies WEB3' mainContainerClassName='gap-[100px]' titleClassName='w-[200px] text-[#FFF]' strokeClassName='border-[#FFF]' />
                            <div className="flex flex-col gap-[30px]">
                                <h1 className='xl:w-[400px] xl:text-[38px] xl:leading-[38px] 2xl:w-[799.416px] text-left text-[#FFF] 2xl:text-[48px] font-bold 2xl:leading-[48px] uppercase'>Introducing Fireflies web3</h1>
                                <p className='text-[20px] w-[671px] text-[#FFF] leading-[30px] text-justify mt-[41px]'>With Fireflies Web3, we're elevating our platform to new heights, merging the familiar with the cutting-edge world of Web3. This evolution marks a significant leap forward in how we explore and experience the globe, ready to offer you a seamless, innovative, connected way of travel.</p>
                            </div>
                        </div>
                        <div className='pt-[100px] flex flex-col gap-[16px]'>
                            <p className='text-[32px] text-[#13AFB6] leading-[35.2px] uppercase font-black pl-4'>Seamless</p>
                            <p className='text-[32px] text-[#13AFB6] leading-[35.2px] uppercase font-light pl-2 '>INNOVATIVE</p>
                            <p className='text-[32px] text-[#13AFB6] leading-[35.2px] uppercase font-black'>Connected</p>
                        </div>
                    </div>
                    <h1 className='text-[#13AFB6] text-center text-[48px] leading-[72px] font-bold'>What’s Exciting in Fireflies Web3?</h1>

                    <div className='absolute top-[500px] flex justify-around w-full items-center'>
                        <div className='bg-[url("/assets/shape1.png")] bg-no-repeat bg-contain w-[426px] h-[358px] flex items-center justify-center '>
                            <div className='text-center flex flex-col gap-5  w-[330px]'>
                                <p className='text-[#FFF] text-[32px] leading-[48px] font-bold '>Website Upgrade</p>
                                <p className='text-[#FFF] text-[20px] leading-[28px] '>A significant enhancement integrating both traditional and Web3 features for an intuitive, seamless travel booking experience.</p>
                            </div>
                        </div>
                        <div className='bg-[url("/assets/shape1.png")] bg-no-repeat bg-contain w-[426px] h-[358px] flex items-center justify-center '>
                            <div className='text-center flex flex-col gap-5  w-[330px]'>
                                <p className='text-[#FFF] text-[32px] leading-[48px] font-bold '>Launch of $FFT Token</p>
                                <p className='text-[#FFF] text-[20px] leading-[28px] '>Our bespoke utility token designed to unlock exclusive travel benefits and offers</p>
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
            <div className='pt-[250px]'>
                <p className='xl:w-[1000px] 2xl:w-[1279px] text-[#505D65] text-[24px] leading-[36px] text-center'>Get ready to embark on a journey where the latest in technology meets the joy of travel.
                    Fireflies Web3 is not just an upgrade; it's a transformation of your travel experiences into something truly extraordinary.</p>
            </div>
        </div>

    )
}

export default IntroductionSection