import { useState } from 'react';
import { Button } from '../../../../components/UI/Button/Button'
import {  Link } from 'react-router-dom';
const Basket = () => {
  const [Open, setOpen] = useState<boolean>(true)
  return (
    <>
     <h1 className='mt-2 text-2xl text-center'> Корзина</h1>
    
    { Open ? 
      
 (   <div className="">
      
      <h1 className='mt-2 text-5xl font-semibold text-center m-7'> Ваша корзина пуста</h1>
      <Link to='/shop'>
      <h1 className='mt-2 text-2xl font-semibold text-center text-blue-400 underline m-7 text-pretty'>Перейдите в каталог</h1> 
      </Link>

    </div>)
    :
    null
    }
    
    
    
    
    
    
    
   {!Open ? 
    <div className="flex justify-end gap-6">
      <div className="">
      <Button nameBTN={`Очистить корзину`} />
        
      </div>
      <div className="" >
      <Button nameBTN={`Оформление заказа`} />
        
      </div>
    </div>
   :
   null  
   } 
    </>
  )
}

export default Basket