import HorizontalTitle from "./HorizontalTitle"

function NewsLetter() {
    return (
        <div className='flex items-center w-full flex-col pt-[150px] pb-[100px] px-6'>
            <div className="flex  xl:w-[1280px] 2xl:w-[1538px] xl:gap-[80px] 2xl:gap-[140px] ">
                <div className='flex items-start gap-[60px] '>
                    <HorizontalTitle title='traveler rewards' mainContainerClassName={"gap-20"} titleClassName='w-[120px] text-[#FFF]' strokeClassName="border-[#FFF]" />
                    <div className="flex flex-col gap-[30px]">
                        <h1 className=' xl:w-[550px]  2xl:w-[671px] text-left text-[#505D65] 2xl:text-[48px] font-bold 2xl:leading-[62.4px] xl:text-[28px] xl:leading-[28px]'>Fireflies $FFT Token<br></br> Newsletter</h1>
                        <h1 className=" xl:w-[550px] 2xl:w-[671px] 2xl:text-[80px] text-[#505D65] 2xl:leading-[88px] uppercase font-bold xl:text-[60px] xl:leading-[68px]">
                            <span className="text-[#F6484F]">Stay Informed:</span> Subscribe for the Latest on $FFT Token
                        </h1>
                    </div>
                </div>
                <div className='flex flex-col items-start gap-[60px] '>
                    <p className="text-[#505D65] xl:w-[550px]  2xl:w-[671px] text-[20px] leading-[30px]">Dive into the evolving world of Fireflies and stay updated on all things $FFT Token. Subscribe to our dedicated newsletter for the latest news, insights, and updates on $FFT Token developments, including market trends, new use cases, and exclusive offers for token holders. Whether you're a seasoned token investor or new to the world of digital currencies, our newsletter is tailored to keep you informed and ahead of the curve.
                    </p>
                    <div>
                        <form action="">
                            <div className="flex relative">
                                <input type="text" className="bg-[#F1F1F2]  pl-[28px] xl:w-[510px] 2xl:w-[610px] h-[70px] rounded-[50px] placeholder:text-[#505D65] text-[20px] text-justify leading-[30px]" placeholder="Your Email Address" />
                                <button className="absolute xl:left-[307px] 2xl:left-[407px] text-[18px] leading-[23px] font-bold uppercase subscription-btn-bg w-[207px] h-[70px] gap-[12px] rounded-[50px] text-[#FFF] flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                                        <path d="M8.26885 6.68759L20.6968 2.54584C26.2739 0.68718 29.3041 3.73129 27.4596 9.30727L23.317 21.7325C20.5357 30.0892 15.9686 30.0892 13.1873 21.7325L11.9577 18.0445L8.26885 16.8151C-0.0896155 14.0344 -0.0896155 9.4829 8.26885 6.68759Z" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M12 17L17 12" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    SUBSCRIBE</button>
                            </div>
                        </form>
                    </div>
                    <p className="xl:w-[500px]  2xl:w-[671px] text-[#505D65] text-justify text-[20px] leading-[30px]">Be at the forefront of digital currency innovation in travel – subscribe now and never miss a beat on the $FFT Token journey with Fireflies.</p>

                </div>
            </div>
        </div>
    )
}

export default NewsLetter