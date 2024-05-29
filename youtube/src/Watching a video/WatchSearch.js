import React from "react";
import './Video.css';

function WatchSearch() {
    return (
        <div className="search-bar flex-grow-1 d-flex justify-content-center">
            <input type="text" className="form-control" placeholder="Search" style={{ maxWidth: '400px' }} />
        </div>
    );
}

export default WatchSearch;