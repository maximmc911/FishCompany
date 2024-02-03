import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import ProductActive from './ProductActive';
import ProductArchive from './ProductArchive';
import Makeproduct from './product/Makeproduct';
const ProductPage = ({props}: any) => {
      // constants
  const [value, setValue] = useState(0);
  // functions
  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
        <Tabs value={value} onChange={handleChange} centered>
          <Tab label="Активные объявления" />
          <Tab label="Архив объявлений" />
          {props ?  
          <Tab label="Создать объявление" />
          :null}
        </Tabs>
      </Box>
      <div className="mt-3">
        {value == 0 ? <ProductActive/>: null}
      
    
        {value == 1 ? <ProductArchive/> : null }
        {value == 2 ? <Makeproduct/> : null }
      </div>
    </>
  )
}

export default ProductPage