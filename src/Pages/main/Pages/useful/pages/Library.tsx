import { useState } from "react";
import DirectoryLib from "./components/library/DirectoryLib"
import { FaBookOpen } from "react-icons/fa6";
import { IoClose } from 'react-icons/io5';
const Library = () => {
  const [Open, setOpen] = useState <boolean>(false)
  return (
    <>
    <div className="flex items-center gap-2 p-2 cursor-pointer" onClick={() => setOpen(!Open)}>
    <FaBookOpen 
    size={35}
    color='green'
    />
    <p className="text-xl">Список литературы</p>
    </div>
    <div className="flex gap-5">
      <DirectoryLib open={Open}>
        <div className="flex justify-end p-2 cursor-pointer" onClick={() => setOpen(false)}>
      <IoClose 
          size={35}
          color='green'
      />
        </div>
      </DirectoryLib>
      
  </div>
    </>
  )
}

export default Library