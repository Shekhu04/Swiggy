import React from 'react';

const Cart = () => {
    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
                <h1 className="text-3xl font-bold text-gray-800 mb-6">Your Shopping Cart</h1>
                <p className="text-lg text-gray-600 mb-8">
                    Here you can review the items you have added to your cart. Adjust quantities or remove items as needed.
                </p>

                {/* Cart Items */}
                <div className="border-t border-gray-300 pt-4">
                    <div className="flex justify-between items-center border-b border-gray-200 py-4">
                        <div className="flex items-center">
                            <img src="https://via.placeholder.com/80" alt="Product" className="w-20 h-20 object-cover rounded-md"/>
                            <div className="ml-4">
                                <h2 className="text-xl font-semibold text-gray-800">Product Name</h2>
                                <p className="text-gray-600">Description of the product</p>
                                <p className="text-gray-800 mt-2">Quantity: 1</p>
                                <p className="text-gray-800 mt-1">Price: $20.00</p>
                            </div>
                        </div>
                        <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-200">
                            Remove
                        </button>
                    </div>
                    {/* Repeat similar block for more items */}
                </div>

                {/* Cart Summary */}
                <div className="mt-6 flex justify-between items-center border-t border-gray-300 pt-4">
                    <h2 className="text-xl font-bold text-gray-800">Total</h2>
                    <p className="text-xl font-bold text-gray-800">$20.00</p>
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
