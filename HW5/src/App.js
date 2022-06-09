import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Card,
  CardBody,
  CardSubtitle,
  CardHeader
} from "reactstrap";
import Celcius from "./components/celcius";
import Fahrenheit from "./components/fahrenheit";
import Kelvin from "./components/kelvin";

export default class App extends Component {
  state = {
    temperature: 0,
  };

  increase_temp = () => {
    this.setState({ temperature: this.state.temperature + 1 });
  };

  decrease_temp = () => {
    this.setState({ temperature: this.state.temperature - 1 });
  };

  render() {
    return (
      <div>
        <Container>
          {/* Temperature and increase-decrease buttons  */}
          <Card>
            <CardHeader tag="h4">Hava Sıcaklığı</CardHeader>
            <CardBody>
              <CardSubtitle className="mb-2 text-muted" tag="h5">
                Şuanki Sıcaklık Değeri: {this.state.temperature} Derece.
              </CardSubtitle>
              <Row xs="auto">
                <Col>
                  <Button color="danger" onClick={() => this.decrease_temp()}>
                    Sıcaklık Azalt
                  </Button>
                </Col>
                <Col>
                  <Button color="success" onClick={() => this.increase_temp()}>
                    Sıcaklık Arttır
                  </Button>
                </Col>
              </Row>
            </CardBody>
          </Card>
          <br></br>
          <h5>3 Birimde Sıcaklık Ölçümü</h5>
          {/* 3 different temperature types components. */}
          <Row>
            <Col>
              <Celcius degree={this.state.temperature} />
            </Col>
            <Col>
              <Fahrenheit degree={this.state.temperature} />
            </Col>
            <Col>
              <Kelvin degree={this.state.temperature} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
