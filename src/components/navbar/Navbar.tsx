import logo from './image/logo.jpg'
import { GiCirclingFish } from "react-icons/gi";
import {mainNavbar} from './index'
import { SlBasket } from "react-icons/sl";
import { IoClose } from "react-icons/io5";
import Stack from '@mui/material/Stack';
import Badge from '@mui/material/Badge';
import { RiMenuUnfoldFill } from "react-icons/ri";
import NavbarMobile from './NavbarMobile';
import { useState } from 'react';
import {  NavLink } from 'react-router-dom';
const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false)
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
            {mainNavbar.map((e) =>
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
      <Badge color="info" badgeContent={0}>
      <SlBasket
      size={30}
      color='white'
      />
      </Badge>
      </Stack>
        </div>
        </NavLink>
       <div className="" onClick={HandleOpenMenu}>
       <div className="animate-pulse">
        <RiMenuUnfoldFill 
         size={25}
         color='white'
        />
        </div>
        </div>
    </div>
    <NavbarMobile open={open}>
      <div className="flex justify-end p-2 bg-blue-200 "  onClick={HandleOpenMenu} >
      <div className="animate-bounce">
      <IoClose 
          size={35}
          color='red'
      />
        </div>  
      </div>
    </NavbarMobile>
    </>
  )
}

export default Navbar