import Divider from './Divider'
import HorizontalTitle from './HorizontalTitle'

function HowItWorksSection() {
    return (
        <div className='flex flex-col items-center pt-[50px] xl:pt-[150px] xl:gap-[80px] w-[330px] 2xl:gap-[100px] xl:w-[1280px] 2xl:w-[1538px] '>
            <div className='flex items-center flex-col gap-10 xl:flex-row xl:gap-[60px] 2xl:gap-[105px]'>
                <div className='flex flex-col items-center xl:flex-row xl:items-start gap-[60px]'>
                    <HorizontalTitle title='HOW IT WORKS?' titleClassName='w-[100px]' mainContainerClassName='hidden xl:flex' />
                    <div className={`xl:hidden flex items-center justify-center gap-10`}>
                        <div className={"border-b-2 w-[258px] h-[1px] border-[#505D65]"}></div>
                        <p className={"font-bold text-[10px] xl:text-[12px] text-[#505D65] uppercase min-w-[100px] w-fit"}>HOW IT WORKS?</p>
                    </div>
                    <h1 className='w-[325px] text-[40px] leading-[44px] text-center xl:w-[280px] 2xl:w-[380px] xl:text-left text-[#13AFB6] xl:text-[50px] 2xl:text-[80px] font-bold 2xl:leading-[88px] uppercase'>How the travel market works?</h1>
                </div>

                <img src="/assets/howitworks1.png" alt="" srcSet="" className='w-[330px] xl:w-[800px]  object-contain' />
            </div>


            <div className='flex flex-col  gap-[50px]'>
                <div className='flex items-center flex-col gap-10 xl:flex-row xl:gap-[60px] 2xl:gap-[105px]'>
                    <div className='flex flex-col items-center xl:flex-row xl:items-start gap-[60px]'>
                        <div className='w-[30.58px]'></div>
                        <h1 className='w-[325px] text-[40px] leading-[44px] text-center xl:w-[280px] 2xl:w-[380px] xl:text-left text-[#505D65] xl:text-[50px] 2xl:text-[80px] font-bold 2xl:leading-[88px] uppercase'>How FIREFLIES works?</h1>
                    </div>

                    <img src="/assets/howitworks2.png" alt="" srcSet="" className='w-[330px] xl:w-[800px]  object-contain' />
                </div>

                <div className='flex items-center gap-3 xl:pl-[96.58px]'>
                    <span>
                        <svg className='w-[48px] h-[63px] xl:w-[60px] xl:h-[79px]' xmlns="http://www.w3.org/2000/svg" width="60" height="79" viewBox="0 0 60 79" fill="none">
                            <circle cx="30" cy="30.0566" r="30" fill="#F1F1F2" />
                            <path d="M29.5 49.0566C37.4847 49.0566 44 42.6536 44 34.8066V25.3066C44 17.4596 37.4847 11.0566 29.5 11.0566C21.5153 11.0566 15 17.4596 15 25.3066V34.8066C15 42.6536 21.5153 49.0566 29.5 49.0566Z" stroke="#13AFB6" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M30 28.0566C28.34 28.0566 27 26.8506 27 25.3566V21.7566C27 20.2626 28.34 19.0566 30 19.0566C31.64 19.0566 33 20.2626 33 21.7566V25.3566C33 26.8506 31.64 28.0566 30 28.0566Z" stroke="#13AFB6" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M30 19.0566V11.0566" stroke="#13AFB6" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M30 64.0566L24.8038 52.8066L35.1962 52.8066L30 64.0566Z" fill="#13AFB6" />
                            <path opacity="0.5" d="M30 71.0566L24.8038 59.8066L35.1962 59.8066L30 71.0566Z" fill="#13AFB6" />
                            <path opacity="0.2" d="M30 78.0566L24.8038 66.8066L35.1962 66.8066L30 78.0566Z" fill="#13AFB6" />
                        </svg>
                    </span>
                    <p className='text-[12px] leading-[18px] flex flex-col text-[#505D65] text-justify xl:text-[20px] xl:leading-[30px]'>If you're intrigued by these savings, there's more to uncover.
                        <span><span className='text-[#13AFB6]'>Scroll down to discover how using $FFT tokens</span> can unlock even deeper discounts for your travels.</span></p>
                </div>

                <Divider className='mt-[150px]  bg-[#505D65] opacity-30' />

            </div>


        </div>
    )
}

export default HowItWorksSection