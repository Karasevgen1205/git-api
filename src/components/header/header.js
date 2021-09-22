import React, { Component } from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const HeaderBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
`;

const HeaderTitle = styled.h3`
  font-size: 24px;
  color: #000;
  margin: 0;
`;

const HeaderLinks = styled.ul`
  display: flex;
  margin: 0;
  align-items: center;
  color: #000;
  list-style-type: none;
  li {
    margin-right: 20px;
    font-size: 18px;
  }
`;

export default class Header extends Component {
  render() {
    return (
      <HeaderBlock>
        <HeaderTitle>
          <a href="#">Angular challenge</a>
        </HeaderTitle>
        <HeaderLinks>
          <li>
            <a href="#" onClick={this.props.updateAllRepos}>
              All repos
            </a>
          </li>
          <li>
            <a href="#" onClick={this.props.updateAllContrib}>
              All contributors
            </a>
          </li>
          <li>
            <a href="#">One repos</a>
          </li>
        </HeaderLinks>
      </HeaderBlock>
    );
  }
}
