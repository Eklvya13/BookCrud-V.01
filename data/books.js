const { readFileSync, writeFileSync } = require('fs')
const path = require('path')

const bookJsonPath = path.join(__dirname, './books.json')
const data = readFileSync(bookJsonPath, 'utf8');


let booksJson = JSON.parse(data)

const writeData = (updatedData) => {
    writeFileSync(bookJsonPath, JSON.stringify(updatedData, null, 2), 'utf-8');
};

const searchBooks = (key) => {
    const regex = new RegExp(`\\b${key}\\b`, 'i'); 
    const queryBooks = booksJson.filter((book) => regex.test(book.title))
    return queryBooks;
}

const searchAll = () => {
    return booksJson;
}

const insertBook = (newBookObject) => {
    try {       
        const lastId = booksJson[booksJson.length - 1].id
        newBookObject.id = lastId + 1
        booksJson.push(newBookObject);
        writeData(booksJson);
        return true;
    } catch (error) {
        console.log(error);
        return false
    }
}

const deleteBook = (id) => {
    try {       
        const index = booksJson.findIndex((book) => book.id === id)
        if (index == -1){
            return false;
        }
        booksJson.splice(index, 1);
        writeData(booksJson);
        return true;
    } catch (error) {
        console.log(err);
        return false;
    }
}

const updateBook = (id, newBookObject) => {
    try {       
        const index = booksJson.findIndex((book) => book.id === id)
        if (index == -1){
            return false;
        }
        booksJson[index] = { ...booksJson[index], ...newBookObject}
        writeData(booksJson);
        return true;
    } catch (error) {
        console.log(err);
        return false;
    }
}

module.exports = {
    updateBook,
    deleteBook,
    insertBook,
    searchBooks,
    searchAll
}