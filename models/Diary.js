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
         WHERE date >= $1::date AND date < ($1::date + INTERVAL '1 day')
         ORDER BY date DESC;`,
        [date]
    );

    return response.rows.map(row => new Diary(row));
}

static async destroy(id) {
    const response =  await db.query('DELETE FROM diary WHERE id = $1 RETURNING *;', [id]);

    if (response.rows.length === 0) {
        throw new Error('Diary entry not found');
    }

    return new Diary(response.rows[0]);
}

static async create(data) {
    const { title, description } = data;

    const response = await db.query(
        'INSERT INTO diary (title, description) VALUES ($1, $2) RETURNING *;',
        [title, description]
    );

    return new Diary(response.rows[0]);
}
}
module.exports = Diary;