import { useState } from 'react';
import { Button } from '../../../../components/UI/Button/Button'
import {  Link } from 'react-router-dom';
import { Checkbox } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import CardItemBasket from './components/CardItemBasket';

const Basket = () => {
  const [Open, setOpen] = useState<boolean>(false);
  const [Example, setExample] = useState <Array<object|string>>([
    {
      id: 1,
      name: `барбус`,
      price: 120,
      quantity: 10,
    },
    {
      id: 2,
      name: `бассейн`,
      price: 12000,
      quantity: 3,
    },
    {
      id: 30,
      name: `Насос`,
      price: 4850,
      quantity: 13,
    },
  ])

  const HandleDelete = (e: object | number) =>{
    if (e === 0) {
      setExample([])
    } else {
      
      setExample(Example.filter(item => item !== e))
    }
    
  }
  const handleChange = () :void =>{
    setOpen(!Open)
  }
  return (
    <>     
    {/* Delete start */}
    <div className="">
    <FormControlLabel control={<Checkbox checked={Open} onChange={handleChange} name="jason" />} label="Проверка верстки корзины"/>
    </div>
    {/* Delete end */}
     <h1 className='mt-2 text-2xl text-center'> Корзина</h1>

    { Open ? 
      
 (   <div className="">
      
      <h1 className='mt-2 text-5xl font-semibold text-center m-7'> Ваша корзина пуста</h1>
      <Link to='/shop'>
      <h1 className='mt-2 text-2xl font-semibold text-center text-blue-400 underline m-7 text-pretty'>Перейдите в каталог</h1> 
      </Link>

    </div>)
    :
 

    (  <div className="" >
     { 
      Example.map((e: any, index): any=>(
        
      <CardItemBasket product={e} index={index} key={index}>
        <div onClick={()=>HandleDelete(e)}>
            <Button nameBTN={`Удалить`}/>
          </div>
      </CardItemBasket>
    
      ))
    }
      </div>)
    
   
    }
    
      {/*   
      </CardItemBasket>
         */}
    
   {!Open ? 
    <div className="flex justify-end gap-6">
      <div className="" onClick={() => HandleDelete(0)}>
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