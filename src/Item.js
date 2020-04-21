import React from 'react';
import './App.css';
import logo from './img/arni.jpg';



class Item extends React.Component {
    render = () => {
        let classforItem = this.props.index === this.props.id ? 'photo show' : 'photo'
        return (

            <div className="item" id={this.props.id} >
                <img src={logo} alt='' className={classforItem} onClick={this.props.itemOnClick} />
            </div>
        );
    }
}

export default Item;



