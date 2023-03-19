import Header from './components/Header';
import Footer from './components/Footer';
// import { Routes, Route, Link } from 'react-router-dom';
import Gallery from './components/Gallery';

import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/App.css';


function App() {
  return (
    <div className="parent-container">
      <Header />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
