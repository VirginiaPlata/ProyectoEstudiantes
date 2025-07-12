import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import StudentList from './components/StudentList'
import StudentCreate from './components/StudentCreate'
import StudentUpdate from './components/StudentUpdate'
import StudentDelete from './components/StudentDelete'

import './App.css' // Asegúrate de tener este archivo

function App() {
  return (
    <Router>
      <div className="container">
        <nav className="navbar">
          <h1>Gestión de Estudiantes</h1>
          <div className="nav-links">
            <Link to="/">Lista</Link>
            <Link to="/create">Crear</Link>
            <Link to="/update">Actualizar</Link>
            <Link to="/delete">Eliminar</Link>
          </div>
        </nav>

        <main className="content">
          <Routes>
            <Route path="/" element={<StudentList />} />
            <Route path="/create" element={<StudentCreate />} />
            <Route path="/update" element={<StudentUpdate />} />
            <Route path="/delete" element={<StudentDelete />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
