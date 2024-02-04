import { FormControlLabel, RadioGroup } from '@mui/material';
import Radio from '@mui/material/Radio';
import { useEffect, useState } from 'react';
import Icons from '../icons/Icons';
import LetterCard from './components/LetterCard';
const IncomingMail = () => {
    const [selectedValue, setSelectedValue] = useState(true);
    const [Open, setOpen] = useState(false);
    const [read, setRead] = useState(false);
 useEffect(() => {
  if (Open == true) {
    setRead(true)
    
  }
 }, [Open])
 
   
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setSelectedValue(event.target.value);
    };
  return (
    <>
    <div className="flex flex-col">

   
    <div className="pt-2 pl-2 border-b-2 border-blue-800">
    <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        value={selectedValue}
        onChange={handleChange}
      >
        <FormControlLabel value={true} control={<Radio />} label="Все входящие" />
        <FormControlLabel value={false} control={<Radio />} label="Непрочитанные" />   
      </RadioGroup>
    </div>
    <div className="p-2">
 <div className="" onClick={()=>setOpen(!Open)}>
        <LetterCard read={read} open={Open}/>
      </div>
    </div>
    </div>
    </>
  )
}

export default IncomingMail