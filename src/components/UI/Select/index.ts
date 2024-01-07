import { riverFish } from "../../exampleData/riverFish.ts";
import { universalTypeSelect } from "../../../interfaces/interface.ts";
const selectQuarters: Array<universalTypeSelect> = [
  {
    id: 1,
    name: `Аренда помещения`,
  },
  {
    id: 2,
    name: `Покупка помещения`,
  },
];
export function HandleSelestCalc(params: string | null) {
  const arr: Array<string | any> = [];
  switch (params) {
    case `fish`:
      arr.push(`Выберите вид рыбы`);
      arr.push(`Вид рыбы`);
      arr.push(riverFish);
      arr.push({input: `fish`})
      break;
      case `quarters`:
          arr.push(`Выберите какое помещение рассматриваете`);
          arr.push(`Статус помещения`);
          arr.push(selectQuarters);
          arr.push({input: `quarters`})
      break;

    default:
      arr.push(`Некорректно используется select`);
      arr.push(`данные отсутствуют`);
      break;
  }
  return arr;
}

export const arr: Array<object>=[];
export function name(params:any) {
 
    arr.push(params)
return arr

   
}