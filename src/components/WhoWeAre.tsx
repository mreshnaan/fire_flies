import HorizontalTitle from "./HorizontalTitle"
import Status from "./Status"

function WhoWeAre() {
  return (
    <div className=" grid grid-cols-1  xl:grid-cols-2 xl:p-[80px] xl:gap-20 2x:pl-[140px] 2xl:pr-[240px] 2xl:pt-[100px] 2xl:pb-[150px] 2xl:gap-36">
      <div className="flex flex-col items-center xl:flex-row xl:items-start xl:gap-[50px] 2xl:gap-[60px]">
        <HorizontalTitle title={"who we are"} mainContainerClassName="hidden xl:flex" />
        <div className={`xl:hidden flex items-center justify-center gap-10`}>
          <div className={"border-b-2 w-[258px] h-[1px] border-[#505D65]"}></div>
          <p className={"font-bold text-[10px] xl:text-[12px] text-[#505D65] uppercase min-w-[79px] w-fit"}>PRESIDENT CEO</p>
        </div>


        <span>
          <svg className="w-[246px] h-[150px] xl:w-[410px] xl:h-[450px] 2xl:w-[610px] 2xl:h-[665px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 610 665" fill="none">
            <path d="M98.9686 27.9495H134.887L154.784 103.776L185.792 2.32913H232.822L172.355 180.637H139.021L116.54 93.9415L94.8341 180.637H61.2416L1.29202 2.32913H48.0631L78.8131 103.776L98.9686 27.9495Z" fill="#505D65" />
            <path d="M294.015 72.7206H348.28V2.32913H392.208V180.637H348.28V111.281H294.015V180.637H250.861V2.32913H294.015V72.7206Z" fill="#505D65" />
            <path d="M421.969 91.6124C421.969 66.2508 430.755 44.771 448.326 26.9144C466.156 9.05772 487.604 0 512.669 0C537.992 0 559.44 9.05772 577.011 26.9144C594.841 44.771 603.627 66.2508 603.627 91.6124C603.627 116.715 594.841 138.454 577.011 156.31C559.44 174.167 537.992 182.966 512.669 182.966C487.604 182.966 466.414 174.167 448.585 156.31C430.755 138.454 421.969 116.715 421.969 91.6124ZM512.669 139.489C525.847 139.489 537.217 134.831 546.261 125.514C555.564 116.198 560.215 104.811 560.215 91.6124C560.215 78.414 555.564 67.0271 546.261 57.7106C536.959 48.1353 525.847 43.4771 512.669 43.4771C499.49 43.4771 488.379 48.1353 479.335 57.7106C470.29 67.0271 465.639 78.414 465.639 91.6124C465.639 104.811 470.29 116.198 479.335 125.514C488.379 134.831 499.49 139.489 512.669 139.489Z" fill="#505D65" />
            <path d="M98.9686 268.967H134.887L154.784 344.793L185.792 243.346H232.822L172.355 421.654H139.021L116.54 334.959L94.8341 421.654H61.2416L1.29202 243.346H48.0631L78.8131 344.793L98.9686 268.967Z" fill="#505D65" />
            <path d="M368.693 383.87V421.654H250.861V243.346H366.368V281.13H294.015V315.29H357.582V352.298H294.015V383.87H368.693Z" fill="#505D65" />
            <path d="M178.04 662.671H132.303L117.315 621.782H61.2416L46.2542 662.671H0L65.6345 484.363H112.664L178.04 662.671ZM106.204 584.516L88.8908 525.77L72.8698 584.516H106.204Z" fill="#505D65" />
            <path d="M238.246 603.149V662.671H195.093V484.363H268.738C288.376 484.363 303.364 490.315 313.958 501.961C324.553 513.607 329.721 527.581 329.721 543.885C329.721 557.343 326.103 569.506 318.61 580.116C311.374 590.727 300.78 597.714 287.084 601.078L330.496 662.671H280.366L242.122 603.149H238.246ZM266.67 522.147H238.246V565.883H266.67C292.511 567.177 292.511 520.594 266.67 522.147Z" fill="#505D65" />
            <path d="M478.717 624.887V662.671H360.885V484.363H476.391V522.147H404.038V556.307H467.605V593.315H404.038V624.887H478.717Z" fill="#505D65" />
            <path d="M563.487 602.89H526.536V599.784C526.536 587.621 527.052 581.669 530.412 572.611C533.771 563.554 541.265 557.084 553.41 551.908L562.971 547.767C568.914 545.438 571.756 541.039 571.756 534.828C571.756 525.77 565.038 520.853 554.702 520.853C545.657 520.853 538.164 527.84 538.164 537.416H500.954C500.954 501.443 522.143 481.775 555.477 481.775C571.756 481.775 584.935 486.433 595.013 495.491C605.09 504.549 610 516.971 610 532.24C610 556.825 597.597 573.646 576.924 581.151C566.588 585.033 563.487 590.468 563.487 602.89ZM521.109 640.932C521.109 627.475 531.962 617.382 545.399 617.382C559.094 617.382 570.206 627.475 570.206 640.932C570.206 654.648 559.094 665 545.399 665C531.962 665 521.109 654.648 521.109 640.932Z" fill="#505D65" />
          </svg>
        </span>
      </div>
      <div className="flex flex-col gap-[30px]">
        <h1 className="text-[#505D65] 2xl:text-[32px] 2xl:leading-[41px] font-bold">Welcome to Fireflies, your trusted companion in the realm of travel.</h1>
        <div className="flex flex-col gap-[30px] text-[20px] leading-[30px] text-justify text-[#505D65]">
          <p>Since our inception in 2011, we have been dedicated to redefining the travel experience for people around the globe. With users from over 165 countries and a vast array of over 5.1 million accommodations and 800 airlines, Fireflies stands as a leading online tourism booking portal, committed to bringing you unparalleled travel experiences.</p>
          <p>At Fireflies, we believe in making the world more accessible and enjoyable for everyone. Our platform is not just about booking your next trip; it’s about creating memories that last a lifetime. Whether you're seeking adventure, relaxation, cultural immersion, or business travel, we cater to all your needs with ease and efficiency.</p>
        </div>
        <div className="grid grid-cols-3 gap-[53px]">
          <Status title="165" subTitle="Countries" />
          <Status title="800" subTitle="Airlines" />
          <Status title="5.1M" subTitle="Accommodations" />
        </div>
      </div>


    </div>
  )
}

export default WhoWeAre