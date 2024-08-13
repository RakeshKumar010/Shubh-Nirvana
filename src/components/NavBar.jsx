import { useContext, useState } from "react";
import ProjectImg from "../assets/project_logo.webp";
import { MyContext } from "../App";
import { IoMdMenu } from "react-icons/io";
import { Link } from "react-router-dom";

const NavBar = () => {
  const {
    price,
    project,
    configuration,
    about,
    gallery,
    amenities,
    location,
    contact,
  } = useContext(MyContext);
  const [navOpen, setNavOpen] = useState(false);

  const scrollPage = (refElement) => {
    const topSpace = 80;
    window.scrollTo({
      top: refElement.current.offsetTop - topSpace,
      behavior: "smooth",
    });
  };

  const navLinks = [
    { name: "PROJECT", ref: project },
    { name: "CONFIGURATION", ref: configuration },
    { name: "PRICE", ref: price },
    { name: "ABOUT", ref: about },
    { name: "GALLERY", ref: gallery },
    { name: "AMENITIES", ref: amenities },
    { name: "LOCATION", ref: location },
    { name: "CONTACT", ref: contact },
  ];

  return (
    <div className=" relative">
      <div className="fixed top-0 z-30 w-full flex justify-between   py-4 lg:px-[6vw]  px-2    items-center bg-white border-2">
        <Link to={"/"}>
          <img
            src={ProjectImg}
            alt="...."
            className="lg:h-[4vw]  h-14   rounded-md"
          />
        </Link>
        <div className={`md:flex hidden gap-5 text-black`}>
          {navLinks.map((link) => (
            <a
              href={`#${link.name.toLowerCase()}`}
              className="cursor-pointer"
              key={link.name}
              onClick={() => {
                scrollPage(link.ref);
              }}
            >
              {link.name}
            </a>
          ))}
        </div>
        <IoMdMenu
          className="text-black text-4xl md:hidden block"
          onClick={() => {
            setNavOpen(!navOpen);
          }}
        />
      </div>
      {navOpen ? (
        <div
          className={`flex  fixed z-30 right-0 left-0 top-[75px]  flex-col justify-center bg-gray-700 items-center py-5  md:hidden gap-5 text-white`}
        >
          {navLinks.map((link) => (
            <a
              href={`#${link.name.toLowerCase()}`}
              key={link.name}
              onClick={() => {
                scrollPage(link.ref);
                setNavOpen(false);
              }}
              className="hover:bg-logoBg "
            >
              {link.name}
            </a>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default NavBar;
