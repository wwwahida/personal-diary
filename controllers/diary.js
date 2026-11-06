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
    const { date } = req.params;
    try {
        const diaryEntry = await Diary.getByDate(date);
        res.status(200).json(diaryEntry);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
}

async function destroy(req, res) {
    try{
    const id = req.params.id;

    await Diary.destroy(id)
    res.status(204).end();
}catch (err) {
    res.status(404).json({ error: err.message })
}
}
async function create(req, res) {
    try {
        const data = req.body;

        if (!data.title || !data.description) {
            return res.status(400).json({ error: 'Title and description are required' });
        }
        const newEntry = await Diary.create(data);
        res.status(201).json(newEntry);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
module.exports = { index , show, destroy, create };