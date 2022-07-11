import './App.css';
import Cursor from './components/Cursor/Cursor';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';

function App() {
    return (
        <div className="App">
            <Header />
            <Main />
            <Footer />
            <Cursor />
        </div>
    );
}

export default App;
