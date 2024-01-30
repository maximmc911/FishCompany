import Pagination from '@mui/material/Pagination';
import { useState } from 'react';

export default function PaginationControlled() {
     // constants
     const [page, setPage] = useState <number>(1);
     
     // functions
  const handleChange = (_event: React.ChangeEvent<unknown>, value: number) : void => {
    setPage(value);
  };

  return (
    <>
    <div className="flex justify-center m-5">

      <Pagination count={50} page={page} onChange={handleChange}  
       sx={{
        bgcolor: 'rgb(226 232 240)',
        boxShadow: 5,
        borderRadius: 1,
        p: 2,
        minWidth: 300,}}
        variant="outlined"
        showFirstButton 
        showLastButton
      />
   
    </div>
    </>
  );
}