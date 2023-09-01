import React, { useState } from 'react'

// const products = [
//     {
//         id: 1,
//         name: 'Barbie in Pink Power Jumpsuit – Barbie The Movie',
//         href: '#',
//         price: '$48',
//         imageSrc: 'https://cdn.shopify.com/s/files/1/0568/1132/3597/products/q1f3ss2bzxpp3l2ubxah_600x600.jpg?v=1691012794',
//         imageAlt: 'Barbie in Pink Power Jumpsuit, Barbie The Movie',
//       },
//       {
//         id: 2,
//         name: 'Barbie The Movie Official “I Am Kenough” Unisex Hoodie',
//         href: '#',
//         price: '$35',
//         imageSrc: 'https://creations.mattel.com/cdn/shop/products/ceifjw9jookgvrixoxbc.jpg?v=1692377787',
//         imageAlt: 'Barbie The Movie Official “I Am Kenough” Unisex Hoodie',
//       },
//       {
//         id: 3,
//         name: 'Weird Barbie – Barbie The Movie',
//         href: '#',
//         price: '$89',
//         imageSrc: 'https://creations.mattel.com/cdn/shop/products/a4v1otoem9ric3p0fbsq.jpg?v=1690567879',
//         imageAlt: 'Weird Barbie – Barbie The Movie',
//       },
//       {
//         id: 4,
//         name: 'Barbie The Movie Dad Hat',
//         href: '#',
//         price: '$35',
//         imageSrc: 'https://cdn.shopify.com/s/files/1/0568/1132/3597/files/HYC86_Apliiq_White_Hat_044_600x600.jpg?v=1685497815',
//         imageAlt: 'Barbie The Movie Dad Hat',
//       },
//       {
//         id: 5,
//         name: 'Barbie The Movie Jean Jacket',
//         href: '#',
//         price: '$35',
//         imageSrc: 'https://creations.mattel.com/cdn/shop/files/HYC94_Apliiq_Jean_Jacket_Front_009.jpg?v=1685556765',
//         imageAlt: 'Barbie The Movie Jean Jacket',
//       },
//       {
//         id: 6,
//         name: 'Barbie™ The Movie x FUNBOY Iconic B Inflatable Pool Float',
//         href: '#',
//         price: '$35',
//         imageSrc: 'https://creations.mattel.com/cdn/shop/products/FUNBOY-BARBIE-ICONIC-B-POOL-FLOAT.1-min_1.jpg?v=1689701454',
//         imageAlt: 'Barbie™ The Movie x FUNBOY Iconic B Inflatable Pool Float',
//       },
//       {
//         id: 7,
//         name: 'Ken Doll Wearing Pastel Striped Beach Matching Set – Barbie The Movie',
//         href: '#',
//         price: '$35',
//         imageSrc: 'https://creations.mattel.com/cdn/shop/products/urd6b13byyhdhemys53s.jpg?v=1686156891',
//         imageAlt: 'Ken Doll Wearing Pastel Striped Beach Matching Set – Barbie The Movie',
//       },
//       {
//         id: 8,
//         name: 'Hi Ken T-shirt – Barbie The Movie',
//         href: '#',
//         price: '$35',
//         imageSrc: 'https://cdn.shopify.com/s/files/1/0568/1132/3597/files/HYM61_Tshirt_HiKen_Blue_02_600x600.jpg?v=1690309476',
//         imageAlt: 'Hi Ken T-shirt – Barbie The Movie',
//       }
// ]

function Products({products}) {

 
  // let [count, setCount] = useState(0);

  // function increaseCount(){
  //   // e.preventDefault()
  //   count = count + 1;
  //   setCount(count);
  // }

  // function decreaseCount() {
  //   // e.preventDefault()
  //   count = count - 1;
  //   setCount(count);
  // }

  return (
    <>
    {products.map((product)=>(
      <ProductItem key = {product.id} product={product} handleEdit={handleEdit}/>
    ))}
    </>
  )
}
export default Products;