import React, { Component } from "react";
import "./charDetails.css";
export default class CharDetails extends Component {
  render() {
    return (
      <div className="char-details rounded">
        <h4>One repo contributors</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item d-flex justify-content-between">
            {/* <span className="term">Contributor</span> */}
            <span>Tor</span>
          </li>
          <li className="list-group-item d-flex justify-content-between">
            {/* <span className="term">Contributor</span> */}
            <span>Frodo</span>
          </li>
          <li className="list-group-item d-flex justify-content-between">
            {/* <span className="term">Contributor</span> */}
            <span>Givi</span>
          </li>
          <li className="list-group-item d-flex justify-content-between">
            {/* <span className="term">Contributor</span> */}
            <span>Niga</span>
          </li>
        </ul>
      </div>
    );
  }
}
