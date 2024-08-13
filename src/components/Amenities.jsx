import { GiSoccerField } from "react-icons/gi";
import { GrGamepad } from "react-icons/gr";
import { MdOutlineVideoCameraBack } from "react-icons/md";
import { IoMdWifi } from "react-icons/io";
import { LuDatabaseBackup } from "react-icons/lu";
import { MdCable } from "react-icons/md";
import { BsTrainLightrailFront } from "react-icons/bs";
import { LuParkingCircle } from "react-icons/lu";

import { useContext } from "react";
import { MyContext } from "../App";


const Amenities = () => {
  const { amenities } = useContext(MyContext);
  const dataApi = [
    {
      icon: <MdOutlineVideoCameraBack className="text-6xl" />,
      name: "Security & CCTV Camera",
    },
    {
      icon: <IoMdWifi className="text-6xl" />,
      name: "Internet Ready",
    },

    {
      icon: <GiSoccerField className="text-6xl" />,
      name: "Landscape Garden",
    },
    {
      icon: <LuDatabaseBackup className="text-6xl" />,
      name: "Power Backup",
    },
    {
      icon: <MdCable className="text-6xl" />,
      name: "Satellite Cable",
    },
    {
      icon: <BsTrainLightrailFront className="text-6xl" />,
      name: "Rain Water Harvesting",
    },

    {
      icon: <LuParkingCircle className="text-6xl" />,
      name: "Parking Space",
    },
    {
      icon: <GrGamepad className="text-6xl" />,
      name: "Indoor Games",
    },

  ];
  return (
    <div className="flex flex-col md:p-14 p-5 bg-gray-100" ref={amenities}>
      <div className="text-center mb-3 ">
        <p className="md:text-4xl text-2xl font-bold text-black mb-10">
          Amenities
        </p>
      </div>

      <div className="flex flex-wrap justify-evenly gap-x-52 gap-y-16">
        {dataApi.map(({ icon, name }) => {
          return (
            <div className="flex flex-col md:w-40 w-full bg-[#111827] shadow-2xl shadow-black  justify-center rounded-full p-4 items-center border-2 border-[#ffd177]  text-[#ffd177]">
              {icon}
              <p className="text-center ">{name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Amenities;
