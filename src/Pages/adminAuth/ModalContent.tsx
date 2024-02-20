import { useState } from "react"
import { NavLink } from "react-router-dom"
import { Button } from "../../components/UI/Button/Button"
import ModalContentCallCenter from '../CallCenter/components/modal/ModalContent'
const ModalContent = ({name, status}: any) => {
const [Save, setSave] = useState <boolean>(false)
   /*  if (Save) {
      PushPartnerRouting(true);
    } */
    return (
      <>
      <ModalContentCallCenter name={name} status={status}/>
     {/*  <div className="flex flex-col justify-center p-8 ">
  
      <h1 className="text-2xl text-center">Добро пожаловать, <br/> {name} !</h1>
      <div className="flex justify-center pt-16 " onClick={()=>setSave(true)}>
  
      <NavLink to='/partner_page/my_page'>
  
      <Button nameBTN={`Войти`}/>
      </NavLink>
      </div>
      </div> */}
      </>
    )
  }
  
  export default ModalContent