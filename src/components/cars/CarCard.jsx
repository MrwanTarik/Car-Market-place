import barter from "../../assets/icons/barter.png";
import { useState } from "react";
import { RedHeartIcon, GrayHeartIcon } from "../layout/IconHover";
import { Link } from "react-router-dom";
import premiumImage from "../../assets/icons/premium.png"
function CarCard({
  car: { key, id, name, price, model, tank, datePosted, moved, location, carImage },
}) {
  const [heart, setHeart] = useState(false);
  return (
    <Link to={'/car-details'} id={id} className="xl:col-span-3 lg:col-span-4 md:col-span-6 col-span-12">
      <div className="flex-col bg-white rounded-t-[12px] shadow-md relative">
        <div className="absolute bottom-[20px] left-5 top-[20px] right-5 flex flex-col justify-between">
          <div className="flex justify-between">
            <img className="cursor-pointer" src={barter} alt="barter" width={24} height={24} />
            <button onClick={() => setHeart(!heart)}>
              {heart ? <RedHeartIcon /> : <GrayHeartIcon />}
            </button>
          </div>
          <div className="flex justify-between items-center">
            <Link className="bg-link py-1 px-[6px] w-[56px] font-primary text-base font-normal text-center text-white rounded-md">Salon</Link>
            <Link className="py-1 px-[10px]  bg-white rounded-md"><img src={premiumImage} alt="premiumImage" /></Link>
          </div>
        </div>
        <div className="h-[236px] ">
          <img className="h-full w-full rounded-t-[12px] object-cover" src={carImage} alt="carImage" />
        </div>
      </div>
      <div className="p-5 rounded-b-[12px] bg-white shadow-md">
        <h2 className="font-secondary text-[18px] font-bold leading-7 text-primary">
          {`$ ${price}`}
        </h2>
        <p className="mt-[6px] font-primary text-primary text-base font-normal">
          {name}
        </p>
        <p>
          <span className="font-primary text-primary text-base font-normal">
            {`${model}, ${tank} L, ${moved} km`}{" "}
          </span>
        </p>
        <p className="font-primary text-secondary font-normal leading-[24px] text-[14px]">{`${location}, ${datePosted}`}</p>
      </div>
    </Link>
  );
}

export default CarCard;
