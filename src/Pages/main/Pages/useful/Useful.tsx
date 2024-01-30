import { useState } from "react"
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import Calculation from "./pages/Calculation";
import Library from "./pages/Library";
import Forum from "./pages/Forum";

const useful = () => {
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
          <Tab label="Калькулятор УЗВ" />
          <Tab label="Библиотека" />
          <Tab label="Форум" />

        </Tabs>
      </Box>
      <div className="mt-3">
        {value == 0 ?
          <Calculation />
          : null
        }
        {value == 1 ?
          <Library />
          : null
        }
        {value == 2 ?
          <Forum />
          : null
        }
      </div>

    </>
  )
}

export default useful