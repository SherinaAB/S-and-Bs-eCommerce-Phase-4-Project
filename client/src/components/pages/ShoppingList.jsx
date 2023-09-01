import React from 'react'
import ProductCard from './ProductCard'


export default function ProductList({productList}) {
    console.log("Items")
    const productList = productList.map((products) => (
        <Cart key={products.id} product={products}
        />
    ))

  return (
    <div className="product-list">
        <h2></h2>
        <div>
            {productList}
        </div>
    </div>
  )
}

const Title = styled.h1`
    text-transform: uppercase;
    font-family:Arial, sans-serif;
    width:70px;
    font-size: 70px;
    line-height: .8;
   
    transform: scale(.7, 1.4);
    
    span{
        color:#42ddf5;
    }
`

const CardContainer = styled.ul`
    display:flex;
    flex-direction:column;
`