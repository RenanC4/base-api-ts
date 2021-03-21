require('dotenv')
.config({path: process.env.NODE_ENV === "test" ? ".env.testing" : ".env"})

const port = process.env.APP_PORT;
const githubUrl = process.env.GITHUB_URL;
const allUsersUrl = process.env.ALL_USERS_URL;
export {
  port,
  githubUrl,
  allUsersUrl
}