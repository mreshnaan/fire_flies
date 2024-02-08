import HorizontalTitle from './HorizontalTitle'

function MakingDifferenceSection() {
    return (
        <div className='w-full flex flex-col items-center pb-[100px]'>
            <div className='flex items-center making-difference-bg w-full flex-col pt-[150px] pb-[200px] relative'>
                <div className="relative flex flex-col xl:w-[1280px] 2xl:w-[1538px] gap-[140px] ">
                    <div className='flex justify-between px-6'>
                        <div className='flex items-start gap-[60px] '>
                            <HorizontalTitle title='Introducing Fireflies WEB3' mainContainerClassName='gap-[100px]' titleClassName='w-[200px] text-[#FFF]' strokeClassName='border-[#FFF]' />
                            <div className="flex flex-col gap-[30px]">
                                <h1 className='xl:w-[571px] xl:leading-[40px] 2xl:w-[671px] text-left text-[#FFF] text-[48px] font-bold leading-[62.4px] uppercase'>Environmental and Social Responsibility NFT:
                                    Making a Difference</h1>
                            </div>
                        </div>
                        <p className='text-[20px] xl:w-[450px] 2xl:w-[671px]  text-[#FFF] leading-[30px] text-justify'>Our "Environmental and Social Responsibility NFT" initiative is a unique blend of travel and positive global impact. It's designed to encourage and reward Fireflies users for participating in environmentally and socially beneficial activities. Whether it's joining local clean-up projects, volunteering in community programs, or supporting sustainability efforts, your actions help make a better world.</p>

                    </div>
                    <h1 className='text-[#FFF] text-center text-[48px] leading-[72px] font-bold'>How it works?</h1>

                    <div className='absolute top-[500px] flex justify-around w-full items-start'>
                        <div className='bg-[url("/assets/shape4.png")] bg-no-repeat bg-contain w-[426px] h-[328px] flex items-center justify-center '>
                            <div className='text-center flex flex-col gap-5  w-[330px]'>
                                <p className='text-[#FFF] text-[32px] leading-[48px] font-bold '>Participate in Initiatives</p>
                                <p className='text-[#FFF] text-[20px] leading-[28px] '>Get involved in approved environmental and social projects.</p>
                            </div>
                        </div>
                        <div className='bg-[url("/assets/shape5.png")] bg-no-repeat bg-contain w-[426px] h-[358px] flex items-center justify-center '>
                            <div className='text-center flex flex-col gap-5  w-[330px]'>
                                <p className='text-[#FFF] text-[32px] leading-[48px] font-bold '>Earn<br></br> Your NFT</p>
                                <p className='text-[#FFF] text-[20px] leading-[28px] '>Submit proof of participation, and receive an NFT as a token of appreciation.</p>
                            </div>
                        </div>
                        <div className='bg-[url("/assets/shape6.png")] bg-no-repeat bg-contain w-[426px] h-[328px] flex items-center justify-center '>
                            <div className='text-center flex flex-col gap-5  w-[330px]'>
                                <p className='text-[#FFF] text-[32px] leading-[48px] font-bold '>Enjoy<br></br> Benefits</p>
                                <p className='text-[#FFF] text-[20px] leading-[28px] '>Use your NFT to get discounts on eco-friendly travel packages.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className='pt-[250px]'>
                <p className='xl:w-[1000px] 2xl:w-[1279px] text-[#505D65] text-[24px] leading-[36px] text-justify'>This initiative is a testament to how travel can transcend exploration, becoming a catalyst for environmental stewardship and social solidarity. It's not just about where you go; it's about the positive impact you leave behind.</p>
            </div>
        </div>

    )
}

export default MakingDifferenceSection