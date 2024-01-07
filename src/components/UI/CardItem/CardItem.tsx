import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { Button } from "../Button/Button";
import image from '../../../../public/sumatranskij-barbus-2.jpg'
const CardItem = () => {
    const [Quantity, setQuantity] = useState <number>(1)
    const HandleIncrement = () : void =>{
        setQuantity((e) => e+=1)
    }
    const HandleDecrement = () : void =>{
        if (Quantity >1) {
            setQuantity((e) => e-=1)
            
        }
    }
  return (
    <>
    <div className="m-40 rounded-sm shadow-lg bg-slate-200 w-60">
        <img src={image} alt=""  className="p-4 rounded-sm shadow-lg w-60"/>
        <div className="flex items-center justify-around p-4">
            <div className="">
        <p>200  <span>₽<span> за 1 шт.</span></span> </p>
        <p className="pt-5 underline cursor-pointer">Подробнее</p>
                
            </div>
            <div className="">
                
        <div className="flex items-center justify-around h-10 bg-blue-200 pr-5r rounded-xl ">
            <button className="h-10 bg-blue-400 rounded-s-xl" onClick={HandleDecrement}>
               <p className="p-1">
               <FaMinus size={18}/>
                </p> 
            </button>
           <h1 className="p-2 text-xl font-semibold">
            {Quantity}
            </h1> 
            <button className="h-10 bg-blue-400 rounded-e-xl" onClick={HandleIncrement}>
               <p className="p-1">
        <FaPlus size={18} />
                </p> 
            </button>
   
        </div>
        <div className="pt-2">
            <Button nameBTN={`Купить`}/>
        </div>
            </div>
        </div>
    
    </div>
    </>
  )
}

export default CardItem