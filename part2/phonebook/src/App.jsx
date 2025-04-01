import { useState, useEffect } from 'react'
import { FormsAdd } from './components/FormsAdd'
import { Filter } from './components/Filter'
import { ContactsList } from './components/ContactsList'
import { Notification } from './components/Notification'
import contactService from './services/contacts'

const App = () => {

  const [persons, setPersonContact] = useState([])

  const [newName, setNewName] = useState('')

  const [newNumber, setNewNumber] = useState('')

  const [newFilter, setFilter] = useState('')

  const NULL_NOTIFICATION_OBJ = { type: null, message: null }
  const [notificationObj, setNotificationMessage] = useState(
    NULL_NOTIFICATION_OBJ
  )

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

  const setTimedNotification = (notificationObject) => {
    setNotificationMessage(notificationObject)
    setTimeout(() => { setNotificationMessage(NULL_NOTIFICATION_OBJ) }, 5000)
  }

  const checkToUpdateContact = (personToUpdate) => {
    if (confirm(`Do you want to update the contact of ${newName}?`)) {
      // const personToUpdate = persons.find(p => p.name === name)
      const changedPerson = { ...personToUpdate, number: newNumber }
      contactService.update(changedPerson)
        .then(
          (contactReturned) => {
            setPersonContact(persons.map(p => p.id === contactReturned.id ? contactReturned : p))
            resetFields()
            setTimedNotification({
              type: 'success',
              message: `Contact of ${contactReturned.name} was updated!`
            })
          })
        .catch(() => {
          setTimedNotification({
            type: 'error',
            message: `Information of ${changedPerson.name} has already been removed from server`
          })
        })
    } else {
      console.log('update contact operation canceled')
    }
  }

  const AddNewContact = () => {
    const contactObject = {
      name: newName,
      number: newNumber
    }
    contactService.create(
      contactObject
    ).then(data => {
      setPersonContact(persons.concat(data))
      resetFields()
      setTimedNotification({ type: 'success', message: `Added ${data.name}` })
    }).catch(
      (error) => {
        if (error.status === 400) {
          console.log('error.error')
          console.log(error)
          setTimedNotification({ type: 'error', message: error.response.data.error })
        } else {
          setTimedNotification({ type: `error`, message: `Unexpected error to add case in the server ${error.message}` })
        }
      }
    )
  }

  const resetFields = () => {
    setNewName('')
    setNewNumber('')
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const personMatched = persons.find(p => p.name === newName)
    const NameAreadyAdded = typeof (personMatched) !== 'undefined'
    const NumberAlreadyAdded = persons.some(
      (person) => person.number == newNumber
    )

    if (NameAreadyAdded) {
      // alert(`${newName} is already added to phonebook`)
      checkToUpdateContact(personMatched)
    } else if (NumberAlreadyAdded) {
      alert(`The number ${newNumber} is already added to the phonebook`) // TODO: Change these alerts by Notification
    } else if (newName === '') {
      alert(`You can't add a empty name`)
    } else if (newNumber === '') {
      alert(`You can't add a empty number`)
    }
    else {
      AddNewContact()
    }
  }

  const handleDeleteBtn = (id) => {
    contactService.del(id).then(
      setPersonContact(
        persons.filter((p) => p.id != id)
      )
    )
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification messageObj={notificationObj} />

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

      <ContactsList contacts={persons} filterValue={newFilter} handleDeleteBtn={handleDeleteBtn} />

    </div>
  )
}

export default App