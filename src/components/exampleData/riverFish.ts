import { RiverFish, universalTypeSelect } from "../../interfaces/interface";

 //! Заполнение select данными о виде рыбы


export const riverFish: Array<RiverFish> = [
  {
    id: 1,
    name: `карп`,
    feed_ratio: 1.2,
    temperature: 24,
    sales_weight: 1,
    stocking_density: 80,
    growing_time: 18,
  },
  {
    id: 2,
    name: `клариевый сом`,
    feed_ratio: 1.05,
    temperature: 26,
    sales_weight: 1.5,
    stocking_density: 100,
    growing_time: 8,
  },
  {
    id: 3,
    name: `форель`,
    feed_ratio: 1.15,
    temperature: 16,
    sales_weight: 1.2,
    stocking_density: 60,
    growing_time: 12,
  },
  {
    id: 4,
    name: `осетр(бестер)`,
    feed_ratio: 1.35,
    temperature: 22,
    sales_weight: 1.5,
    stocking_density: 40,
    growing_time: 12,
  },
  {
    id: 5,
    name: `тилапия`,
    feed_ratio: 1.2,
    temperature: 26,
    sales_weight: 0.25,
    stocking_density: 60,
    growing_time: 8,
  },
];

 //! Заполнение select данными о помещении
export const selectQuarters: Array<universalTypeSelect> = [
  {
   id: 1,
   name: `Аренда помещения`,
 },
 {
   id: 2,
   name: `Покупка помещения`,
 },
];