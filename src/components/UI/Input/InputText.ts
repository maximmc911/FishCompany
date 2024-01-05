import {  textForm } from "../../../interfaces/interface";
import { textInput } from "../../exampleData/textInput.ts";
/* 
const fish : putForm ={
    unit: `кг`, 
    nameInput: `Введите вес в кг:`,
    meaning: 0,
}

const money : putForm ={
    unit: `₽`, 
    nameInput: `Введите стоимость:`,
    meaning: 0,
}
 */

export function WriteForm(params: string): Array<textForm> {
  const arr: Array<textForm> = [];
  for (let index = 0; index < textInput.length; index++) {
    if (textInput[index].input_article == params) {
      arr.push(textInput[index]);
    }
  }
  console.log(arr);

  return arr;
}

/* export function Example(params: string, ss: number) {
    console.log(`hi`);
} */
/*  switch (ss) {
      case 1:
          
          fish.meaning = Number(params);
          break;
      case 2:
          
          money.meaning = Number(params);
          break;
  
   
  } */
/* 
export function exmp(): Array<putForm>  {
    let e : Array<putForm> =[]
    e.push(fish)
    e.push(money)
    return e
} */
