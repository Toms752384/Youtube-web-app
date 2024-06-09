import React, { useState } from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Video.css';
import FloatingMenu from './FloatingMenu';

function IconsLeft() {
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
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg" alt="YouTube Logo" />
            <FloatingMenu isOpen={isMenuOpen} onClose={handleMenuToggle} />
        </div>
    );
}

export default IconsLeft;