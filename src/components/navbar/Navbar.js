import React, {useState} from 'react';
import './Navbar.css';
import Button from "../button/Button";

const Navbar = () => {
    const [activeTab, setActiveTab] = useState('Home');

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };

    return (
        <nav className={"navbar"}>
            <ul className="navbar-menu">
                {['Home', 'Pages', 'Services', 'Case Study', 'Blog', 'Contact'].map((tab) => (
                    <li
                        key={tab}
                        className={`nav-item ${activeTab === tab ? 'active' : ''}`}
                        onClick={() => handleTabClick(tab)}
                    >
                        {tab}
                    </li>
                ))}
            </ul>
            <Button text="Get a Quote"/>
        </nav>
    );
};

export default Navbar;
