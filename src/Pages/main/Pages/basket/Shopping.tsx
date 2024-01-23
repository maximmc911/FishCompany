
import { Link } from 'react-router-dom'
import { Button } from '../../../../components/UI/Button/Button'


const Shopping = () => {
    const HandleSentCheck = (): void =>{
        window.open(`http://localhost:5173/printCheck`)
    }
  
      
  return (
    <>
   <div className="flex flex-wrap gap-5">
    
    
   </div>
    

    
    
    <div className="flex justify-end gap-5">
    <Link to='/basket'> 
      <Button nameBTN={`Назад`} />
      </Link>
            <div className="" onClick={HandleSentCheck}>
            <Link to='/'> 
      <Button nameBTN={`Заказать`} />
 </Link>
      </div>
    </div>
    </>
  )
}

export default Shopping