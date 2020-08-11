const DataBase = require("./database/db")

const express = require("express")
const server = express()

const { pageLanding, pageStudy, pageGiveClasses, saveClasses } = require("./pages")

const nunjucks = require("nunjucks")

nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

server

.use(express.urlencoded( {extended: true } ))

// Configure statics files (img, js and css)
.use(express.static("public"))

// Routes of the application
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/save-classes", saveClasses)
.listen(5500)