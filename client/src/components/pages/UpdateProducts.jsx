import { useParams, useHistory } from "react-router-dom";
import {useState, useEffect} from "react"

function UpdateProduct({updateProduct, productId}){
    const history = useHistory()
    const params = useParams()
    console.log(params)
   
    
    function handleSubmit(e){

        e.preventDefault()
        const newProduct = {
            name: e.target["name"].value,
            desc: e.target["description"].value,
            image: e.target["image"].value,
          }
        fetch(`/api/products/${params.id}`, {
            method: 'PATCH',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(newProduct)
        })
        .then(res => res.json())
        .then( data => {
            updateProduct(data),
            history.push(`/`)
        })
    }

    return (
        <div className="SomeContainer">
            <form onSubmit={handleSubmit} className="contact_form_container">
                <input type="text" name="name" placeholder='Name'/>
                <input type="text" name="description" placeholder="Description"/>
                <input type="text" name="image" placeholder="Image"/>
                <input type="submit" value="Add" />
            </form>
        </div>
    )
}

export default UpdateProduct;