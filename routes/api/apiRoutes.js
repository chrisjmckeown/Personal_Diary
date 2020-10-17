const notes = require('../../db/db.json');

function apiRoutes(app) {
    // get all notes
    app.get('/api/notes', (req, res) => {
        res.json(notes);
    });

    // post a note
    app.post('/api/notes',(req,res)=>{
        const newNote = {...req.body};
        if(!newNote.title || newNote.text){
            return res.status(400).json({msg: 'Please include a title and text'});
        }
        notes.push(req.body);
        res.json({success: true})
    });

    // delete a note
    app.delete('/api/notes/:id',(req,res)=>{

    });
}
module.exports = apiRoutes;