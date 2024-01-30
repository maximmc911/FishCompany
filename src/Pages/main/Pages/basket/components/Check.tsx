import { formatCurrency } from '../../../../../mixins/features'
import { GiCirclingFish } from "react-icons/gi";
import { IoMdPrint } from "react-icons/io";
import { useSelector } from 'react-redux'
import './index.css'
const Check = () => {
  // constants
  let total = 0;
  const {shopFavorite} : any = useSelector(state => state);


  //cycle
  for (let index = 0; index < shopFavorite.length; index++) {
    total += shopFavorite[index].sum;
  }

  // functions

  const handlePrint = (): void => {
    window.print()

  }
  return (
    <>
    <div className="printStyle">
      <div className="flex justify-center " >

        <div className="rounded-sm shadow-lg bg-slate-200 w-72">
          <h1 className='text-xl text-center'>Пречек</h1>
          <p className='p-2 text-sm text-center'>


            {Date()}

          </p>
          <div className="flex justify-center p-2">

            <GiCirclingFish
              size='55'
              color='blue'
            />
          </div>
          <div className="flex justify-between p-2 border-b-2 border-black">
            <h1>Название</h1>
            <h1>Количество <span></span></h1>
            <h1>Цена <span></span> </h1>
          </div>
          {shopFavorite.map((item: any, index: any) => (

            <div className="flex justify-between p-2 border-b-2 border-black" key={index}>
              <h1>{item.name}</h1>
              <h1>{item.count} <span>шт.</span></h1>
              <h1>{formatCurrency(item.price)} <span>₽</span> </h1>
            </div>

          ))
          }
          <div className="flex justify-between p-2">
            <h1>Итого:</h1>
            <h1>{formatCurrency(total)} <span>₽</span></h1>
          </div>
          <div className="p-2">
            <div className="flex justify-between">
              <h1>Инн:</h1>
              <p> {formatCurrency(414631683131)}</p>
            </div>
            <div className="flex justify-between">
              <h1>ОГРН:</h1>
              <p> {formatCurrency(414631683131)}</p>
            </div>
            <div className="flex justify-between">
              <h1>Тел:</h1>
              <p>+7 (989) 777 - 75 -75</p>
            </div>
          </div>
          <div className="p-2 ">
            <p>* Заявки принимаются с 9 до 18 по МСК. После 18:00 заявки будут обработаны в ближайший рабочий день</p>
            <div className="flex justify-end cursor-pointer" onClick={handlePrint}>
              <div className="printNone">
                
              <IoMdPrint
                size={25} />
                </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default Check