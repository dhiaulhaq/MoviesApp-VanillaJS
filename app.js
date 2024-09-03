const Controller = require('./controllers/controller')
const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true}));
app.get('/', Controller.home);
app.get('/production-houses', Controller.productionHouses);
app.get('/movies', Controller.movies);
app.get('/movies/add', Controller.add);
app.post('/movies/add', Controller.insert);
app.get('/movies/edit/:id', Controller.edit);
app.post('/movies/edit/:id', Controller.update);
app.get('/movies/delete/:id', Controller.delete);

app.listen(port, () => {
    console.log(`Movies App listening on port ${port}`);
});