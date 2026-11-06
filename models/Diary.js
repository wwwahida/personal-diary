const db = require('../database/connect');

class Diary {
    constructor({ id, title, description, date }) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.date = date;
    }


static async getAll() {
    const response = await db.query('SELECT * FROM diary ORDER BY date DESC;');

    return response.rows.map(row => new Diary(row));
}

static async getOneByID(id) {
    const response = await db.query('SELECT * FROM diary WHERE id = $1;', [id]);

    if (response.rows.length !== 1) {
        throw new Error(`Diary entry not found.`);
}

    return new Diary(response.rows[0]);

}
}
module.exports = Diary;