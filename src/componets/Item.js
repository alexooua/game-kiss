import React from 'react';
import '../App.css';
import logo from "./../img/Cy-BugProfile.png";


class Item extends React.Component {
    render = () => {

        let classForItem = this.props.index === this.props.id ? 'photo show' : 'photo'
// debugger
        return (

            <div className="item">
                {this.props.hideImg ? <img src={logo} alt=''
                                            className={classForItem}
                                            onClick={this.props.itemOnClick}/>:""}

            </div>
        );
    }
}

export default Item;



