import { useState } from 'react'
import { Contact } from './components/contact'
import { FormsAdd } from './components/FormsAdd'
import { Filter } from './components/Filter'


const App = () => {

  const [persons, setPersonContact] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])

  const [newName, setNewName] = useState('')

  const [newNumber, setNewNumber] = useState('')

  const [newFilter, setFilter] = useState('')

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const NameAreadyAdded = persons.some(
      (person) => person.name === newName
    )
    const NumberAlreadyAdded = persons.some(
      (person) => person.number == newNumber
    )
    // console.log('NameAreadyAdded', NameAreadyAdded)
    // console.log('newName', newName)    
    if (NameAreadyAdded) {
      alert(`${newName} is already added to phonebook`)
    } else if (NumberAlreadyAdded ) {
      alert(`The number ${newNumber} is already added to the phonebook`)
    } else if (newName === '') {
      alert(`You can't add a empty name`)
    } else if (newNumber === '') {
      alert(`You can't add a empty number`)
    }
    else {
      setPersonContact(persons.concat({ name: newName, number: newNumber }))
      setNewName('')
      setNewNumber('')
    }
    // console.log(persons)
  }
  const getContactToDisplay = (contacts, filterValue) => {
      const contactsFiltered = contacts.filter(
        (ctc) => ctc.name.toLowerCase().startsWith(filterValue.toLowerCase())
      )
      return (contactsFiltered.map(
        (person, index) => <Contact
          key={index}
          name={person.name}
          number={person.number}
        />
      ))
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value={newFilter} handleValueChange={handleFilterChange}/>
      <FormsAdd
        handleSubmit={handleSubmit}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
        />
      <h2>Numbers</h2>
      {getContactToDisplay(persons, newFilter)}
    </div>
  )
}

export default App