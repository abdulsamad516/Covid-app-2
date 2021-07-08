import React from 'react';
import './App.css'
import Covid from "./Covid";
import {Provider} from 'react-redux';


export default class PersonList extends React.Component {
  state = {
    persons: []
  }

  

  render() {
    return (
      <div >
      <Covid/>
      </div>
    )
  }
}