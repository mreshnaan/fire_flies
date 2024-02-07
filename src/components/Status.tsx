
function Status({ title, subTitle }: { title: string, subTitle: string }) {
  return (
    <div className="w-[190px] h-[190px] status-bg rounded-full flex flex-col items-center justify-center">
     <span className="text-[60px] leading-[66px] font-black text-[#FFF] uppercase">{title}</span>
     <span className="text-[20px] leading-[30px] text-[#FFF]">{subTitle}</span>
    </div>
  );
}

export default Status;
