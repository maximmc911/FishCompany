import Navbar from '../../components/navbar/Navbar'
import Feedback from '../../components/UI/feedback/Feedback'

import NavbarMain from '../main/components/navbar/NavbarMain';
import { mainNavbarMobile } from '../main/components/navbar';
import Icons from '../../components/icons/Icons';
const NotFound = () => {
  return (
    <>
      <nav>
        <Navbar navMob={mainNavbarMobile}>
          <NavbarMain />
        </Navbar>
      </nav>
      <div className='flex flex-col items-center gap-6 mt-10'>
     
        <Icons props={`блокировка`}/>
        <h1 className='text-5xl text-center'>404 Not Found</h1>
        <h1 className='text-2xl text-center'>Страница, на которую вы пытаетесь попасть, <br /> отстутствует или еще не создана</h1>
      </div>
      <Feedback />
    </>
  )
}

export default NotFound