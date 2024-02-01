import { mainNavbar } from "../../../../interfaces/interface";

// Привязка роутинга к  навбару (дестоп) //! Пользовательская версия 
export const MainNavbar : Array <mainNavbar>=[
    {
        id: 1,
        name: `Главная`,
        route:`/`
    },
    {
    id: 2,
    name: `Магазин`,
    route:`shop`
    },
    {
    id: 3,
    name: `Сотрудничество`,
    route:`cooperation`
    },
    {
    id: 4,
    name: `Полезное`,
    route:`useful`
    },
];

// Привязка роутинга к  навбару (мобилка) //! Пользовательская версия 

export const  mainNavbarMobile : Array <mainNavbar>=[
    {
        id: 1,
        name: `Главная`,
        route:`/`
    },
    {
    id: 2,
    name: `Магазин`,
    route:`shop`
    },
    {
    id: 3,
    name: `Сотрудничество`,
    route:`cooperation`
    },
    {
    id: 4,
    name: `Полезное`,
    route:`useful`
    },
    {
    id: 5,
    name: `Корзина`,
    route:`basket`
    },
    {
    id: 6,
    name: `Вход для партнеров`,
    route:`partner_login`
    },
];