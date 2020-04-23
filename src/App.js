import React from 'react';
import './App.css';
import Counter from './componets/Counter';
import sound from './sound/kiss.mp3';
import UIfx from 'uifx';
import Item from "./componets/Item";
import win from "./img/1.jpg";


class App extends React.Component {


    componentDidMount() {
        setInterval(() => {
            debugger
                this.getRandomImageIndex()
            },
            this.state.second
        );
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
    }

    state = {
        item: [{}, {}, {}, {}, {}, {}, {}, {}, {},],
        index: 1,
        count: 0,
        second: 1000
    };


    onUpSecond = () => {
        let newSecond = {second: this.state.second-100}

        this.setState(newSecond, ()=>{console.log(this.state.second)})
        console.log(this.state.second)
    }


    getRandomImageIndex = () => {

        let getIndex = Math.floor(Math.random() * 9);
        this.setState({index: getIndex}
        )
    };



    itemOnClick = () => {
        // this.onUpSecond()

        let newCount = this.state.count + 1;
        this.setState({count: newCount, second:this.state.second - 1000});
        let tick = new UIfx(sound)
        tick.play();
    };
    onClickAgain=()=>{
        this.setState({
            item: [{}, {}, {}, {}, {}, {}, {}, {}, {},],
            index: 1,
            count: 0,
            second: 1000
        });
    }

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
                    {this.state.count >= 1 && <span className="skill">HTML </span>}
                    {this.state.count >= 2 && <span className="skill">+ CSS </span>}
                    {this.state.count >= 3 && <span className="skill">+ JS </span>}
                    {this.state.count >= 4 && <span className="skill">+ REACT </span>}
                    {this.state.count >= 5 && <span className="skill">+ NODE </span>}

                </div>

                <div className="wrapper">
                    {items}
                </div>

                <Counter count={this.state.count}/>
                {/*{this.state.count >= 6 &&*/}
                {/*<div className="win"><img src={win} alt=""/>*/}
                {/*    <video controls="" autoPlay="" name="media">*/}
                {/*        <source*/}
                {/*            src="https://cdn.dribbble.com/users/662463/screenshots/3281817/rolling_chair_reel_monchomasse.gif?vid=1"*/}
                {/*            type="video/mp4"/>*/}
                {/*    </video>*/}
                {/*    <button onClick={this.onClickAgain}>again</button>*/}
                {/*</div>*/}
                {/*}*/}
            </div>
        );
    }
};



export default App;

