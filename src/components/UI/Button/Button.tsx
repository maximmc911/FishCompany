import './style.css'
export const Button = ({nameBTN}) => {
  let style : string;
  switch (nameBTN) {
    case `Удалить`:
        style = `danger`
        break;
    case `Зарегистрироваться`:
        style = `registr`
        break;
    case `Войти`:
        style = `login`
        break;
    case `Купить`:
        style = `buy`
        break;
    case `Отправить`:
        style = `sent`
        break;
  
    default:
        style = `other`
        break;
  }
    
  return (
    <>
    <button className={style}> {nameBTN}</button>
    </>
  )
}
