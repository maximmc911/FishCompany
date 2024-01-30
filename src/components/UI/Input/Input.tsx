import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import { WriteForm } from './InputText.ts'
import { useState } from 'react';

// Input для калькулятора

export const Input = ({ idText }: any) => {
   // constants
   const [Example, setExample] = useState<Array<any>>([]);
   // functions
 

  return (
    <>
      {!(WriteForm(idText).length == 0) ?
        (<div className="" key={WriteForm(idText)[0].id}>
          <p className='pb-2 ml-1'>{WriteForm(idText)[0].nameInput}</p>
          <FormControl sx={{ m: 1, width: '35ch' }} variant="outlined">
            <OutlinedInput
              id="outlined-adornment-weight"
              type="number"
              placeholder={WriteForm(idText)[0].placeholder}
              onChange={(event) => {

                setExample([event.target.value, idText])

              }}

              endAdornment={<InputAdornment position="end">{WriteForm(idText)[0].unit}</InputAdornment>}
              aria-describedby="outlined-weight-helper-text"
              inputProps={{
                'aria-label': 'weight',
              }}
            />
          </FormControl>

        </div>) :
        <p className='w-48 p-3 bg-red-400 rounded-sm'>При разработке допущена ошибка</p>
      }
    </>
  )
}
