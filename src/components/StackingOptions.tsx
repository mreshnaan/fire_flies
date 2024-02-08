import HorizontalTitle from './HorizontalTitle'

function StackingOptions() {
    return (
        <div className='flex items-center w-full flex-col pt-[150px] pb-[200px]'>
            <div className="flex flex-col xl:w-[1280px]  2xl:w-[1538px] gap-[140px] xl:px-6  ">
                <div className='flex justify-between '>
                    <div className='flex items-start gap-[60px] '>
                        <HorizontalTitle title='STAKING OPTIONS' mainContainerClassName='gap-[20px]' titleClassName='w-[200px] text-[#505D65]' strokeClassName='border-[#505D65]' />
                        <div className="flex flex-col gap-[30px]">
                            <h1 className='xl:w-[600px] 2xl:w-[762px] text-[#505D65] xl:text-[60px] xl:leading-[68px] 2xl:text-[80px] 2xl:leading-[88px] font-bold uppercase'>Tier-Based Staking Options</h1>
                        </div>
                    </div>
                    <div className='flex flex-col xl:w-[500px] 2xl:w-[671px] py-[27px] px-[50px] border border-t-[#505D65] border-b-[#505D65]'>
                        <p className='text-[20px] w-[456px] text-[#505D65] leading-[30px] text-justify'>Stake between $500-$15,000 for minimum 1 year to receive up to 5 different digital collectibles. Each level unlocks distinctive NFTs with escalating travel rewards.</p>
                    </div>

                </div>

                <div>
                    <img src="/assets/stacking-option-table.png" alt="" srcSet="" className='w-[1439px] h-[1094px] object-contain' />
                </div>
            </div>
        </div>
    )
}

export default StackingOptions