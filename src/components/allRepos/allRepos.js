import React, { Component } from "react";
import "./allRepos.css";

export default class AllRepos extends Component {
  render() {
    let b = this.props.all_repos;
    const reposList = b
      ? b.map((number) => (
          <li key={number.id} className="repos__list">
            <a href="#" onClick={() => this.props.viewOneRepos(number.id)}>
              {number.name}
            </a>
          </li>
        ))
      : null;

    if (b) {
      return (
        <div className="one-repo-contributors rounded">
          <h4>All repos</h4>
          <ol className="list-group list-group-flush">{reposList}</ol>
        </div>
      );
    } else {
      return <></>;
    }
  }
}
