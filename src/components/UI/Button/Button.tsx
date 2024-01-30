import './style.css'
import { conrolBtn } from './index.ts'


//Кнопка универскальная. Цвет кнопки задается в зависимости от того, что передать в пропс nameBTN

export const Button = ({ nameBTN }: any) => {

  return (
    <>
      <button className={conrolBtn(nameBTN)}> {nameBTN}</button>
    </>
  )
}
