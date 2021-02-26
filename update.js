const { books } = require('./models')

const query = {
    where: { id:1 }
}

books.update({
    penulis: 'kaka'
}, query)
.then (() => {
    console.log("penulis sudah  dong")
    process.exit()
})
.catch(err => {
    console.error("gagal update")
})