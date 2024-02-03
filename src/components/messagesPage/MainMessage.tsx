import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Mail from './Mail';
const MainMessage = ({message}: any) => {
    console.log(message);
          // constants
  const [value, setValue] = useState(0);
  // functions
  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  }
  console.log(value);
  
  return (
    <>
     <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
        <Tabs value={value} onChange={handleChange} centered>
          <Tab label="Почта от партнеров" />
          <Tab label="Служебная почта" />
        </Tabs>
      </Box>
      { (value == 0) ? <Mail props={"Почта от партнеров"}/> : null }
      { (value == 1) ? <Mail props={"Служебная почта"}/> : null }

    </>
  )
}

export default MainMessage