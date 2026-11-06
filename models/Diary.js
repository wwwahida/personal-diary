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

static async getByDate(date) {
    const response = await db.query(
        `SELECT * FROM diary
         WHERE date >= $1::date
         AND date < ($1::date + INTERVAL '1 day')
         ORDER BY date DESC;`,
        [date]
    );

    return response.rows.map(row => new Diary(row));
}
}
module.exports = Diary;