import React, { useState } from 'react'

function Products({products}) {

  return (
    <>
    {products.map((product)=>(
      <ProductItem key = {product.id} product={product} handleEdit={handleEdit}/>
    ))}
    </>
  )
}
export default Products;