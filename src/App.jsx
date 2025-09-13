import './App.css'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './Pages/Home'
import Service from './Pages/Service'
import About from './Pages/About'
import Contact from './Pages/Contact'



function App() {
 
  return (
    
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/services" element={<Service/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
      <Footer/>
    </Router> 
  
  );
}

export default App
