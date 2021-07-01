import React from 'react';
import './App.css'
import axios from 'axios';
import Covid from "./Covid";


export default class PersonList extends React.Component {
  state = {
    persons: []
  }

  componentDidMount(i) {
    axios.get(`https://api.covidtracking.com/v1/states/current.json`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
  }

  render() {
    return (
      <div >
      <Covid/>
      </div>
    )
  }
}