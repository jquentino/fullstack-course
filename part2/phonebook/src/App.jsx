import { useState } from 'react'
import { Contact } from './components/contact'


const App = () => {

  const [persons, setPersonContact] = useState([
    { name: 'Arto Hellas', number: '9999-9999' }
  ])
  const [newName, setNewName] = useState('')

  const [newNumber, setNewNumber] = useState('')

  const handleInputChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleSubmitName = (event) => {
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

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmitName}>
        <div>
          name: <input value={newName} onChange={handleInputChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(
        (person, index) => <Contact key={index} name={person.name} number={person.number} />
      )}
    </div>
  )
}

export default App