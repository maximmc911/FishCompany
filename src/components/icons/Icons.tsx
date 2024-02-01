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
const Icons = ({props}: any) => {
  return (
    <>
    {(props == `выход`) ? (<ImExit color='white' size ={25}/>) : null } 
    {(props == `блокировка`) ? (   <MdDoNotDisturb size={152} color='red'/>) : null } 
    {(props == `логотип`) ? (<GiCirclingFish size='55'color='white'/>) : null } 
    {(props == `меню`) ? (<RiMenuUnfoldFill size={25} color='white'/>) : null } 
    {(props == `закрыть`) ? ( <IoClose size={35} color='red'/>) : null } 
    {(props == `диалог`) ? ( <RiFeedbackLine size={28} />) : null } 
    {(props == `корзина`) ? ( <SlBasket size={30} color='white'/>) : null } 
    {(props == `ключ`) ? (  <FaKey size={25} color='white' />) : null } 
    {(props == `профиль`) ? (  <BsPeopleFill size={25} color='white' />) : null } 
    {(props == `статистика`) ? (  <TfiStatsUp size={25} color='white' />) : null } 
    {(props == `почта`) ? (  <SlEnvolopeLetter  size={25} color='white' />) : null } 
    {(props == `товары`) ? (  <GiFishBucket  size={25} color='white' />) : null } 
    
    
    
    </>
  )
}

export default Icons