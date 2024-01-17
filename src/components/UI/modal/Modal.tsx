import './index.css'
import Box from '@mui/material/Box';
/* import Button from '@mui/material/Button'; */
import Modal from '@mui/material/Modal';
import { useEffect, useState } from 'react';

/* const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  bgcolor: 'rgb(241 245 249)',
  border: 'none',
  borderRadius: '10px',
  boxShadow: 14,
  p: 4,
  @media(maxWidth: `400px`) {
    width: 350
  }
};
 */
export default function BasicModal({open, onClose, children}: any) {
const [Open, setOpen] = useState <boolean>(false);
useEffect(() => {
 setOpen(open)
}, [open])



  return (
    <div>
    
      <Modal
        open={Open}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box   className='style'>
        <div className="flex justify-center">
          
          {children}
        </div>
        </Box>
      </Modal>
    </div>
  );
}