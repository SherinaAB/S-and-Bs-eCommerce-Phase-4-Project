import { useParams } from "react-router-dom";

function UpdateProduct({updateProduct, productId}){
    console.log(productId)
    const params = useParams()


    function handleSubmit(e){
        e.preventDefault()
    }

    return (
        <div className="SomeContainer">
            <form onSubmit={handleSubmit} className="contact_form_container">
                <input type="text" name="name" placeholder='Name'/>
                <input type="text" name="description" placeholder="Description" />
                <input type="text" name="image" placeholder="Image" />
                <input type="submit" value="Add" />
            </form>
        </div>
    )
}

export default UpdateProduct;