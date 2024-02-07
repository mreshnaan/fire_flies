import Divider from './Divider'
import HorizontalTitle from './HorizontalTitle'
import { CustomCarousel } from './Slider'

function WhatWeDo() {
    return (
        <div className='flex justify-end gap-[20px]'>
            <div className="flex items-start gap-[60px]">
                <HorizontalTitle title={"OFFERS"} mainContainerClassName='gap-5' />
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="59" height="502" viewBox="0 0 59 502" fill="none">
                        <path d="M9.456 459.754L37.09 452.292L1.502 441.222L1.502 428.184L58 447.372L58 456.802L28.316 464.756L58 472.546L58 482.058L1.502 501.082L1.502 488.126L37.09 477.138L9.456 469.594L9.456 459.754ZM24.544 389.665L1.50199 389.665L1.50199 377.529L58 377.529L58 389.665L35.286 389.665L35.286 409.755L58 409.755L58 421.727L1.502 421.727L1.502 409.755L24.544 409.755L24.544 389.665ZM14.54 343.895L34.22 349.635L34.22 337.909L14.54 343.895ZM58 329.053L44.634 334.055L44.634 353.571L58 358.573L58 371.365L1.50199 350.373L1.50199 337.335L58 316.425L58 329.053ZM12.326 303.757L12.326 319.009L1.50199 319.009L1.50199 276.369L12.326 276.369L12.326 291.621L58 291.621L58 303.757L12.326 303.757ZM9.45599 217.598L37.09 210.136L1.50199 199.066L1.50199 186.028L58 205.216L58 214.646L28.316 222.6L58 230.39L58 239.902L1.50199 258.926L1.50199 245.97L37.09 234.982L9.45599 227.438L9.45599 217.598ZM58 143.081L58 179.571L1.50199 179.571L1.50198 143.819L12.08 143.819L12.08 167.599L24.954 167.599L24.954 146.771L35.368 146.771L35.368 167.599L47.422 167.599L47.422 143.081L58 143.081ZM12.408 90.1653L12.408 100.333L47.094 100.333L47.094 90.1653C47.094 85.8193 45.454 82.5393 42.174 80.1613C38.894 77.7833 34.794 76.6353 29.874 76.6353C24.872 76.6353 20.772 77.7833 17.41 80.1613C14.048 82.5393 12.408 85.8193 12.408 90.1653ZM58 90.1653L58 112.305L1.50198 112.305L1.50198 90.1653C1.50198 82.2113 4.20798 75.9793 9.53798 71.4693C14.868 66.9593 21.592 64.6633 29.874 64.6633C38.156 64.6633 44.88 66.9593 50.128 71.4693C55.376 75.9793 58 82.2113 58 90.1653ZM29.874 12.2627C25.118 12.2627 21.1 13.9027 17.738 17.1827C14.376 20.3807 12.736 24.3167 12.736 28.9907C12.736 33.6647 14.376 37.6007 17.738 40.7987C21.1 43.9967 25.118 45.6367 29.874 45.6367C34.63 45.6367 38.648 43.9967 42.01 40.7987C45.29 37.6007 46.93 33.6647 46.93 28.9907C46.93 24.3167 45.29 20.3807 41.928 17.1827C38.566 13.9027 34.548 12.2627 29.874 12.2627ZM29.874 57.6087C21.838 57.6087 15.032 54.8207 9.37398 49.3267C3.71598 43.7507 0.845978 36.9447 0.845977 28.9907C0.845977 20.9547 3.71597 14.1487 9.37397 8.6547C15.032 3.0787 21.838 0.290701 29.874 0.290701C37.828 0.2907 44.716 3.0787 50.374 8.6547C56.032 14.2307 58.82 21.0367 58.82 28.9907C58.82 36.9447 56.032 43.7507 50.374 49.3267C44.716 54.8207 37.828 57.6087 29.874 57.6087Z" fill="#505D65" />
                    </svg>
                </span>
            </div>
            <div className='flex flex-col gap-8'>
                <div className='flex gap-[35px] items-start'>
                    <CustomCarousel classNames='w-[853px]' sliders={[<img src='/assets/what-we-do-1.png' />, <img src='/assets/what-we-do-1.png' />]} />
                    <div className='flex items-center'>
                        <div className="w-0 h-0 
  border-t-[40px] border-t-transparent
  border-r-[30px] border-r-[#13AFB6]
  border-b-[40px] border-b-transparent mr-[-1px]">
                        </div>
                        <div className='what-we-do-bg w-[454px] h-[508px] rounded-[16px]'></div>

                    </div>
                </div>

                <p className='w-[1342px] text-[#505D65] text-justify text-[20px] leading-[30px]'>
                    Traditional travel agencies and online portals typically mark up their prices by 10-50% over the wholesale rates they receive from hotels and travel wholesalers. At Fireflies, we take a different approach. Rather than seeking profit through markups, we've innovated with unique Fireflies products like the Best Price Option (BPO).<span className='font-bold'> This exclusive offering allows us to pass on the wholesale rates directly to you, ensuring our prices are consistently below market rates.</span>
                </p>
                <Divider className='mt-[150px]  bg-[#505D65] opacity-30' />

            </div>
        </div>
    )
}

export default WhatWeDo