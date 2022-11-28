import React from 'react'
import MainPage from './MainPage'
import Notes from './Notes'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'


export default function App() {
  return (

    <Router>
        <Routes>
            <Route exact path='/' element={<MainPage />} />
            <Route exact path='/notes' element={<Notes />} />
        </Routes>
    </Router>

    // <>
    //   <MainPage />
    //   <Notes />
    // </>
  )
}
