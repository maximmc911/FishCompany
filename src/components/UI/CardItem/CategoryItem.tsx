import img from '../../../../public/Not_Img.jpeg'

const CategoryItem = () => {
  return (
    <>
     <div className="w-48 rounded-sm shadow-lg bg-slate-200">
        <img src={img} alt=""  className="w-48 px-4 pt-4 rounded-sm shadow-lg"/> 
    
        <h1 className='text-center'>Категория</h1>
    
            </div>
    

    
    </>
  )
}

export default CategoryItem