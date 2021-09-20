import React, { Component } from "react";
import "./randomRepos.css";
import GitApi from "../../services/getResours";

export default class RandomRepos extends Component {
  constructor(props) {
    super(props);
    this.updateRepos();
    this.updateRepos = this.updateRepos.bind(this);
    this.contributorsListFromOneRepos =
      this.contributorsListFromOneRepos.bind(this);
    this.updateAllRepos = this.updateAllRepos.bind(this);
  }
  gitApi = new GitApi();
  state = {
    node_id: null,
    name: null,
    description: null,
    contributors: null,
    created_at: null,
    contributorsListFromOneRepos: null,
    all_repos: null,
  };

  updateRepos() {
    // const id = Math.floor(Math.random() * 500000 + 1);
    const id = 460078;
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
        const list = [];
        rep.map((item) => {
          list.push(item.login);
        });
        this.setState({
          contributorsListFromOneRepos: list,
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

  render() {
    const {
      node_id,
      name,
      description,
      contributors,
      created_at,
      contributorsListFromOneRepos,
      all_repos,
    } = this.state;

    const contributorsList = contributorsListFromOneRepos
      ? contributorsListFromOneRepos.map((number, i) => (
          <li key={i} className="contributors__item">
            {number}
          </li>
        ))
      : null;

    const reposList = all_repos
      ? all_repos.map((number, i) => (
          <li key={i} className="repos__list">
            {number.name}
          </li>
        ))
      : null;

    return (
      <div className="random-block rounded">
        <h4>Random Repos: {name}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item d-flex justify-content-between">
            <span className="term">node_id</span>
            <span>{node_id}</span>
          </li>

          <li className="list-group-item d-flex justify-content-between">
            <span className="term">description</span>
            <span>{description}</span>
          </li>
          <li className="list-group-item d-flex justify-content-between">
            <span className="term">contributors</span>
            <div>
              <a href="#" onClick={this.contributorsListFromOneRepos}>
                View all contributors!
              </a>
              <ol className="contributors__list">{contributorsList}</ol>
            </div>
          </li>
          <li className="list-group-item d-flex justify-content-between">
            <span className="term">created_at</span>
            <span>{created_at}</span>
          </li>
        </ul>
        <a href="#" onClick={this.updateAllRepos}>
          All repos
        </a>
        <ol className="repos__list">{reposList}</ol>
      </div>
    );
  }
}
