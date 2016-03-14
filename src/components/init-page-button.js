import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-transition-group';

//<img src={this.state.imageUrl} className="img-rounded" alt="Your Alter Ego!" width="304" height="236" />

//the hack object to hold images
const urlArray = [
  "../src/images/spiderman-symbol.png",
  "../src/images/green_lantern-symbol.png",
  "../src/images/wonder_woman-symbol.png",
  "../src/images/chuck_norris-symbol.png",
  "../src/images/catwoman-symbol.png",
  "../src/images/batman-symbol.png"
];

let i = 0;

export default class MakeMeSuperButton extends Component {

  constructor() {
    super();

    this.state = {
      imageUrl: urlArray[0]
    };
  }


  render(){
    return (
      //@TODO get the button image to transition between logos.
      <div onClick={this.clickhandler.bind(this)}>
      <ReactCSSTransitionGroup transitionName="init-button">
        <img key={this.state.imageUrl} src={this.state.imageUrl} alt="Your Alter Ego!" width="400" height="315" />
      </ReactCSSTransitionGroup>
      </div>
    )
  }


  clickhandler() {
    if(urlArray[i + 1]){
      this.setState({ imageUrl: urlArray[i + 1] })
      i++;
    } else {
      i = 0
      this.setState({ imageUrl: urlArray[i]})
    }
  }
}
