
import Navbar from "../../components/navbar/Navbar"
import {partnerRoutesChild } from "./routes/index"
import { partnerNavbarMobile } from "./components/navbar"
import NavbarPartner from "./components/navbar/NavbarPartner"
import { Route, Routes } from "react-router-dom"



const MainPartner = () => {

  
  const setRoutes = () =>
  partnerRoutesChild.map(({ id, path, element }) => (
    <Route key={id} path={path} element={element} />
    ));
    

  return (
    <>
    <Navbar navMob ={partnerNavbarMobile}>
      <NavbarPartner/>
    </Navbar>
    <Routes>
          {setRoutes()}
        </Routes>
    </>
  )
}

export default MainPartner