import React, { Component } from 'react';
import '../assets/aboutme.scss';

class AboutMe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      aboutMe: []
    }
  }
  componentDidMount = () => {
    fetch("http://localhost:3000/data/aboutme.json", {
      method: "GET"
    })
      .then(response => { return response.json() })
      .then(response => {
        console.log("about me ", response)
        this.setState({
          aboutMe: response
        })
      });
  }

  render() {
    let division = this.state.aboutMe.map(item => {
      return (
        <div className="aboutme-col">
          <div className="aboutme-main">
            <div className={item.className} >{item.title}</div>
            <div className="aboutme-me"> {item.main} </div>
          </div>
        </div>
      );
    });

    return (
      <div className="section">
        <div className="row m-0 aboutme-row">
          {division}
        </div>
      </div>
    );
  }
}

export default AboutMe;