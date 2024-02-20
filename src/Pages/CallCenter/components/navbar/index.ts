import { mainNavbar } from "../../../../interfaces/interface";

// Привязка роутинга к  навбару (дестоп) //! Партнерская версия 
export const NavbarDesktop : Array <mainNavbar>=[
    { id: 1, name: `Моя страница`, route: `/call-centr/my_page`, icons: `профиль` },
    { id: 3, name: `Заявки`, route: `/call-centr/requests`, icons: `заявки` },
    { id: 4, name: `Почта`, route: `/call-centr/message`, icons: `почта` },
    { id: 2, name: `Отчеты`, route: `/call-centr/reports`, icons: `отчеты` },
    { id: 2, name: `Органайзер`, route: `/call-centr/to_do_list`, icons: `заметки` },
    { id: 5, name: `Выход`, route: `/`, icons: `выход` },
];

// Привязка роутинга к  навбару (мобилка) //! Партнерская версия 

export const NavbarMobile : Array <mainNavbar>=[
    { id: 1, name: `Моя страница`, route: `/call-centr/my_page`, icons: `профиль` },
    { id: 3, name: `Заявки`, route: `/call-centr/requests`, icons: `заявки` },
    { id: 4, name: `Почта`, route: `/call-centr/message`, icons: `почта` },
    { id: 2, name: `Отчеты`, route: `/call-centr/reports`, icons: `отчеты` },
    { id: 2, name: `Органайзер`, route: `/call-centr/to_do_list`, icons: `заметки` },
    { id: 5, name: `Выход`, route: `/`, icons: `выход` },
];