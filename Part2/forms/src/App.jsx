/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react'
import axios from 'axios';

// App components import
import AddNumberForm from './components/add_user';
import SearchForm from './components/SearchForm';
import Persons from './components/phonebook';
import { addPerson, getAllPersons, updateNumber } from './phoneService/phoneservice';


const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [number, setNumber] = useState('')
  const [search, setSearch] = useState('')


  const getPersons = () => {
    getAllPersons().then((response) => {
      const data = response.data;
      console.log(data)
      setPersons(data)
    })
  }

  useEffect(getPersons, []);

  // Delete User



// Form Submit
  const handleSubmit =(e)=> {
    e.preventDefault()
    checkUserName(newName)
  }

  // Search For users

  const handleSearchForm =(e)=> {
    e.preventDefault();
    const searchResult = persons.filter((person) => search.toLowerCase() === person.name.toLowerCase());
    if(searchResult != null) {
      setPersons(searchResult)
    }else{
      setPersons(persons)
    }
  }
  // validate if the name already is the book

  function checkUserName (name) {
    const newEntry = persons.some(newPerson => newPerson.name === name);
    console.log(newEntry)
    if(newEntry) {
      window.confirm(`${name} has already been added to the phonebook`);
    }else {
      const newPerson = {
        name: newName,
        number: number
      }
      addPerson(newPerson).then(response => {
      setPersons(persons.concat(response.data))
      setNumber("")
    })

    }
  }

// checks for name change
  const handleChange =(e)=> {
    return setNewName(e.target.value)
  }

  // Checks for number change
  const handleNumber = (e) => {
    return setNumber(e.target.value)
  }

  // Handles Changes in Form Search
  const handleSearch = (e) => {
    return setSearch(e.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>

      <SearchForm handleSearch={handleSearch} search={search} handleSearchForm={handleSearchForm} />

    <h2>Add a new user</h2>
      <AddNumberForm
        newName={newName}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        number={number}
        handleNumber={handleNumber}
      />

      <h2>Numbers</h2>
      <Persons personsData={persons}/>
    </div>
  )
}

export default App
