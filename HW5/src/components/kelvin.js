import React, { Component } from "react";

export default class Kelvin extends Component {
  convert_degree = (celcius) => {
    return 273.15 + celcius;
  };
  render() {
    let kelvin_degree = this.convert_degree(this.props.degree);
    return <h4>Kelvin: {kelvin_degree}</h4>;
  }
}
