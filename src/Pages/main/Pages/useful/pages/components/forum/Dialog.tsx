import DialogCard from "./DialogCard"
import InputDialog from "./InputDialog"

const Dialog = ({children}: any) => {
  return (
    <>
    <div className="m-5 ">
    {children}
    </div>
    <div className="mt-10">
        <h1 className="text-xl font-semibold">Название: <span className="pl-2 italic font-medium"> Помогите с запуском Узв для клариевого сома</span></h1>
        <h1 className="text-xl font-semibold">Описание: 
        <span className="pl-2 italic font-extralight"> Lorem ipsum dolor sit amet consectetur,
         adipisicing elit. Ipsum repudiandae aut ab! Molestias unde, hic perferendis 
        itaque voluptatem vero sit laudantium. Autem quas, quasi incidunt nostrum voluptatem rerum laboriosam earum.</span>
        </h1>
        <h1 className="pt-3 text-xl font-semibold">Ответы: </h1>
    </div>
   <div className="flex flex-col gap-4 mt-6">
    <DialogCard/>
    <DialogCard/>
    <DialogCard/>
   </div>
   <div className="">
    <InputDialog/>
   </div>
    <div className="flex justify-end ">
        {children}
    </div>
    </>
  )
}

export default Dialog