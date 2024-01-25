import CardItem from '../../../../../components/UI/CardItem/CardItem'
import PaginationControlled from '../../../../../components/UI/Navigation/Pagination/Pagination'

const ShopPages = ({props}) => {
  return (
    <>
    
    <div className="p-5 text-2xl text-center">

    {props}
    </div>
    <div className="flex flex-wrap gap-4">
      
    <CardItem/>
    <CardItem/>
    <CardItem/>
    </div>
    <PaginationControlled/>
    </>
  )
}

export default ShopPages