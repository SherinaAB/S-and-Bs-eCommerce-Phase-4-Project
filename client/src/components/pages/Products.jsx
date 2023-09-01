import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ProductItem from './ProductItem'

function Products({products, handleEdit}) {

  return (
    <>
    {products.map((product)=>(
      <ProductItem key = {product.id} product={product} handleEdit={handleEdit}/>
    ))}
    </>
  )
}
export default Products;