import { useEffect, useState } from 'react'
import ReadingLib from './ReadingLib'
import s from './index.module.css'

const DirectoryLib = ({children, open} : any) => {
  // constants
    const [Read, setRead] = useState <string | object>(``);
    const [Open, setOpen] = useState <boolean>(false);
    
  // hooks
  useEffect(() => {
     setOpen(!Open)
   }, [open])
   
   // functions
   
   const HandleRead = () : void =>{
     setOpen(!Open);
     // Временное использование данных для проверки работоспособности 
        setRead({
            name: `Пример работы библиотеки`,
            text: `<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque eveniet ipsum maxime, sequi natus, harum ut vel nihil ducimus ratione enim voluptas, cumque sunt nesciunt asperiores corrupti. At, eaque inventore!
            Sit numquam commodi omnis, quam perspiciatis possimus debitis atque eligendi similique amet sunt nisi ipsum saepe distinctio magni reprehenderit aliquid. Rerum delectus voluptates sed distinctio quisquam. Vel ullam ab ipsa?
            Aperiam illum ipsam a dignissimos? Quia voluptas quod ipsum eos asperiores
             possimus at voluptates veniam excepturi, similique sunt soluta consectetur mollitia recusandae tenetur
              illum enim numquam. Corrupti incidunt quaerat doloremque?</p>`
        })
    }
  return (
    <>
       <div className="flex justify-between gap-10">
    <div className={!Open ? s.window_close : s.window }>
        <div className="flex flex-col ">
        <h1 className='p-5 text-xl font-medium'>Содержание:</h1>
        <div className={!Open ? s.content_close : s.content }>
            
        <dl className="pb-1 pl-5">
  <dt>Режиссер:</dt>
    <dd className="pl-5"onClick={HandleRead}>Петр Точилин</dd>
    <dd className="pl-5"onClick={HandleRead}>Петр Точилин</dd>
 
  <dt>В ролях:</dt>
    <dd className="pl-5"onClick={HandleRead}>Петр Точилин</dd>
    <dd className="pl-5"onClick={HandleRead}>Петр Точилин</dd>
    <dd className="pl-5"onClick={HandleRead}>Петр Точилин</dd>

</dl>
        </div>
            
        </div>
    {children}

    </div>
    <ReadingLib text={Read}/>
    </div>
    </>
  )
}

export default DirectoryLib