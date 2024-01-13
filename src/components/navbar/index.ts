import {mainNavbar} from '../../interfaces/interface'
export const mainNavbar : Array <mainNavbar>=[
    {
        id: 1,
        name: `главная`
    },
    {
    id: 2,
    name: `каталог`
    },
    {
    id: 3,
    name: `О нас`
    },
    {
    id: 4,
    name: `Сотрудничество`
    }
];
export const mainNavbarMobile : Array <mainNavbar>=[
    {
        id: 1,
        menu: false,
        name: `главная`
    },
    {
    id: 2,
    menu: true,
    name: `каталог`,
    pages: [
        {
            id: 1,
            name: `example`
        },
        {
            id: 2,
            name: `example2`
        },
        {
            id: 3,
            name: `example3`
        },
    ]
    },
    {
    id: 3,
    menu: false,
    name: `О нас`
    },
    {
    id: 4,
    menu: false,
    name: `Сотрудничество`
    },
    {
    id: 5,
    name: `Корзина`,
    menu: false,
    },
    {
    id: 6,
    name: `Корзина`,
    menu: true,
    pages: [
        {
            id: 1,
            name: `example`
        },
        {
            id: 2,
            name: `example2`
        },
        {
            id: 3,
            name: `example3`
        },
    ]
    }

];