import React, { useState } from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Video.css';
import FloatingMenu from './FloatingMenu';
import logo from './logo.png';

function IconsLeft({currentUser, handleSignOut, defualtUser}) {
    //floating menu state
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (
        <div className="d-flex align-items-center">
            <i
                className="bi bi-list text-white mr-3"
                style={{ fontSize: '1.5rem', cursor: 'pointer' }}
                onClick={handleMenuToggle}
            ></i>
            <img src={logo} alt="YouTube Logo" />
            <FloatingMenu isOpen={isMenuOpen} onClose={handleMenuToggle} currentUser={currentUser} defualtUser={defualtUser} handleSignOut={handleSignOut}/>
        </div>
    );
}

export default IconsLeft;