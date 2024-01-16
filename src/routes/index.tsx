import NotFound from "../Pages/404/NotFound"
import Main from "../Pages/main/Main"
import {routesMain} from '../Pages/main/routes/index'

interface ss {
  id: string,
  element:  JSX.Element,
  path: string,
  pages?: Array<ss>,
}
export const routes: Array<ss> = [
  /* страницы для читателей*/
  { id: "MainPage", path: "/", element: <Main/>, pages:[] },
  { id: "NotFound", path: "*", element: <NotFound/> , pages:[] },

]
if (routes[0].pages!== undefined) {
  
  routes[0].pages.push(...routesMain)
}