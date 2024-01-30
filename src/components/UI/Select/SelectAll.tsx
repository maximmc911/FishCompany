import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select/* , { SelectChangeEvent } */ from '@mui/material/Select';
import { useState } from 'react';
import { HandleSelestCalc, name } from './index.ts'


export const SelectAll = ({ props }: any) => {

  // constants
  const [Result, setResult] = useState<object | string>(``);
  const [ResultFish, setResultFish] = useState<object | string>(``);
  const [ResultQuarters, setResultQuarters] = useState<object | string>(``);

  // functions

  const handleChange = (event: object | any) => {
    setResult(event.target.value)
    switch (props) {
      case `fish`:
        setResultFish(event.target.value)
        name(ResultFish)
        break;
      case `quarters`:
        setResultQuarters(event.target.value)
        name(ResultQuarters)
        break;
    }

  };


  return (
    <>
      <div className="m-2">
        <h1>{HandleSelestCalc(props)[0]}</h1>
        <Box sx={{ maxWidth: 200 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label" >{HandleSelestCalc(props)[1]}</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={Result}
              label={HandleSelestCalc(props)[1]}
              onChange={handleChange}
            >
              {
                HandleSelestCalc(props)[2].map((e: any) =>
                  <MenuItem value={e} key={e.id}>{e.name}</MenuItem>
                )
              }

            </Select>
          </FormControl>
        </Box>
      </div>



    </>
  )
}


