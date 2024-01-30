
import { FaKey } from "react-icons/fa";
import { GiCirclingFish } from "react-icons/gi";
import {MainNavbar, mainNavbarMobile} from './index'
import { SlBasket } from "react-icons/sl";
import { IoClose } from "react-icons/io5";
import Stack from '@mui/material/Stack';
import Badge from '@mui/material/Badge';
import { RiMenuUnfoldFill } from "react-icons/ri";
import NavbarMobile from './NavbarMobile';
import { useState } from 'react';
import {  NavLink } from 'react-router-dom';
import { useSelector } from "react-redux";
const Navbar = () => {
  
// constants
const [open, setOpen] = useState<boolean>(false)
const {shopFavorite}: any = useSelector(state => state)
// functions
  const HandleOpenMenu = (): void =>{
    setOpen(!open)
  }
  
  return (
    <>
    <div className="flex items-center justify-around w-full bg-blue-800">
        <div className="flex items-center gap-2 p-2">
        <GiCirclingFish 
        size='55'
        color='white'
        />
           
        </div>
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
      <SlBasket
      size={30}
      color='white'
      />
      </Badge>
      </Stack>
        </div>
        </NavLink>
        <NavLink to='partner_login'>
        <div className="flex gap-1">
      <FaKey 
       size={25}
       color='white'
       />
       <p className="text-white">вход</p> 
       </div>
       </NavLink>
       <div className="" onClick={HandleOpenMenu}>
       <div className="cursor-pointer animate-pulse">
        <RiMenuUnfoldFill 
         size={25}
         color='white'
        />
        </div>
        </div>
    </div>
    
    
    <NavbarMobile open={open}>
      <div className="flex justify-end p-2 bg-blue-200 "  onClick={HandleOpenMenu} >
      <div className="cursor-pointer animate-bounce">
      <IoClose 
          size={35}
          color='red'
      />
        </div>  
      </div>
      <div className="flex justify-center w-full h-screen bg-blue-200 ">
      <div className="flex-col gap-16 ">
        
    {mainNavbarMobile.map((e) =>
            <div className="" key={e.id} onClick={HandleOpenMenu} >
              <NavLink to={e.route}>
                
                 <p className='p-1 text-2xl' >{e.name}</p> 
              </NavLink>
                 </div>
              )}
               
          
            </div>
          
          
      </div>
    </NavbarMobile>
    </>
  )
}

export default Navbar