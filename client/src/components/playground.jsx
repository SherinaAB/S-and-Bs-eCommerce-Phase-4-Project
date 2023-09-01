///this is for the shopping cart item
// function shoppingcartitem(){
//     return (
// <div className="dropdown dropdown-end">
//         <label tabIndex={0} className="btn btn-ghost btn-circle">
//         <div className="indicator">
//             <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-5 w-5"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//             >
//             <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
//             />
//             </svg>
//             <span className="badge badge-sm indicator-item">8</span>
//         </div>
//         </label>
//         <div
//         tabIndex={0}
//         className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
//         >
//         <div className="card-body">
//             <span className="font-bold text-lg">8 Items</span>
//             <span className="text-info">Subtotal: $999</span>
//             <div className="card-actions">
//             <button className="btn btn-primary btn-block">View cart</button>
//             </div>
//         </div>
//         </div>
//     </div>
//     )}


// ///// this is the original navbar
// function navbar(){
//     return (
//       <div className="navbar bg-base-100">
//           <div className="flex-1">
//             <Link to="/" className="btn btn-ghost normal-case text-xl">
//                 Fun Times Ecommerce
//             </Link>
//           </div>
//           <div className="flex-none">
//             <ul className="menu menu-horizontal px-1">
//               <li>
//                 <Link to="/login">
//                     Login
//                 </Link>
//               </li>
//               <li>
//                 <details>
//                   <summary>Menu</summary>
//                   <ul className="p-2 bg-base-100">
//                     <li>
//                       <Link to="/about">
//                         About
//                       </Link>
//                     </li>
//                     <li>
//                       <Link to="/contact">
//                         Contact
//                       </Link>
//                     </li>
//                   </ul>
//                 </details>
//               </li>
//             </ul>
//           </div>
//         </div>
//     )}


//     // this is for the already have a login, create an account
//     <Link to="/login" className="link link-primary mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Already have an account? Login</Link>\


///hard coded products
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