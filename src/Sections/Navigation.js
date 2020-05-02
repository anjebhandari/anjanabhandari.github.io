import React, { Component } from 'react';
import '../assets/navigation.scss';
import '../assets/index.scss';

export default class Navigation extends Component {
  render() {
    return (
      <div className="section">
        <nav className="navigation-bar">
          <ul className="navigation-list">
            <li className="navigation-list-item">
              <a href="#header" className="text-primary decoration-none">Home</a>
            </li>
            <li className="navigation-list-item">
              <a href="#about me" className="text-primary decoration-none">About Me</a>
            </li>
            <li className="navigation-list-item">
              <a href="#languages i know" className="text-primary decoration-none">
                Languages I know</a>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
}