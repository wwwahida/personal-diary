require('dotenv').config();

const fs = require('fs');

const db = require('./connect');

const sql = fs.readFileSync('database/diary.sql').toString();

db.query(sql)
    .then(data => {
        db.end();
        console.log('Database setup completed successfully.');
})
    .catch((err) => console.log('Error setting up the database:', err));