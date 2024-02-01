import { NavLink } from "react-router-dom"
import { Button } from "../../../../components/UI/Button/Button"
import { useState } from "react"



const ModalContent = ({name}: any) => {
  const [Save, setSave] = useState <boolean>(false)
 /*  if (Save) {
    PushPartnerRouting(true);
  } */
  return (
    <>
    <div className=" flex flex-col justify-center p-8">

    <h1 className="text-2xl text-center">Добро пожаловать, <br/> {name} !</h1>
    <div className=" pt-16 flex justify-center" onClick={()=>setSave(true)}>

    <NavLink to='/partner_page/my_page'>

    <Button nameBTN={`Войти`}/>
    </NavLink>
    </div>
    </div>
    </>
  )
}

export default ModalContent