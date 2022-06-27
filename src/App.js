import './App.css';
import Banner from './components/Banner';
import Cursor from './components/Cursor/Cursor';
import Header from './components/Header';
import Main from './components/Main';

function App() {
    return (
        <div className="App">
            <Header />
            <Main />
            <Cursor />
        </div>
    );
}

export default App;
