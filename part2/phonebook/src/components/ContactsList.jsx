import React from 'react'
import { Contact } from './contact'

export const ContactsList = ({ contacts, filterValue, handleDeleteBtn }) => {
  const contactsFiltered = contacts.filter(
    (ctc) => ctc.name.toLowerCase().startsWith(filterValue.toLowerCase())
  )
  return (contactsFiltered.map(
    (person) => <Contact
      key={person.id}
      id={person.id}
      name={person.name}
      number={person.number}
      handleDeleteBtn={handleDeleteBtn}
    />
  ))
}
