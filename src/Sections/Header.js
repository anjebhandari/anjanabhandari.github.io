import React, { Component } from 'react';
import '../assets/header.scss'
import head from '../assets/notebook.jpg';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      intro: []
    }
  }

  componentDidMount = () => {
    fetch("./data/header.json", {
      method: 'GET'
    }).then(response => {
      return response.json();
    })
      .then(response => {
        this.setState({
          intro: response.intro
        })
      })
  }


  render() {
    return (
      <div className="section">
        <div className="header-container">
          <img className="header-image" src={head} alt="main-background-img" />
          <div className="header-div absolute-style" />
          <div className="header-text absolute-style">
            <p className="intro">{this.state.intro}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;