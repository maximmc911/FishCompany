
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useState } from 'react';

export default function PaginationControlled() {
  const [page, setPage] = useState(1);

  const handleChange = (_event: React.ChangeEvent<unknown>, value: number) => {
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