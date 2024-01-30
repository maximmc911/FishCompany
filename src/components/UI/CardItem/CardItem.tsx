import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { Button } from "../Button/Button";
import { Modal } from 'antd';
import { formatCurrency } from "../../../mixins/features";
import { useDispatch } from "react-redux";
import { actions } from "../../../store/shop/shop.slice";


const CardItem = ({props}: any) => {

  
  // constants
  
  const [Quantity, setQuantity] = useState<number>(1)
  const [modal, setModal] = useState<boolean>(false)
  const [IsBuy, setIsBuy] = useState<boolean>(false)

  const dispach = useDispatch()
  // functions
  const HandleIncrement = (): void => {
    setQuantity((e) => e += 1)
  }
  const HandleDecrement = (): void => {
    if (Quantity > 1) {
      setQuantity((e) => e -= 1)
    }
  }
  function showModal(): void {
    setModal(true);

  }
  const hideModal = (): void => {
    setModal(false);

  };

  // функция для отправки даных в стор
  const handlePay = (): void => {
    setIsBuy(!IsBuy)
    const product :object = {
      id: props.id,
      name: props.name,
      price: props.price,
      count: Quantity,
      sum: props.price*Quantity,
    }

    dispach(actions.toggleFavorites(product))
    
  
  }
  /* 
  id: 1,
      name: `барбус`,
      price: 150,
      count:1,
 
  */
  return (
    <>
      <div className="rounded-sm shadow-lg bg-slate-200 w-60">
        <div className="flex justify-center">
          
        <img src={props.img} alt="" className="p-1 rounded-sm shadow-lg max-w-60 max-h-40" />
        </div>
        <h1 className="pt-1 text-center">{props.name}</h1>
        <div className="flex items-center justify-around p-4">
          <div className="">
            <p>{formatCurrency(props.price)}  <span>₽<span> за 1 шт.</span></span> </p>
            <p className="pt-5 underline cursor-pointer" onClick={showModal} >Подробнее</p>

          </div>
          <div className="">

            <div className="flex items-center justify-around h-10 bg-blue-200 pr-5r rounded-xl ">
              <button className="h-10 bg-blue-400 rounded-s-xl" onClick={HandleDecrement}>
                <p className="p-1">
                  <FaMinus size={18} />
                </p>
              </button>
              <h1 className="p-2 text-xl font-semibold">
                {Quantity}
              </h1>
              <button className="h-10 bg-blue-400 rounded-e-xl" onClick={HandleIncrement}>
                <p className="p-1">
                  <FaPlus size={18} />
                </p>
              </button>

            </div>
            <div className="pt-2" onClick={handlePay}>
              { IsBuy ?
                <Button nameBTN={`Отмена`} />
                :
                <Button nameBTN={`Купить`} />
                
              }
            </div>
          </div>
        </div>

      </div>
      <Modal
        title="Описание"
        open={modal}
        onOk={hideModal}
        onCancel={hideModal}
        okText="Понятно"
        okType='default'
      >
        <p>{props.description}</p>
      </Modal>
    </>
  )
}

export default CardItem