import React, { useState } from 'react';

function AddItemForm({ onAddItem }) {
  const [itemName, setItemName] = useState('');
  const [itemPrice, setItemPrice] = useState('');
  const [itemDescription, setItemDescription] = useState('');
  // const [itemImage, setItemImage] = useState('');

  const handleAddItem = (e) => {
    e.preventDefault();

    const newItem = {
      name: itemName,
      price: parseFloat(itemPrice),
      description: itemDescription,
      // image: itemImage,
    };

    onAddItem(newItem);

    // Clear form inputs after adding an item
    setItemName('');
    setItemPrice('');
    setItemDescription('');
    // setItemImage('');
  };

  return (
    <form onSubmit={handleAddItem}>
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">

      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
      <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Add a new product
          </h2>
      
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <label htmlFor="itemName" className="block text-sm font-medium leading-6 text-gray-900">
          Item Name
        </label>
        <div className="mt-2">
        <input
          type="text"
          id="itemName"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
          required
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6"
        />
        </div>
      </div>

      <div>
        <label htmlFor="itemPrice" className="block text-sm font-medium leading-6 text-gray-900">
          Item Price
        </label>
        <div className="mt-2">
        <input
          type="number"
          id="itemPrice"
          value={itemPrice}
          onChange={(e) => setItemPrice(e.target.value)}
          required
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6"
        />
        </div>
      </div>

      {/* <div>
        <label htmlFor="itemName" className="block text-sm font-medium leading-6 text-gray-900">
          Item Image
        </label>
        <div className="mt-2">
        <input
          type="text"
          id="itemImage"
          value={itemImage}
          onChange={(e) => setItemImage(e.target.value)}
          required
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6"
        />
        </div>
      </div> */}

      <div>
        <label htmlFor="itemDescription" className="block text-sm font-medium leading-6 text-gray-900">
          Item Description
        </label>
        <div className="mt-2">
        <textarea
          id="itemDescription"
          value={itemDescription}
          onChange={(e) => setItemDescription(e.target.value)}
          required
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6"
        />
        </div>
      </div>

      <button 
      type="submit"
      className="mt-6 flex w-full items-center justify-center rounded-md border border-transparent bg-pink-600 px-8 py-3 text-base font-medium text-white hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >Add Item
      </button>

    </div>
    </div>
    </form>
  );
}

export default AddItemForm;
