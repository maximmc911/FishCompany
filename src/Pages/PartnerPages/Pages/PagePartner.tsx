import PersonalPage from '../../../components/personalPage/PersonalPage'

const PagePartner = () => {
  /* Пример, удалить после интеграции с бэком */
const partnerPage : object={
  name: `Соколов Максим Станиславович`,
  employee: false,
  status: `Учредитель & И.О.Директор`,
  contacts: {
    tel: 9175221282,
    email: `9175221282@mail.ru`,
  },
  NameOrganization: `OOO "Blast Off"`,
  INN : 541465468435,
  OGRN: 9541465334468435,
  legalAddress: `Россия, Московская область, г.Коломна, ул. Девичье поле дом 1`,
  actualAddress:`Россия, Москва, ул.Кутузовский проспект 257`,
}
/* Пример, удалить после интеграции с бэком */
  console.log(partnerPage);
  
  
  return (
    <>
  
  <PersonalPage partnerInfo={partnerPage}/>
    
    </>
  )
}

export default PagePartner