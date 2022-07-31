import '../App.css'
import { Link } from 'react-router-dom';

// Header for the App

function Header() {
    return (
        <header className="navbar navbar-expand-lg navbar-dark bg-dark">
           <h1><Link to="/deltax-assignment">Home</Link></h1>
        </header>
    );
}

export default Header;