const pool = require('../config/connection');

class Movies {
    constructor(name, released_year, genre, ProductionHouseId) {
        this.name = name,
        this.released_year = released_year,
        this.genre = genre,
        this.ProductionHouseId = ProductionHouseId
    }

    static async createMovies(data){
        return data.map(({name, released_year, genre, ProductionHouseId}) => new Movies(name, released_year, genre, ProductionHouseId))
    }
}

module.exports = Movies;