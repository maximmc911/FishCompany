import { useState } from 'react'
import BasicModal from '../../../../../../../components/UI/modal/Modal'
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Button } from '../../../../../../../components/UI/Button/Button';
import { TextField } from '@mui/material';
import { modulesWord } from '../../../../../../../interfaces/interface'
import { IoClose } from 'react-icons/io5';

const Modal = () => {
  // constants
  const [Open, setOpen] = useState<boolean>(false);
  const [ForumTopic, setForumTopic] = useState<string>(``);
  const [Description, setDescription] = useState<string>("");

  // functions
  const HandleSent = (): void => {
    console.log(`ОТправка данных`);
    console.log(ForumTopic);

    console.log(Description);
    setOpen(false)
  }
  /* Конвентор текста в html start */
  const createMarkup = (): any => {
    return { __html: Description };
  }
  const MyComponent = (): any => {
    return <div dangerouslySetInnerHTML={createMarkup()} />;
    /* 
    Вставка в Html- code :     {MyComponent()}
    */
  }
  /* Конвентор текста в html end */
  return (
    <>

      <p className='pr-2 text-blue-800 underline cursor-pointer' onClick={() => setOpen(!Open)}>Создать новую тему</p>
      <BasicModal
        open={Open}
        onClose={() => setOpen(false)}>

        <div className="flex flex-col justify-center gap-3 ">

          <div className="flex justify-end pt-2 cursor-pointer" onClick={() => setOpen(false)}>
            <IoClose
              size={35}
              color='red'
            />
          </div>
          <h1 className='text-2xl text-center'>
            Новая тема для блога
          </h1>
          <TextField
            className='w-full '
            id="outlined-multiline-static"
            label="Название вашей темы"
            multiline
            rows={1}
            value={ForumTopic}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => setForumTopic(event.target.value)}

          />

          <div className="">
            <ReactQuill
              modules={modulesWord}
              theme="snow"
              onChange={setDescription}
              placeholder="Опишите вашу тему или проблему..."
              className='w-full' />
          </div>
          <div className="m-2 text-center" onClick={HandleSent}>
            <Button nameBTN={`отправить`} />
          </div>
        </div>

      </BasicModal>
    </>
  )
}

export default Modal
