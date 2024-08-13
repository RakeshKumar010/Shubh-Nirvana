import React, { useContext } from 'react'
import { MyContext } from '../App'

const FooterFixed = ({setPopUpShow}) => {
  const {setPopUpHeading}=useContext(MyContext)
  return (
    <>
        <p className='bg-logoBg p-2 sm:flex hidden justify-between fixed bottom-0 left-0  m-2 rounded-md border-white border-2 hover:shadow-xl cursor-pointer shadow-black text-white' onClick={()=>{
          setPopUpShow(true)
          setPopUpHeading('Download Brochure')
        }}>DOWNLOAD BROCHURE</p>
        <p className='bg-logoBg p-2 sm:flex hidden justify-between fixed bottom-0 right-0   m-2 rounded-md border-white border-2 hover:shadow-xl cursor-pointer shadow-black text-white' onClick={()=>{
          setPopUpShow(true)
          setPopUpHeading('SCHEDULE SITE VISIT')
        }}>I AM INTERESTED</p>
        
    </>
  )
}

export default FooterFixed