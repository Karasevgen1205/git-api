import React, { Component } from "react";
import "./oneContrib.css";

export default class OneContrib extends Component {
  render() {
    // let a = this.props.contributorsListFOR;
    // const contributorsList = a
    //   ? a.map((number) => (
    //       <li key={number.id} className="contributors__item">
    //         <a href="#" onClick={() => this.props.viewOneContrib(number.login)}>
    //           {number.login}
    //         </a>
    //       </li>
    //     ))
    //   : null;
    // if (a) {
    //   return (
    //     <div className="one-repo-contributors rounded">
    //       <h4>One repo contributors</h4>
    //       <ol className="list-group list-group-flush contributors__list">
    //         {contributorsList}
    //       </ol>
    //     </div>
    //   );
    // } else {
    //   return <></>;
    // }
    // if (this.props.active_contrib.login) {
    let a = this.props.active_contrib;
    if (a) {
      return (
        <div className="one-contrib rounded">
          <h2>{this.props.active_contrib.name}</h2>

          <div className="one-contrib__img">
            <img src={this.props.active_contrib.avatar_url} alt="" />
          </div>
          <span>public_repos:{this.props.active_contrib.public_repos}</span>
          <span>public_gists:{this.props.active_contrib.public_gists}</span>
          <span>followers:{this.props.active_contrib.followers}</span>
          {/* <span>following:{this.props.active_contrib.following}</span> */}
          {/* <span>location:{this.props.active_contrib.location}</span> */}
        </div>
      );
    } else {
      return <></>;
    }
  }
}
