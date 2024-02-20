import React from 'react'
import PersonalPage from '../../../components/personalPage/PersonalPage';

const UserPage = () => {
    /* Пример, удалить после интеграции с бэком */
const partnerPage : object={
  name: `Меден Снежана Васильевна`,
  employee: true,
  status: `Менеджер Колл - центра`,
  contacts: {
    tel: 9999999999,
    email: `9999999999@mail.ru`,
  },

}
/* Пример, удалить после интеграции с бэком */
  console.log(partnerPage);
  
  return (
    <div>
        <PersonalPage partnerInfo={partnerPage}/>
        </div>
  )
}

export default UserPage