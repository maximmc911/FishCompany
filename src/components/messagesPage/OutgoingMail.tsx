import React, { useState } from 'react'
import LetterCard from './components/LetterCard';


const OutgoingMail = () => {
  const [Open, setOpen] = useState(false);
  return (
    <>
    <div className="">
 <div className="p-2">
 <div className="" onClick={()=>setOpen(!Open)}>
        <LetterCard read={true}/>
      </div>
    </div>
    </div>
    
    </>
  )
}

export default OutgoingMail