import Icons from '../../icons/Icons'
import './StyleLetterCard.css'

const LetterCard = ({read}: any) => {
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
    </>
  )
}

export default LetterCard