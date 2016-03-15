import React, { Component } from 'react';
import axios from 'axios';

const Activities = [/*GET go here & correspond to TD below*/];

export default class Profile extends Component {


componentWillMount (){

  console.log("inside of componentWillMount!");

  return axios.get('/api/test')
  .then(function(resp){
    return resp.data;
    console.log('axios response: ', resp);
  })
  .catch(function(resp) {
    console.log('axios catch response ', resp);
  });
}

  render() {
    //using map/foreach, iterate through state to render each piece of
    //info for each activity
    return (

  <div className="profileContainer">
      <h1 className="profileHead">My Profile</h1>
      <h2 className="Welcome">Welcome, Batman!</h2>

      <div className="tableContainer">

      <table class="flat-table" align="center">
      <tbody>
      <tr>
        <th>Title</th>
        <th>Locale</th>
        <th>Description</th>
        <th>Links</th>
      </tr>
      <tr>
        <td>Wingsuit Over Dubai</td>
        <td>Dubai</td>
        <td>Always wanted to learn how to fly?</td>
        <td><a>www.skydivedubai.ae/sponsorship/wingsuit.html</a></td>
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      </tbody>
      </table>


      </div>

</div>

    );
  };

}
