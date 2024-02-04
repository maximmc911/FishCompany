import BasicModal from '../../UI/modal/Modal'
import Icons from '../../icons/Icons'
import ModalMessage from './ModalMessage'
import './StyleLetterCard.css'

const LetterCard = ({read, open}: any) => {
  return (
    <>
    <div className={read ? `readYes` : `read`}>
        <div className="pl-2">
{ read ? 
<Icons props={`почта`} color={`yellow`}/>
:
<Icons props={`почта2`} color={`yellow`}/>

}
        </div>
        <h1 className={read ? `Active` : `NotActive`}>Oт кого: <span>Менеджер Снежана</span></h1>
        <h1 className={read ? `Active` : `NotActive`}>Тема сообщения: <span> Публикация новых товаров</span></h1>

    </div>
    <BasicModal open ={open}>
      <ModalMessage/>
    </BasicModal>
    </>
  )
}

export default LetterCard