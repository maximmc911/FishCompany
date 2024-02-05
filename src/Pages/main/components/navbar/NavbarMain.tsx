

import Stack from '@mui/material/Stack';
import Badge from '@mui/material/Badge';
import {  NavLink } from 'react-router-dom';
import {MainNavbar} from './index'
import { useSelector } from "react-redux";
import Icons from "../../../../components/UI/icons/Icons";
const NavbarMain = () => {

    
    const {shopFavorite}: any = useSelector(state => state)
    return (
      <>

       <div className="flex items-center gap-10">
            {MainNavbar.map((e) =>
            <div className="" key={e.id} >
          <NavLink to={e.route}>
            
                <p className='text-xl'>{e.name}</p>             
          </NavLink>
                
          
            </div>
            )}
        </div>
        <NavLink to='basket'>
          
        <div className="">
            
             <Stack spacing={1} direction="row" sx={{ color: 'action.active' }}>
      <Badge color="info" badgeContent={shopFavorite.length}>
      <Icons props={`корзина`}/>
      </Badge>
      </Stack>
        </div>
        </NavLink>
        <NavLink to='partner_login'>
        <div className="flex gap-1">
       <Icons props={`ключ`}/>
       <p className="text-white">вход</p> 
       </div>
       </NavLink>
    
    </>
  )
}

export default NavbarMain