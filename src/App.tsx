import { Route, Routes } from 'react-router-dom'
import Footer from "./components/footer/Footer"
import './style/style.css'
import {useSelector } from 'react-redux'


const App = () => {
  const {routesReducer} : unknown = useSelector(state => state);

// functions
  const setRoutes = () =>
  routesReducer.map(({ id, path, element, pages }) => (
      <Route key={id} path={path} element={element} >
        {pages?.map(({ id, path, element, pages }) => (
          <Route key={id} path={path} element={element} >
            {pages?.map(({ id, path, element }) => (
              <Route key={id} path={path} element={element} />))
            }
          </Route>
        ))}
      </Route>
    ));

  return (
    <>

      <div className="content">

        <Routes>
          {
            setRoutes()
          }
        </Routes>
      </div>
      <div className="footer">
        <Footer />
      </div>

    </>
  )
}

export default App