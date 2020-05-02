import React, { Component } from 'react';
import '../assets/homes.scss';


class Home extends Component {
  render() {
    return (
      <div className="section">
        <div class="home-row row">
          <div>
            <span className="hello ">Hello</span>
            <br />
            <span className="world">World</span>
            <span className="full-stop">.</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;