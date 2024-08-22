import { Component } from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends Component {
    constructor(props) {
        super(props);
        console.log("Parent Constructor");
    }

    componentDidMount() {
        console.log("Parent Component did mount");
    }

    render() {
        console.log("Parent Render");
        return (
            <div className="max-w-screen-lg mx-auto p-8 bg-gray-100 rounded-lg shadow-lg mt-10">
                <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">About Us</h1>
                <p className="text-lg text-gray-600 mb-8 text-center">
                    Welcome to our application! This page gives you more information about us, our mission, and what we aim to achieve.
                </p>
                <div className="flex flex-col gap-6">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Team</h2>
                        <p className="text-gray-700 mb-4">
                            Our team is dedicated to providing the best experience for our users. We work tirelessly to ensure that our app meets your needs and exceeds your expectations.
                        </p>
                        <User />
                    </div>
                    
                </div>
            </div>
        );
    }
}

export default About;
