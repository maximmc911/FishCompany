/* import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import CardItem from '../../components/UI/CardItem/CardItem';
import CalcDraw from '../../components/calc/CalcDraw/CalcDraw';
import CategoryItem from '../../components/UI/CardItem/CategoryItem';

export default function TabsNavigation({childhen}: any) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  console.log(value);
  
  return (
    <>
 
    <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <Tabs value={value} onChange={handleChange} centered>
        <Tab label="Калькулятор УЗВ" />
        <Tab label="Библиотека" />
        <Tab label="Форум" />
      </Tabs>
    </Box>
{ value == 0 ? 
<CalcDraw/>
: null
}
{ value == 1 ? 
    <CardItem/>
: null
}
{ value == 2 ? 
  <CategoryItem/>
: null
}

  
    </>
  );
} */