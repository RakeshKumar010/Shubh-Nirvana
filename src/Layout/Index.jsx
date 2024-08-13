import { useEffect, useState } from "react";
import About from "../components/About";
import Amenities from "../components/Amenities";
import Configuration from "../components/Configuration";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import Header from "../components/Header";
import Location from "../components/Location";
import PopUp from "../components/PopUp";
import ProjectOverview from "../components/ProjectOverview";
import FooterContact from "../components/FooterContact";
import FooterFixed from "../components/FooterFixed";
import Price from "../components/Price";
import StartingPrice from "../components/StartingPrice";

const Layout = () => {
  const [pupUpShow, setPopUpShow] = useState(false);
  useEffect(()=>{
    setTimeout(() => {
      setPopUpShow(true)
    }, 4000);
  },[])
  return (
    <div className="w-full min-h-screen font-josefin-sans leading-8 ">
      <Header setPopUpShow={setPopUpShow}/>
      <StartingPrice/>
      <ProjectOverview />
      <Configuration />
      <Price setPopUpShow={setPopUpShow}/>
      <About />
      <Gallery />
      <Amenities/>
      <Location />
      <Contact />
      <Footer />
      {pupUpShow ? <PopUp setPopUpShow={setPopUpShow} /> : null}
      <FooterContact name={'Shubh Nirvana Viman Nagar'}   />
      <FooterFixed setPopUpShow={setPopUpShow}/>
    </div>
  );
};

export default Layout;
