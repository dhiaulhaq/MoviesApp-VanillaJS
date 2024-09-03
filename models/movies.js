const pool = require('../config/connection');

class Movies {
    constructor(id, name, released_year, genre, ProductionHouseId) {
        this.id = id,
        this.name = name,
        this.released_year = released_year,
        this.genre = genre,
        this.ProductionHouseId = ProductionHouseId
    }

    static async createMovies(data){
        return data.map(({id, name, released_year, genre, ProductionHouseId}) => new Movies(id, name, released_year, genre, ProductionHouseId))
    }

    static async movies(){
        const query = `SELECT m.*, ph."name_prodHouse" AS "ProductionHouseId" FROM "Movies" m JOIN "ProductionHouses" ph ON ph.id = m."ProductionHouseId" ORDER BY m.released_year DESC`;
        const {rows} = await pool.query(query);
        return this.createMovies(rows);
    }

    static async insert(name, released_year, genre, ProductionHouseId){

        let errorMessages = [];

        if (!name) {
            errorMessages.push('name tidak boleh kosong');
        }

        if (released_year > 2021) {
            errorMessages.push('Released Year maksimal 2021');
        }

        if (errorMessages.length) {
            throw {
                name: 'ErrorValidation',
                errorMessages
            }
        }

        const query = `INSERT INTO "Movies" (name, released_year, genre, "ProductionHouseId") VALUES ($1, $2, $3, $4)`;
        await pool.query(query, [name, released_year, genre, ProductionHouseId]);
    }

    static async edit(id){
        let query = `SELECT * FROM "Movies" WHERE id = ${id}`;
        const {rows} = await pool.query(query);
        return (await this.createMovies(rows))[0];
    }

    static async update(id, name, released_year, genre, ProductionHouseId){

        let errorMessages = [];

        if (!name) {
            errorMessages.push('name tidak boleh kosong');
        }

        if (released_year > 2021) {
            errorMessages.push('Released Year maksimal 2021');
        }

        if (errorMessages.length) {
            throw {
                name: 'ErrorValidation',
                errorMessages
            }
        }

        const query = `UPDATE "Movies" SET name = $1, released_year = $2, genre = $3, "ProductionHouseId" = $4 WHERE id = $5`;
        await pool.query(query, [name, released_year, genre, ProductionHouseId, id]);
    }

    static async delete(id){
        return pool.query(`DELETE FROM "Movies" WHERE id = ${id}`);
    }
}

module.exports = Movies;