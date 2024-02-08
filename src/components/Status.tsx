
function Status({ title, subTitle }: { title: string, subTitle: string }) {
  return (
    <div className="xl:h-[150px] xl:w-[150px] 2xl:w-[190px] 2xl:h-[190px] status-bg rounded-full flex flex-col items-center justify-center">
      <span className="xl:text-[40px] xl:leading-[46px] 2xl:text-[60px] 2xl:leading-[66px] font-black text-[#FFF] uppercase">{title}</span>
      <span className="xl:text-[15px] xl:leading-[25px] 2xl:text-[20px] 2xl:leading-[30px] text-[#FFF]">{subTitle}</span>
    </div>
  );
}

export default Status;
