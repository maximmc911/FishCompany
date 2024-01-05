import './style.css'
import {conrolBtn} from './index.ts'

export const Button = ({nameBTN}:any) => {

  return (
    <>
    <button className={conrolBtn(nameBTN)}> {nameBTN}</button>
    </>
  )
}
