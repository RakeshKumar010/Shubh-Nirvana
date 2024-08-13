import Logo from "../assets/project_logo.webp";
import Qr_Code from "../assets/image/qr_code.png";
import { useContext } from "react";
import { MyContext } from "../App";
const Footer = () => {
  const {about}=useContext(MyContext)
  const scrollPage = (refElement) => {
    const topSpace = 80;
    window.scrollTo({
      top: refElement.current.offsetTop - topSpace,
      behavior: "smooth",
    });
  };

  return (
    <footer className="  shadow bg-gray-100 ">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href="#"
            className="flex items-center justify-center md:justify-start mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <img src={Logo} className="md:h-16 h-[70px] bg-black p-2  rounded-md" alt="Flowbite Logo " />
          </a>
          <ul className="md:flex hidden flex-wrap items-center mb-6 text-sm font-medium  sm:mb-0 text-black">
            <li >
              <p    onClick={() => {
                scrollPage(about);
              }} className="hover:underline me-4 md:me-6 cursor-pointer">
                About
              </p>
            </li>
            <li>
              <a href="https://www.homesfy.co.in/privacy.html" className="hover:underline me-4 md:me-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Licensing
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col text-black my-10 items-center gap-3">
          <img src={Qr_Code} alt="..." className="w-44"/>
 
            <p>MahaRERA Registration : P52100050937 </p>
           

        </div>
        <hr className="my-6 sm:mx-auto border-gray-700 lg:my-8" />
        <span className="block text-sm  sm:text-center text-black">
          © 2024{" "}
          <a
            href="https://www.botmediadigital.com/"
            className="hover:underline"
          >
            BotMedia Digital
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
