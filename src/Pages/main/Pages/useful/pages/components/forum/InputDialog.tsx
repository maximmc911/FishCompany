import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { Button } from '../../../../../../../components/UI/Button/Button';
import { useState } from 'react';
const InputDialog = () => {
  // constants
  const [UserName, setUserName] = useState<string>(``)
  const [UserMessage, setUserMessage] = useState<string>(``)

  // functions
  const HandleSentMessage = (): void => {
    console.log(`Отправка комментария`);
    console.log(`Имя`);
    console.log(UserName);
    console.log(`Сообщение`);
    console.log(UserMessage);

  }
  return (
    <>
      <div className="flex flex-col mt-10 mb-5 border border-black-2 ">
        <h1 className='mb-5 text-xl font-semibold text-center'>Оставьте свой комментарий:</h1>
        <div className="flex flex-col items-center justify-between gap-4 p-5">

          <FormControl variant="standard">
            <InputLabel htmlFor="input-with-icon-adornment">
              Введите Ваше имя или ник
            </InputLabel>
            <Input
              value={UserName}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => setUserName(event.target.value)}
              id="input-with-icon-adornment"
              startAdornment={
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              }
            />
          </FormControl>
          <TextField
            className='w-3/4 '
            id="outlined-multiline-static"
            label="Ваш Комментарий"
            multiline
            rows={4}
            value={UserMessage}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => setUserMessage(event.target.value)}

          />
          <div className="" onClick={HandleSentMessage}>
            <Button nameBTN={`Отправить`} />
          </div>
        </div>
      </div>

    </>
  )
}

export default InputDialog