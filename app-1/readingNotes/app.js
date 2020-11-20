const chalk = require('chalk')
const validator=require('validator')
const yargs=require('yargs')
const notes = require('./notes')

yargs.command({
    command : 'add',
    describe : 'Adding a new note',
    builder: {
        title:{
            describe: 'Note title',
            demandOption: true,
            type : 'string'
        },
        body: {
            describe : 'Note Body',
            demandOption: true,
            type : 'string'
        }

    },
    handler : function(argv){
        notes.addNotes(argv.title,argv.body)
    }
})

yargs.command({
    command : 'remove',
    describe : 'Removing a note',
    handler : function(argv){
        notes.removeNote(argv.title)}
    })

    yargs.command({
        command : 'list',
        describe : 'Listing all the Notes',
        handler : function(){
            notes.listNotes()
        }
    

})
yargs.command({
    command : 'read',
    demandOption: true,
    type:'string',
    describe : 'Reading a note',
    handler : function(argv){
        notes.readNote(argv.title)}
    })

yargs.parse()
