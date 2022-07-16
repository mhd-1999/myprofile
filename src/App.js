import { useEffect, useRef, useState } from 'react';
import './App.css';
import Cursor from './components/Cursor/Cursor';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import { gsap } from 'gsap';
function App() {
    const loadRef = useRef();
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000)
        return () => clearTimeout(timer)
    }, [])
    if (loading) {
        return <div id="preloader">
        </div>
    }
    return (
        <div className="App">

            <Header />
            <Main />
            <Footer />
            <Cursor />
        </div >
    );
}

export default App;
