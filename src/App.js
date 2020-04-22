import React from 'react';
import './App.css';
import Counter from './componets/Counter';
import sound from './sound/kiss.mp3';
import UIfx from 'uifx';
import Item from "./componets/Item";
import win from "./img/win.png";

class App extends React.Component {


    state = {
        item: [{}, {}, {}, {}, {}, {}, {}, {}, {},],
        index: 1,
        count: 0,
    };

    getRandomImageIndex = () => {
        let getIndex = Math.floor(Math.random() * 9);
        this.setState({index: getIndex})
    };

    id = setInterval(() => {
        this.getRandomImageIndex()
    },

        (this.state.count<10&&1000)||5000

    );

    itemOnClick = () => {
        let newCount = this.state.count + 1;
        this.setState({count: newCount});
        let tick = new UIfx(sound)
        tick.play();
    };

    render = () => {
        let items = this.state.item.map((item, i) => {

            return <Item key={i} id={i + 1}
                         index={this.state.index}
                         itemOnClick={this.itemOnClick}/>
        })

        return (
            <div className='App'>
                <div className='text'><span className="hom">На память о нашем первом IT-REACT-SAMURAI-ПРЕПОДАВАТЕЛЕ, спасибо тебе за твою
                    упорную и старательную работу, за то что всегда,<br/>
                    влюбом вопросе помагаеш нам и решаешь нашие самые тупейшие ошибки, благодарочка от всего
                    сердца!!!</span><br/><br/>
                    <span className="do">Целуй его в лоб и ты будеш програмистом!!!<br/>
                    Чмокни Виктора 50 раз, пройди свой путь самурая!!!</span>
                    <br/><br/> =>
                    {this.state.count >=10 && <span className="skill">HTML </span>}
                    {this.state.count >=20 && <span className="skill">+ CSS </span>}
                    {this.state.count >=30 && <span className="skill">+ JS </span>}
                    {this.state.count >=40 && <span className="skill">+ REACT </span>}
                    {this.state.count >=50 && <span className="skill">+ NODE </span>}

                </div>

                <div className="wrapper">
                    {items}
                </div>

                <Counter count={this.state.count}/>
                <div className="win"><img src={win} alt=""/> </div>
            </div>
        );
    }
};



export default App;

