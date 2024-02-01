import { mainNavbar } from "../../../../interfaces/interface";

// Привязка роутинга к  навбару (дестоп) //! Партнерская версия 
export const partnerNavbar : Array <mainNavbar>=[
    { id: 1, name: `Моя страница`, route: `/partner_page/my_page`, icons: `профиль` },
    { id: 2, name: `Товары`, route: `/partner_page/products`, icons: `товары` },
    { id: 3, name: `Статистика`, route: `/partner_page/statistics`, icons: `статистика` },
    { id: 4, name: `Почта`, route: `/partner_page/letters`, icons: `почта` },
    { id: 5, name: `Выход`, route: `/`, icons: `выход` },
];

// Привязка роутинга к  навбару (мобилка) //! Партнерская версия 

export const  partnerNavbarMobile : Array <mainNavbar>=[
    { id: 1, name: `Моя страница`, route: `/partner_page/my_page`, icons: `профиль` },
    { id: 2, name: `Товары`, route: `/partner_page/products`, icons: `товары` },
    { id: 3, name: `Статистика`, route: `/partner_page/statistics`, icons: `статистика` },
    { id: 4, name: `Почта`, route: `/partner_page/letters`, icons: `почта` },
    { id: 5, name: `Выход`, route: `/`, icons: `выход` },
];