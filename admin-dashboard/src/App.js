import './App.css';
import Slidebar from './Components/Slidebar';
import { Routes,Route } from 'react-router-dom';
import Home from './Components/Home'
import Navbar from './Components/Navbar';


function App() {
  return (
    
    <div className="App">
    <Navbar/>

    <Routes>
      <Route path='/' index element={<Slidebar />} />
    </Routes>
    

      <Routes>
        <Route path='/home' index element={<Home />} />   
    </Routes>
  
    </div>
  );
}

export default App;
