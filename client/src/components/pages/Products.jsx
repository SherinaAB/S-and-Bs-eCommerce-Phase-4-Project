import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ProductItem from './ProductItem'

function Products({products, handleEdit, history}) {

  return (
    <>
    {products.map((product)=>(
      <ProductItem key = {product.id} product={product} handleEdit={handleEdit} history={history}/>
    ))}
    </>
  )
}
export default Products;