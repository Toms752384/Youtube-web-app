import React from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Video.css';

function WatchSearchBar() {
    return (
        <div className="search-bar flex-grow-1 d-flex justify-content-center align-items-center">
            <input type="text" className="form-control" placeholder="Search" style={{ maxWidth: '400px' }} />
            <button className="btn btn-outline-secondary ml-2">
                <i className="bi bi-search"></i>
            </button>
        </div>
    );
}

export default WatchSearchBar;
