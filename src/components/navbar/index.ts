import {mainNavbar} from '../../interfaces/interface'
export const mainNavbar : Array <mainNavbar>=[
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
/* export const mainNavbarMobile : Array <mainNavbar>=[
    {
        id: 1,
        menu: false,
        name: `главная`,
        route:'/',
    },
    {
    id: 2,
    menu: true,
    name: `каталог`,
    route:'/',
    pages: [
        {
            id: 1,
            name: `example`,
            route:'/',
        },
        {
            id: 2,
            name: `example2`,
            route:'/',
        },
        {
            id: 3,
            name: `example3`,
            route:'/',
        },
    ]
    },
    {
    id: 3,
    menu: false,
            route:'/',
    name: `О нас`
    },
    {
    id: 4,
    menu: false,,
            route:'/',
    name: `Сотрудничество`
    },
    {
    id: 5,
    name: `Корзина`,
    menu: false,,
            route:'/',
    },
    {
    id: 6,
    name: `Корзина`,
    menu: true,
    route:'/',
    pages: [
        {
            id: 1,
            name: `example`,
                    route:'/',
        },
        {
            id: 2,
            name: `example2`,
                    route:'/',
        },
        {
            id: 3,
            name: `example3`,
                    route:'/',
        },
    ]
    }

]; */