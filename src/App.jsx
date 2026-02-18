import {HomePage} from './components/pages/home-page'
import {LoginPage} from './components/pages/login-page'
import {Routes, Route} from 'react-router'
import './App.css'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={'asss'} />
      </Routes>
      
      
      

    
    </>
  )
}

export default App
