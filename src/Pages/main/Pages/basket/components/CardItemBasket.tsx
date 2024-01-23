import {formatCurrency} from '../../../../../mixins/features'




const CardItemBasket = ({product, children, index}: any) => {    
  return (
    <>
    <div className="flex items-center justify-between p-2 my-2 bg-blue-400 rounded max-sm:flex-wrap max-sm:flex">
        <h1 className='p-2 text-base font-medium text-center border-r-2'>{index+1}</h1>
        <h1 className='p-2 text-base font-medium text-center border-r-2'>Наименование:  <br/> <span > {product.name}</span> </h1>
        <h1 className='p-2 text-base font-medium text-center border-r-2'>Цена: <span> {formatCurrency(product.price)} ₽</span> </h1>
        <h1 className='p-2 text-base font-medium text-center border-r-2'>Количество: <span>{formatCurrency(product.quantity)} шт.</span> </h1>
        <h1 className='p-2 text-base font-medium text-center border-r-2'>Стоимость: <span>{formatCurrency(product.quantity*product.price)} ₽</span> </h1>
        {children}
    </div>
    </>
  )
}

export default CardItemBasket