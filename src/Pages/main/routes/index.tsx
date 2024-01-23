
import Useful from "../Pages/useful/Useful";
import Main from "../Pages/main/MainPage";
import Shop from "../Pages/shop/Shop";
import Cooperation from "../Pages/cooperation/Cooperation";
import Basket from "../Pages/basket/Basket";
import { makeRoutes} from '../../../interfaces/interface'
import {routesShop} from '../Pages/shop/routes/index'
import Shopping from "../Pages/basket/Shopping";
export const routesMain : Array<makeRoutes>= [

  /* страницы для читателей*/

  { id: "main", path: "/", element: <Main/>, pages:[] },
  { id: "useful", path: "useful", element: <Useful/>, pages:[] },
  { id: "shop", path: "shop/*", element: <Shop/>, pages:[] },
  { id: "cooperation", path: "cooperation", element: <Cooperation/>, pages:[] },
  { id: "basket", path: "basket", element: <Basket/>, pages:[] },
  { id: "shopping", path: "purchase", element: <Shopping/>, pages:[] },

]
if (routesMain[2].pages!== undefined) {
  
  routesMain[2].pages.push(...routesShop)
}