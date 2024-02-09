
function TeamPerson({ img, name, description }: { img: string, name: string, description: string }) {
  return (
    <div className="flex flex-col items-center w-[150px] xl:w-[220px]">
      <img
        src={img}
        alt=""
        className="rounded-full w-[150px] h-[150px] xl:w-[220px] xl:h-[220px] object-contain"
      />
        <p className="font-bold text-[#505D65] text-[18px] leading-[27px] xl:text-[24px] xl:leading-[26px] mt-4">{name}</p>
        <p className="text-[#505D65] text-[12px] leading-[18px] xl:text-[15px] xl:leading-[15px] text-center mt-2">{description}</p>

    </div>
  );
}

export default TeamPerson;
