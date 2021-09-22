import React, { Component } from "react";
import "./oneRepoContributors.css";

export default class OneRepoContributors extends Component {
  render() {
    let a = this.props.contributorsListFOR;

    const contributorsList = a
      ? a.map((number) => (
          <li key={number.id} className="contributors__item">
            <span onClick={() => this.props.viewOneContrib(number.login)}>
              {number.login}
            </span>
          </li>
        ))
      : null;

    if (a) {
      return (
        <div className="one-repo-contributors rounded">
          <h4>One repo contributors</h4>
          <ol className="list-group list-group-flush contributors__list">
            {contributorsList}
          </ol>
        </div>
      );
    } else {
      return <></>;
    }
  }
}
