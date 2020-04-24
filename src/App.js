import React from 'react';
import './App.css';
import Counter from './componets/Counter';
import sound from './sound/kiss.mp3';
import UIfx from 'uifx';
import Item from "./componets/Item";
import win from "./img/win.png"



class App extends React.Component {


    state = {
        item: [{}, {}, {}, {}, {}, {}, {}, {}, {},],
        index: 1,
        count: 0,
        second: 1000,
        hideImg: true
    };

    yo

    componentDidMount() {
        this.setNewInterval(this.state.second)

    }

    setNewInterval = (second) => {
        clearInterval(this.yo)
        this.yo = setInterval(() => {
                this.getRandomImageIndex()
                this.setState({hideImg: true})

            },
            second);
    }


    getRandomImageIndex = () => {
        let getIndex = Math.floor(Math.random() * 9);
        this.setState({index: getIndex}
        )
    };
    itemOnClick = () => {
        let newSecond = this.state.second - 10;
        let newCount = this.state.count + 1;
        this.setState({count: newCount, hideImg: false, second: newSecond},
            () => {
                this.setNewInterval(newSecond)
            }
        );

        let tick = new UIfx(sound)
        tick.play();
    }
    onClickAgain = () => {
      //  this.setState({})
        clearInterval(this.yo)
        this.setState({
            index: 1,
            count: 0,
            second: 1000,
            hideImg: false
        }, () => {
            this.setNewInterval(this.state.second)
        })

    }
    render = () => {

        let items = this.state.item.map((item, i) => {

            return <Item key={i} id={i + 1}
                         index={this.state.index}
                         itemOnClick={this.itemOnClick}
                         hideImg={this.state.hideImg}/>
        })

        return (
            <div className='App'>
                <div className="five"><p><span>На память о нашем первом IT-REACT-SAMURAI-ПРЕПОДАВАТЕЛЕ, спасибо тебе за твою
                    упорную и старательную работу, за то что всегда,<br/>
                    влюбом вопросе помагаеш нам и решаешь нашие самые тупейшие ошибки, благодарочка от всего
                    сердца!!!</span><br/><br/>
                    <span className="do">Целуй его в лоб и ты будеш програмистом!!!<br/>
                    Чмокни Виктора 60 раз, пройди свой путь самурая!!!</span>
                </p></div>
                <div className='text'>
                    =>
                    {this.state.count >= 10 && <div className="one"><h1>HTML</h1></div>}
                    {this.state.count >= 20 && <div className="one"><h1>CSS</h1></div>}
                    {this.state.count >= 30 && <div className="one"><h1>JS</h1></div>}
                    {this.state.count >= 40 && <div className="one"><h1>REACT</h1></div>}
                    {this.state.count >= 50 && <div className="one"><h1>NODE</h1></div>}

                </div>

                <div className="wrapper">
                    {items}
                </div>

                <Counter count={this.state.count}/>
                {this.state.count >= 60 &&
                <div className="win">
                    <img src={win} alt=""/>

                    <div className="six"><h1><span>Congratulation !!!
                        <br/>You are the best developer in the world.</span></h1></div>
                    <a href="" onClick={this.onClickAgain}>Again?</a>
                </div>
                }
            </div>
        );
    }
};



export default App;

