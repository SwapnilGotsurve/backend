require('dotenv').config()

const express = require('express')
const app = express()
const port = 3000

const githubData ={
  "username": "swapnil",
  "fullName": "Swapnil Patil",
  "bio": "Full-stack developer | Open-source enthusiast | Learning daily",
  "location": "Pune, India",
  "profileImage": "https://example.com/profile.jpg",
  "followers": 120,
  "following": 85,
  "publicRepos": 12,
  "githubURL": "https://github.com/swapnil",
  "repositories": [
    {
      "repoName": "portfolio-website",
      "description": "Personal portfolio built with HTML, CSS, JS",
      "language": "JavaScript",
      "stars": 15,
      "forks": 3,
      "updatedAt": "2025-01-12"
    },
    {
      "repoName": "django-blog-app",
      "description": "A blog application built using Django",
      "language": "Python",
      "stars": 28,
      "forks": 6,
      "updatedAt": "2025-02-05"
    },
    {
      "repoName": "todo-react-app",
      "description": "A simple Todo app using React",
      "language": "JavaScript",
      "stars": 12,
      "forks": 2,
      "updatedAt": "2025-03-01"
    }
  ],
  "skills": [
    "Python",
    "JavaScript",
    "Django",
    "React",
    "Git",
    "HTML",
    "CSS"
  ]
}


app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get("/home", (req, res) => {
    res.send("You are in home page ")
})
app.get("/youtube", (req, res) => {
    res.send("<h1> Welcome to Youtube </h1>")
})
app.get("/github", (req, res) => {
  res.json(githubData)
})
app.listen( process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})              