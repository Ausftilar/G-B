import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Product from './components/Product';
import Contact from './components/Contact';
import { Routes, Route } from 'react-router-dom';

function App() {
    return (
        <>
            <Header/>
            <Routes>
                <Route to="/" component={Home}/>
                <Route to="/product" component={Product}/>
                <Route to="/about" component={About}/>
                <Route to="/contact" component={Contact}/>
                {/* <Navigate to="/" /> */}
            </Routes>
            <Footer/>
        </>
    );
}

export default App;
