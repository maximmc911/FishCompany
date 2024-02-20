
import { Route, Routes } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar';

import { CallCenterRoutesChild } from './routes';
import NavbarCallCenter from './components/navbar/NavbarCallCenter';
import { NavbarMobile } from './components/navbar';

const MainPage = () => {
 const setRoutes = () =>
 CallCenterRoutesChild.map(({ id, path, element }) => (
    <Route key={id} path={path} element={element} />
    ));
  return (
    <div>
 {/*        <Navbar navMob ={partnerNavbarMobile}>
      <NavbarPartner/>
    </Navbar> */}
        <Navbar navMob ={NavbarMobile}>
          <NavbarCallCenter/>
        </Navbar>
    <Routes>
          {setRoutes()}
        </Routes>        
        </div>
  )
}

export default MainPage