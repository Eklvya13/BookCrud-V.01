const express = require('express')
const router = express.Router()

const { updateBook, deleteBook, insertBook, searchBooks, searchAll } = require('../data/books')


router.get('/' ,(req, res) => {
    res.send('api index page');
});

// needs work on search functionality
router.get('/search', (req, res) => {
    if (!req.params.title) {
        res.json(searchAll())
    }
    else{
        const resultBooks = searchBooks(req.params.title);
        if (resultBooks.length < 1){
            res.send("Not Found!");
        }else{
            res.json(resultBooks);
        }
    }
});

router.get('/update', (req, res) => {
    res.send('Update form Page');
});

router.put("/update/:id", (req, res) => {
    const modifiedBookObj = req.body
    if (updateBook(Number(req.params.id), modifiedBookObj)){
        res.send(`updated element with id: ${req.params.id} .`)
    }   else{
        res.send("failed to Update data")
    }   
})

router.get("/delete", (req, res) => {
    res.send('Delete form page');
});

router.delete("/delete/:id", (req, res) => {
    if (deleteBook(Number(req.params.id))){
        res.send(`Deleted Element with id: ${req.params.id}`);
    }   else {
        res.send('Deleteion Failed!');
    }
})

router.get('/create', (req, res) => {
    res.send('Create form page');
});

router.post('/create', (req, res) => {
    const newBookObj = req.body;
    if (insertBook(newBookObj)){
        res.send('Created and Inserted New Book');
    }
    else {
        res.send("failed to create a new book");
    }
})


module.exports = router