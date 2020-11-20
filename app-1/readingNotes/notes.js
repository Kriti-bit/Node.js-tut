const chalk = require('chalk')
const validator=require('validator')
const yargs=require('yargs')
const fs=require('fs')
const { title } = require('process')

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
      console.log(chalk.bgGreen.inverse('Note Removed!!!'))
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

const listNotes=()=>{
  const notes=loadNotes()
  console.log(chalk.bgYellow('Your Notes'))
  notes.forEach((note) => {
  console.log(note.title)})
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

const readNote=(title)=>
{
  const note = loadNotes()
  const NoteFound=note.find((note=>note.title===title))
  if(NoteFound!==undefined)
  {
  console.log(chalk.bgGreen(NoteFound.title)+NoteFound.body)
  }
  else
  {
    console.log(chalk.bgRed('Note not Found'))
  }
}
module.exports = {
    removeNote:removeNote,
    getNotes: getNotes,
    addNotes: addNotes,
    listNotes : listNotes,
    readNote:readNote
}
