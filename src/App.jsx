// == Base:
import React from 'react'
import { Routes, Route } from 'react-router-dom'
// == Styles:
import './App.scss'
// == Components:
import Header from './components/Header/Heade'
import SidebarContainer from './components/Sidebar/SidebarContainer'
import ProfileContainer from './components/Main/Profile/ProfileContainer'
import UsersContainer from './components/Main/Users/UsersContainer'
import DialogsContainer from './components/Main/Dialogs/DialogsContainer'
import Footer from './components/Footer/Footer'

export default function App() {

  return (
    <div className="app">
      <Header />
      <SidebarContainer />
      <main className='app__main'>
        <Routes>
          <Route path='/*' element={<ProfileContainer />} />
          <Route path='/dialogs/*' element={<DialogsContainer />} />
          <Route path='/users' element={<UsersContainer />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}