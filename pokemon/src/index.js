import React, { Component } from 'react';
import { render } from 'react-dom';
import './Gallery.css';
import { BannerIMG } from './BannerIMG';
import { Gallery } from './Gallery';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <BannerIMG />
        <Gallery />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
