import NavbarMobile from './NavbarMobile';
import { JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal, useState } from 'react';
import {  NavLink, To } from 'react-router-dom';
import Icons from "../icons/Icons";
const Navbar = ({navMob, children}: any) => {
  
// constants
const [open, setOpen] = useState<boolean>(false)

// functions
  const HandleOpenMenu = (): void =>{
    setOpen(!open)
  }
  
  return (
    <>
    <div className="flex items-center justify-around w-full bg-blue-800">
        <div className="flex items-center gap-2 p-2">
        
           <Icons props={`логотип`}/>
        </div>
       {children}

       
       
       <div className="" onClick={HandleOpenMenu}>
       <div className="cursor-pointer animate-pulse">
        <Icons props={`меню`}/>
        </div>
        </div>
       
    </div>
       
       
     

      
     
    
    
    <NavbarMobile open={open}>
      <div className="flex justify-end p-2 bg-blue-200 "  onClick={HandleOpenMenu} >
      <div className="cursor-pointer animate-bounce">
     
      <Icons props={`закрыть`}/>
        </div>  
      </div>
      <div className="flex justify-center w-full h-screen bg-blue-200 ">
      <div className="flex-col gap-16 ">
        
    {navMob.map((e: { id: Key | null | undefined; route: To; name: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; }) =>
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