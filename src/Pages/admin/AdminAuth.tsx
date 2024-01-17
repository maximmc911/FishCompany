
import { Button } from '../../components/UI/Button/Button'

const AdminAuth = () => {
  return (
    <>
    AdminAuth
    <div className="flex flex-col justify-center align-top gap-9 ">
        <input type="text" className='w-48 h-20 bg-blue-600' placeholder='Введите логин' />
        <input type="password" className='w-48 h-20 bg-blue-600' placeholder='Введите пароль' />
        <Button nameBTN={`Войти`}/>
    </div>
    

    </>
  )
}

export default AdminAuth