import React from "react";
import { Col, Row, Container } from "reactstrap";
import Header from "../header/header";
import RandomChar from "../randomChar/randomChar";
import ItemList from "../itemList/itemList";
import CharDetails from "../charDetails/charDetails";
import GitApi from "../../services/getResours";

const App = () => {
  return (
    <>
      <Container>
        <Header />
      </Container>
      <Container>
        <Row>
          <Col lg={{ size: 5, offset: 0 }}>
            <RandomChar />
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
};

const a = new GitApi();
a.getAllRepos().then((res) => console.log(res));

export default App;