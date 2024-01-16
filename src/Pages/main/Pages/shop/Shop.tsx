
import Breadcrumbmenu from '../../../../components/UI/Breadcrumb/Breadcrumb'
import CategoryItem from '../../../../components/UI/CardItem/CategoryItem'

const Shop = () => {
  return (
   <>
    <h1 className='mt-2 text-2xl text-center'>Магазин</h1>
    <Breadcrumbmenu/>
    <div className="flex flex-wrap gap-5 mt-3">
        <CategoryItem/>
        <CategoryItem/>
        <CategoryItem/>
        <CategoryItem/>
        <CategoryItem/>
    </div>
   </>
  )
}

export default Shop