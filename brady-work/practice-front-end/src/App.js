import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Axios from 'axios'


import Person from './components/Person'
import Mouse from './components/Mouse'

import { TextField, Button } from '@mui/material'

function App() {

  const [people, setPeople] = useState([])
  const [mice, setMice] = useState([])
  const [minWeight, setMinWeight] = useState(0)
  const [maxWeight, setMaxWeight] = useState(100000)

  useEffect(() => {
    Axios.get('http://localhost:9001/person')
      .then(res => {
        setPeople(res.data)
      })
      .catch(err => console.error('THERE WAS AN ERROR: ', err))
  }, [])

  const getMice = () => {
    Axios.post('http://localhost:9001/parts/mouse', {
      "dimensions": {
        "weight": {
          "min": minWeight,
          "max": maxWeight
        }
      }
    })
      .then(res => {
        setMice(res.data)
      })
      .catch(err => console.error('THERE WAS AN ERROR: ', err))
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        Min weight: <TextField onChange={(event) => setMinWeight(event.target.value)} />
        Max weight: <TextField onChange={(event) => setMaxWeight(event.target.value)} />
        <Button onClick={getMice}>Get em</Button>
        <br />
        {
          mice.map(mouse => (
            <Mouse key={mouse.MODEL} {...mouse} />
          ))
        }
        {
          people.map(
            (person) => (
              <Person
                key={person.name}
                name={person.name}
                favoriteColor={person.favoriteColor}
                height={`6'0"`}
              />
            )
          )
        }
      </header>
    </div>
  );
}

export default App;
