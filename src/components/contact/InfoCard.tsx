import React from "react";

const InfoCard = ({
  info,
}: {
  info: { title: string; icon: any; data: string[] };
}) => {
  return (
    <div className=" flex-1 min-w-fit flex gap-5 items-center border border-brandColor p-5 rounded">
      <div className="bg-brandColor/20 p-5 rounded-full">{info.icon}</div>
      <div>
        <h6 className="text-lg font-semibold mb-2">{info.title}</h6>
        {info.data.map((val) => (
          <div key={val} className="flex justify-between p">
            {val}
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfoCard;
