import { Component } from "react";
import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component  {
    constructor(props){
        super(props);

        console.log("Parent Constructor");
    }

    componentDidMount(){
        console.log("Parent Component did mount");
    }

    render(){
        console.log("Parent Render");
        return (
        <div>
            <h1>About Class component</h1>
            <h2>This is abput page of my app</h2>
            <User/>
            <UserClass name={"Shikhar"} location={"Allahabad"}/>
        </div>
    );
   };
}


export default About;