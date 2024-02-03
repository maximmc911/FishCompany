
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import Icons from '../../../icons/Icons';
import { formatCurrency } from '../../../../mixins/features';

const CardProduct = ({props, chapter}: any) => {
    console.log(props);
    console.log(chapter);
    
  return (
    <>
    <div className="bg-slate-50 shadow-sm rounded-sm flex flex-col p-2">
        { (chapter == `активно`) ?
        <div className="flex justify-center gap-2 p-2 items-center">
            <Icons props={`принято`} color={`green`}/>
            <h1>Активно</h1>
        </div>
        :null
        }
        { (chapter == `не рассмотрено`) ?
        <div className="flex justify-center gap-2 p-2 items-center">
            <Icons props={`вопрос`} color={`blue`}/>
            <h1>Проверяется модератором</h1>
        </div>
        :null
        }
        { (chapter == `отклонено`) ?
        <div className="flex justify-center gap-2 p-2 items-center">
            <Icons props={`отклонено`} color={`red`}/>
            <h1>Не соответствует требованиям</h1>
        </div>
        :null
        }
        <div className="flex gap-4 items-center">
            <img src={props.e.img} alt="" className='w-16' />
            <div className="">
                <h1 className=''> Название: <span className='font-medium'>{props.e.name}</span></h1>
                <h1 className=''> Цена: <span className='font-medium'>{formatCurrency(props.e.price)}</span> ₽</h1>
                <h1 className=''> Количество: <span className='font-medium'>{formatCurrency(props.e.quality)}</span> шт.</h1>
            </div>
            <div className="">
            {!(chapter == `архив`)? 
                <div className="m-2 cursor-pointer">

               <Icons props={`редактировать`} color={`blue`}/>
                </div>
                :null}
{(chapter == `архив`)? 
                <div className="m-2 cursor-pointer">
               <Icons props={`восстановить`} color={`green`}/>
                </div>
:null}
                <div className="m-2 cursor-pointer">
               <Icons props={`удалить`} color={`red`}/>
                </div>
            </div>
        </div>
                <Accordion className='max-w-72 mt-5 '
                    color='blue'
                >
                <AccordionSummary
          expandIcon={<ArrowDownwardIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>Описание</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography >
            {props.e.description}
          </Typography>
        </AccordionDetails>
     
        </Accordion>
    </div>
    
    </>
  )
}

export default CardProduct