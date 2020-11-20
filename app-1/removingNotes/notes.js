const chalk = require('chalk')
const validator=require('validator')
const yargs=require('yargs')
const fs=require('fs')

const getNotes= function(){
    return "Your Notes..."
}
const removeNote = function(title)
{
    const notes=loadNotes()
    const NotesToKeep = notes.filter(function(note){
      return note.title!==title
    })
    saveNotes(NotesToKeep)
    if(notes.length>NotesToKeep.length)
    {
      console.log(chalk.bgGreen('Note Removed!!!'))
    }
    else{
      console.log(chalk.bgRed('No Note Found'))
    }
}

const addNotes = function(title,body){
    const notes=loadNotes()
    const duplicateNotes = notes.filter(function(note){
      return note.title===title
    })
    if(duplicateNotes.length===0)
    {
    notes.push({
        title:title,
        body: body
    })
    saveNotes(notes)
    console.log('New Note Added!')
  }
    else
    {
      console.log('Taken')
    }

}
const saveNotes= function(notes){
  const dataJSON = JSON.stringify(notes)
  fs.writeFileSync('notes.json',dataJSON)
}

const loadNotes=function(){
  try{
    const dataBuffer=fs.readFileSync('notes.json')
    const dataJSON = dataBuffer.toString()
    return JSON.parse(dataJSON)
  }
  catch(e)
  {
    return []
  }
}
module.exports = {
    removeNote:removeNote,
    getNotes: getNotes,
    addNotes: addNotes
}
