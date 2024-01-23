import React from 'react'
import CardItem from '../../../../../components/UI/CardItem/CardItem'

const BestsellerPage = () => {
  return (
    <div className=''>
        <h1 className='p-5 text-3xl text-center'> Хиты продаж</h1>
<div className="flex flex-wrap gap-4">
  
        <CardItem/>
        <CardItem/>
        <CardItem/>
        <CardItem/>
</div>
    </div>
  )
}

export default BestsellerPage