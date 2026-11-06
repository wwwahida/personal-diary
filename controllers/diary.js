const Diary = require('../models/Diary');

async function index(req, res) {
    try {
        const diaryEntries = await Diary.getAll();
        res.status(200).json(diaryEntries);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function show(req, res) {
    const { id } = req.params;
    try {
        const diaryEntry = await Diary.getOneByID(id);
        res.status(200).json(diaryEntry);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
}

module.exports = { index , show };