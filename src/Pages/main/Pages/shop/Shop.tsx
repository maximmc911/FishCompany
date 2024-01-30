import { Route, Routes } from 'react-router-dom'
import Breadcrumbmenu from '../../../../components/UI/Navigation/Breadcrumb/Breadcrumb'
import { routesShop } from './routes/index'
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import BestsellerPage from './components/BestsellerPage'


const Shop = () => {
  // constants

  // Временное использование данных для проверки работоспособности 
  const [example, setExample] = useState<Array<any>>([
    { title: <NavLink to='/shop'>Хиты продаж</NavLink> },
  ])

  //cycle
  for (let index = 0; index < routesShop.length; index++) {
    example.push({ title: <NavLink to={routesShop[index].path}>{routesShop[index].id}</NavLink>, })
  }

  // functions
  const setRoutes = () =>
    routesShop.map(({ id, path, element }) => (
      <Route key={id} path={path} element={element} />
    ));

  return (
    <>
      <h1 className='mt-2 text-2xl text-center'>Магазин</h1>
      <Breadcrumbmenu pages={example} />
      <Routes>
        {setRoutes()}
      </Routes>

      <BestsellerPage />



    </>
  )
}

export default Shop