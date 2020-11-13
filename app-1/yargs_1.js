const chalk = require('chalk')
const validator=require('validator')
const yargs=require('yargs')

yargs.command({
    command : 'add',
    describe : 'Adding a new note',
    handler : function(){
        console.log('Adding new note')
    }
})

yargs.command({
    command : 'remove',
    describe : 'Removing a note',
    handler : function(){
        console.log('Removing the last note')
    }

})
yargs.parse()// Method -1 to display the output

console.log(yargs.argv)// Method -2 to display the output
