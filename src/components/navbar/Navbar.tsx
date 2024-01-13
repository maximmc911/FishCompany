import logo from './image/logo.jpg'
import {mainNavbar} from './index'
import { SlBasket } from "react-icons/sl";
import Stack from '@mui/material/Stack';
import Badge from '@mui/material/Badge';
import { RiMenuUnfoldFill } from "react-icons/ri";
import NavbarMobile from './NavbarMobile';
const Navbar = () => {
  return (
    <>
    <div className="flex items-center justify-around w-full bg-blue-800">
        <div className="flex items-center gap-2 p-2">
            <img src={logo} alt="logo" className='h-10 ' />
            <p>logo</p>
        </div>
        <div className="flex items-center gap-10">
            {mainNavbar.map((e) =>
            <div className="" key={e.id} >
                <p className='text-xl'>{e.name}</p>             
            </div>
            )}
        </div>
        <div className="">
            
             <Stack spacing={1} direction="row" sx={{ color: 'action.active' }}>
      <Badge color="info" badgeContent={999999}>
      <SlBasket
      size={20}
      color='white'
      />
      </Badge>
      </Stack>
        </div>
       <div className="hidden">
        <RiMenuUnfoldFill 
         size={25}
         color='white'
        />
        </div>
    </div>
    <NavbarMobile open={open}/>
    </>
  )
}

export default Navbar