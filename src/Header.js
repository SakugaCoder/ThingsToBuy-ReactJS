import React from 'react'
import { Link } from 'react-router-dom';
import './Header.css';

 class Header extends React.Component {
    render() {
        return (
            <header>
                <nav>
                    <ul>
                        <li><Link to="new-item">New item</Link></li>
                        <li><Link to="">Things to buy</Link></li>
                        <li><Link to="wikipedia-api-form">Wikipedia search</Link></li>
                    </ul>
                </nav>
            </header>
        )
    }
}

export default Header;
