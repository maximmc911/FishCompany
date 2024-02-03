import { FormControl, InputAdornment, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import React, { useState } from 'react'
import  ReactQuill  from  "react-quill";
import  "react-quill/dist/quill.snow.css";
import { Button } from '../../UI/Button/Button';

const  modules  = {
    toolbar: [
        [{ font: [] }],
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        ["bold", "italic", "underline", "strike"],
        [{ color: [] }, { background: [] }],
        [{ script:  "sub" }, { script:  "super" }],
        ["blockquote", "code-block"],
        [{ list:  "ordered" }, { list:  "bullet" }],
        ["link", "image", "video"],
        ["clean"],
    ],
};
const WriteMail = () => {
    const [Letter, setLetter] =  useState();
    const [LetterAdress, setLetterAdress] = useState()
    const [LetterSubject, setLetterSubject] = useState()
    const handleCancel = (): void =>{
        console.log(1111);
        
    }
   
    const handlePost = (): void => {
       const sent = {
        adress: LetterAdress,
        subjest: LetterSubject,
        letter: Letter
       }
       console.log(sent);

    }

    return (
    <>
    <div className=" flex gap-3 items-center">
        <p className='italic'>Кому:</p>
        <div className=" max-w-96 w-full">
    <FormControl variant="standard" fullWidth>
                    <Select
                      color="success"

                      labelId="demo-simple-select-standard-label"
                      id="demo-simple-select-standard"
               
                      value={LetterAdress}
                      onChange={(event: React.ChangeEvent<HTMLInputElement>) => setLetterAdress(event.target.value)}

                    >
                      <MenuItem value={`Не выбрано`}>Не выбрано</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
    </div>
    </div>
    <div className=" flex gap-3 items-center mt-2">
        <p className='italic'>Тема:</p>
        <div className="w-full">
        <TextField
        className='w-full'
                variant="standard"
                color="success"
                focused
                value={LetterSubject}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => setLetterSubject(event.target.value)}
            
              />
    </div>
    </div>
    <div className="rounded-md bg-white  h-[235px] mt-10">

    <ReactQuill  modules={modules} theme="snow" onChange={setLetter}  className=' h-48 rounded-md bg-white  placeholder:rounded-md'/>
    </div>

        
        <div className="mt-1  p-5" onClick={handlePost}>

    <Button nameBTN={`Отправить`}/>
     
    </div>
    </>
  )
}

export default WriteMail