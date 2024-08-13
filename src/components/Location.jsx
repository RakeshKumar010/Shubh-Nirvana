import { useContext } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MyContext } from "../App";

const Location = () => {
  const { location } = useContext(MyContext);
  const api = [
    { location: "➙  Pune Airport - 0.4 Km," },
    { location: "➙  Kalyani Nagar 3.5 Km," },
    { location: "➙  Vishrantwadi - 4.5 Km" },
    {
      location: "➙ Kharadi - 6.9 Km",
    },
    {
      location:
        "➙ Pune Railway Station - 7.9 Km",
    },
  ];

  return (
    <div className="py-10 bg-gray-50" ref={location}>
      <h1 className="text-black text-4xl font-semibold text-center py-10">
        Location
      </h1>
      <div className="flex flex-col md:flex-row  justify-center gap-10">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d31949.81971649638!2d73.907904!3d18.575112!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c1aa966eae5b%3A0x9182ba08ac0c3429!2sShubh%20Nirvana!5e1!3m2!1sen!2sin!4v1723525557079!5m2!1sen!2sin"
          className="w-full md:w-2/5"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <div className="w-full md:w-2/5 md:p-0 px-3">
          {api.map(({ location }) => {
            return (
              <div className="flex  gap-2 mb-2 md:text-xl text-lg">
                <FaMapMarkerAlt />
                <p>
                  {location}
                  
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Location;
