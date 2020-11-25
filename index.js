// require my packages
const express = require('express');
const router = require('./router');

// create an express app
const app = express();

//template engine
app.set('view engine', 'ejs');
// views file
app.set('views', './views');
//static files
app.use(express.static('./assets'));

// use the router
app.use(router);


// launch
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`server running, listening on port ${PORT}`);
});