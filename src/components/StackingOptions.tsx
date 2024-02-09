import HorizontalTitle from './HorizontalTitle'

function StackingOptions() {
    return (
        <div className='flex items-center w-full flex-col md:pt-[150px] pt-10 pb-[200px]'>
            <div className="flex flex-col xl:w-[1280px] 2xl:w-[1538px] w-full md:gap-[140px] gap-10 xl:px-6">
                <div className='flex md:flex-row flex-col justify-between'>
                    <div className='flex items-start gap-[60px] '>
                        <div className="md:block hidden">
                            <HorizontalTitle title='STAKING OPTIONS' mainContainerClassName='gap-[20px]' titleClassName='w-[200px] text-[#505D65]' strokeClassName='border-[#505D65]' />
                        </div>

                        <div className="flex flex-col gap-[30px]">
                            <h1 className='xl:w-[600px] 2xl:w-[762px] text-[#505D65] xl:text-[60px] xl:leading-[68px] 2xl:text-[80px] text-[45px] 2xl:leading-[88px] md:text-start text-center font-bold uppercase'>
                                Tier-Based Staking Options
                            </h1>
                        </div>
                    </div>

                    <div className='flex flex-col xl:w-[500px] 2xl:w-[671px] w-full py-[27px] md:px-[50px] px-10 md:border border-t-[#505D65] border-b-[#505D65]'>
                        <p className='md:text-[20px] text-[14px] md:w-[456px] w-auto text-[#505D65] md:leading-[30px] text-justify'>
                            Stake between $500-$15,000 for minimum 1 year to receive up to 5 different digital collectibles. Each level unlocks distinctive NFTs with escalating travel rewards.
                        </p>
                    </div>
                </div>

                <div className='flex flex-col items-center md:w-[1439px] md:h-[1094px] md:px-0 px-5 w-full h-auto'>
                    <img src="/assets/stacking-option-table.png" alt="" srcSet="" className='object-contain' />
                </div>
            </div>
        </div>
    )
}

export default StackingOptions