import NotFound from "../Pages/404/NotFound"
import Main from "../Pages/main/Main"
import AdminAuth from "../Pages/admin/AdminAuth"
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
  { id: "AdminAuth", path: "admin_page", element: <AdminAuth/> , pages:[] },

]
if (routes[0].pages!== undefined) {
  
  routes[0].pages.push(...routesMain)
}