const express = require("express")
const app = express()
const { books } = require("./models")


app.use(express.json())
app.use(express.urlencoded({ extended: true}))

// untuk get semua
app.get('/books', (req, res) => {
    books.findAll()
      .then(books => {
        res.status(200).json(books)
      })
})


// untuk get by ID
app.get('/books/:id', (req, res) => {
    books.findOne({
      where: { id: req.params.id }
    })
      .then(books => {
        res.status(200).json(books)
      })
   })


// untuk post
app.post('/articles', (req, res) => {
   books.create({
        isbn: req.body.isbn,
        judul: req.body.judul,
        sinopsis: req.body.sinopsis,
        penulis: req.body.penulis,
        genre: req.body.genre
    })
    .then(books => {
        res.status(201).json(books)
    }) .catch(err => {
        res.status(422).json("gak bisa menambahkan data buku baru")
    })
})


// untuk put
app.put('/books/:id', (req, res)=>{
    books.update({
        isbn: req.body.isbn,
        judul: req.body.judul,
        sinopsis: req.body.sinopsis,
        penulis: req.body.penulis,
        genre: req.body.genre
    }),{
        where: {id :req.params.id}
    }
    .then(books =>{
        res.status(201).json(books)
    }) .catch(err=>{
        res.status(422).json("gak bisa update data books")
    })
})


// untuk delete
app.delete("/books/:id", (req, res) => {
    books.destroy({
            where: { id: req.params.id }
        })
        .then(data => {
            res.status(201).json(data)
        }).catch(err => {
            res.status(422).json("gagal menghapus")
        })
})



app.listen(5000, () =>
    console.log("Server di 5000 terhubung!"))