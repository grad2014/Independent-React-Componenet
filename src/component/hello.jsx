import React, { Component } from 'react';

class hello extends React.Component {


    render() {
        const Message = this.props.message || "You havent specified any prop for testing you can send a prop named 'message' and the value passed will be displayed on the page"
        return (

            <h1>{Message}</h1>

        );
    }
}

export default hello;