import { SelectAll } from '../../../../../../../../../components/UI/Select/SelectAll'
import { Input } from '../../../../../../../../../components/UI/Input/Input'

const FeedCalculation = () => {
  return (
    <>

      <h1 className='text-center'>Расчет необходимого количества корма для одного цикла выращивания, а также стоимость</h1>
      <div className="flex flex-wrap items-center justify-center gap-5">

        <div className="flex flex-col ">
          <SelectAll props={`fish`} />
          <Input idText={`fish`} />
          <Input idText={`fish2`} />
        </div>
        <div className="">
          <h1>Вид рыбы: <span>Осетр</span> </h1>
          <h1>Начальный вес: <span>5 гр</span> </h1>
          <h1>Товарный вес: <span>1500 гр</span> </h1>
        </div>

      </div>
    </>
  )
}

export default FeedCalculation