import React , { Component } from 'react';
import { Link } from 'react-router-dom';

class Main extends Component {
  render(){
    return (
          <div className="card">  
            <img src="../img/countries2.jpg" className="card-img-top" alt="..." />
            <h1 className="intro-title">Flags quiz of all 254 countries of the world</h1>
            <Link to="/choose" className="btn blue">Start the game</Link>
            <Link to="/thanks" className="btn red">Quit</Link>
            <div className="credit-text">
            App designed & developped by <a href="https://www.linkedin.com/in/ben-hamza-hatem/" className="underlined-a">&nbsp;&nbsp;Hatem Ben Hamza&nbsp;&nbsp;</a>
            </div>
            <br/>
            <a href="https://github.com/HBenHamza/Countries-Quizz-Game" className="brk-btn">
              Code on Github !
            </a>
        </div>
    );
  }
}

export default Main;
