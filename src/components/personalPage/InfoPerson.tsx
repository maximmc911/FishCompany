
import { formatCurrency } from '../../mixins/features';

const InfoPerson = ({props}: any) => {

  
  return (
    <div className='p-5 rounded-sm shadow-lg bg-slate-100'>
     
      {/* ФИО и Должность */}
      
   <div className="flex flex-wrap justify-center gap-10">
   <div className="mt-5">  
    <h1 className='p-2 text-lg text-center border-b-2 border-blue-800'>Фамилия имя отчество</h1>
    <h1 className='pt-1 text-xl'>{props.name}</h1>
   </div>
   <div className="mt-5">
    <h1 className='p-2 text-lg text-center border-b-2 border-blue-800'>Должность</h1>
    <h1 className='pt-1 text-xl text-center'> {props.status} </h1>
   </div>
   </div>

   
      {/* Контакты */}
      
    <h1 className='p-2 mt-5 text-lg text-center border-b-2 border-blue-800'>Контакты</h1>
   <div className="flex flex-wrap gap-10">
    <h1 className='pt-1 mt-5 text-xl'>Телефон: +7<span>{props.contacts.tel}</span> </h1>
    <h1 className='pt-1 mt-5 text-xl'>E-mail: <span>{props.contacts.email}</span></h1>
   </div>
   
          {/* Информация об организации */}
    { !props.employee ?
   (<div className="mt-5">
   <h1 className='p-2 text-xl font-medium text-center border-b-2 border-blue-800'>Информация об организации</h1>
   <h1 className='p-2 mt-2 text-xl font-medium text-center border-b-2 border-blue-800'>Название:  
   <span className='font-bold'>  {props.NameOrganization}</span> </h1>  
    <h1 className='p-2 m-2 text-lg text-center border-b-2 border-blue-800'>
        ИНН: <span className='text-xl'>  {formatCurrency(props.INN)} </span>
    </h1>
    <h1 className='p-2 m-2 text-lg text-center border-b-2 border-blue-800'>
        ОГРН: <span className='text-xl'>  {formatCurrency(props.OGRN)} </span>
    </h1>
     <h1 className='p-2 m-2 text-lg text-center border-b-2 border-blue-800'> Юридический адрес</h1>
        <h1 className='pt-1 text-xl'> {props.legalAddress} </h1>    
      <h1 className='p-2 m-2 text-lg text-center border-b-2 border-blue-800'>Фактический адрес</h1>
        <h1 className='pt-1 text-xl'>{props.actualAddress} </h1>
    </div>)
  : null} 
   
    </div>
  )
}

export default InfoPerson