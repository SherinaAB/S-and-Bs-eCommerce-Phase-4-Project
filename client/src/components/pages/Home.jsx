import React from "react";
import Products from "./Products";

function Home({products, handleEdit, history}) {
  return (
    <>
        <h1
        className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900"
        >Inventory</h1>
        <Products products={products} handleEdit = {handleEdit} history = {history}/>
    </>
  );
}

export default Home;
