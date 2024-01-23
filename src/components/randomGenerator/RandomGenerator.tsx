import { useEffect, useState } from 'react'
import { Button } from '../UI/Button/Button'
import { FaArrowsRotate } from "react-icons/fa6";
const RandomGenerator = ({ props }: any) => {
    const [userNumber, setUserNumber] = useState<number>(0);
    const [PCNumber, setPCNumber] = useState<number>(0);
    const [ExaminationNumber, setExaminationNumber] = useState<boolean>(false);
    const GeneratorNumber = (): void => {
        setPCNumber(Math.floor(Math.random() * (9999 - 1000) + 1000));

    }

    const pushNumber = (e : any) : void =>{
        setUserNumber(e)
       
    }
const HandleExamination = () : void =>{
    console.log(`работает`);
    
    if (userNumber == PCNumber) {
        setExaminationNumber(true)
        setUserNumber(0)
    }else{
        console.log(`неверно`);
        
    }
   
}
const updateGeneratorNumber = (): void =>{
    GeneratorNumber()
    setUserNumber(0)
        setExaminationNumber(false)
}

    useEffect(() => {
        GeneratorNumber()
        setExaminationNumber(false)
    }, [props])

    return (
        <>
        { !ExaminationNumber ?
            (<div className="flex-col justify-center p-5 rounded-sm shadow-lg w-52 bg-slate-200">
                <div className="flex items-center">
                    
                <p>Подтвердите, что Вы не робот!</p>
                <div className="" onClick={ updateGeneratorNumber }>
                    
                <FaArrowsRotate 
                size={25}/>
                </div>
                </div>
                <div className="flex justify-between w-40 p-2 rounded-sm shadow-lg bg-slate-400">
                    <h1 className='p-2 text-2xl text-red-800'>{String(PCNumber)[0]}</h1>
                    <h1 className='text-5xl font-extrabold'>{String(PCNumber)[1]}</h1>
                    <h1 className='text-xl font-light '>{String(PCNumber)[2]}</h1>
                    <h1 className='text-5xl from-neutral-950'>{String(PCNumber)[3]}</h1>

                </div>
                <div className="mt-2">
                     
               
                    <input 
                    type="number" 
                    className='rounded-sm shadow-lg' 
                    placeholder='Введите значение'
      
                    onChange={(e) => pushNumber(e.target.value)}
                    />
                       
                    <div className="mt-2" onClick={HandleExamination}>

                        <Button nameBTN={`Подтвердить`} onClick={HandleExamination} />
                    </div>
                </div>

            </div>)
            :
            
            (<div className="flex-col justify-center p-5 rounded-sm shadow-lg w-52 bg-slate-200">
            <p>Вы подтвердили, что не робот!</p>
            <div className="mt-2" onClick={HandleExamination()}>

<Button nameBTN={`Назад`}  />
</div>
            
          

        </div>)
            
        }
        </>
    )
}

export default RandomGenerator