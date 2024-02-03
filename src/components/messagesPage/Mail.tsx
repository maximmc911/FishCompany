import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Button } from '../UI/Button/Button';
import IncomingMail from './IncomingMail';
import OutgoingMail from './OutgoingMail';
import WriteMail from './components/WriteMail';
const Mail = ({props}: any) => {
   const [value, setValue] = useState(0);
    // functions
    const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue)
    } 
  return (
    <>
    

    <div className="flex gap-2 m-2 ">
     <Box sx={{ bgcolor: 'background.paper', width:170 }}>
        <Tabs value={value} onChange={handleChange}   orientation="vertical" >
          <Tab label="Входящие 125" />
          <Tab label="Исходящие 999" />
          <Tab label="Написать" />
        </Tabs>
      </Box>
      <div className=" bg-slate-200 rounded-md p-2 w-full">

      { (value == 0) ? <IncomingMail/> : null }
      { (value == 1) ? <OutgoingMail/> : null }
      { (value == 2) ? <WriteMail/> : null }
      </div>
  </div>
  
    </>
  )
}

export default Mail