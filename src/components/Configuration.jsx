import React, { useContext } from "react";
import { MyContext } from "../App";
import Layout from "../assets/image/layout.webp";
import Layout1 from "../assets/image/layout1.webp";
 


import { IoBed } from "react-icons/io5";
import { SlSizeFullscreen } from "react-icons/sl";


const Configuration = () => {
  const { configuration, contact } = useContext(MyContext);
  const arrayObj = [
    {
      image: Layout,
      text: "2 BHK Spacia",
      size: "769.41  Sq.Ft.",

    },
    {
      image: Layout1,
      text: "2 BHK Grande (Corner)",
      size: "866.93  Sq.Ft.",

    },
    
    
  ];
  const scrollPage = (refElement) => {
    window.scrollTo({
      top: refElement.current.offsetTop,
      behavior: "smooth",
    });
  };
  return (
    <div className="flex flex-col md:p-14 p-5  " ref={configuration}>
      <div className="text-center mb-3 ">
        <p className="md:text-4xl text-2xl font-bold text-black mb-10">
          Configuration
        </p>
      </div>
      <div className="grid grid-cols-1 md:flex flex-wrap justify-evenly gap-8 ">
        {arrayObj.map(({ image, text, size }, index) => (
          <div
            key={index}
            onClick={() => {
              scrollPage(contact);
            }}
            className="shadow-md rounded-lg md:w-[45%]  cursor-pointer bg-white"
          >
            <img className="md:h-96 rounded-t-lg mx-auto border-2 blur-[2px] " src={image} alt="" />

            <div className="flex flex-col items-center rounded-b-lg   py-2">
              <div className="flex items-center gap-2">
                <IoBed />
                <p className="">{text}</p>
              </div>
              <div className="flex items-center gap-2">
                <SlSizeFullscreen />
                <p className="">{size}</p>
              </div>
              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Configuration;
