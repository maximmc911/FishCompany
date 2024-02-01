import { makeRoutes } from "../../../interfaces/interface";
import Main from "../../main/Main";

import MainPartner from '../MainPartner'
import MessagePartner from "../Pages/MessagePartner";
import PagePartner from "../Pages/PagePartner";
import ProductsSale from "../Pages/ProductsSale";
import StatisticPartner from "../Pages/StatisticPartner";

export const partnerRoutes : Array<makeRoutes>  = [
{id: "MainPartner", path:"partner_page/*", element: <MainPartner/>, pages:[] }
]
export const partnerRoutesChild : Array<makeRoutes>  = [
   
        { id:"PagePartner", path: "my_page", element: <PagePartner/> },
        { id:"ProductsSale", path: "products", element: <ProductsSale/> },
        { id: "StatisticPartner", path: "statistics", element: <StatisticPartner/> },
        { id: "MessagePartner", path: "letters", element: <MessagePartner/> },
      /*   { id: "Exit", path: "exit", element: <Main/> }, */
 
    ]
    if (partnerRoutes[0].pages !== undefined) {
        
        partnerRoutes[0].pages.push(...partnerRoutesChild)
    }