import React, { Component, useState, useEffect } from 'react';
import Main from '../Main/Main';
import Form from '../Form/Form';
import './App.css';

const App = () => {
  const [reservations, setReservations] = useState([])

  const fetchReservations = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/v1/reservations')
      if (response.ok) {
        let data = await response.json()
        setReservations(data)
      } else {
        throw new Error()
      } 
    }
    catch (error){
      console.error(error)
    }
  }
  useEffect(() => {
    fetchReservations()
  }, [])
  
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <Form />
        </div>
        <div className='resy-container'>
          <Main props={reservations}/>
        </div>
      </div>
    )
}

export default App;
