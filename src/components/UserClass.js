import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props);

        //here state is like a big object which contains all state variables
        this.state = {
            count : 0,
            count2 : 2,
        };

        console.log("Child Contructor")
    }

    componentDidMount(){
        console.log("Child Component did mount");
    }
    render(){

        const { name, location } = this.props;
        const { count,count2 } = this.state;

        console.log("Child Render");

        return (
            <div className="user-card">
                <h1>Count : {count}</h1>

                <button onClick={() =>{

                    // this.state.count = this.state.count + 1;
                    //NEVER UPDATE THE STATE VARIABLES DIRECTLY IT WILL CREATE INCONSISTENCY

                    this.setState({
                        count : this.state.count + 1,
                    })

                }}>Count increase
                  </button>

                <h1>Count2 : {count2}</h1>
                <h2>Name: {name}</h2>
                <h3>Location : {location}</h3>
                <h4>Contact : gshikhar04@gmail.com</h4>
            </div>
        );
    }
}

export default UserClass;