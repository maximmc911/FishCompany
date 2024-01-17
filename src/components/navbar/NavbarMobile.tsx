import{  useEffect, useState } from 'react'
import s from './style.module.css'
import {mainNavbar} from './index'
const NavbarMobile = ({open, children}: any) => {
  const [open1, setOpen1] = useState<boolean>(false)
  const mainNavbarMobile = []
  mainNavbarMobile.push(...mainNavbar)
  useEffect(() => {
   setOpen1(false)
  }, [open])
  const HandleOpenMenu = (): void =>{
    setOpen1(!open1)
  }

  return (
    <>
        <div className={!open ? s.window_close : s.window }>
      <div className="items-end">
        
          {children}
      </div>
    <div className="flex justify-center w-full h-full bg-blue-200 9y-8">
      <div className="flex-col gap-16 ">
        
    {mainNavbarMobile.map((e) =>
            <div className="" key={e.id} >
              { e.menu ? (
                <div className='flex justify-between'>
                 <p className='p-1 text-2xl' onClick={HandleOpenMenu} >{e.name}</p>
               { open1 ? <div className='flex-col'>
                {e.menu ? (e.pages.map((x) =>
                  <div className='flex-col' key={x.id}>
                    <p>{x.name}</p>
                  </div>
                  )) 
                  :null}</div>
              :null}
              </div>)
                :
                ( <p className='p-1 text-2xl' >{e.name}</p> )
              }
               
               {/*  {open1 ? 
                (e.menu ? (e.pages.map((x) =>
                  <div  key={e.id}>
                    <p>{x.name}</p>
                  </div>
                  ))
                  :null)
              :null} */}
               {/*  {e.menu ? 
                
                
                (e.pages.map((x) =>
                <div  key={e.id}>
                  <p>{x.name}</p>
                </div>
                ))
                :null}     */}        
            </div>
            )}
          
      </div>
           
            </div>
    
    </div>

    </>
  )
}

export default NavbarMobile