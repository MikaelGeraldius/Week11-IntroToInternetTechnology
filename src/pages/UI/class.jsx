import React from "react";
import { Component } from "react";

class Class extends Component {
    constructor(props){
        super(props);
        this.state = { blue: false };
    };

    render(){
        const { blue } = this.state;

        return (
            <>
                <h1 className='m-5'>Class</h1>
                {blue ? (
                    <h1 className="text-blue-600">Hello World</h1>
                ) : (
                    <h1>Hello World</h1>
                )}
                <button className='m-5' onClick={() => this.setState({ blue: !blue})}>
                    Toggle Blue Text
                </button>
            </>
        )
    }
}

export default Class;