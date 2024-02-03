import { FormControlLabel, RadioGroup } from '@mui/material';
import Radio from '@mui/material/Radio';
import { useState } from 'react';
import Icons from '../icons/Icons';
import LetterCard from './components/LetterCard';
const IncomingMail = () => {
    const [selectedValue, setSelectedValue] = useState(true);
    const [Open, setOpen] = useState(false);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setSelectedValue(event.target.value);
    };
  return (
    <>
    <div className="flex flex-col">

   
    <div className="border-b-2 border-blue-800 pl-2 pt-2">
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
        <LetterCard read={Open}/>
      </div>
    </div>
    </div>
    </>
  )
}

export default IncomingMail