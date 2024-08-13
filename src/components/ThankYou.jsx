import { Link } from 'react-router-dom'
import ThankuIcon from '../assets/image/thanks-icon.webp'
import { useEffect } from 'react'

const ThankYou = () => {
  useEffect(()=>{
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
  
    gtag('config', 'AW-10892452881');
    gtag('event', 'conversion', {'send_to': 'AW-10892452881/xKrJCJPz4pkZEJHI9sko'});

  },[])
  return (
    <div className='flex flex-col md:gap-5 gap-2 items-center p-10 mt-20 text-center select-none'>
        <img src={ThankuIcon} alt="...." className='h-[100px] inline-block max-w-full'/>
        <p className='text-[2.5rem] font-semibold'>You're All Set!</p>
        <p className='text-xl text-center'>Greetings From Shubh Nirvana Viman Nagar, Pune</p>
        <p className='md:text-center text-start'>Thanks you for expressing interest on our website. <br /> <span>
        Our expert will get in touch with you shortly.</span></p>
        <Link to={'/'} className='bg-[#54d680] rounded-sm hover:shadow-2xl text-white py-2 px-5 text-lg'>
            Back To Home
        
        </Link>
    </div>
  )
}

export default ThankYou