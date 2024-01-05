import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import { useState } from 'react';
export const Input = ({idText}) => {
    const [NameLessons, setNameLessons] = useState(``);
   
 
    const pushText: Array <object> = [];
    const InputText: Array <object> = [
        {id:1, unit: `кг`, nameInput: `Введите вес в кг:`},
        {id:2, unit: `₽`, nameInput: `Введите стоимость:`},     
    ]
    switch (idText) {
        case 1:
            pushText.push(InputText[0]);
            break;
        case 2:
            pushText.push(InputText[1])
            break;
    
        default:
            break;
    }
    
    
  return (
    <>
    <div className="">
    <p className='pb-2 '>{pushText[0].nameInput}</p>
     <FormControl sx={{ m: 1, width: '20ch' }} variant="outlined">
          <OutlinedInput
            id="outlined-adornment-weight"
            type="number"
            value={NameLessons}
            onChange={(event) => {
                 
                    setNameLessons(event.target.value)
             
            }}
            
            endAdornment={<InputAdornment position="end">{pushText[0].unit}</InputAdornment>}
            aria-describedby="outlined-weight-helper-text"
            inputProps={{
              'aria-label': 'weight',
            }}
          />
    </FormControl>
        
    </div>

    </>
  )
}
