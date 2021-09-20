import React, { Component } from "react";
import { Col, Row, Container } from "reactstrap";
import Header from "../header/header";
import RandomRepos from "../randomRepos/randomRepos";
import ItemList from "../itemList/itemList";
import CharDetails from "../charDetails/charDetails";
import GitApi from "../../services/getResours";
import ContributorsList from "../contributorsList/contributorsList";

export default class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <Container>
          <Header />
        </Container>
        <Container>
          <Row>
            <Col lg={{ size: 10, offset: 0 }}>
              <RandomRepos />
            </Col>
          </Row>
          <Row>
            <Col md="6">
              <ItemList />
            </Col>
            <Col md="6">
              <CharDetails />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
