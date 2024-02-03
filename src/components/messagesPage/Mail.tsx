import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Button } from '../UI/Button/Button';
const Mail = ({props}: any) => {
   const [value, setValue] = useState(0);
    // functions
    const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue)
    } 
  return (
    <>
  <div className=" flex flex-col ">
<div className="pl-4">

    <Button nameBTN={`Написать`}/>
</div>
     <Box sx={{ bgcolor: 'background.paper', width:120 }}>
        <Tabs value={value} onChange={handleChange}   orientation="vertical" >
          <Tab label="Входящие" />
          <Tab label="Исходящие" />
        </Tabs>
      </Box>
  </div>
    
    </>
  )
}

export default Mail