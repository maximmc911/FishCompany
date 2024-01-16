
import Useful from "../Pages/useful/Useful";
import Main from "../Pages/main/MainPage";
import Shop from "../Pages/shop/Shop";
import Cooperation from "../Pages/cooperation/Cooperation";
import Basket from "../Pages/basket/Basket";

export const routesMain = [

  /* страницы для читателей*/

  { id: "main", path: "/", element: <Main/> },
  { id: "useful", path: "useful", element: <Useful/> },
  { id: "shop", path: "shop", element: <Shop/> },
  { id: "cooperation", path: "cooperation", element: <Cooperation/> },
  { id: "basket", path: "basket", element: <Basket/> },

]
