import React, { Component } from 'react';
import Navigation from './Sections/Navigation';
import Header from './Sections/Header';
import AboutMe from './Sections/AboutMe';
import SkillSet from './Sections/SkillSet';
import Home from './Sections/Home';


export default class App extends Component {
  render() {
    return (
      <main>
        {/* <section id="nav"><Navigation /></section> */}
        {/* <section id="header"><Header /></section> */}
        {/* <section id="about me"><AboutMe /></section> */}
        <section id="home"><Home /></section>
        <section id="about me"><AboutMe /></section>
        <section id="languages i know"><SkillSet /></section>
        <section id="footer">Footer</section>
      </main>
    )
  }
}