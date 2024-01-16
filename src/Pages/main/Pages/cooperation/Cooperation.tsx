import React from 'react'
import About from './components/About'
import FormReg from './components/FormReg'

const Cooperation = () => {
  return (
    <>
   <h1 className='mt-2 text-2xl text-center'>Сотрудничество</h1>
   <div className="flex flex-wrap items-center justify-center gap-5 mt-4 ">

        
    <FormReg/>
    <About/>

        

   </div>
    </>
  )
}

export default Cooperation