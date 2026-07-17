const InfoCard = ({
  info,
}: {
  info: { title: string; icon: any; data: string[]; link?: string };
}) => {
  const CardContent = (
    <>
      <div className="bg-brandColor/10 text-brandColor group-hover:bg-brandColor/20 group-hover:text-white border border-brandColor/15 group-hover:border-transparent p-4 rounded-full group-hover:scale-105 transition-all duration-300 shrink-0">
        {info.icon}
      </div>
      <div className="flex-1 min-w-0">
        <h6 className="text-[10px] font-code font-bold tracking-widest text-zinc-500 uppercase mb-1">
          {info.title}
        </h6>
        {info.data.map((val) => (
          <div key={val} className="text-sm sm:text-base font-extrabold text-foreground group-hover:text-brandColor/90 transition-colors duration-300 truncate leading-snug">
            {val}
          </div>
        ))}
      </div>
    </>
  );

  const classes =
    "glass-card flex-1 min-w-[280px] flex gap-5 items-center border border-border/30 hover:border-brandColor/35 bg-card/40 dark:bg-zinc-950/10 p-5 rounded-2xl shadow-sm hover:shadow-[0_0_20px_rgba(176,98,35,0.05)] transition-all duration-300 group hover:-translate-y-0.5 w-full";

  if (info.link) {
    return (
      <a href={info.link} className={`${classes} cursor-pointer`}>
        {CardContent}
      </a>
    );
  }

  return (
    <div className={`${classes} cursor-default`}>
      {CardContent}
    </div>
  );
};

export default InfoCard;
