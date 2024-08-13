 

import { useContext, useState } from "react";
import Banner1 from "../assets/image/banner.webp";
import Banner2 from "../assets/image/gallery_img_02.webp";
import Banner3 from "../assets/image/banner2.jpg";
import Banner4 from "../assets/image/banner3.jpg";
 

import { ImLocation2 } from "react-icons/im";
import { MyContext } from "../App";

const Home = ({setPopUpShow}) => {
  const [imgUrl, setImgUrl] = useState(Banner1);
  const [border, setBorder] = useState("Banner1");
  const {setPopUpHeading}=useContext(MyContext)
 
  return (
    <div
      style={{ backgroundImage: `url(${imgUrl})` }}
      className="md:h-[100vh] h-[50vh] bg-cover bg-right md:bg-bottom transition-all delay-100 ease-linear  "
    >
      <div className="  w-full h-full text-white flex flex-col justify-end ">
        <div className="flex justify-around items-center md:items-start md:ml-40 flex-col-reverse md:gap-7 gap-2  md:mb-28">
          <div className=" md:p-5 p-1 rounded-md shadow-md">
            <p className="font-extrabold text-xl md:text-5xl mb-3 hidden md:block ">  Mahindra Lifespaces</p>
            <div className="md:flex items-center hidden  ">
              <ImLocation2 className="text-red-600 text-xl" />
              <p className="">Kharadi, Pune, Maharashtra</p>
            </div>

            <div className="flex gap-2 select-none cursor-pointer">
               
              <img
                src={Banner1}
                alt="ban..1"
                className={`w-[50px] h-[50px] rounded-full ${
                  border == "Banner1" ? "border-2 border-custom-orange" : ""
                }`}
                onClick={() => {
                  setImgUrl(Banner1);
                  setBorder("Banner1");
                }}
              />
              <img
                src={Banner2}
                alt="ban..1"
                className={`w-[50px] h-[50px] rounded-full ${
                  border == "Banner2" ? "border-2 border-custom-orange" : ""
                }`}
                onClick={() => {
                  setImgUrl(Banner2);
                  setBorder("Banner2");
                }}
              />
              <img
                src={Banner3}
                alt="ban..1"
                className={`w-[50px] h-[50px] rounded-full ${
                  border == "Banner3" ? "border-2 border-custom-orange" : ""
                }`}
                onClick={() => {
                  setImgUrl(Banner3);
                  setBorder("Banner3");
                }}
              />
              <img
                src={Banner4}
                alt="ban..1"
                className={`w-[50px] h-[50px] rounded-full ${
                  border == "Banner4" ? "border-2 border-custom-orange" : ""
                }`}
                onClick={() => {
                  setImgUrl(Banner4);
                  setBorder("Banner4");
                }}
              />
            </div>
          </div>
          <div>
            <p className="md:text-base text-sm cursor-pointer bg-gray-100 text-logoBg  md:p-5 p-2 border-2  font-bold rounded-lg uppercase text-center" onClick={()=>{
              setPopUpShow(true)
              setPopUpHeading('SCHEDULE SITE VISIT')
            }}>schedule site visit <br /><span className="hidden md:block"> & <br /> view Project floor plan</span></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
