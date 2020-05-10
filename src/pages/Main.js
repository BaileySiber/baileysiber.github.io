import React, { Component } from 'react';
import { CSSTransitionGroup } from 'react-transition-group'
import Home from './Home'
import Resume from './Resume'
import Contact from './Contact'
import Media from './Media'
import About from './About'
import linkedin from '../images/linkedin.png'
import fb from '../images/fb.svg'
import sig from '../images/signature.png'
import '../css/Main.css';
import medium from '../images/medium.png'

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      home: true,
      resume: false,
      contact: false,
      media: false,
      about: false
    }
  }

  toResume(){
    this.setState({home: false, resume: true, contact: false, media: false, about: false})
  }

  toHome(){
    this.setState({home: true, resume: false, contact: false, media: false, about: false})
  }

  toContact(){
    this.setState({home: false, resume: false, contact: true, media: false, about: false})
  }

  toMedia(){
    this.setState({home: false, resume: false, contact: false, media: true, about: false})
  }

  toAbout(){
    this.setState({home: false, resume: false, contact: false, media: false, about: true})
  }


  render() {
    return (
      <div>

        <div className="Main">

          <img className="Main-title" onClick={() => this.toHome()} src={sig} />

          <div className="Main-section-top">
            <div className="Nav-bar">
              <p className="Main-nav" onClick={() => this.toAbout()}>ABOUT</p>
              <p className="Main-nav" onClick={() => this.toResume()}>RESUME</p>
              <p className="Main-nav" onClick={() => this.toMedia()}>MEDIA</p>
              <p className="Main-nav" onClick={() => this.toContact()}>CONTACT</p>
            </div>
          </div>

            {this.state.home ?
              <div>
                <Home />
              </div>
              :
              null
            }
            {this.state.resume ?
              <Resume />
              :
              null
            }
            {this.state.contact ?
              <Contact />
              :
              null
            }
            {this.state.media ?
              <Media />
              :
              null
            }
            {this.state.about ?
              <About />
              :
              null
            }
            </div>

          <div className="Icons">
            <a href="https://www.linkedin.com/in/bailey-siber-a0b63abb/">
            <img src={linkedin} className="Link" />
          </a>
          <a href="https://medium.com/@baileysiber37">
          <img src={medium} className="Med" />
        </a>
    </div>

    <div>
      <p className="Bottom">(c) BAILEY SIBER 2020</p>
    </div>

  </div>
);
}
}

export default Main;
