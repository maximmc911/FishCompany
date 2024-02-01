import { Route, Routes } from 'react-router-dom'
import { routesMain } from './routes/index'
import Feedback from '../../components/UI/feedback/Feedback'
import Navbar from '../../components/navbar/Navbar'
import { mainNavbarMobile } from './components/navbar'
import NavbarMain from './components/navbar/NavbarMain'
/* import NavbarMain from './components/navbar/index' */

const Main = () => {

    // functions
    const setRoutes = () =>
    routesMain.map(({ id, path, element }) => (
      <Route key={id} path={path} element={element} />
      ));
      
  
  return (
    <>
      <nav>
        <Navbar navMob={ mainNavbarMobile}>
          
    <NavbarMain/>
        </Navbar>
       
       
      </nav>

      <div className="p-2">
        <Routes>
          {setRoutes()}
        </Routes>
        <Feedback />
      </div>
    </>
  )
}

export default Main