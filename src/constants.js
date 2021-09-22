import dotenv from "dotenv";

dotenv.config();

export const REACT_APP_GITHUB_TOKEN = process.env.REACT_APP_TOKEN;
export const headers = { Authorization: `token ${REACT_APP_GITHUB_TOKEN}` };
