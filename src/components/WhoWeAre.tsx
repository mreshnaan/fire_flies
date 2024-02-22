import HorizontalTitle from "./HorizontalTitle"
import Status from "./Status"

function WhoWeAre() {
  return (
    <div id="about" className=" grid grid-cols-1 gap-[40px] pb-[50px] xl:grid-cols-2 xl:p-[80px] xl:gap-20 2x:pl-[140px] 2xl:pr-[240px] 2xl:pt-[100px] 2xl:pb-[150px] 2xl:gap-36">
      <div className="flex flex-col items-center xl:flex-row xl:items-start gap-[40px] xl:gap-[50px] 2xl:gap-[60px]">
        <HorizontalTitle title={"WHO WE ARE"} mainContainerClassName="hidden xl:flex" />
        <div className={`xl:hidden flex items-center justify-center gap-10`}>
          <div className={"border-b-2 w-[258px] h-[1px] border-[#505D65]"}></div>
          <p className={"font-bold text-[10px] xl:text-[12px] text-[#505D65] uppercase min-w-[79px] w-fit"}>PRESIDENT CEO</p>
        </div>


        <span >
          <svg className="w-[250px] h-[257px] xl:hidden" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 246 257" fill="none">
            <path d="M39.8922 11.1513H54.5615L62.6877 41.4045L75.3519 0.92928H94.5592L69.8641 72.0707H56.2501L47.0685 37.4809L38.2036 72.0707H24.4841L0 0.92928H19.1018L31.6604 41.4045L39.8922 11.1513Z" fill="#505D65" />
            <path d="M119.551 29.0141H141.713V0.92928H159.654V72.0707H141.713V44.3989H119.551V72.0707H101.927V0.92928H119.551V29.0141Z" fill="#505D65" />
            <path d="M171.809 36.5516C171.809 26.4328 175.397 17.8628 182.574 10.7383C189.855 3.61386 198.615 0 208.852 0C219.194 0 227.954 3.61386 235.13 10.7383C242.412 17.8628 246 26.4328 246 36.5516C246 46.5672 242.412 55.2405 235.13 62.3649C227.954 69.4894 219.194 73 208.852 73C198.615 73 189.961 69.4894 182.679 62.3649C175.397 55.2405 171.809 46.5672 171.809 36.5516ZM208.852 55.6535C214.234 55.6535 218.878 53.7949 222.571 50.0778C226.371 46.3607 228.27 41.8175 228.27 36.5516C228.27 31.2857 226.371 26.7426 222.571 23.0255C218.772 19.2051 214.234 17.3465 208.852 17.3465C203.469 17.3465 198.931 19.2051 195.238 23.0255C191.544 26.7426 189.644 31.2857 189.644 36.5516C189.644 41.8175 191.544 46.3607 195.238 50.0778C198.931 53.7949 203.469 55.6535 208.852 55.6535Z" fill="#505D65" />
            <path d="M88.8787 102.345H103.543L111.666 132.964L124.326 92H143.527L118.84 164H105.231L96.0526 128.993L87.1907 164H73.4758L49 92H68.0954L80.6497 132.964L88.8787 102.345Z" fill="#505D65" />
            <path d="M199 148.743V164H150.892V92H198.05V107.257H168.511V121.051H194.464V135.994H168.511V148.743H199Z" fill="#505D65" />
            <path d="M101.967 256.072H83.2224L77.08 239.781H54.0991L47.9566 256.072H29L55.8994 185.031H75.1737L101.967 256.072ZM72.5262 224.934L65.4307 201.528L58.8646 224.934H72.5262Z" fill="#505D65" />
            <path d="M126.642 232.358V256.072H108.956V185.031H139.138C147.187 185.031 153.329 187.403 157.671 192.043C162.013 196.682 164.132 202.25 164.132 208.746C164.132 214.108 162.649 218.954 159.578 223.181C156.612 227.408 152.27 230.192 146.658 231.533L164.449 256.072H143.904L128.23 232.358H126.642ZM138.291 200.085H126.642V217.51H138.291C148.881 218.026 148.881 199.466 138.291 200.085Z" fill="#505D65" />
            <path d="M225.195 241.019V256.072H176.904V185.031H224.242V200.085H194.589V213.695H220.642V228.439H194.589V241.019H225.195Z" fill="#505D65" />
          </svg>

          <svg className="hidden xl:block xl:w-[410px] xl:h-[450px] 2xl:w-[610px] 2xl:h-[665px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 604 663" fill="none">
            <path d="M98.9686 27.9495H134.887L154.784 103.776L185.792 2.32913H232.822L172.355 180.637H139.021L116.54 93.9415L94.8341 180.637H61.2416L1.29202 2.32913H48.0631L78.8131 103.776L98.9686 27.9495Z" fill="#505D65" />
            <path d="M294.015 72.7206H348.28V2.32913H392.208V180.637H348.28V111.281H294.015V180.637H250.861V2.32913H294.015V72.7206Z" fill="#505D65" />
            <path d="M421.969 91.6124C421.969 66.2508 430.755 44.771 448.326 26.9144C466.156 9.05771 487.603 0 512.669 0C537.992 0 559.44 9.05771 577.011 26.9144C594.841 44.771 603.627 66.2508 603.627 91.6124C603.627 116.715 594.841 138.454 577.011 156.31C559.44 174.167 537.992 182.966 512.669 182.966C487.603 182.966 466.414 174.167 448.585 156.31C430.755 138.454 421.969 116.715 421.969 91.6124ZM512.669 139.489C525.847 139.489 537.217 134.831 546.261 125.514C555.564 116.198 560.215 104.811 560.215 91.6124C560.215 78.414 555.564 67.0272 546.261 57.7106C536.959 48.1353 525.847 43.4771 512.669 43.4771C499.49 43.4771 488.379 48.1353 479.335 57.7106C470.29 67.0272 465.639 78.414 465.639 91.6124C465.639 104.811 470.29 116.198 479.335 125.514C488.379 134.831 499.49 139.489 512.669 139.489Z" fill="#505D65" />
            <path d="M98.9686 268.967H134.887L154.784 344.793L185.792 243.346H232.822L172.355 421.654H139.021L116.54 334.959L94.8341 421.654H61.2416L1.29202 243.346H48.0631L78.8131 344.793L98.9686 268.967Z" fill="#505D65" />
            <path d="M368.693 383.87V421.654H250.861V243.346H366.368V281.13H294.015V315.29H357.582V352.298H294.015V383.87H368.693Z" fill="#505D65" />
            <path d="M178.04 662.671H132.303L117.315 621.782H61.2416L46.2542 662.671H0L65.6345 484.363H112.664L178.04 662.671ZM106.204 584.516L88.8908 525.77L72.8698 584.516H106.204Z" fill="#505D65" />
            <path d="M238.246 603.149V662.671H195.093V484.363H268.738C288.376 484.363 303.364 490.315 313.958 501.961C324.553 513.607 329.721 527.581 329.721 543.885C329.721 557.343 326.103 569.506 318.61 580.116C311.374 590.727 300.78 597.714 287.084 601.078L330.496 662.671H280.366L242.122 603.149H238.246ZM266.67 522.147H238.246V565.883H266.67C292.511 567.177 292.511 520.594 266.67 522.147Z" fill="#505D65" />
            <path d="M478.717 624.887V662.671H360.885V484.363H476.391V522.147H404.038V556.307H467.605V593.315H404.038V624.887H478.717Z" fill="#505D65" />
          </svg>
        </span>
      </div>
      <div className="flex flex-col gap-[30px] items-center xl:items-baseline">
        <h1 className="text-[#505D65] text-[20px] leading-[26px] w-[325px] xl:w-full 2xl:text-[32px] 2xl:leading-[41px] font-bold">Welcome to Fireflies, your trusted companion in the realm of travel.</h1>
        <div className="flex flex-col gap-[30px] w-[325px] text-[12px] leading-[18px] xl:w-full xl:text-[20px] xl:leading-[30px] text-justify text-[#505D65]">
          <p>Since our inception in 2011, we have been dedicated to redefining the travel experience for people around the globe. With users from over 165 countries and a vast array of over 5.1 million accommodations and 800 airlines, Fireflies stands as a leading online tourism booking portal, committed to bringing you unparalleled travel experiences.</p>
          <p>At Fireflies, we believe in making the world more accessible and enjoyable for everyone. Our platform is not just about booking your next trip; it’s about creating memories that last a lifetime. Whether you're seeking adventure, relaxation, cultural immersion, or business travel, we cater to all your needs with ease and efficiency.</p>
        </div>
        <div className="grid grid-cols-3 gap-5 xl:gap-[53px] ">
          <Status title="165" subTitle="Countries" />
          <Status title="800" subTitle="Airlines" />
          <Status title="5.1M" subTitle="Accommodations" />
        </div>
      </div>


    </div>
  )
}

export default WhoWeAre