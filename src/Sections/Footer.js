import React, { Component } from 'react';
import '../assets/footer.scss';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: "hide",
      fullName: null
    }
  }
  onClick = e => {
    e.preventDefault();
    if (this.state.show === 'hide')
      this.setState({ show: "show" });
    else
      this.setState({ show: "hide" });
  }
  onChange = e => {
    console.log("e.target.name", e.target.name, "e.target.value", e.target.value)
  }
  render() {
    return (
      <div className="section footer">
        <div className="row hireme-row">
          <div className="collabrate" onClick={this.onClick}>Let's collabrate Together</div>

        </div>
        {/* <div className="row">
          <div className={this.state.show}>
            <form onSubmit={this.onSubmit}>
              <div className="form-row">
                <label className="form-row-item">Enter your Name</label>
                <input className="form-row-item" type="text" required name="fullName" value={this.state.fullName} onChange={this.onChange} ></input>
              </div>
              <div className="form-row">
                <label className="form-row-item">Your Email Address</label>
              </div>
            </form>
          </div>
        </div> */}
        <div className="row followme-row">
          <ul className="unstyled-list in-line">
            <li><a href="https://www.linkedin.com/in/anjana-bhandari-496293129/" target="_blank" ><i class="fa fa-linkedin"></i></a></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Footer;