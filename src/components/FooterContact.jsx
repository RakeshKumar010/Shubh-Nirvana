import { PiWhatsappLogoThin } from "react-icons/pi";
import { IoCallOutline } from "react-icons/io5";
import { PiNotebookLight } from "react-icons/pi";
import { useState } from "react";
import PopUp from "./PopUp";

const FooterContact = ({ name }) => {
  const phone = "9158145429";
  const message = `I'm interested in ${name}, Pune`;
  const [isOpen, setIsOpen] = useState(false);
  const [heading, setHeading] = useState("");
  const encodedMessage = encodeURIComponent(message);
  const link = `https://api.whatsapp.com/send?phone=${phone}&text=${encodedMessage}`;
  return (
    <>
      {isOpen ? (
        <PopUp setPopUpShow={setIsOpen} heading={heading} name={name} />
      ) : null}

      <div className="flex justify-between z-10 md:justify-around py-2 px-6 border-2 sticky bottom-0 right-0 left-0 bg-white lg:hidden">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center"
        >
          <PiWhatsappLogoThin className="text-" />
          <p className="text-sm ">WHATSAPP</p>
        </a>
        <div
          className="flex flex-col items-center"
          onClick={() => {
            setIsOpen(true);
            setHeading("Contact Us");
          }}
        >
          <PiNotebookLight className="text-" />
          <p className="text-sm ">CONTACT US</p>
        </div>
        <a href={`tel:${phone}`} className="flex flex-col items-center">
          <IoCallOutline className="text-" />
          <p className="text-sm ">CALL UP</p>
        </a>
      </div>
    </>
  );
};

export default FooterContact;
