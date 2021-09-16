import React from "react";

export default class GitApi {
  constructor() {
    this._apiBase = "https://api.github.com";
  }

  async getResource(url) {
    const res = await fetch(`${this._apiBase}${url}`);

    if (!res.ok) {
      throw new Error(
        `Fuck: could not fetch ${this._apiBase}${url}` +
          `, received ${res.status}`
      );
    }

    return await res.json();
  }

  getAllRepos() {
    return this.getResource("/orgs/angular/repos?per_page=5&page=1");
  }
  getOneRepo(repo) {
    return this.getResource(`/repos/angular/${repo}`);
  }
  getAllContribForOneRepos(repo) {
    return this.getResource(`/repos/angular/${repo}/contributors`);
  }
  getOneContrib(name) {
    return this.getResource(`/users/${name}`);
  }
  getAllReposForOneContrib(name) {
    return this.getResource(`/users/${name}/repos`);
  }
}
