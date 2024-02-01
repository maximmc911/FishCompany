import { createSlice } from "@reduxjs/toolkit";
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
/*   {id: "MainPartner", path:"/partner_page", element: <MainPartner/>, pages:[] } //! удалить */

]

// Добавление дочерних роутеров в element: <Main/>
if (routes[0].pages !== undefined) {

  routes[0].pages.push(...routesMain);
}

const initialState : Array<makeRoutes> =  []
initialState.push(...routes)
export const RoutesSlice = createSlice({
    name: `Routes`,
    initialState,
    reducers: {
        toggleRoutes: (state, {payload: route}) =>{
    
          
            console.log(route);
            
            const isExist = state.some((r) => r.id === route.id)
          console.log(isExist);
          
            if (isExist) {
             const index = state.findIndex((item ) => item.id === route.id)
        
                if (index !== -1) {
                    state.splice(index, 1)
                }
        
            }else{
                
                state.push(route)
               
            }
  
         
        }
    }
})

export const {actions, reducer } = RoutesSlice
// Добавление роутинга для партнеров компании
/* routes.push(...partnerRoutes) */
/* export function PushPartnerRouting( params: boolean) : any {
 if (params) {
  routes.push(...partnerRoutes)
 }
} */

/* 
const index = () => {
  const routing = useMemo(()=> () => PushPartnerRouting(null),[])
  routing()
  return (
    <div>index</div>
  )
}

export default index */
/* export const routes1 = useMemo (() =>{
  return(routes)
}, [null])
 */
/* export function routes1(params:any) {
  routes useMemo(() =>  , [params])
} */
//! Example Start
/* import MainPartner from "../Pages/PartnerPages/MainPartner"  //! удалить */


//! Example End