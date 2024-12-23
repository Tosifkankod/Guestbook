import './App.css'
import Entries from './components/Entries/Entries';
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'
import { Route, Routes } from 'react-router-dom';
import CreateEntry from './components/CreateEntry/CreateEntry'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/entries' element={<Entries />} />
        <Route path='/entries/new' element={<CreateEntry />} />
      </Routes>
      <Footer />

    </>
  )
}

export default App
