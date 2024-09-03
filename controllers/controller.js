const ProductionHouse = require('../models/productionHouses');

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
            res.render('movies');
        } catch (error) {
            res.send(error.message);
            console.log(error);
        }
    }

    static async add(req, res){
        try {
            res.send('Movies Add');
        } catch (error) {
            res.send(error.message);
            console.log(error);
        }
    }

    static async insert(req, res){
        try {
            res.send('Movies Insert');
        } catch (error) {
            res.send(error.message);
            console.log(error);
        }
    }

    static async edit(req, res){
        const {id} = req.params;
        try {
            res.send(`Edit: ${id}`);
        } catch (error) {
            res.send(error.message);
            console.log(error);
        }
    }

    static async update(req, res){
        const {id} = req.params;
        try {
            res.send(`Update: ${id}`);
        } catch (error) {
            res.send(error.message);
            console.log(error);
        }
    }

    static async delete(req, res){
        const {id} = req.params;
        try {
            res.send(`Delete: ${id}`);
        } catch (error) {
            res.send(error.message);
            console.log(error);
        }
    }
}

module.exports = Controller;