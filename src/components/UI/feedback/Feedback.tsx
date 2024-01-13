import { RiFeedbackLine } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import s from './index.module.css'
import { useState } from "react";
import FormInput from "./components/formInput";
import { Button } from "../Button/Button";
 


const Feedback = () => {
    const [Open, setOpen] = useState<boolean>(false)
    const HandleCheck = () =>{
        setOpen(!Open)
    }
  
  return (
    <>
    
        <div className={  Open ? s.label_close: s.label} onClick={HandleCheck}>
        <RiFeedbackLine
        size={28}
        />
        </div>
    <div >
    
          <div className="fixed z-10 top-12 left-1/2 ">
        <div className={!Open ? s.window_close : s.window }>
          <div className="flex justify-between pb-2 ">
            <h3 className="text-xl font-semibold ">Обратная связь</h3>
            <div className="" onClick={HandleCheck} >
        <IoClose
              size={30}
              />
              
            </div>
            
          </div>
       
          <FormInput>
            <div onClick={HandleCheck}>
            <Button nameBTN={`Отправить`}/>
            
            </div>
          </FormInput>
        </div>
              </div>
              </div>
    </>
  )
}

export default Feedback