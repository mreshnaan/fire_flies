import { Link } from "react-router-dom"

function MainBanner() {
    return (
        <div className=' banner-bg w-full mt-[-90px] grid grid-cols-1 xl:grid-cols-2 gap-14  h-fit  pb-[100px]'>
            <div className='flex flex-col justify-center items-center gap-[14px] xl:gap-[30px] pt-[150px] xl:items-baseline xl:pt-[150px] 2xl:pt-[250px] xl:pl-[80px] 2xl:pl-[240px]'>
                <p className="text-[#505D65] text-[20px] leading-[22px] font-bold  uppercase xl:text-[28px] xl:leading-[32px] 2xl:text-[32px] 2xl:leading-[35px]">Fireflies WEB3</p>
                <h1 className="text-[#505D65] text-[40px] leading-[44px] text-center uppercase font-bold w-[325px] xl:text-left xl:w-full  xl:text-[70px] xl:leading-[77px] 2xl:text-left 2xl:text-[80px] 2xl:leading-[88px]">Pioneering the Future of Travel</h1>
                <p className="text-[#505D65] text-[12px] leading-[18px] w-[325px] text-center xl:text-justify xl:w-full xl:text-[18px] xl:leading-[36px] 2xl:text-[20px] 2xl:leading-[38px]">Embark on an unparalleled adventure with Fireflies Web3, where we merge the familiarity of traditional online travel booking with the cutting-edge innovation of Web3 technology.</p>
                <p className="text-[#505D65] font-light text-[12px] leading-[18px] w-[325px] text-center xl:text-justify xl:w-full  xl:text-[28px] xl:leading-[36px] 2xl:text-[32px] 2xl:leading-[41px]">The $FFT Token is your key to unlocking a universe of travel opportunities, bringing together a global community of explorers and adventurers.</p>

                <div className=" mt-[24px] xl:mt-[44px] flex items-center gap-[30px]">
                    <button className="join-cm-btn-bg py-[14px] px-[38px] rounded-[50px] text-[#FFF] xl:text-[20px] xl:leading-[32px] 2xl:text-[32px] 2xl:leading-[41px] uppercase font-bold">  Join Community</button>
                    <Link to="https://t.me/+UgyhAhitLHg3ZDQ0" className="hidden xl:block" >
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="26" viewBox="0 0 32 26" fill="none">
                            <g clip-path="url(#clip0_0_813)">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M24.5066 25.7135C24.9332 26.0125 25.4932 26.0775 25.9866 25.9085C26.4799 25.7265 26.8399 25.3105 26.9466 24.8165C28.1066 19.5125 30.9199 6.07051 31.9732 1.23451C32.0532 0.870513 31.9199 0.493513 31.6266 0.246513C31.3332 -0.00048687 30.9332 -0.0654869 30.5599 0.0645131C24.9732 2.07951 7.75989 8.38451 0.719887 10.9195C0.279887 11.0755 -0.0134462 11.5045 -0.000112876 11.9595C0.0132205 12.4145 0.33322 12.8175 0.786554 12.9475C3.94655 13.8705 8.07989 15.1445 8.07989 15.1445C8.07989 15.1445 10.0132 20.8515 11.0266 23.7375C11.1599 24.1015 11.4399 24.3875 11.8266 24.4915C12.2132 24.5955 12.6266 24.4915 12.9066 24.2185C14.5332 22.7235 17.0399 20.4225 17.0399 20.4225C17.0399 20.4225 21.7999 23.8285 24.5066 25.7005V25.7135ZM9.82655 14.4295L12.0666 21.6315L12.5599 17.0685C12.5599 17.0685 21.2132 9.46351 26.1466 5.13451C26.2932 5.00451 26.3066 4.79651 26.1866 4.64051C26.0666 4.49751 25.8532 4.45851 25.6799 4.56251C19.9599 8.12451 9.82655 14.4425 9.82655 14.4425V14.4295Z" fill="#505D65" />
                            </g>
                            <defs>
                                <clipPath id="clip0_0_813">
                                    <rect width="32" height="26" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </Link>
                    <Link to="https://t.me/+UgyhAhitLHg3ZDQ0" className="hidden xl:block" >
                        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="30" viewBox="0 0 13 30" fill="none">
                            <g clip-path="url(#clip0_0_811)">
                                <path d="M2.94785 30H8.61754V14.8692H12.5775L13 9.80467H8.61754V6.91664C8.61754 5.72375 8.84354 5.25288 9.92441 5.25288H12.9902V0H9.05971C4.85412 0 2.94785 1.97768 2.94785 5.76561V9.80467H0V14.932H2.94785V29.9895V30Z" fill="#505D65" />
                            </g>
                            <defs>
                                <clipPath id="clip0_0_811">
                                    <rect width="13" height="30" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </Link>
                    <Link to="http://twitter.com/firefliesen" className="hidden xl:block" >
                        <svg xmlns="http://www.w3.org/2000/svg" width="33" height="30" viewBox="0 0 33 30" fill="none">
                            <g clip-path="url(#clip0_59_49)">
                                <path d="M0.0804572 0L12.8214 16.5468L0 30H2.88558L14.1107 18.2215L23.1803 30H33L19.5422 12.5225L31.4763 0H28.5907L18.2529 10.8478L9.9002 0H0.0804572ZM4.32392 2.0645H8.83513L28.7559 27.9352H24.2447L4.32392 2.0645Z" fill="#505D65" />
                            </g>
                            <defs>
                                <clipPath id="clip0_59_49">
                                    <rect width="33" height="30" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </Link>
                </div>
            </div>
            <div className='flex justify-center'>
                <img src="/assets/bannerImg.png" alt="" srcSet="" className="w-[515.183px] h-[374.503px] xl:h-[825px] xl:w-[1027px] 2xl:h-[1025px] 2xl:w-[1227.292px]  object-contain"  />
            </div>

        </div>
    )
}

export default MainBanner