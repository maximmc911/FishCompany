import React from 'react'
import { formatCurrency } from '../../../mixins/features';

const Sale = () => {
    let example = 1504;
  return (
    <>
    <h1 className='border-b-2 border-blue-800 text-xl'> В продаже: <span className='font-semibold'>{formatCurrency(example)}</span> шт.</h1>
    </>
  )
}

export default Sale