import React from "react";
import { headers } from "../constants";
export default class GitApi {
  constructor() {
    this._apiBase = "https://api.github.com";
  }

  async getResource(url) {
    const res = await fetch(`${this._apiBase}${url}`, { headers });

    if (!res.ok) {
      throw new Error(
        `Fuck: could not fetch ${this._apiBase}${url}` +
          `, received ${res.status}`
      );
    }

    return await res.json();
  }

  getAllRepos(count = 5) {
    return this.getResource(`/orgs/angular/repos?per_page=${count}&page=1`);
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
  getRandomRepo(id) {
    return this.getResource(`/repositories/${id}`);
  }
  _transformRepos(repo) {
    return {
      node_id: repo.node_id,
      name: repo.name,
      description: repo.description,
      contributors: repo.contributors_url,
      created_at: repo.created_at,
    };
  }
}
