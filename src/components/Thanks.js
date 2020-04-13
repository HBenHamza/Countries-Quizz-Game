import React , { Component } from 'react';
import { Link } from 'react-router-dom';

class Thanks extends Component {
  render(){
    return (
        <div className="jumbotron text-center">
          <h1 className="display-3">Thank You!</h1>
          <p className="lead"><strong>Thank you for testing our game</strong>  your game, we will see you in future editions.</p>
          <hr />
          <p>
            For further informations or in case having trouble you can Contact us <a href="#">hatembenhamzacrk09@gmail.com</a>
          </p>
          <p className="lead">
            <Link to="/" className="btn btn-primary btn-sm">Continue to homepage</Link>
          </p>
        </div>
    );
  }
}

export default Thanks;
