import {  textForm } from "../../../interfaces/interface";
import { textInput } from "../../exampleData/textInput.ts";

// Функция для заполнения input дефолтными значеними, в зависимости от того, где она используется

export function WriteForm(params: string): Array<textForm> {
  const arr: Array<textForm> = [];
  for (let index = 0; index < textInput.length; index++) {
    if (textInput[index].input_article == params) {
      arr.push(textInput[index]);
    }
  }

  return arr;
}

