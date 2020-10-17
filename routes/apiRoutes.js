const notes = require('../db/db.json');

function apiRoutes(app) {
    // get all notes
    app.get('/api/notes', (req, res) => {
        res.json(notes);
    });

    // post a note
    app.post('/api/notes', (req, res) => {
        const newNote = { ...req.body };
        if (!newNote.title || newNote.text) {
            return res.status(400).json({ success: false,  msg: 'Please include a title and text' });
        }
        notes.push(newNote);
        res.json({ success: true, msg: 'Note added', newNote })
    });

    // update a note
    app.put('/api/data/:id', (req, res) => {
        const found = data.some(note => note.id === req.params.id);
        if (found) {
            notes.forEach((note, i) => {
                if (note.id === req.params.id) {
                    const updatedNote = { ...note, ...req.body };
                    notes[i] = updatedNote;
                    res.json({ success: true, msg: 'Note updated', updatedNote });
                }
            });
        }
        else {
            res.status(400).json({ success: false, msg: `No id of ${req.params.id} found` })
        }
    });

    // delete a note
    app.delete('/api/notes/:id', (req, res) => {
        const found = notes.some(note => note.id === req.params.id)
        if (found) {
            //remove the item from notes and return success
            notes.splice(notes.findIndex(note => note.id === req.params.id), 1);
            res.json({ success: true, msg: `Note with id of ${req.params.id} delete`  })
        }
        else {
            res.status(400).json({ success: false, msg: `No id of ${req.params.id} found` });
        }
    });
}
module.exports = apiRoutes;