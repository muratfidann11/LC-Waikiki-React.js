import React, { Component } from "react";

export default class Fahrenheit extends Component {
  convert_degree = (celcius) => {
    return celcius * 1.8 + 32;
  };
  render() {
    let fahrenheit_degree = this.convert_degree(this.props.degree);
    return <h4>Fahrenheit: {fahrenheit_degree}</h4>;
  }
}
