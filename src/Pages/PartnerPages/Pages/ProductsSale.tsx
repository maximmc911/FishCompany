import React from 'react'
import ProductPage from '../../../components/ProductPage/ProductPage'

const ProductsSale = () => {
  let exampleSalesman = true;
  return (
    <>
      <h1 className='p-5 text-2xl'>Мои товары</h1>
      <ProductPage props={exampleSalesman} />

    </>
  )
}

export default ProductsSale