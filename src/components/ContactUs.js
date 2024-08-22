const ContactUs = () => {
    return (
        <div className="max-w-screen-lg mx-auto p-8 bg-white rounded-lg shadow-lg mt-10">
            <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">Contact Us</h1>
            <p className="text-lg text-gray-600 mb-8 text-center">
                We're here to help! Fill out the form below and our team will get back to you as soon as possible.
            </p>

            <div className="flex flex-col md:flex-row gap-6">
                {/* Contact Form */}
                <form className="flex-1 bg-gray-100 p-6 rounded-lg shadow-md">
                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold mb-2">Name</label>
                        <input
                            type="text"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                            placeholder="Your Name"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold mb-2">Email</label>
                        <input
                            type="email"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                            placeholder="Your Email"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold mb-2">Message</label>
                        <textarea
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                            placeholder="Your Message"
                            rows="5"
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition duration-300"
                    >
                        Send Message
                    </button>
                </form>

                {/* Contact Info */}
                <div className="flex-1 bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Office</h2>
                    <p className="text-gray-600 mb-4">123 Main Street, City, Country</p>
                    <p className="text-gray-600 mb-4">Phone: +123 456 7890</p>
                    <p className="text-gray-600 mb-4">Email: support@company.com</p>

                    <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-2">Business Hours</h3>
                    <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-gray-600">Saturday: 10:00 AM - 4:00 PM</p>
                    <p className="text-gray-600">Sunday: Closed</p>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
