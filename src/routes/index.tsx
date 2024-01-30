import NotFound from "../Pages/404/NotFound"
import Main from "../Pages/main/Main"
import AdminAuth from "../Pages/admin/AdminAuth"
import { routesMain } from '../Pages/main/routes/index'
import { makeRoutes } from '../interfaces/interface'
import PartnerAuth from "../Pages/main/Pages/Pages_partner/PartnerAuth"


export const routes: Array<makeRoutes> = [
  /* страницы для читателей*/
  { id: "MainPage", path: "/", element: <Main />, pages: [] },
  { id: "NotFound", path: "*", element: <NotFound />, pages: [] },


  { id: "AdminAuth", path: "admin_page", element: <AdminAuth />, pages: [] },
  { id: "PartnerAuth", path: "partner_login", element: <PartnerAuth />, pages: [] },

]

// Добавление дочерних роутеров в element: <Main/>
if (routes[0].pages !== undefined) {

  routes[0].pages.push(...routesMain)
}