import Divider from "./Divider";
import HorizontalTitle from "./HorizontalTitle";
import { CustomCarousel } from "./Slider";

function WhatWeDo() {
  return (
    <div className="flex flex-col justify-end items-center xl:items-start xl:flex-row gap-[20px]">
      <div className=" hidden xl:flex items-start gap-[60px] ">
        <HorizontalTitle title={"OFFERS"} mainContainerClassName="gap-5 " />
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="59"
            height="502"
            viewBox="0 0 59 502"
            fill="none"
          >
            <path
              d="M9.456 459.754L37.09 452.292L1.502 441.222L1.502 428.184L58 447.372L58 456.802L28.316 464.756L58 472.546L58 482.058L1.502 501.082L1.502 488.126L37.09 477.138L9.456 469.594L9.456 459.754ZM24.544 389.665L1.50199 389.665L1.50199 377.529L58 377.529L58 389.665L35.286 389.665L35.286 409.755L58 409.755L58 421.727L1.502 421.727L1.502 409.755L24.544 409.755L24.544 389.665ZM14.54 343.895L34.22 349.635L34.22 337.909L14.54 343.895ZM58 329.053L44.634 334.055L44.634 353.571L58 358.573L58 371.365L1.50199 350.373L1.50199 337.335L58 316.425L58 329.053ZM12.326 303.757L12.326 319.009L1.50199 319.009L1.50199 276.369L12.326 276.369L12.326 291.621L58 291.621L58 303.757L12.326 303.757ZM9.45599 217.598L37.09 210.136L1.50199 199.066L1.50199 186.028L58 205.216L58 214.646L28.316 222.6L58 230.39L58 239.902L1.50199 258.926L1.50199 245.97L37.09 234.982L9.45599 227.438L9.45599 217.598ZM58 143.081L58 179.571L1.50199 179.571L1.50198 143.819L12.08 143.819L12.08 167.599L24.954 167.599L24.954 146.771L35.368 146.771L35.368 167.599L47.422 167.599L47.422 143.081L58 143.081ZM12.408 90.1653L12.408 100.333L47.094 100.333L47.094 90.1653C47.094 85.8193 45.454 82.5393 42.174 80.1613C38.894 77.7833 34.794 76.6353 29.874 76.6353C24.872 76.6353 20.772 77.7833 17.41 80.1613C14.048 82.5393 12.408 85.8193 12.408 90.1653ZM58 90.1653L58 112.305L1.50198 112.305L1.50198 90.1653C1.50198 82.2113 4.20798 75.9793 9.53798 71.4693C14.868 66.9593 21.592 64.6633 29.874 64.6633C38.156 64.6633 44.88 66.9593 50.128 71.4693C55.376 75.9793 58 82.2113 58 90.1653ZM29.874 12.2627C25.118 12.2627 21.1 13.9027 17.738 17.1827C14.376 20.3807 12.736 24.3167 12.736 28.9907C12.736 33.6647 14.376 37.6007 17.738 40.7987C21.1 43.9967 25.118 45.6367 29.874 45.6367C34.63 45.6367 38.648 43.9967 42.01 40.7987C45.29 37.6007 46.93 33.6647 46.93 28.9907C46.93 24.3167 45.29 20.3807 41.928 17.1827C38.566 13.9027 34.548 12.2627 29.874 12.2627ZM29.874 57.6087C21.838 57.6087 15.032 54.8207 9.37398 49.3267C3.71598 43.7507 0.845978 36.9447 0.845977 28.9907C0.845977 20.9547 3.71597 14.1487 9.37397 8.6547C15.032 3.0787 21.838 0.290701 29.874 0.290701C37.828 0.2907 44.716 3.0787 50.374 8.6547C56.032 14.2307 58.82 21.0367 58.82 28.9907C58.82 36.9447 56.032 43.7507 50.374 49.3267C44.716 54.8207 37.828 57.6087 29.874 57.6087Z"
              fill="#505D65"
            />
          </svg>
        </span>
      </div>
      <div className={`xl:hidden flex items-center justify-center gap-10`}>
        <div className={"border-b-2 w-[258px] h-[1px] border-[#505D65]"}></div>
        <p
          className={
            "font-bold text-[10px] xl:text-[12px] text-[#505D65] uppercase min-w-[79px] w-fit"
          }
        >
          What we do
        </p>
      </div>
      <span className="xl:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="245"
          height="29"
          viewBox="0 0 245 29"
          fill="none"
        >
          <path
            d="M20.1708 4.32L23.8108 17.8L29.2108 0.44H35.5708L26.2108 28H21.6108L17.7308 13.52L13.9308 28H9.29078L0.0107812 0.44H6.33078L11.6908 17.8L15.3708 4.32H20.1708ZM54.3605 11.68V0.44H60.2805V28H54.3605V16.92H44.5605V28H38.7205V0.44H44.5605V11.68H54.3605ZM76.6873 6.8L73.8873 16.4H79.6073L76.6873 6.8ZM83.9273 28L81.4873 21.48H71.9673L69.5273 28H63.2873L73.5273 0.44H79.8873L90.0873 28H83.9273ZM96.267 5.72H88.827V0.44H109.627V5.72H102.187V28H96.267V5.72ZM138.296 4.32L141.936 17.8L147.336 0.44H153.696L144.336 28H139.736L135.856 13.52L132.056 28H127.416L118.136 0.44H124.456L129.816 17.8L133.496 4.32H138.296ZM174.645 28H156.845V0.44H174.285V5.6H162.685V11.88H172.845V16.96H162.685V22.84H174.645V28ZM200.458 5.76H195.498V22.68H200.458C202.578 22.68 204.178 21.88 205.338 20.28C206.498 18.68 207.058 16.68 207.058 14.28C207.058 11.84 206.498 9.84 205.338 8.2C204.178 6.56 202.578 5.76 200.458 5.76ZM200.458 28H189.658V0.44H200.458C204.338 0.44 207.378 1.76 209.578 4.36C211.778 6.96 212.898 10.24 212.898 14.28C212.898 18.32 211.778 21.6 209.578 24.16C207.378 26.72 204.338 28 200.458 28ZM238.459 14.28C238.459 11.96 237.659 10 236.059 8.36C234.499 6.72 232.579 5.92 230.299 5.92C228.019 5.92 226.099 6.72 224.539 8.36C222.979 10 222.179 11.96 222.179 14.28C222.179 16.6 222.979 18.56 224.539 20.2C226.099 21.8 228.019 22.6 230.299 22.6C232.579 22.6 234.499 21.8 236.059 20.16C237.659 18.52 238.459 16.56 238.459 14.28ZM216.339 14.28C216.339 10.36 217.699 7.04 220.379 4.28C223.099 1.52 226.419 0.119999 230.299 0.119999C234.219 0.119999 237.539 1.52 240.219 4.28C242.939 7.04 244.299 10.36 244.299 14.28C244.299 18.16 242.939 21.52 240.219 24.28C237.499 27.04 234.179 28.4 230.299 28.4C226.419 28.4 223.099 27.04 220.379 24.28C217.699 21.52 216.339 18.16 216.339 14.28Z"
            fill="#505D65"
          />
        </svg>
      </span>
      <div className="flex flex-col items-center gap-4 xl:gap-8">
        <div className=" flex flex-col gap-[20px] items-center xl:flex-row xl:gap-[35px] xl:items-start">
          <CustomCarousel
            classNames=""
            sliders={[
              <div className="flex xl:flex-row flex-col justify-center items-center mx-10">
                <img src="/assets/WhatWeDoSlider/image-1-1.png" />
                <img
                  src="/assets/WhatWeDoSlider/image-1-2.svg"
                  alt=""
                  srcSet=""
                  className="hidden xl:block xl:w-[390px] xl:h-[450px] 2xl:w-[454px] 2xl:h-[508px] ml-5"
                />
                <img
                  src="/assets/WhatWeDoSlider/image-mobile-1.svg"
                  alt=""
                  srcSet=""
                  className="xl:hidden w-[330px]"
                />
              </div>,
              <div className="flex xl:flex-row flex-col justify-center items-center mx-10">
                <img src="/assets/WhatWeDoSlider/image-2-1.png" />
                <img
                  src="/assets/WhatWeDoSlider/image-2-2.svg"
                  alt=""
                  srcSet=""
                  className="hidden xl:block xl:w-[390px] xl:h-[450px] 2xl:w-[454px] 2xl:h-[508px] ml-5"
                />
                <img
                  src="/assets/WhatWeDoSlider/image-mobile-2.svg"
                  alt=""
                  srcSet=""
                  className="xl:hidden w-[330px]"
                />
              </div>,
              <div className="flex xl:flex-row flex-col justify-center items-center mx-10">
                <img src="/assets/WhatWeDoSlider/image-3-1.png" />
                <img
                  src="/assets/WhatWeDoSlider/image-3-2.svg"
                  alt=""
                  srcSet=""
                  className="hidden xl:block xl:w-[390px] xl:h-[450px] 2xl:w-[454px] 2xl:h-[508px] ml-5"
                />
                <img
                  src="/assets/WhatWeDoSlider/image-mobile-3.svg"
                  alt=""
                  srcSet=""
                  className="xl:hidden w-[330px]"
                />
              </div>,
              <div className="flex xl:flex-row flex-col justify-center items-center mx-10">
                <img src="/assets/WhatWeDoSlider/image-4-1.png" />
                <img
                  src="/assets/WhatWeDoSlider/image-4-2.svg"
                  alt=""
                  srcSet=""
                  className="hidden xl:block xl:w-[390px] xl:h-[450px] 2xl:w-[454px] 2xl:h-[508px] ml-5"
                />
                <img
                  src="/assets/WhatWeDoSlider/image-mobile-4.svg"
                  alt=""
                  srcSet=""
                  className="xl:hidden w-[330px]"
                />
              </div>,
            ]}
          />
          {/* <img src="/assets/mobile-florence-italy-offer-banner.png" alt="" srcSet="" className='xl:hidden w-[330px]' />
                    <img src="/assets/florence-italy-offer-banner.png" alt="" srcSet="" className='hidden xl:block xl:w-[390px] xl:h-[450px] 2xl:w-[454px] 2xl:h-[508px]' /> */}
        </div>

        <p className="w-[330px] text-[12px] leading-[18px] xl:w-[1050px] 2xl:w-[1342px] text-[#505D65] text-justify xl:text-[20px] xl:leading-[30px]">
          Traditional travel agencies and online portals typically mark up their
          prices by 10-50% over the wholesale rates they receive from hotels and
          travel wholesalers. At Fireflies, we take a different approach. Rather
          than seeking profit through markups, we've innovated with unique
          Fireflies products like the Best Price Option (BPO).
          <span className="font-bold">
            {" "}
            This exclusive offering allows us to pass on the wholesale rates
            directly to you, ensuring our prices are consistently below market
            rates.
          </span>
        </p>
        <Divider className="mt-[50px] xl:mt-[150px]  bg-[#505D65] opacity-30" />
      </div>
    </div>
  );
}

export default WhatWeDo;
