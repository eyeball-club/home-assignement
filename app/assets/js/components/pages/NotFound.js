import React, { Component } from 'react';
import {
    Link,
} from "react-router-dom";
var leftarrowsvg = require("../../../img/left-arrow.svg")

class NotFound extends Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <div className="bg-white min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="font-extrabold text-secondary text-fs150 blur-sm tracking-widest">404</h1>
                    <h5 className="text-menu font-bold text-lg tracking-wider mb-10">We are sorry but the page you requested was not found</h5>
                    <Link to={'/'} >
                            <button className="bg-secondary text-fs12 font-bold text-white p-2 px-4 rounded-radius5 leading-normal flex items-center justify-center m-auto"> <img src={leftarrowsvg} className="mr-2" />Back to Home</button></Link>
                </div>
            </div>
        )
    }
}
export default NotFound;
