import '../App.css'
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className="App-header bg-dark text-reset">
           <h1><Link to="/">Home</Link></h1>
        </header>
    );
}

export default Header;