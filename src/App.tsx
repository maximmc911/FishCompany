import { Button } from "./components/UI/Button/Button"
import { Input } from "./components/UI/Input/Input"



const App = () => {
  return (
    <>
<Input idText={1}/>
<Input idText={2}/>
<div className="flex justify-center gap-16 m-6">
  
<Button nameBTN={`Удалить`}/>
<Button nameBTN={`Зарегистрироваться`}/>
<Button nameBTN={`хрень полная`}/>
<Button nameBTN={`Войти`}/>
<Button nameBTN={`Купить`}/>
<Button nameBTN={`Отправить`}/>
</div>
    </>
  )
}

export default App