

const yargs = require('yargs')
const getNotes = require('./notes.js')


//console.log(process.argv[2])

yargs.command({ 
    command:'add',
    describe:'add a note',
    builder: {
        title: {
            describe:'Note Title',
            demandOption: true,
            type:'string'
        },
        body: {
            describe:'Body of the Note',
            demandOption:true,
            type:'string'
        }
    },
    handler: function(argv){
        console.log('adding the note...')
        console.log('Title: '+ argv.title)
        console.log('Body: '+ argv.body)
    }
})
yargs.command({
    command:'remove',
    describe:'remove a note',
    handler: function(){
        console.log('removing the note...')
    }
})

yargs.command({
    command:'list',
    describe:'list your note',
    handler: function(){
        console.log('listing all notes...')
    }
})

yargs.command({
    command:'read',
    describe:'read your note',
    handler: function(){
        console.log('reading all notes...')
    }
})


yargs.parse()


