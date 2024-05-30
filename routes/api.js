const express = require('express')
const router = express.Router()

const { updateBook, deleteBook, insertBook, searchBooks } = require('../data/books')


router.get('/' ,(req, res) => {
    res.send('api index page');
});

router.get('/search', (req, res) => {
    res.send("search books form");
});

router.get('/search', (req, res) => {
    res.send('search results for a particular book:' + req.params.name)
});

router.get('/update', (req, res) => {
    res.send('Update form Page');
});

router.put("/update/:id", (req, res) => {
    res.send('updating element')
})

router.get("/delete", (req, res) => {
    res.send('Delete form page');
});

router.delete("/delete/:id", (req, res) => {
    res.send('deleting element')
})

router.get('/create', (req, res) => {
    res.send('Create form page');
});

router.post('/create', (req, res) => {
    res.send('creating element')
})


module.exports = router