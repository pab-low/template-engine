const express = require('express')
const app = express()
// adding middleware
app.set("view engine", "ejs"); //setting up template engine


app.get('/home', function (req, res) {
  res.render('home');
});
 
app.listen(3000, function(err){
    if (err){
    console.log(err)
    }
    console.log('server is live on port 3000!!')
})