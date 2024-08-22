const Grocery = () => {
    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
                <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">
                    Welcome to Our Online Grocery Store
                </h1>
                <p className="text-lg text-gray-700 mb-6 text-center">
                    Discover a wide range of fresh produce, daily essentials, and specialty items delivered right to your doorstep. Shop with us for the best quality and unbeatable prices.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    <div className="bg-gray-200 p-6 rounded-lg shadow-md text-center">
                        <h2 className="text-xl font-semibold text-gray-800 mb-2">Fruits</h2>
                        <p className="text-gray-600">Fresh and juicy fruits to keep you healthy.</p>
                    </div>
                    <div className="bg-gray-200 p-6 rounded-lg shadow-md text-center">
                        <h2 className="text-xl font-semibold text-gray-800 mb-2">Vegetables</h2>
                        <p className="text-gray-600">Organic vegetables for a wholesome diet.</p>
                    </div>
                    <div className="bg-gray-200 p-6 rounded-lg shadow-md text-center">
                        <h2 className="text-xl font-semibold text-gray-800 mb-2">Dairy Products</h2>
                        <p className="text-gray-600">High-quality dairy products for your daily needs.</p>
                    </div>
                    <div className="bg-gray-200 p-6 rounded-lg shadow-md text-center">
                        <h2 className="text-xl font-semibold text-gray-800 mb-2">Snacks</h2>
                        <p className="text-gray-600">A variety of snacks for every taste.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Grocery;
