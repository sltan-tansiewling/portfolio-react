import React from 'react';
import './App.css';
import Nav from './components/Nav';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

class App extends React.Component {

    render() {

        return (
            <div className="App">
                <Nav />
                <About />
                <Portfolio />
                <Contact />
                <Footer />
            </div>
        );
    }
}

export default App;
