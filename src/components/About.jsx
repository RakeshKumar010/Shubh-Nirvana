import { useContext } from "react";
import { MyContext } from "../App";

import Banner2 from "../assets/image/gallery_img_02.webp";

const About = () => {
  const { about } = useContext(MyContext);
  return (
    <div className=" bg-gray-50 pb-10 text-center" ref={about}>
      <h1 className="text-black text-4xl  mb-10">About Developer</h1>
      <div className="flex md:flex-row flex-col-reverse justify-center items-center gap-5 md:gap-10">
        <div className="md:w-2/5 px-3">
        <h4 className="text-lg font-semibold">TRUST LEGACY OF 125 YEARS</h4>
          <p className="">
            Shubh Developers was established in 2011 with a shared objective: to
            harness the collective expertise of its directors from diverse
            backgrounds and deliver the finest products to its homeowners. The
            debut project, "Mio Palazzo," exemplifies elegance and style in a
            remarkable way. Shubh aspires to emerge as a leading real estate
            firm in India and expand its reach across the nation.
          </p>
        </div>
        <img src={Banner2} alt="..." className="md:w-2/6 rounded-md" />
      </div>
    </div>
  );
};

export default About;
