import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem,removeItem,clearCart } from '../utils/cartSlice'

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();

    const handleAddItem = () => {
        const newItem = {
            id: Date.now(), // Using timestamp as unique id for demo purposes
            name: 'New Product',
            description: 'Description of the new product',
            quantity: 1,
            price: 20.00,
            imgSrc:`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${item.card.info.imageId}`
        };
        dispatch(addItem(newItem));
    };

    const handleRemoveItem = () => {
        dispatch(removeItem());
    };

    const handleClearCart = () => {
        dispatch(clearCart());
    };

    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
                <h1 className="text-3xl font-bold text-gray-800 mb-6">Your Shopping Cart</h1>
                <p className="text-lg text-gray-600 mb-8">
                    Here you can review the items you have added to your cart. Adjust quantities or remove items as needed.
                </p>

                {/* Cart Items */}
                <div className="border-t border-gray-300 pt-4">
                    {cartItems.length === 0 ? (
                        <p className="text-gray-600">Your cart is empty.</p>
                    ) : (
                        cartItems.map((item) => (
                            <div key={item.id} className="flex justify-between items-center border-b border-gray-200 py-4">
                                <div className="flex items-center">
                                    <img src={item.imgSrc} alt={item.name} className="w-20 h-20 object-cover rounded-md"/>
                                    <div className="ml-4">
                                        <h2 className="text-xl font-semibold text-gray-800">{item.name}</h2>
                                        <p className="text-gray-600">{item.description}</p>
                                        <p className="text-gray-800 mt-2">Quantity: {item.quantity}</p>
                                        <p className="text-gray-800 mt-1">Price: ₹{item.price.toFixed(2)/100}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>

                {/* Cart Summary */}
                <div className="mt-6 flex justify-between items-center border-t border-gray-300 pt-4">
                    <h2 className="text-xl font-bold text-gray-800">Total</h2>
                    <p className="text-xl font-bold text-gray-800">
                        ${cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}
                    </p>
                </div>

                {/* Add, Remove, Clear Buttons */}
                <div className="mt-6 flex space-x-4 justify-center">
                    <button
                        className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-200"
                        onClick={handleAddItem}
                    >
                        Add New Item
                    </button>
                    <button
                        className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition duration-200"
                        onClick={handleRemoveItem}
                    >
                        Remove Last Item
                    </button>
                    <button
                        className="bg-yellow-500 text-white px-6 py-3 rounded-lg hover:bg-yellow-600 transition duration-200"
                        onClick={handleClearCart}
                    >
                        Clear Cart
                    </button>
                </div>

                {/* Checkout Button */}
                <div className="mt-6 text-center">
                    <button className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition duration-200">
                        Proceed to Checkout
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Cart;
