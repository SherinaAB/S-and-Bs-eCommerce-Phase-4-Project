import  {useParams, useHistory } from 'react-router-dom'
import {useEffect, useState} from 'react'
import styled from 'styled-components'

function ProductDetail() {
  const [product,setProduct] = useState({name:[],sku:[],desc:[],long_desc:[],inventory:[],price:[],image:[],id:[]}) 
  const [error,setError] = useState(null)

  const params = useParams()
  const history = useHistory()

  useEffect(() => {
    fetch(`/products/${params.id}`)
    .then(r => r.json())
      if(res.ok){
        r.json().then(data => setProduct(data))
      } else {
        r.json().then(data => setError(data.error))
      }
  }, [id])
  console.log(id)

  // const handleAddToCart = () => {history.push(`/cart/${id}`)}
  // return (
  //   <div>{product.name}</div>
  //   <div>{product.price}</div>
  //   <div>{product.description}</div>
  //   <div>{product.image}</div>
  //   <div>{product.category}</div>
  //   <div>{product.id}</div>
  //   <button onClick={handleAddToCart}>Add to Cart</button>
  //   {error && <h2>{error}</h2>}
  // )

  const {id,name,sku,desc,long_desc,inventory,price,image} = product
  if(error) 
  
  return <h2>{error}</h2>

  return (
    <Card id = {id}>
      <h1>{name}</h1>
        <div>
          <h3>Product SKU:</h3>
          <p>{sku}</p>
          <h2>Description:</h2>
          <h2>{desc}</h2>          
          <p>{long_desc}</p>
          <h3>Price:</h3>
          <h3>${ price}</h3>
          <h3>Qty Available:</h3>
          <p>{inventory}</p>
        <img src={image} alt="product cart" />
        </div>
    <button >Purchase Now</button>
    </Card> 
  )
}

export default ProductDetail;
const CardDetail = styled.li`
display:flex;
flex-direction:column;
justify-content:start;
font-family:Arial, sans-serif;
margin:5px;
h1{
  font-size:60px;
  border-bottom:solid;
  border-color:#42ddf5;
}
.wrapper{
  display:flex;
  div{
    margin:10px;
  }
}
img{
  width: 300px;
}
button{
  background-color:#42ddf5;
  color: white;
  height:40px;
  font-family:Arial;
  font-size:30px;
  margin-top:10px;
}
`