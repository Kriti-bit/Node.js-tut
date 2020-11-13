const chalk = require('chalk')
const validator=require('validator')
const yargs=require('yargs')

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
        console.log('title : '+argv.title + '   Body : '+ argv.body)
    }
})

yargs.command({
    command : 'remove',
    describe : 'Removing a note',
    handler : function(){
        console.log('Removing the last note')
    }

})

yargs.parse()
