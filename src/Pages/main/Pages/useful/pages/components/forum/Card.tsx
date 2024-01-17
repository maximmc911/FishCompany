import { MdOutlineForum } from "react-icons/md";
const Card = () => {
  return (
    <>
    <div className="flex justify-between p-3 bg-blue-400 rounded cursor-pointer max-w-80" >
        <div className="">
        <div className="max-w-60">
            
        <p className='font-semibold'>Помогите с запуском Узв для клариевого сома</p>
        <p className='pt-4'>Комментировали: <span>150</span> раз(а)</p>
        </div>
        </div>
        <div className="pt-2">
<MdOutlineForum
size={45}
color='green'
/>
            
        </div>
    </div>
 </>
  )
}

export default Card