import s from './style.module.css'


const NavbarMobile = ({ open, children }: any) => {
  return (
    <>
      <div className={!open ? s.window_close : s.window}>
        <div className="items-end">
          {children}
        </div>


      </div>



    </>
  )
}

export default NavbarMobile