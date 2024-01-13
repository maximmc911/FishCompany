import React from 'react'
import Feedback from '../../components/UI/feedback/Feedback'
import Navbar from '../../components/navbar/Navbar'
import MainPage from './components/MainPage'

const Main = () => {
  return (
    <>
    <nav>
        <Navbar/>
    </nav>
    <div className="p-2">
    <MainPage/>
    
    <Feedback/>
    </div>
    </>
  )
}

export default Main