const pool = require('../config/connection');

class ProductionHouse {
    constructor(name_prodHouse, headquarters) {
        this.name_prodHouse = name_prodHouse,
        this.headquarters = headquarters
    }

    static async createProductionHouse(data){
        return data.map(({name_prodHouse, headquarters}) => new ProductionHouse(name_prodHouse, headquarters));
    }

    static async productionHouses(){
        const query = `SELECT * FROM "ProductionHouses" ORDER BY "name_prodHouse" ASC`;
        const {rows} = await pool.query(query);
        
        return this.createProductionHouse(rows);
    }
}

module.exports = ProductionHouse;