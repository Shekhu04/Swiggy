const ContactUs = () => {
    return (
        <div className="max-w-screen-lg mx-auto p-8 bg-gradient-to-r from-blue-100 to-white rounded-lg shadow-xl mt-10">
            <h1 className="text-5xl font-bold text-gray-900 mb-6 text-center tracking-wide">
                Contact Us
            </h1>
            <p className="text-lg text-gray-700 mb-10 text-center">
                We're here to help! Fill out the form below, and our team will get back to you as soon as possible.
            </p>

            <div className="flex flex-col md:flex-row gap-8">
                {/* Contact Form */}
                <form className="flex-1 bg-white p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
                    <div className="mb-6">
                        <label className="block text-gray-800 font-semibold mb-2">
                            Name
                        </label>
                        <input
                            type="text"
                            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="Your Name"
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-800 font-semibold mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="Your Email"
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-800 font-semibold mb-2">
                            Message
                        </label>
                        <textarea
                            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="Your Message"
                            rows="5"
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white p-4 rounded-lg hover:bg-blue-700 hover:shadow-lg transition-all duration-300"
                    >
                        Send Message
                    </button>
                </form>

                {/* Contact Info */}
                <div className="flex-1 bg-gray-50 p-8 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                        Our Office
                    </h2>
                    <p className="text-gray-700 mb-4">123 Main Street, City, Country</p>
                    <p className="text-gray-700 mb-4">Phone: +123 456 7890</p>
                    <p className="text-gray-700 mb-8">Email: support@company.com</p>

                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        Business Hours
                    </h3>
                    <p className="text-gray-700">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-gray-700">Saturday: 10:00 AM - 4:00 PM</p>
                    <p className="text-gray-700">Sunday: Closed</p>

                    <div className="mt-8">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                            Follow Us
                        </h3>
                        <div className="flex space-x-4">
                            <a href="#" className="text-blue-500 hover:text-blue-700">
                                {/* Font Awesome Icons or similar can be used */}
                                <i className="fab fa-facebook fa-2x"></i>
                            </a>
                            <a href="#" className="text-blue-500 hover:text-blue-700">
                                <i className="fab fa-twitter fa-2x"></i>
                            </a>
                            <a href="#" className="text-blue-500 hover:text-blue-700">
                                <i className="fab fa-linkedin fa-2x"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
