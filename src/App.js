import React from 'react';
import './App.css';
import Wrapper from './Wrapper';
import Counter from './Counter';
import sound from './sound/Terminator.mp3';
import UIfx from 'uifx';

class App extends React.Component {


    state = {
        item: [
            { id: 1 },
            { id: 2 },
            { id: 3 },
            { id: 4 },
            { id: 5 },
            { id: 6 },
            { id: 7 },
            { id: 8 },
            { id: 9 }
        ],
        isHidden: true,
        index: 1,
        count: 0,
    };

    getRandomImageIndex = () => {
        let getIndex = Math.floor(Math.random() * 9);
        this.setState({ index: getIndex })
    };
    id = setInterval(() => { this.getRandomImageIndex() }, 700);

    itemOnClick = () => {
        let newCount = this.state.count + 1;
        this.setState({ count: newCount });
        let tick = new UIfx(sound);
        tick.play();
    };

    render = () => {
        return (
            <div className='App'>
                <Wrapper item={this.state.item} index={this.state.index}
                    itemOnClick={this.itemOnClick} />
                <Counter count={this.state.count} />
            </div>
        );
    }
};



export default App;

