const { books } = require('./models')

books.create({
    isbn: '9539571',
    judul: 'ayo belajar',
    sinopsis: 'sinopsis buku',
    penulis: 'jaja',
    genre: 'fiksi'
})
.then (books => {
    console.log(book)
})