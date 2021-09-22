import React, { Component } from "react";
import { Col, Row, Container } from "reactstrap";
import Header from "../header/header";
import styled from "styled-components";
import RandomRepos from "../randomRepos/randomRepos";
import ItemList from "../itemList/itemList";
import OneRepoContributors from "../oneRepoContributors/oneRepoContributors";
import GitApi from "../../services/getResours";
import AllRepos from "../../components/allRepos/allRepos";
import OneContrib from "../oneContrib/oneContrib";
import ContributorsList from "../contributorsList/contributorsList";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      node_id: null,
      name: null,
      description: null,
      contributors: null,
      created_at: null,
      contributorsListFOR: null,
      all_repos: null,
      all_contributors: null,
      all_props: null,
      active_contrib: null,
      unique_contrib: null,
    };
    this.gitApi = new GitApi();

    this.updateRepos();
    this.updateRepos = this.updateRepos.bind(this);
    this.contributorsListFromOneRepos =
      this.contributorsListFromOneRepos.bind(this);
    this.updateAllRepos = this.updateAllRepos.bind(this);
    this.viewOneRepos = this.viewOneRepos.bind(this);
    this.viewOneContrib = this.viewOneContrib.bind(this);
    this.updateAllContrib = this.updateAllContrib.bind(this);
  }

  updateRepos(id = 460078) {
    // const id = Math.floor(Math.random() * 500000 + 1);
    // const id = 460078;
    this.gitApi.getRandomRepo(id).then((repo) => {
      this.setState({
        node_id: repo.node_id,
        name: repo.name,
        description: repo.description,
        contributors: repo.contributors_url,
        created_at: repo.created_at,
      });
    });
  }

  contributorsListFromOneRepos() {
    if (this.state.name != null) {
      const gitApi = new GitApi();
      gitApi.getAllContribForOneRepos(this.state.name).then((rep) => {
        this.setState({
          contributorsListFOR: rep,
        });
      });
    }
  }

  updateAllRepos() {
    this.gitApi.getAllRepos(5).then((repo) => {
      this.setState({
        all_repos: repo,
      });
    });
  }

  // TODO:

  updateAllContrib() {
    this.gitApi.getAllRepos(5).then((repo) => {
      this.setState({
        all_repos: repo,
      });
      repo.map((oneRepo) => {
        let keyName = oneRepo.name;
        this.setState((prevState) => ({
          all_contributors: {
            ...prevState.all_contributors,
            [oneRepo.name]: {
              name: oneRepo.name,
              id: oneRepo.id,
              contributors_url: oneRepo.contributors_url,
            },
          },
        }));

        this.gitApi.getAllContribForOneRepos(keyName).then((rep) => {
          const prevState = this.state.all_contributors;
          const uniqueContrib = this.state.unique_contrib;

          rep.map((item) => {
            prevState[keyName] = {
              ...prevState[keyName],
              contributors_list: {
                ...prevState[keyName].contributors_list,
                [item.login]: {
                  login: item.login,
                  id: item.id,
                  url: item.url,
                  avatar_url: item.avatar_url,
                  contributions: item.contributions,
                },
              },
            };
          });

          this.setState({
            all_contributors: prevState,
          });
        });
      });
      console.log(this.state);
    });
  }

  viewOneRepos(id) {
    this.updateRepos(id);
  }

  viewOneContrib(name) {
    const gitApi = new GitApi();
    gitApi.getOneContrib(name).then((repo) => {
      this.setState({
        active_contrib: repo,
      });
    });
  }

  render() {
    return (
      <>
        <Router>
          <Container>
            <Header
              updateAllRepos={this.updateAllRepos}
              all_repos={this.state.all_repos}
              updateAllContrib={this.updateAllContrib}
            />
            <Row>
              <Col md={{ size: 6, offset: 3 }}>
                <AllRepos
                  updateAllRepos={this.updateAllRepos}
                  all_repos={this.state.all_repos}
                  viewOneRepos={this.viewOneRepos}
                />
              </Col>
              <Col lg={{ size: 12, offset: 0 }}>
                <RandomRepos
                  name={this.state.name}
                  node_id={this.state.node_id}
                  description={this.state.description}
                  created_at={this.state.created_at}
                  contributors={this.state.contributors}
                  contributorsListFromOneRepos={
                    this.contributorsListFromOneRepos
                  }
                  contributorsListFOR={this.state.contributorsListFOR}
                  updateAllRepos={this.updateAllRepos}
                  all_repos={this.state.all_repos}
                />
              </Col>
              {/* <Col md="6">
              <ItemList />
            </Col> */}
              <Col md={{ size: 6, offset: 3 }}>
                <OneRepoContributors
                  contributorsListFOR={this.state.contributorsListFOR}
                  viewOneContrib={this.viewOneContrib}
                />
              </Col>
              <Col md={{ size: 6, offset: 3 }}>
                <OneContrib
                  active_contrib={this.state.active_contrib}
                  // contributorsListFOR={this.state.contributorsListFOR}
                  // viewOneContrib={this.viewOneContrib}
                />
              </Col>
            </Row>
          </Container>
        </Router>
      </>
    );
  }
}
