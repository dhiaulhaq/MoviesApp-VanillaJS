const pool = require('../config/connection');
const {readFile} = require('fs').promises;

async function seedTable() {
    try {
        let data = JSON.parse(await readFile('./productionHouses.json', 'utf-8')).map(el => `('${el.name}', '${el.headquarters}')`).join(`,\n`);
        // let data = JSON.parse(await readFile('./productionHouses.json', 'utf-8')).map(({name, headquarters}) => `('${name}', '${headquarters}')`).join(`,\n`);
        let query = `INSERT INTO "ProductionHouses" ("name_prodHouse", headquarters) VALUES ${data}`;
        await pool.query(query);
        console.log('SEED DATA SUCCESS...');
    } catch (error) {
        console.log(error);
    }
}

seedTable();