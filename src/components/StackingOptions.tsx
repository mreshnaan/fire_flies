import HorizontalTitle from './HorizontalTitle'
import {useState} from "react";

function StackingOptions() {
    const [activeTab, setActiveTab] = useState(1);
    const tabs =[
        {title:"Bronze", subTitle:"NFT $500 Staking", data:"bronze.svg"},
        {title:"silver", subTitle:"NFT $2.000 Staking", data:"silver.svg"},
        {title:"gold", subTitle:"NFT $5.000 Staking", data:"gold.svg"},
        {title:"platinum", subTitle:"NFT $8.000 Staking", data:"platinum.svg"},
        {title:"diamond", subTitle:"NFT $15.000 Staking", data:"diamond.svg"},
    ]
    return (
        <div id='staking_option'
             className='flex items-center w-full flex-col pt-[50px] pb-[50px] xl:pt-[150px] xl:pb-[200px]'>
            <div
                className={`xl:hidden w-full flex flex-row items-center justify-start gap-[20px] pb-[50px]`}
            >
                <div className="w-[267px] h-[0px] opacity-30 border border-zinc-500"></div>
                <p
                    className={
                        "font-bold text-[10px] xl:text-[12px] text-[#505D65] uppercase  w-fit"
                    }
                >
                    STAKING OPTIONS
                </p>
            </div>
            <div className="flex flex-col xl:w-[1280px]  2xl:w-[1538px] gap-[50px] xl:gap-[140px] xl:px-6  ">

                <div className='flex flex-col xl:flex-row gap-[30px] xl:gap-0 justify-between xl:px-0 px-10'>
                    <div className='flex items-start gap-[60px] '>
                        <HorizontalTitle title='STAKING OPTIONS' mainContainerClassName='gap-[20px] hidden xl:flex'
                                         titleClassName='w-[200px] text-[#505D65]' strokeClassName='border-[#505D65]'/>
                        <div className="flex flex-col gap-[30px]">
                            <h1 className='text-[40px] leading-[44px] text-center xl:text-left xl:w-[600px] 2xl:w-[762px] text-[#505D65] xl:text-[60px] xl:leading-[68px] 2xl:text-[80px] 2xl:leading-[88px] font-bold uppercase'>Tier-Based
                                Staking Options</h1>
                        </div>
                    </div>
                    <div
                        className='xl:flex hidden flex-col xl:w-[500px] 2xl:w-[671px] py-[27px] px-[50px] border border-t-[#505D65] border-s-0 border-e-0 border-b-[#505D65]'>
                        <p className=' text-[12px] leading-[18px] xl:text-[20px]  xl:w-[456px] text-[#505D65] xl:leading-[30px] text-justify'>Stake
                            between $500-$15,000 for minimum 1 year to receive up to 5 different digital collectibles.
                            Each level unlocks distinctive NFTs with escalating travel rewards.</p>
                    </div>
                    <div className='flex xl:hidden flex-col xl:w-[500px] 2xl:w-[671px]  px-[10px]'>
                        <p className=' text-[12px] leading-[18px] xl:text-[20px]  xl:w-[456px] text-[#505D65] xl:leading-[30px] text-justify'>Stake
                            between $500-$15,000 for minimum 1 year to receive up to 5 different digital collectibles.
                            Each level unlocks distinctive NFTs with escalating travel rewards.</p>
                    </div>
                </div>
                <div className={"xl:flex hidden"}>
                    <img src="/assets/stacking-option-table.png" alt="" srcSet=""
                         className=' w-[330px] xl:w-[1439px] xl:h-[1094px] object-contain'/>
                </div>
                <div className={"flex flex-col justify-center items-center gap-5 xl:hidden"}>
                    <div className="flex flex-row justify-evenly items-center w-full h-[120px] bg-neutral-100">
                        <svg width="19" height="32" viewBox="0 0 19 32" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() => activeTab !== 1 && setActiveTab(activeTab-1)}>
                            <path
                                d="M6.7999e-07 15.5566L2.82843 12.7282L18.3848 28.2846L15.5564 31.113L6.7999e-07 15.5566Z"
                                fill={activeTab === 1 ?"#D9D9D9":"#13AFB6"}/>
                            <path
                                d="M2.82843 18.3851L6.7999e-07 15.5566L15.5563 0.000291705L18.3848 2.82872L2.82843 18.3851Z"
                                fill={activeTab === 1 ?"#D9D9D9":"#13AFB6"}/>
                        </svg>

                        <div className="w-[171px] text-center"><span
                            className="text-gray-600 text-2xl font-bold font-['Sofia Pro'] uppercase leading-9">{tabs[activeTab-1].title}<br/></span><span
                            className="text-gray-600 text-base font-normal font-['Sofia Pro'] uppercase leading-normal">{tabs[activeTab-1].subTitle}</span>
                        </div>
                        <svg width="20" height="32" viewBox="0 0 20 32" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() => activeTab !== 5 && setActiveTab(activeTab+1)}>
                            <path d="M19.1128 15.5566L16.2844 12.7282L0.728016 28.2846L3.55644 31.113L19.1128 15.5566Z"
                                  fill={activeTab === 5 ?"#D9D9D9":"#13AFB6"}/>
                            <path
                                d="M16.2844 18.3851L19.1128 15.5566L3.55644 0.000291705L0.728017 2.82872L16.2844 18.3851Z"
                                fill={activeTab === 5 ?"#D9D9D9":"#13AFB6"}/>
                        </svg>

                    </div>
                    <img src={`/assets/StakingOptions/${tabs[activeTab-1].data}`} alt="" srcSet=""
                         className=' w-[330px] xl:w-[1439px] xl:h-[1094px] object-contain'/>
                </div>
            </div>
        </div>
    )
}

export default StackingOptions
