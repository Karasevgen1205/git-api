import React, { Component } from "react";

export default class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  Clock() {
    return <span>Сейчас {this.props.date}.</span>;
  }

  render() {
    return <Clock date={this.state.date.toLocaleTimeString()} />;
  }
}
