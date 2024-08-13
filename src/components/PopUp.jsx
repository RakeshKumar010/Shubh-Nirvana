import { LuBadgeCheck } from "react-icons/lu";
import { ImCancelCircle } from "react-icons/im";
import { useContext, useState } from "react";
import { MyContext } from "../App";
import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
const PopUp = ({ setPopUpShow }) => {
  const form = useRef();
  const navigate = useNavigate();
  const { pupUpHeading } = useContext(MyContext);

  const [formData, setFormData] = useState({
    site:' Shubh Nirvana Viman Nagar',
    name: '',
    number: '',
    email: '',
  });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  
  const submitHandler = (event) => {
    event.preventDefault();
    let body = `
 <b>Site : </b>${formData.site}
 <br>
 <b>Name : </b>${formData.name}
 <br>
 <b>Email : </b>${formData.email}
 <br>
 <b>Number : </b>${formData.number}
 <br>
 <b>Message : </b>${formData.message}
    `;
    Email.send({
      SecureToken: "fb8ca823-ba7c-4ebf-a072-bfb263221e6c",
      From: "botmediadigitalmarketing@gmail.com",
      To:"botmediadigitalmarketing@gmail.com",
      Subject: "Details from "+formData.site,
      Body: body,
    }).then((message) => {
      if (message == "OK") {
        navigate("/thankyou");
      } else {
        console.log("error :", message);
      }
    });
  };

  return (
    <div className="bg-gray-900/60 backdrop-blur-sm z-40 fixed top-0 right-0 left-0 bottom-0 flex justify-center items-center">
      <div className="w-full border-2 relative   bg-gray-100 p-4 md:w-[40vw] rounded-md">
        <ImCancelCircle
          onClick={() => {
            setPopUpShow(false);
          }}
          className="text-black  text-2xl absolute top-0 cursor-pointer right-0"
        />
        <h1
          data-aos="fade-left"
          className="text-center text-4xl font-bold text-logoBg "
        >
          {pupUpHeading}
        </h1>
        <p className="text-center text-black">
          Registation Here And Avail The Best Offer
        </p>
        <form className="flex flex-col" onSubmit={submitHandler} ref={form}>
          <input
            type="text"
            className="p-4 bg-transparent text-black   placeholder:text-gray-700"
            placeholder="Name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="number"
            className="p-4 bg-transparent text-black   placeholder:text-gray-700 "
            placeholder="Mobile No."
            name="number"
            required
            value={formData.number}
            onChange={handleChange}
          />
          <input
            type="text"
            className="p-4 bg-transparent text-black   placeholder:text-gray-700"
            placeholder="E-Mail Address"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
          />
          <button className="bg-logoBg p-4 mt-1 text-white rounded-md  hover:shadow-2xl">
            Pre-Register Now
          </button>
        </form>
        <div className="mt-2">
          <div className="flex gap-1 text-logoBg items-center font-semibold">
            <LuBadgeCheck />
            <p>Available Units</p>
          </div>
          <div className="flex gap-1 text-logoBg items-center font-semibold">
            <LuBadgeCheck />
            <p>Payment Plan</p>
          </div>
          <div className="flex gap-1 text-logoBg items-center font-semibold">
            <LuBadgeCheck />
            <p>Floor Plan</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopUp;