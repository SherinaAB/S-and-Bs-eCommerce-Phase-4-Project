import React from "react";
import Products from "./Products";

function Home({products, handleEdit}) {
  return (
    <>
    {/* this is for a hero page and need to adjust the colors */}
      {/* <div className="hero min-h-screen"> */}
        {/* bg-base-200 for above to make background different color */}
        {/* <div className="hero-content flex-col lg:flex-row">
          <img
            src="https://media.vogue.co.uk/photos/64130ed6b969888aada448cb/1:1/w_2103,h_2103,c_limit/rev-1-BARBIE-TP-0002_High_Res_JPEG.jpeg"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">Shop Barbie the Movie Merch!</h1>
            <p className="py-6">
              Don't miss out!
            </p>
            <button className="btn btn-primary">Shop</button>
          </div>
        </div>
      </div> */}

        <Products products={products} handleEdit = {handleEdit}/>
    </>
  );
}

export default Home;
