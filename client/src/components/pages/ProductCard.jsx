import {Link} from 'react-router-dom'
// import styled from 'styled-components'


export default function ProductCard({product}) {
    const {name,desc,sku,long_desc,price,inventory,image,id} = product

    return (
      <Card id={id}>
        <Link to={`/products/${id}`}> 
          <div>
            <h2>{name}</h2>
            <h2>{sku}</h2>
            <p>{desc}</p>
            <p>{long_desc}</p>
            <h2>$ {price}</h2>
            <h3>{inventory}</h3>
          </div>
          <img src={image}/>
        </Link>
      </Card>
     
    )
  }
  
  const Card = styled.li`
  display:flex;
  flex-direction:row;
  justify-content:start;
  font-family:Arial, sans-serif;
  margin:5px;
  &:hover {
    transform: scale(1.15);
    transform-origin: top left;
  }
  a{
    text-decoration:none;
    color:white;
  }
  img{
    width: 180px;
    margin-left:50%;
    mask-image: linear-gradient(to left, rgba(0, 0, 0, .9) 80%, transparent 100%);
  }
  position:relative;
  div{
   position:absolute;
  }
  `