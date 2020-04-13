import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Timer from 'react-compound-timer'

class Quizz extends Component {
  state = {
    countries: [],
    currentCountrie: {},
    score: 0,
    attempts: 0,
    gameFinished: false,
    winner: false,
    looser: false,
    show: false,
  }
  componentWillMount(){
    if(Object.keys(this.props.data).length === 0 && this.props.data.constructor === Object){
      window.location = 'https://hbenhamza-quizz-game.netlify.com/';
    }else{
      this.props.ExtractItemsAction(this.props.data.continent);
      setTimeout(
        function() {
          this.initializeData();
          this.setState({show:true})
        }
        .bind(this),
        500
    );
    }
  }

  
  initializeData(){
      this.props.ExtractItemsAction(this.props.data.continent);
      let countries = this.props.data.items;
      const continent = this.props.data.continent;
      if(continent && (continent == "asia" || continent == "all")) 
      countries = countries.filter((countrie) => countrie.name !== "Israel");
      const random_countries = this.shuffle(countries);
      const currentCountrie = random_countries[Math.floor(Math.random() * random_countries.length)];
      this.setState({countries: random_countries,currentCountrie:currentCountrie });
  }

  shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a.slice(0,4);
}

handleAnswer(answer){
  const currentCountrie = this.state.currentCountrie;
  const countries = this.state.countries;
  let score = this.state.score;
  let attempts = this.state.attempts;
  const validAnswer = currentCountrie.name === answer;
  if(validAnswer){
      countries.map((countrie,key) => {
      if(countrie.name === answer){
        countries[key].styling = {
          backgroundColor: 'green',
          color: '#ffffff',
          'pointerEvents': 'none'
        };
      }else{
        countries[key].styling = {
          backgroundColor: 'none',
          'pointerEvents': 'none'
        };
      }
    })
  score += 1;
  }else{
    countries.map((countrie,key) => {
      if(countrie.name === answer){
        countries[key].styling = {
          backgroundColor: 'red',
          color: '#ffffff',
          'pointerEvents': 'none'
        };
      }else if(countrie.name === currentCountrie.name){
        countries[key].styling = {
          backgroundColor: 'green',
          color: '#ffffff',
          'pointerEvents': 'none'
        };
      }else{
        countries[key].styling = {
          backgroundColor: 'none',
          'pointerEvents': 'none'
        };
      }
    })
    attempts += 1;
  }
  this.setState({countries:countries,score:score,attempts:attempts});
  if(attempts == 5){
    setTimeout(
      function() {
        this.setState({
          gameFinished: true,
          looser: true
        })
      }
      .bind(this),
      500
  );
  }else if(score == this.props.data.items){
    setTimeout(
      function() {
        this.setState({
          gameFinished: true,
          winner: true
        })
      }
      .bind(this),
      500
  );
  }else{
    setTimeout(
      function() {
          this.initializeData()
      }
      .bind(this),
      1000
  );
  }
}
  render(){
    const {currentCountrie,countries} = this.state; 
    return (
      <React.Fragment>
      <div className="game" style={this.state.show && !this.state.gameFinished ? {display:'block',marginTop:'0'}: {display:'none'}}>
        <div className="alert alert-info tip" role="alert">
        <i className="fa fa-exclamation-triangle"></i> You loose after 5 false attempts !
        </div>
        <div className="timer">
          Time elapsed :&nbsp;	&nbsp;	&nbsp;	
          <Timer formatValue={(value) => `${(value < 10 ? `0${value}` : value)}: `}>
            <Timer.Hours formatValue={value => `${value}: `} />
            <Timer.Minutes />
            <Timer.Seconds formatValue={value => `${value}s `} />
          </Timer>
        </div>
          <div className="card">
            <img src={currentCountrie.flag} className="card-img-top" alt="..." />
            <ul className="list-group list-group-flush">
              {countries.map((countrie) => 
                <li className="list-group-item"  key={countrie.name}>
                <button className="country-name" onClick={() => this.handleAnswer(countrie.name)}
                style={countrie.styling}>{countrie.name}</button>
              </li>)}
            </ul>
            <div className="card-footer">
              <button type="button" className="btn btn-primary">
                Score: <span className="badge badge-light">{this.state.score}</span>
              </button>
              <Link to="/" className="btn btn-danger float-right">&laquo; Leave Game</Link> 
            </div>
        </div>
      </div>
      <div className={"modal-card " + (this.state.winner ? 'winner' : 'looser')} style={this.state.gameFinished ? {display:'block'}: {display:'none'}}>
        <div className='header'>
        {this.state.looser ? "Unfortunately, you lost !" : "Congrats, you won !"}&nbsp;
        <i class="em em-disappointed_relieved" aria-role="presentation" aria-label="DISAPPOINTED BUT RELIEVED FACE" style={this.state.looser ? {display:'block',width:'100%'}: {display:'none'}}></i>
        <i class="em em-star-struck" aria-role="presentation" aria-label="GRINNING FACE WITH STAR EYES" style={this.state.winner ? {display:'block',width:'100%'}: {display:'none'}}></i>
        </div>
        <div className='actions'>
          <Link className='nah' to='/'>Restart</Link>
        </div>
      </div>
      </React.Fragment>
  );
  }
}

export default Quizz;
