import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Confirmation from './product/Confirmation';
import Sale from './product/Sale';
import Rejected from './product/Rejected';


const ProductActive = () => {

    // constants
    const [value, setValue] = useState(0);
    // functions
    const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue)
    }
  return (
    <>
       <div className="flex flex-wrap gap-2">
        <div className="">

        <Box sx={{ bgcolor: 'background.paper' }}>
        <Tabs value={value} onChange={handleChange}   orientation="vertical" >
          <Tab label="В продаже" />
          <Tab label="Ждут подтверждения" />
          <Tab label="Отклонены" />
        </Tabs>
      </Box>
        </div>
      <div className="">

      {value == 0 ? <Sale/> : null}
      {value == 1 ? <Confirmation/> : null}
        {value == 2 ? <Rejected/> : null}
      </div>
        
       </div>
    </>
  )
}

export default ProductActive