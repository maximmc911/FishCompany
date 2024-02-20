import React from 'react'
import PagePartner from '../Pages/PartnerPages/Pages/PagePartner'
import ProductsSale from '../Pages/PartnerPages/Pages/ProductsSale'
import MessagePartner from '../Pages/PartnerPages/Pages/MessagePartner'
import StatisticPartner from '../Pages/PartnerPages/Pages/StatisticPartner'
import { NavLink } from 'react-router-dom'
import { Button } from '../components/UI/Button/Button'
import MainPage from '../Pages/CallCenter/MainPage'
import UserPage from '../Pages/CallCenter/pages/UserPage'
import MessagePage from '../Pages/CallCenter/pages/MessagePage'
import Reports from '../Pages/CallCenter/pages/Reports'
import ToDoList from '../Pages/CallCenter/pages/ToDoList'
import IncomingRequests from '../Pages/CallCenter/pages/IncomingRequests'

const Module = () => {
  return (
    <>
    {/* //! Кнопка для легкого входа на регистрацию админ панели */}
{/*     <NavLink to='/admin_page'>
  
  <Button nameBTN={`АВТОРИЗАЦИЯ НА АДМИН СТРАНИЦЕ`}/>
  </NavLink> */}

       {/* //! Страницы партнеров */}

   {/*  <PagePartner/> //! Главная страница*/}
 {/*    <ProductsSale/> //!Товары */}
    {/* <MessagePartner/> //!Партнерская почта */}
   {/*  <StatisticPartner/> //!Статистика на странице партнера */}
    {/* <MainPage/> */}

      {/* //! Страницы сотрудников Call Centr */}
    {/* <UserPage/>  */}  {/* //! Главная страница */}
    {/* <MessagePage/> */}     {/*  //! Служебная почта */}
    {/* <Reports/> //! Отчеты */}
    {/* <ToDoList/> //! Список задач */}
    <IncomingRequests/>  {/* //! Получение заявок */}
  
    </>
  )
}

export default Module