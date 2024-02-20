
import { makeRoutes } from "../../../interfaces/interface"
import IncomingRequests from "../pages/IncomingRequests"
import MainPage from "../MainPage"
import MessagePage from "../pages/MessagePage"
import Reports from "../pages/Reports"
import ToDoList from "../pages/ToDoList"
import UserPage from "../pages/UserPage"

export const CallCenterRoutes : Array<makeRoutes> =[
    {id:"Call-Center", path:"call-centr/*", element:<MainPage/>, pages:[] }
]

export const CallCenterRoutesChild : Array<makeRoutes> =[
    { id:"UserPage", path: "my_page", element: <UserPage/> },
    { id:"message", path: "message", element: <MessagePage/> },
    { id:"reports", path: "reports", element: <Reports/> },
    { id:"requests", path: "requests", element: <IncomingRequests/> },
    { id:"to_do_list", path: "to_do_list", element: <ToDoList/> },

]

if (CallCenterRoutes[0].pages !== undefined) {
    
    CallCenterRoutes[0].pages.push(...CallCenterRoutesChild)
}