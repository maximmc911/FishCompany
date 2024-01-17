import { TextField } from '@mui/material'
import { useState } from 'react'
import { IoSearch } from "react-icons/io5";
import Card from './components/forum/Card';
import Dialog from './components/forum/Dialog';
import { Button } from '../../../../../components/UI/Button/Button';
import Modal from './components/forum/Modal';
const Forum = () => {
    const [searchText, setSearchText] = useState<string>(``)
    const [Read, setRead] = useState<boolean>(false)
    
    const HandleRead = () : void =>{
        setRead(!Read)
    }
    const HandleSearch = (): void =>{
        console.log(`Search`);
        console.log(searchText);
        setSearchText(``)
        
    }
  return (
    <>
    <div className="flex items-center justify-between pb-6 border-b-4 border-blue-800">
        <div className="flex items-center gap-1">
        <TextField
        className='w-80'
       size='medium'
          id="standard-multiline"
          label="Поиск темы форума"
          multiline
          value={searchText}
          variant="standard"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => setSearchText(event.target.value)}
        />
       <div className="cursor-pointer" onClick={HandleSearch} >
       <IoSearch
       size={25}
       color='blue'
       />
       </div>
      
        </div>
        <div className="">
    <Modal />
            
        </div>
{/*     <p className='pr-2 text-blue-800 underline cursor-pointer' onClick={()=> setModalOpen(!ModalOpen)}>Создать новую тему</p> */}
    </div>
    {!Read ? 
   
    (<div className="mt-2">
    <div className="" onClick={HandleRead}>
        <Card/>  
    </div>
    </div>) :
   ( <div className="">
        <Dialog>
            <div className="" onClick={HandleRead}>
                <Button nameBTN={`Назад`}/>
            </div>
        </Dialog>
    </div>)
     }
    </>
  )
}

export default Forum