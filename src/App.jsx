import {HomePage} from './components/pages/home-page'
import {Routes, Route} from 'react-router'
import './App.css'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={'aaa'} />
        <Route path="/register" element={'asss'} />
      </Routes>
      
      
      

    
    </>
  )
}

export default App
