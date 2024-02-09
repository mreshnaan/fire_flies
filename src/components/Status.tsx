
function Status({ title, subTitle }: { title: string, subTitle: string }) {
  return (
    <div className=" h-[95px] w-[95px] xl:h-[150px] xl:w-[150px] 2xl:w-[190px] 2xl:h-[190px] status-bg rounded-full flex flex-col items-center justify-center">
      <span className="text-[28px] leading-[28.5px] xl:text-[40px] xl:leading-[46px] 2xl:text-[60px] 2xl:leading-[66px] font-black text-[#FFF] uppercase">{title}</span>
      <span className="text-[11px] leading-[16.5px] xl:text-[15px] xl:leading-[25px] 2xl:text-[20px] 2xl:leading-[30px] text-[#FFF]">{subTitle}</span>
    </div>
  );
}

export default Status;
