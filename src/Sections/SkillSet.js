import React, { Component } from 'react';
import '../assets/skillSet.scss';

class SkillSet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      skills: []
    }
  }

  componentDidMount = () => {
    fetch('http://localhost:3000/data/skillSet.json', {
      method: 'GET'
    })
      .then(response => { return response.json() })
      .then(response => {
        console.log('Skillsets', response);
        this.setState({
          skills: response
        })
      });
  }

  render() {
    const skillCol = this.state.skills.map(skill => {
      return (
        <div className="col-3 skill-col">
          <span className="capatilized skill-title"> {skill.name} </span>
          <ul className="unstyled-list skill-list">
            <li>{skill.what}</li>
            <li>{skill.when}</li>
            <li>A</li>
          </ul>
        </div>
      )
    })
    return (
      <div className="section">
        <div className="row">
          <p>Skillsets I've Gathered Over the Years</p>
        </div>
        <div className="row skill-row">
          {/* repeate from here */}
          {skillCol}
          {/* repeate up to here */}
        </div>
      </div>
    );
  }
}

export default SkillSet;