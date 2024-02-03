import React from 'react'
import { formatCurrency } from '../../../mixins/features';
import CardProduct from './component/CardProduct';
const Sale = ({props}: any) => {
  
  

  return (
    <>
    <h1 className='border-b-2 border-blue-800 text-xl pb-2'> В продаже: <span className='font-semibold'>{formatCurrency(props.length)}</span> шт.</h1>
   <div className=" flex flex-wrap gap-4 p-5">
   { props.map((e, index) =>(
      <div className="" key={index}>
      <CardProduct props={{e}} chapter={`активно`}/>
      </div>

   ))

   }
      </div>
    </> 
  )
}

export default Sale