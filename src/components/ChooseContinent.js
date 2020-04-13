import React , { Component } from 'react';

class ChooseContinent extends Component {
    handleChoice = (continent) => {
        this.props.choose(continent);
        //this.props.ExtractItemsAction(continent);
        setTimeout(
            function() {
                this.props.history.push('/quizz');
            }
            .bind(this),
            1000
        );
    }
    render(){
        return(
            <div className="continents">
               <div className="col-md-4 mt-4">
                    <div className="card profile-card-5" id="continent_card" onClick={() => this.handleChoice('europe')}>
                        <div className="card-img-block">
                            <img className="card-img-top" src="../img/europe2.jpg" alt="Card image cap" />
                        </div>
                            <div className="card-body pt-0">
                            <h5 className="card-title">Europe</h5>
                            <div className="card-text">
                                <ul>
                                    <li>Population (2020): 747,636,026</li>
                                    <li>World Population: 9.59%</li>
                                    <li>Countries: 44</li>
                                </ul>
                            </div>      
                            </div>
                        </div>
                </div>
                <div className="col-md-4 mt-4">
                    <div className="card profile-card-5" id="continent_card" onClick={() => this.handleChoice('africa')}>
                        <div className="card-img-block">
                            <img className="card-img-top" src="../img/africa2.jpg" alt="Card image cap" />
                        </div>
                            <div className="card-body pt-0">
                            <h5 className="card-title">Africa</h5>
                            <div className="card-text">
                                <ul>
                                    <li>Population (2020): 1,340,598,147</li>
                                    <li>World Population: 17.20% </li>
                                    <li>Countries: 54</li>
                                </ul>
                            </div>      
                            </div>
                        </div>
                </div>
                <div className="col-md-4 mt-4">
                    <div className="card profile-card-5" id="continent_card" onClick={() => this.handleChoice('americas')}>
                        <div className="card-img-block">
                            <img className="card-img-top" src="../img/americas.jpg" alt="Card image cap" />
                        </div>
                            <div className="card-body pt-0">
                            <h5 className="card-title">Americas</h5>
                            <div className="card-text">
                                <ul>
                                    <li>Population (2020): 1,023,481,886</li>
                                    <li>World Population: 14.5% </li>
                                    <li>Countries: 56</li>
                                </ul>
                            </div>      
                            </div>
                        </div>
                </div>
                <div className="col-md-4 mt-4">
                    <div className="card profile-card-5" id="continent_card" onClick={() => this.handleChoice('asia')}>
                        <div className="card-img-block">
                            <img className="card-img-top" src="../img/asia2.jpg" alt="Card image cap" />
                        </div>
                            <div className="card-body pt-0">
                            <h5 className="card-title">Asia</h5>
                            <div className="card-text">
                                <ul>
                                    <li>Population (2020): 4,641,054,775</li>
                                    <li>World Population: 59.54% </li>
                                    <li>Countries: 48</li>
                                </ul>
                            </div>      
                            </div>
                        </div>
                </div>
                <div className="col-md-4 mt-4">
                    <div className="card profile-card-5" id="continent_card" onClick={() => this.handleChoice('all')}>
                        <div className="card-img-block">
                            <img className="card-img-top" src="../img/all.jpg" alt="Card image cap" />
                        </div>
                            <div className="card-body pt-0">
                            <h5 className="card-title">All the world</h5>
                            <div className="card-text">
                                <ul>
                                    <li>Population (2020 -- Until Application Date): 7,776,857,536</li>
                                    <li>Countries: 59</li>
                                </ul>
                            </div>      
                            </div>
                        </div>
                </div>
            </div>
        );
    }
}

export default ChooseContinent;
