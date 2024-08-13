import React, { createContext, useRef, useState } from 'react'
import Layout from './Layout/Index'
import ThankYou from './components/ThankYou'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar'
export const MyContext =createContext()
const App = () => {
  const project=useRef(null)
  const configuration=useRef(null)
  const about=useRef(null)
  const gallery =useRef(null)
  const amenities =useRef(null)
  const location =useRef(null)
  const contact =useRef(null)
  const price =useRef(null)
  const [pupUpHeading,setPopUpHeading]=useState('SCHEDULE SITE VISIT')
  return (
    <MyContext.Provider value={{project,configuration,about,gallery,amenities,location,contact,pupUpHeading,setPopUpHeading,price}}>
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Layout/>}/>
        <Route path='/thankyou' element={<ThankYou/>}/>
      </Routes>
      </BrowserRouter>
    </MyContext.Provider>
  )
}

export default App