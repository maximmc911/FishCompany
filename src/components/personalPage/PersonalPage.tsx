import ImgPerson  from './ImgPerson'
import InfoPerson from './InfoPerson'
import TablePerson from './TablePerson'
import CalendarPerson from './CalendarPerson'

const PersonalPage = ({partnerInfo}:any) => {
console.log(partnerInfo);

  return (
    <div>
    <h1 className='p-5 text-2xl'>Личная страница</h1>
      <div className="p-2">

<div className="flex flex-wrap gap-12 ">
<InfoPerson props={partnerInfo}/>
<div className="flex flex-col gap-12 ">
<ImgPerson props={`Пропс ImgPerson`}/>

<TablePerson/>
</div>
<CalendarPerson/>
</div>
</div>
    
    </div>
  )
}

export default PersonalPage