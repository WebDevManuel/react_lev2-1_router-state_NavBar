import './App.css';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Galerie from './pages/Galerie';
import Kontakt from './pages/Kontakt';
import Speisekarte from './pages/Speisekarte';

function App() {
    return (
        <div className="App">
            <h1>Restaurant</h1>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/galerie' element={<Galerie />} />
                <Route path='/kontakt' element={<Kontakt />} />
                <Route path='/speisekarte' element={<Speisekarte />} />
            </Routes>
        </div>
    );
};

export default App;
