
function TeamPerson({ img, name, description }: { img: string, name: string, description: string }) {
  return (
    <div className="flex flex-col items-center min-w-[220px]">
      <img
        src={img}
        alt=""
        className="rounded-full w-[220px] h-[220px] object-contain"
      />
        <p className="font-bold text-[#505D65] text-[24px] leading-[26px] mt-4">{name}</p>
        <p className="text-[#505D65] text-[15px] leading-[15px] text-center mt-2">{description}</p>

    </div>
  );
}

export default TeamPerson;
