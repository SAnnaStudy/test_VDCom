import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Main from './pages/Main'
import Auth from './pages/Auth'
import Calendar from './pages/Calendar'
import Project from './pages/Project'
import { ErrorURLPage } from './pages/ErrorURLPage';
import  Sidebar from './components/Sidebar';

function App() {
  return (
        <Routes>
          <Route path='/' element={<Auth/>}/>
          <Route path='/main' element={<Main/>}/>
          <Route path='/calendar' element={<Calendar/>}/>
          <Route path='/project' element={<Project/>}/>
          <Route path='*' element={<ErrorURLPage/>}/>
        </Routes>

  )
}

export default App;
