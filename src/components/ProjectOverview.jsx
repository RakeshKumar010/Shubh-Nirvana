import React, { useContext } from "react";
import { MyContext } from "../App";
import Banner4 from "../assets/image/banner3.jpg";

const ProjectOverview = () => {
  const { project } = useContext(MyContext);
  return (
    <div className=" bg-gray-50 pb-10 text-center" ref={project}>
      <h1 className="text-2xl mt-10 font-semibold mb-5 text-center  text-black">
        Shubh Nirvana Viman Nagar
      </h1>
      <div className="flex md:flex-row flex-col justify-center gap-3 md:p-0 px-2 md:gap-10">
        <img src={Banner4} alt="..." className="rounded-md h-96" />

        <div className="md:w-2/5 px-1 md:text-start">
          <h4 className=" text-lg font-semibold">Designed For Elegance; Crafted For Extravagance</h4>
          <p className="">
            Welcome to Shubh Nirvana, where exceptional living takes center
            stage. Our project in the vibrant Viman Nagar, Pune, offers a life
            less ordinary. We've curated a cocoon of comfort and luxury, where
            your desires find fulfillment. Embrace the lush greenery and
            serenity that surrounds your spacious 3 BHK home. Within the secure
            confines of our elite gated community, you can live, relax, play,
            and party to your heart's content.
            
      
              At Shubh Nirvana, we understand that luxury is personal. That's
              why we offer you the freedom to choose your in-apartment luxury
              specifications, from tiles to fittings and sanitaryware, so you
              can infuse your unique style into your home. Experience a
              lifestyle that elevates your everyday existence to the next level.
              Welcome home to Shubh Nirvana, where bold amenities and impeccable
              craftsmanship meet to create an extraordinary living experience.
           
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectOverview;
