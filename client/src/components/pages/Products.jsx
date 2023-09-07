import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ProductItem from './ProductItem'

function Products({products, handleEdit, history}) {

  return (
    <>
    <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
    {/* <div className='flex-wrap flex'> */}
    {products.map((product)=>(
      <ProductItem key = {product.id} product={product} handleEdit={handleEdit} history={history}/>
    ))}
    </div>
    {/* </div> */}
    </>
  )
}
export default Products;