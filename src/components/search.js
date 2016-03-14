import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router';

export default class Search extends Component {

  handlePost() {

    axios.all([
      axios.post('/api/postActivity', { Title: 'Wingsuit over Dubai', Locale: 'Dubai, United Arab Emirates',
        Description: 'Always wanted to learn how to fly? This is your chance. Take to the air, then soar through the sky, thinking to yourself \'this is what it\'s like to be Batman\'. Pre-requisite: Skydive certification. See Freefall University',
        Links: 'www.skydivedubai.ae/sponsorship/wingusit.html' }),
      axios.post('/api/postActivity', { Title: 'Hot Air Balloon in Cappadocia', Locale: 'Cappadocia, Turkey',
        Description: '2,000 feet in the air overlooking one of the most iconic landscapes in all of air or wind sports',
        Links: 'www.hotairballooncappadocia.com/Ballooning-Safety.html' }),
      axios.post('/api/postActivity', { Title: 'Skydive Namibia', Locale: 'Swakopmund, Namibia',
        Description: 'Fall 10000 feet as you take in the incredible juxtaposition of bright blue Atlantic Ocean and the sprawling brown Namib desert.',
        Links: 'www.skydiveswakopmund.com/swakopmund/' })
    ])
    .then(axios.spread(function(response1, response2, response3) {
      console.log('handlePost() success!');
    }))
    .catch(function(response) {
      console.log('handlePost() error!');
    });
  }

  render(){
    return (
      <div className="container searchContainer">

        <header>
            <h1 id="headerText" className="header">Be Batman...</h1>
        </header>

        <div className="row paddingTop" id="activitiesList">

          <div className="col-md-4">
            <p className="lead activityText"><a href="http://www.skydivedubai.ae/experienced/freefly-wingsuit.html" target="_blank">Wingsuit Over Dubai</a></p>
            <iframe width="300" height="300" src="https://www.youtube.com/embed/EZEgz50VMsk" frameBorder="0" allowFullScreen></iframe>
            <label className="paragraphText">
              Always wanted to learn how to fly? This is your chance, Take to the air, then soar through the sky, thinking to yourself you are Batman.
              <br />
              <input type="radio" value="wingsuit" />
            </label>
          </div>

          <div className="col-md-4">
            <p className="lead activityText"><a href="http://www.skydiveswakop.com.na/" target="_blank">Skydive Namibia</a></p>
            <iframe width="300" height="300" src="https://www.youtube.com/embed/oipcXrHZZV4" frameBorder="0" allowFullScreen></iframe>
            <label className="paragraphText">
              Two thousand feet in the air overlooking one of the most iconic landscapes in all of air or wind sports.
              <br />
              <input type="radio" value="namibia" />
            </label>
          </div>

          <div className="col-md-4">
            <p className="lead activityText"><a href="http://www.viator.com/Cappadocia-tours/Balloon-Rides/d5609-g1-c3?pref=02" target="_blank">Hot Air Balloon in Cappadocia</a></p>
            <iframe width="300" height="300" src="https://www.youtube.com/embed/bNtwfVP0OHs" frameBorder="0" allowFullScreen></iframe>
            <label className="paragraphText">
              Fall a thousand feet as you take in the incredible juxtaposition of bright blue Atlantic Ocean and the sprawling brown Namib desert.
              <br />
              <input type="radio" value="cappadocia" />
            </label>
          </div>

          <div className="col-md-4 paddingTop">
            <p className="lead activityText"><a href="http://web.catalinachamber.com/Water-Activities/Para-Sailing" target="_blank">Parasailing Catalina Island</a></p>
            <iframe width="300" height="300" src="https://www.youtube.com/embed/7WChchYbVEo" frameBorder="0" allowFullScreen></iframe>
            <label className="paragraphText">
              Part sea, part air, but completely awesome, ascend six hundred feet harnessed to a speed-boat hoisted parachute Take in spectacular vistas of clear Pacific Coast waters, rugged Catalina Island Terrain, and the whimsically arranged city of Avalon An ultimate adventure on Catalina, and, may be free of charge on your birthday.
              <br />
              <input type="radio" value="parasailing" />
            </label>
          </div>

          <div className="col-md-4 paddingTop">
            <p className="lead activityText"><a href="http://www.salvadorcarnival.info/" target="_blank">Carnaval in Bahia</a></p>
            <iframe width="300" height="300" src="https://www.youtube.com/embed/jdQFPhuvG_c" frameBorder="0" allowFullScreen></iframe>
            <label className="paragraphText">
              Go on an authentic Carnaval experience without all the tourists Enjoy Carnaval in Bahia!
              <br />
              <input type="radio" value="bahia" />
            </label>
          </div>

          <div className="col-md-4 paddingTop">
            <p className="lead activityText"><a href="http://ostgut.de/" target="_blank">Underground Clubbing in Berghain</a></p>
            <iframe width="300" height="300" src="https://www.youtube.com/embed/0buhM4bbAx4" frameBorder="0" allowFullScreen></iframe>
            <label className="paragraphText">
              Go clubbing at most exclusive nightclub in Berlin Do not forget to wear all black to increase your chances of getting in and take a nap before heading out!
              <br />
              <input type="radio" value="berlin" />
            </label>
          </div>

        </div>
          <div className="paddingTop">
            <button className="btn btn-primary btn-lg button" type="button" onClick={this.handlePost}>
              <Link className="dropdown" to="/profile">
              Make Me Batman!
              </Link>
            </button>
          </div>
      </div>

    )
  }
}
