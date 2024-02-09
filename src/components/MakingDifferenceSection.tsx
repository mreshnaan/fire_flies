import HorizontalTitle from './HorizontalTitle'
import { CustomCarousel } from './Slider'

function MakingDifferenceSection() {
    return (
        <div className='w-full flex flex-col items-center pb-[50px] xl:pb-[100px]'>
            <div className='flex items-center making-difference-bg w-full flex-col pt-[50px] pb-[50px] xl:pt-[150px] xl:pb-[200px] relative'>
                <div className="relative flex flex-col w-[300px] gap-[70px] xl:w-[1280px] 2xl:w-[1538px] xl:gap-[140px] ">
                    <div className='flex flex-col xl:flex-row gap-[30px] xl:gap-0 justify-between px-6'>
                        <div className='flex items-start gap-[60px] '>
                            <HorizontalTitle title='Introducing Fireflies WEB3' mainContainerClassName='gap-[100px] hidden xl:flex' titleClassName='w-[200px] text-[#FFF]' strokeClassName='border-[#FFF]' />
                            <div className="flex flex-col gap-[30px]">
                                <h1 className='text-[24px] leading-[31.2px] text-center xl:w-[571px] xl:leading-[40px] 2xl:w-[671px] xl:text-left text-[#FFF] xl:text-[48px] font-bold 2xl:leading-[62.4px] uppercase'>Environmental and Social Responsibility NFT:
                                    Making a Difference</h1>
                            </div>
                        </div>
                        <p className='text-[12px] leading-[18px] xl:text-[20px] xl:w-[450px] 2xl:w-[671px]  text-[#FFF] xl:leading-[30px] text-justify'>Our "Environmental and Social Responsibility NFT" initiative is a unique blend of travel and positive global impact. It's designed to encourage and reward Fireflies users for participating in environmentally and socially beneficial activities. Whether it's joining local clean-up projects, volunteering in community programs, or supporting sustainability efforts, your actions help make a better world.</p>

                    </div>
                    <h1 className='text-[#FFF] text-center text-[24px] leading-[31.2px] xl:text-[48px] xl:leading-[72px] font-bold'>How it works?</h1>
                    <CustomCarousel sliders={[
                        <div className=' bg-[url("/assets/mb-shape9.png")] bg-no-repeat bg-contain w-[330px] h-[185px] flex items-center justify-center '>
                            <div className='text-center flex flex-col gap-5  w-[250px]'>
                                <p className='text-[#FFF] text-[24px] leading-[31.2px] font-bold '>Participate in Initiatives</p>
                                <p className='text-[#FFF] text-[12px] leading-[18px] '>Get involved in approved environmental and social projects.</p>
                            </div>
                        </div>,
                        <div className=' bg-[url("/assets/mb-shape9.png")] bg-no-repeat bg-contain w-[330px] h-[185px] flex items-center justify-center '>
                            <div className='text-center flex flex-col gap-5  w-[250px]'>
                                <p className='text-[#FFF] text-[24px] leading-[31.2px] font-bold '>Earn<br></br> Your NFT</p>
                                <p className='text-[#FFF] text-[12px] leading-[18px] '>Submit proof of participation, and receive an NFT as a token of appreciation.</p>
                            </div>
                        </div>,
                        <div className=' bg-[url("/assets/mb-shape9.png")] bg-no-repeat bg-contain w-[330px] h-[185px] flex items-center justify-center '>
                            <div className='text-center flex flex-col gap-5  w-[250px]'>
                                <p className='text-[#FFF] text-[24px] leading-[31.2px] font-bold '>Enjoy<br></br> Benefits</p>
                                <p className='text-[#FFF] text-[12px] leading-[18px] '>Use your NFT to get discounts on eco-friendly travel packages.</p>
                            </div>
                        </div>,
                    ]} classNames="absolute top-[470px] right-[0px] left-[-16px] xl:hidden w-[330px]" dotNavBtnClass={"w-[27.586px] h-[3px]"} navContainerClass='mt-[0px]' dotNavMainContainerClass="" />



                    <div className='hidden  absolute top-[500px] xl:flex justify-around w-full items-start'>
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
                <p className='w-[330px] text-[12px] leading-[18px] xl:w-[1000px] 2xl:w-[1279px] text-[#505D65] xl:text-[24px] xl:leading-[36px] text-justify'>This initiative is a testament to how travel can transcend exploration, becoming a catalyst for environmental stewardship and social solidarity. It's not just about where you go; it's about the positive impact you leave behind.</p>
            </div>
        </div>

    )
}

export default MakingDifferenceSection