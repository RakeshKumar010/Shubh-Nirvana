import { useContext, useState } from "react";
import { MyContext } from "../App";
import { useNavigate } from "react-router-dom";


const Contact = () => {
  const {contact}=useContext(MyContext)
  const navigate = useNavigate();
  const [formData,setFormData]=useState({
    site:' Shubh Nirvana Viman Nagar',
    name:'',
    email:'',
    number:'',
    message:''
  })
  const handleChange=(e)=>{
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }
    
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
      To:["rohan.genclearning01@gmail.com", "sy6864@gmail.com"],
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
    <div className="bg-gray-50" ref={contact}>
      <section className="" id="contact">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="mb-4">
            <div className="mb-6 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12">
              <p className="text-base font-semibold uppercase tracking-wide text-blue-600 ">
                Contact
              </p>
              <h2 className="font-heading mb-4 tracking-tight md:text-4xl text-2xl font-bold text-customHbg-logoBg">
                Get in Touch
              </h2>
              <p className="mx-auto mt-4 max-w-3xl text-xl text-gray-600 ">
                Reach Out For Your Dream Home
              </p>
            </div>
          </div>
          <div className="flex items-stretch justify-center">
            <div className="md:grid md:grid-cols-2 flex flex-col-reverse ">
              <div className="h-full pr-6">
                <p className="mt-3 mb-12 text-lg text-center md:text-start text-gray-600 ">
                
               At Shubh Nirvana Viman Nagar, we're dedicated to providing you with the
                  best real estate services. Whether you're looking to buy,
                  sell, or rent, our experienced team is here to assist you.
                </p>
                <ul className="mb-6 md:mb-0">
                  <li className="flex">
                    <div className="flex h-10 w-10 items-center justify-center rounded bg-logoBg text-gray-50">
                      <svg
                        xmlns="http://"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="h-6 w-6"
                      >
                        <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                        <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"></path>
                      </svg>
                    </div>
                    <div className="ml-4 mb-4">
                      <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 ">
                        Our Address
                      </h3>
                      <p className="text-gray-600 ">
                      Shubh Nirvana, Survey No. 227, Plot no. 4</p>
                      <p className="text-gray-600 ">
                        Pune, Maharashtra, India
                      </p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="flex h-10 w-10 items-center justify-center rounded bg-logoBg text-gray-50">
                      <svg
                        xmlns="http://"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="h-6 w-6"
                      >
                        <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
                        <path d="M15 7a2 2 0 0 1 2 2"></path>
                        <path d="M15 3a6 6 0 0 1 6 6"></path>
                      </svg>
                    </div>
                    <div className="ml-4 mb-4">
                      <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 ">
                        Contact
                      </h3>
                      <p className="text-gray-600 ">
                        Mobile: +91 9158145429
                      </p>
                   
                    </div>
                  </li>
                  <li className="flex">
                    <div className="flex h-10 w-10 items-center justify-center rounded bg-logoBg text-gray-50">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="h-6 w-6"
                      >
                        <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                        <path d="M12 7v5l3 3"></path>
                      </svg>
                    </div>
                    <div className="ml-4 mb-4">
                      <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 ">
                        Working hours
                      </h3>
                      <p className="text-gray-600 ">
                        Monday - Friday: 08:00AM - 6:00PM
                      </p>
                      <p className="text-gray-600 ">
                        Saturday &amp; Sunday: 08:00AM - 9:00PM
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="card h-fit max-w-6xl p-5 md:p-12" id="form">
                <h2 className="mb-4 text-2xl font-bold ">
                  Ready to Get Started?
                </h2>
                <form id="contactForm" onSubmit={submitHandler}>
                  <div className="mb-6">
                    <div className="mx-0 mb-1 sm:mb-4">
                      <div className="mx-0 mb-1 sm:mb-4">
                        <label
                          for="name"
                          className="pb-1 text-xs uppercase tracking-wider"
                        ></label>
                        <input
                          type="text"
                          id="name"
                        onChange={handleChange}
                          placeholder="Your name"
                          className="mb-2 w-full rounded-md border border-gray py-2 pl-2 pr-4 shadow-md -300 sm:mb-0"
                          name="name"
                        />
                      </div>
                      <div className="mx-0 mb-1 sm:mb-4">
                        <label
                          for="email"
                          className="pb-1 text-xs uppercase tracking-wider"
                        ></label>
                        <input
                          type="email"
                          id="email"
                          onChange={handleChange}
                          placeholder="Your email address"
                          className="mb-2 w-full rounded-md border border-gray py-2 pl-2 pr-4 shadow-md -300 sm:mb-0"
                          name="email"
                        />
                      </div>
                      <div className="mx-0 mb-1 sm:mb-4">
                        <label
                          for="number"
                          className="pb-1 text-xs uppercase tracking-wider"
                        ></label>
                        <input
                          type="number"
                          id="number"
                          onChange={handleChange}
                          placeholder="Your mobile number"
                          className="mb-2 w-full rounded-md border border-gray py-2 pl-2 pr-4 shadow-md -300 sm:mb-0"
                          name="number"
                        />
                      </div>
                    </div>
                    <div className="mx-0 mb-1 sm:mb-4">
                      <label
                        for="textarea"
                        className="pb-1 text-xs uppercase tracking-wider"
                      ></label>
                      <textarea
                        id="textarea"
                        name="message"
                        onChange={handleChange}
                        cols="30"
                        rows="5"
                        placeholder="Write your message..."
                        className="mb-2 w-full rounded-md border border-gray py-2 pl-2 pr-4 shadow-md -300 sm:mb-0"
                      ></textarea>
                    </div>
                  </div>
                  <div className="text-center">
                    <button
                      type="submit"
                      className="w-full bg-logoBg text-white px-6 py-3 font-xl rounded-md sm:mb-0"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

       
        </div>
      </section>
    </div>
  );
};

export default Contact;