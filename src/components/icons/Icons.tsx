import { ImExit } from "react-icons/im";
import { GiCirclingFish } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { RiMenuUnfoldFill } from "react-icons/ri";
import { RiFeedbackLine } from "react-icons/ri";
import { SlBasket } from "react-icons/sl";
import { FaKey } from "react-icons/fa";
import { BsPeopleFill } from "react-icons/bs";
import { TfiStatsUp } from "react-icons/tfi";
import { GiFishBucket } from "react-icons/gi";
import { SlEnvolopeLetter } from "react-icons/sl";
import { MdDoNotDisturb } from "react-icons/md";
import { FaRegTrashCan } from "react-icons/fa6";
import { FaRegPenToSquare } from "react-icons/fa6";
import { GrStatusGood } from "react-icons/gr";
import { MdOutlineDangerous } from "react-icons/md"; 
import { FaQuestion } from "react-icons/fa"; 
import { MdOutlineSettingsBackupRestore } from "react-icons/md";
const Icons = ({props, color}: any) => {
  if (color == undefined) {
    color = `white`
  }


  return (
    <>
    {(props == `выход`) ? (<ImExit color={color} size ={25}/>) : null } 
    {(props == `блокировка`) ? (   <MdDoNotDisturb size={152} color={color}/>) : null } 
    {(props == `логотип`) ? (<GiCirclingFish size={55} color={color}/>) : null } 
    {(props == `меню`) ? (<RiMenuUnfoldFill size={25} color={color}/>) : null } 
    {(props == `закрыть`) ? ( <IoClose size={35} color={color}/>) : null } 
    {(props == `диалог`) ? ( <RiFeedbackLine size={28} />) : null } 
    {(props == `корзина`) ? ( <SlBasket size={30} color={color}/>) : null } 
    {(props == `ключ`) ? (  <FaKey size={25} color={color} />) : null } 
    {(props == `профиль`) ? (  <BsPeopleFill size={25} color={color} />) : null } 
    {(props == `статистика`) ? (  <TfiStatsUp size={25} color={color} />) : null } 
    {(props == `почта`) ? (  <SlEnvolopeLetter  size={25} color={color} />) : null } 
    {(props == `товары`) ? (  <GiFishBucket  size={25} color={color} />) : null } 
    {(props == `удалить`) ? (  <FaRegTrashCan  size={20} color={color} />) : null } 
    {(props == `редактировать`) ? (  <FaRegPenToSquare  size={20} color={color} />) : null } 
    {(props == `принято`) ? (  <GrStatusGood  size={25} color={color} />) : null } 
    {(props == `отклонено`) ? (  <MdOutlineDangerous size={25} color={color} />) : null } 
    {(props == `вопрос`) ? (  <FaQuestion size={20} color={color} />) : null } 
    {(props == `восстановить`) ? (  <MdOutlineSettingsBackupRestore size={25} color={color} />) : null } 
    
    </>
  )
}

export default Icons