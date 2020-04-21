import React from 'react';
import './App.css';

class Counter extends React.Component {
    render = () => {
        return (
            <div className="counter"  >
                <span classname='user'> <b> User: </b> </span> {this.props.count}
            </div>
        );
    }
}

export default Counter;

