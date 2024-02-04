import React from 'react'
import Icons from '../../icons/Icons'

const ModalMessage = () => {
  return (
    <>
    <div className="flex flex-col justify-center gap-3 p-3 min-w-1/2">
       <div className="flex justify-between">
        <div className="">
            <h1 className='text-xl italic font-extralight'> От кого: <span className='font-semibold'>Менеджер Снежана</span> </h1>
            <h1 className='text-xl italic font-extralight'> Тема сообщения: <span className='font-semibold'>подача заявки</span> </h1>
        </div>
        <div className="">
            <Icons props={`закрыть`} color={`red`}/>
        </div>
       </div>
        <div className="">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed ipsam vero dolor ea maxime unde, reiciendis culpa nostrum non sequi sunt aperiam ratione architecto beatae corporis ut necessitatibus rerum veritatis?
            Exercitationem dolorum voluptatem praesentium quis placeat et, ea deserunt laudantium hic eaque error repellat, repudiandae voluptas sed quidem ullam earum eligendi harum. Explicabo aperiam dolore porro, eos quaerat illum aspernatur!
            Perferendis adipisci natus ullam, animi eum rerum tempora? Illo dolor suscipit assumenda perspiciatis nisi non cupiditate necessitatibus. Rerum at laboriosam repellendus sit velit corporis corrupti. Fugiat, quo ipsum! Explicabo, quos?</p>
        </div>
       
    </div>
    </>
  )
}

export default ModalMessage