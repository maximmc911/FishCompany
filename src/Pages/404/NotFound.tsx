
import Navbar from '../../components/navbar/Navbar'
import Feedback from '../../components/UI/feedback/Feedback'
import { MdDoNotDisturb } from "react-icons/md";
const NotFound = () => {
  return (
    <>
    <nav>
      <Navbar/>
    </nav>
    <div className='flex flex-col items-center gap-6 mt-10'>
    <MdDoNotDisturb 
    size={152}
    color='red'
    />
    <h1 className='text-5xl text-center'>404 Not Found</h1>
    <h1 className='text-2xl text-center'>Страница, на которую вы пытаетесь попасть, <br/> отстутствует или еще не создана</h1>
    </div>
    <Feedback/>
    </>
  )
}

export default NotFound