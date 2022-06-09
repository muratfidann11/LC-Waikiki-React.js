import React, { Component } from 'react'

export default class Celcius extends Component {
  render() {
    return (
      <h4>Celcius: {this.props.degree}</h4>
    )
  }
}
