require('dotenv').config()
var Express = require("express");
var exphbs  = require('express-handlebars');
var app = Express();
var port = process.env.PORT || 3000 //short circuiting
var router = require("./controllers/burgers_controller")
app.use(Express.urlencoded())
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
app.use(router)
// app.get('/', (req, res) => {
//     res.send("Hello World!")
// }) 
app.listen(port, () => {
    console.log(`server is listening on port ${port}`)
    //"server is listening on port " + port
}) 
