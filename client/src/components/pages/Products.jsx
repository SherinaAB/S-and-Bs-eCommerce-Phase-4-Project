import React, { useState } from 'react'

const products = [
    {
        id: 1,
        name: 'Barbie in Pink Power Jumpsuit – Barbie The Movie',
        href: '#',
        price: '$48',
        imageSrc: 'https://cdn.shopify.com/s/files/1/0568/1132/3597/products/q1f3ss2bzxpp3l2ubxah_600x600.jpg?v=1691012794',
        imageAlt: 'Barbie in Pink Power Jumpsuit, Barbie The Movie',
      },
      {
        id: 2,
        name: 'Barbie The Movie Official “I Am Kenough” Unisex Hoodie',
        href: '#',
        price: '$35',
        imageSrc: 'https://creations.mattel.com/cdn/shop/products/ceifjw9jookgvrixoxbc.jpg?v=1692377787',
        imageAlt: 'Barbie The Movie Official “I Am Kenough” Unisex Hoodie',
      },
      {
        id: 3,
        name: 'Weird Barbie – Barbie The Movie',
        href: '#',
        price: '$89',
        imageSrc: 'https://creations.mattel.com/cdn/shop/products/a4v1otoem9ric3p0fbsq.jpg?v=1690567879',
        imageAlt: 'Weird Barbie – Barbie The Movie',
      },
      {
        id: 4,
        name: 'Barbie The Movie Dad Hat',
        href: '#',
        price: '$35',
        imageSrc: 'https://cdn.shopify.com/s/files/1/0568/1132/3597/files/HYC86_Apliiq_White_Hat_044_600x600.jpg?v=1685497815',
        imageAlt: 'Barbie The Movie Dad Hat',
      },
      {
        id: 5,
        name: 'Barbie The Movie Jean Jacket',
        href: '#',
        price: '$35',
        imageSrc: 'https://creations.mattel.com/cdn/shop/files/HYC94_Apliiq_Jean_Jacket_Front_009.jpg?v=1685556765',
        imageAlt: 'Barbie The Movie Jean Jacket',
      },
      {
        id: 6,
        name: 'Barbie™ The Movie x FUNBOY Iconic B Inflatable Pool Float',
        href: '#',
        price: '$35',
        imageSrc: 'https://creations.mattel.com/cdn/shop/products/FUNBOY-BARBIE-ICONIC-B-POOL-FLOAT.1-min_1.jpg?v=1689701454',
        imageAlt: 'Barbie™ The Movie x FUNBOY Iconic B Inflatable Pool Float',
      },
      {
        id: 7,
        name: 'Ken Doll Wearing Pastel Striped Beach Matching Set – Barbie The Movie',
        href: '#',
        price: '$35',
        imageSrc: 'https://creations.mattel.com/cdn/shop/products/urd6b13byyhdhemys53s.jpg?v=1686156891',
        imageAlt: 'Ken Doll Wearing Pastel Striped Beach Matching Set – Barbie The Movie',
      },
      {
        id: 8,
        name: 'Hi Ken T-shirt – Barbie The Movie',
        href: '#',
        price: '$35',
        imageSrc: 'https://cdn.shopify.com/s/files/1/0568/1132/3597/files/HYM61_Tshirt_HiKen_Blue_02_600x600.jpg?v=1690309476',
        imageAlt: 'Hi Ken T-shirt – Barbie The Movie',
      }
]
function Products() {

  const [count, setCount] = useState(0);

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
    <div className="bg-white">
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      {/* <h2 className="sr-only">Products</h2> */}

      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {products.map((product) => (
          <a key={product.id} href={product.href} className="group">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
              <img
                src={product.imageSrc}
                alt={product.imageAlt}
                className="h-full w-full object-cover object-center group-hover:opacity-75"
              />
            </div>
            <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
            <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
            
            {/* <button className="btn btn-primary">Shop</button> */}
            <button
              // onClick={()}
              type="submit"
              className="mt-6 flex w-full items-center justify-center rounded-md border border-transparent bg-pink-600 px-8 py-3 text-base font-medium text-white hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Add to bag
              {/* <div>{count}</div>
              <button onClick={(increaseCount)}>+</button>
              <button onClick={(decreaseCount)}>-</button> */}
            </button>
          </a>
        ))}
      </div>
    </div>
  </div>
  )
}

export default Products