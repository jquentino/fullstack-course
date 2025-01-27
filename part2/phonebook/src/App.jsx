import { useState, useEffect } from 'react'
import { FormsAdd } from './components/FormsAdd'
import { Filter } from './components/Filter'
import { ContactsList } from './components/ContactsList'
import contactService from './services/contacts'

const App = () => {

  const [persons, setPersonContact] = useState([])

  const [newName, setNewName] = useState('')

  const [newNumber, setNewNumber] = useState('')

  const [newFilter, setFilter] = useState('')

  useEffect(() => {
    contactService.getAll()
      .then(data => setPersonContact(data))
  }, [])

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

    if (NameAreadyAdded) {
      alert(`${newName} is already added to phonebook`)
    } else if (NumberAlreadyAdded) {
      alert(`The number ${newNumber} is already added to the phonebook`)
    } else if (newName === '') {
      alert(`You can't add a empty name`)
    } else if (newNumber === '') {
      alert(`You can't add a empty number`)
    }
    else {
      const contactObject = {
        name: newName,
        number: newNumber
      }
      contactService.create(
        contactObject
      ).then(data => {
        setPersonContact(persons.concat(data))
        setNewName('')
        setNewNumber('')
      }).catch(
        response => { alert(`Error to add case in the server ${response}`) }
      )
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter value={newFilter} handleValueChange={handleFilterChange} />

      <h3>add a new</h3>

      <FormsAdd
        handleSubmit={handleSubmit}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />
      <h3>Numbers</h3>

      <ContactsList contacts={persons} filterValue={newFilter} />

    </div>
  )
}

export default App