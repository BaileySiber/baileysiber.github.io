import React, { Component } from 'react';
import { CSSTransitionGroup } from 'react-transition-group'
import '../css/Info.css';

class Info extends Component {
  constructor() {
    super();
  }

  render() {
    return (

      <div className="infoContainer">

        <div className="infoChunk">
          <p>
            i’m bailey, an arab american technologist focused on addressing spatial and economic inequities in cities through housing, third spaces, and workforce development initiatives.
          </p>
        </div>


        <div className="infoChunk">
          <p>
            right now, i'm pursuing a masters in public policy as a rappaport fellow at the <a href="https://www.hks.harvard.edu/"> harvard kennedy school</a>, focusing on social and urban policy. i'm also leading ops and partnerships at <a href="https://www.thegcodehouse.com/">g&#123;code&#125;</a>, a non profit that empowers young women and non-binary people of color to gain economic mobility by providing housing, community, and technical training. i’m excited to be an alum of the <a href="https://www.tbf.org/what-we-do/strategic-focus-areas/nonprofit-effectiveness/women-of-color-leadership-circle">anna faith jones & frieda garcia women of color leadership circle</a>.
          </p>
        </div>

        <div className="infoChunk">
          <p>
            in my spare time, you'll find me playing stardew valley, obsessing over plants, or watching vocal coaches react to songs on youtube.
          </p>
        </div>

        <div className="infoChunk">
          <p>
            please feel free to reach out to learn more about g&#123;code&#125;, brainstorm new ideas, share great music, or anything else!
          </p>
        </div>


      </div>

    )}
  }

  export default Info;
