import './index.css'
import Box from '@mui/material/Box';

import Modal from '@mui/material/Modal';
import { useEffect, useState } from 'react';


export default function BasicModal({ open, onClose, children }: any) {
  // constants
  const [Open, setOpen] = useState<boolean>(false);
  // functions


  // hooks
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
        <Box className='style'>
          <div className="flex justify-center">

            {children}
          </div>
        </Box>
      </Modal>
    </div>
  );
}