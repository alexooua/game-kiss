import React from 'react';
import '../App.css';

class Counter extends React.Component {
    render = () => {

        return (

            <div className="counter"  >
                <span className='user'>  Yuo can:   </span> {(this.props.count)%10}
            </div>

        );
    }
}

export default Counter;

