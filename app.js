const express = require('express');
const path = require('path');
const ejsMate = require('ejs-mate');

const app = express();

// SET VIEW ENGINE TO EJS
app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
// SET VIEWS DIRECTORY WITH PATH
app.set('views', path.join(__dirname, 'views'));

// MIDDLEWARE
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
	res.render('home');
});

const PORT = process.env.PORT || 3400;

app.listen(PORT, console.log(`Server running on port ${PORT}`));
