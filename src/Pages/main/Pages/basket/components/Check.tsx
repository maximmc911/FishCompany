import {formatCurrency} from '../../../../../mixins/features'
import { useState } from 'react'
import { GiCirclingFish } from "react-icons/gi";
import { IoMdPrint } from "react-icons/io";
const Check = () => {
    const data = new Date();
    console.log(data);
    
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
      let n = 0;

      for (let index = 0; index < Example.length; index++) {
        const element = Example[index].price * Example[index].quantity;
        n+=element
        
      }
      const handlePrint = () : void =>{
        window.print()
 
      }
  return (
    <>
    <div className="flex justify-center " >
        
    <div className="rounded-sm shadow-lg bg-slate-200 w-72">
        <h1 className='text-xl text-center'>Пречек</h1>
        <p className='p-2 text-sm text-center'>
      
                
            {Date()} 
   
            </p>
        <div className="flex justify-center p-2">
            
    <GiCirclingFish 
        size='55'
        color='blue'
        />
        </div>
        <div className="flex justify-between p-2 border-b-2 border-black">
            <h1>Название</h1>
            <h1>Количество <span></span></h1>
            <h1>Цена <span></span> </h1>
        </div>
        {Example.map((item : any, index : any)=>(
        
        <div className="flex justify-between p-2 border-b-2 border-black" key={index}>
            <h1>{item.name}</h1>
            <h1>{item.quantity} <span>шт.</span></h1>
            <h1>{formatCurrency(item.quantity*item.price)} <span>₽</span> </h1>
        </div>
        
        ))
    }
       <div className="flex justify-between p-2">
        <h1>Итого:</h1>
        <h1>{formatCurrency(n)} <span>₽</span></h1>
       </div>
    <div className="p-2">
    <div className="flex justify-between">
        <h1>Инн:</h1>
        <p> {formatCurrency(414631683131)}</p>
    </div>
    <div className="flex justify-between">
        <h1>ОГРН:</h1>
        <p> {formatCurrency(414631683131)}</p>
    </div>
    <div className="flex justify-between">
        <h1>Тел:</h1>
        <p>+7 (989) 777 - 75 -75</p>
    </div>
    </div>
    <div className="p-2 ">
        <p>* Заявки принимаются с 9 до 18 по МСК. После 18:00 заявки будут обработаны в ближайший рабочий день</p>
        <div className="flex justify-end cursor-pointer" onClick={handlePrint}>
            
    <IoMdPrint 
    size={25}/>
    </div>
    </div>
    </div>
    </div>
    </>
  )
}

export default Check