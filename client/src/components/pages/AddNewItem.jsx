function AddItemForm({handleSubmit, addNewProduct}){

  function handleSubmit(e){
    e.preventDefault()

    const newProduct = {
      name: e.target["name"].value,
      desc: e.target["description"].value,
      image: e.target["image"].value,
      sku: e.target["sku"].value,
      long_desc: e.target["long_desc"].value,
      price: e.target["price"].value,
      inventory: e.target["inventory"].value,
    }

    fetch('/api/products', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(newProduct)
    })
    .then(res => res.json())
    .then(data => addNewProduct(data))

    e.target.reset()
  }
  return (
    <>
      <div className="SomeContainer">
  
          <form onSubmit={handleSubmit} className="contact_form_container">
              <input type="text" name="name" placeholder='Name'/>
              <input type="text" name="description" placeholder="Description" />
              <input type="text" name="image" placeholder="Image" />
              <input type="text" name="sku" placeholder="Sku" />
              <input type="text" name="long_desc" placeholder="Long Description" />
              <input type="text" name="price" placeholder="Price" />
              <input type="text" name="inventory" placeholder="Inventory" />
              <input type="submit" value="Add" />
          </form>
      </div>
      </>
  )
}
export default AddItemForm;

