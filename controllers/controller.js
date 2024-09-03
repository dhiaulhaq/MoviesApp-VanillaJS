const ProductionHouse = require('../models/productionHouses');
const Movies = require('../models/movies');

class Controller {
    static async home(req, res){
        try {
            res.render('home');
        } catch (error) {
            res.send(error.message);
            console.log(error);
        }
    }

    static async productionHouses(req, res){
        try {
            const productionHouses = await ProductionHouse.productionHouses();
            res.render('productionHouses', {productionHouses});
        } catch (error) {
            res.send(error.message);
            console.log(error);
        }
    }

    static async movies(req, res){
        try {
            const movies = await Movies.movies();
            res.render('movies', {movies});
        } catch (error) {
            res.send(error.message);
            console.log(error);
        }
    }

    static async add(req, res){
        try {
            const productionHouses = await ProductionHouse.productionHouses();
            res.render('add', {productionHouses});
        } catch (error) {
            res.send(error.message);
            console.log(error);
        }
    }

    static async insert(req, res){
        const {name, released_year, genre, ProductionHouseId} = req.body;
        try {
            await Movies.insert(name, released_year, genre, ProductionHouseId);
            res.redirect('/movies');
        } catch (error) {
            console.log(error);
            if (error.name === 'ErrorValidation') {
                res.send(error.errorMessages);
            }else{
                res.send(error);
            }
        }
    }

    static async edit(req, res){
        const {id} = req.params;
        try {
            const productionHouses = await ProductionHouse.productionHouses();
            const movie = await Movies.edit(id);
            res.send(movie)
            res.render('edit', {productionHouses, movie});
        } catch (error) {
            res.send(error.message);
            console.log(error);
        }
    }

    static async update(req, res){
        const {id} = req.params;
        const {name, released_year, genre, ProductionHouseId} = req.body;
        try {
            await Movies.update(id, name, released_year, genre, ProductionHouseId);
            res.redirect('/movies');
        } catch (error) {
            res.send(error.message);
            console.log(error);
        }
    }

    static async delete(req, res){
        const {id} = req.params;
        try {
            await Movies.delete(id);
            res.redirect('/movies');
        } catch (error) {
            res.send(error.message);
            console.log(error);
        }
    }
}

module.exports = Controller;