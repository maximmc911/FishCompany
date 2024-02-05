import { NavLink } from 'react-router-dom';
import {partnerNavbar} from './index'

import Icons from '../../../../components/UI/icons/Icons'
const NavbarMain = () => {


  return (
    <>
      <div className="flex items-center gap-10">
        {partnerNavbar.map((e)=>(
          <div className="" key={e.id}>
        <NavLink to={e.route}>
          <div className=" flex flex-col items-center">
         <Icons props={e.icons}/>
          <p className='text-xl'>{e.name}</p>
          </div>
        </NavLink>
          </div>

        ))}


        
      </div>


    </>
  )
}

export default NavbarMain