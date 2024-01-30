
import { Button } from '../../../../components/UI/Button/Button'
import { Link } from 'react-router-dom';
import CardItemBasket from './components/CardItemBasket';
import { formatCurrency } from '../../../../mixins/features'
import { useSelector } from 'react-redux'
import { useDispatch } from "react-redux";
import { actions } from '../../../../store/shop/shop.slice';
const Basket = () => {
  // constants
let Open = false;
let total = 0;
  const {shopFavorite} : any = useSelector(state => state);
  const dispach = useDispatch();

  // functions
  const totalSum = ():void =>{
  for (let index = 0; index < shopFavorite.length; index++) {
    total += shopFavorite[index].sum;
  }
}
totalSum()
if (total != 0) {
  Open =true;
}
  const HandleDelete = (e: object | number) => {
    if (e === 0) {
      for (let index = 0; index < shopFavorite.length; index++) {     
        dispach(actions.toggleFavorites(shopFavorite[index]))
      }
      Open = false;
    } else {
     
      dispach(actions.toggleFavorites(e))
      totalSum()
      
    }
  }


  return (
    <>

      <h1 className='mt-2 text-2xl text-center'> Корзина</h1>

      {!Open ?

        (<div className="">

          <h1 className='mt-2 text-5xl font-semibold text-center m-7'> Ваша корзина пуста</h1>
          <Link to='/shop'>
            <h1 className='mt-2 text-2xl font-semibold text-center text-blue-400 underline m-7 text-pretty'>Перейдите в каталог</h1>
          </Link>

        </div>)
        :


        (<div className="" >
          {
            shopFavorite.map((e: any, index): any => (

              <CardItemBasket product={e} index={index} key={index}>
                <div onClick={() => HandleDelete(e)}>
                  <Button nameBTN={`Удалить`} />
                </div>
              </CardItemBasket>

            ))
          }
        </div>)


      }



      {Open ?
        <div className="">
          <h1 className='p-5 text-2xl'> Итого к оплате: <span> {formatCurrency(total)} </span> ₽</h1>

          <div className="flex justify-end gap-6">
            <div className="" onClick={() => HandleDelete(0)}>
              <Button nameBTN={`Очистить корзину`} />

            </div>
            <Link to='/purchase'>
              <Button nameBTN={`Оформление заказа`} />
            </Link>
          </div>
        </div>
        :
        null
      }

    </>
  )
}

export default Basket