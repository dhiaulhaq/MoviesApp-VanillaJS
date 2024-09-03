const pool = require('../config/connection');

async function setupTables() {
    try {
        let dropTable = `DROP TABLE IF EXISTS "ProductionHouses", "Movies"`;
        await pool.query(dropTable);
        console.log('DROP TABLE SUCCESS...');

        let tableProductionHouses = `CREATE TABLE IF NOT EXISTS "ProductionHouses"(
            id SERIAL PRIMARY KEY,
            "name_prodHouse" VARCHAR NOT NULL,
            headquarters VARCHAR NOT NULL
        )`;
        await pool.query(tableProductionHouses);
        console.log('CREATE TABLE PRODUCTION HOUSES SUCCESS...');
        
        let tableMovies = `CREATE TABLE IF NOT EXISTS "Movies"(
            id SERIAL PRIMARY KEY,
            name VARCHAR NOT NULL,
            released_year INTEGER NOT NULL,
            genre VARCHAR NOT NULL,
            "ProductionHouseId" INTEGER NOT NULL REFERENCES "ProductionHouses"(id)
        )`;
        await pool.query(tableMovies);
        console.log('CREATE TABLE MOVIES SUCCESS');
        
    } catch (error) {
        console.log(error);
    }
}

setupTables();