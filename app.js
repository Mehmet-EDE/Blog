const express = require('express')
const app = express()
const ejs = require('ejs');
app.set("view engine", "ejs")

app.use(express.static("public"))


app.get('/', (req, res) => {
    res.render("index");
  });
  app.get('/about', (req, res) => {
    res.render("about");
  });
  app.get('/addPost', (req, res) => {
    res.render("add_post");
  })
app.listen(5858, () => {
    console.log('çalıştı')
})