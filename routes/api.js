const router = require('express').Router()

router.get('/' ,(req, res) => {
    res.send('api page');
})

router.get('/search/id:', (req, res) => {
    if (req.params.id){
        res.send('some book using id or error');
    }   else {
        res.send("all books");
    }
})

router.get('/update/id:', (req, res) => {
    if (req.params.id){
        res.send('edit a book with id');
    }
    else{
        res.send('cant edit')
    }
})

router.get("/delete", (req, res) => {
    res.send('Delete page');
})

router.get('/create', (req, res) => {
    res.send('Create a new book here');
})


module.exports = router