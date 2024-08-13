import { useContext, useRef } from "react";
import Banner1 from "../assets/image/banner.webp";
import Banner2 from "../assets/image/gallery_img_02.webp";
import Banner3 from "../assets/image/banner2.jpg";
import Banner4 from "../assets/image/banner3.jpg";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { MyContext } from "../App";

const Gallery = () => {
  const elementRef = useRef();
  const {gallery}=useContext(MyContext)
  const ImgApi = [Banner1,Banner2, Banner3, Banner4];
  const slideLeft = (e) => {
    e.scrollLeft -= 400;
  };
  const slideRight = (e) => {
    e.scrollLeft += 400;
  };
  return (
    <div className=" py-10 bg-gray-50" ref={gallery}>
      <h1 className="text-black text-4xl font-semibold text-center py-10">
        Gallery
      </h1>
      <div className="relative">
        <FiChevronLeft
          className="absolute md:hidden block left-0 text-6xl top-[42%] z-10  text-white rounded-full p-3 bg-black/70"
          onClick={() => {
            slideLeft(elementRef.current);
          }}
        />
        <FiChevronRight
          className="absolute md:hidden block right-0 text-6xl top-[42%] z-10  text-white rounded-full p-3 bg-black/70"
          onClick={() => {
            slideRight(elementRef.current);
          }}
        />

        <div
          className="flex gap-2 overflow-x-hidden  scroll-smooth scrollbar-none "
          ref={elementRef}
        >
          {ImgApi.map((value) => {
            return (
              <img
                src={value}
                alt="...."
                className="md:w-1/4   rounded-lg   transition-all  "
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
