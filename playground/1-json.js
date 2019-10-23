const fs = require('fs')

const book ={
    title: 'Ego is the Enemy',  
    author: 'Ryan Holiday'
}

const jsonBooks = JSON.stringify(book)
//fs.writeFileSync('1-json.json',jsonBooks)

//const databuffer = fs.readFileSync('1-json.json')
//const books = JSON.parse(databuffer.toString())
//console.log(books.author)

const databuffer = fs.readFileSync('1-json.json')
const person = JSON.parse(databuffer.toString())
person.name = 'Irla'
person.planet ='Marte`'
person.age = '33'

const jsonPerson = JSON.stringify(person);
fs.writeFileSync('1-json.json', jsonPerson)
