import ShopPages from "../components/ShopPages";
import { makeRoutes } from '../../../../../interfaces/interface'
export const routesShop: Array<makeRoutes> = [
    { id: "Пресноводные рыбы", path: `river_fish`, element: <ShopPages props={`Каталог пресноводных аквариумных рыб `} />, pages: [] },


]

/*
ПРИМЕР ИТЕРАЦИИ РОУТИНГА
 
let exm = 5;
for (let index = 0; index < exm; index++) {
   routesShop.push(
    { id: `Пресноводные рыбы + ${index}`, path: `river_fish`, element: <ShopPages props={`Каталог пресноводных аквариумных рыб `}/>, pages:[] },
   )
    
} */