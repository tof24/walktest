import React, { useState } from 'react';
import './../App.css';
function Dropdown({ onSelect }) {
    const [selectedOption, setSelectedOption] = useState('option1');

    return (
        <select className="custom-dropdown text-white" value={selectedOption}  onChange={e => {
            setSelectedOption(e.target.value);
            onSelect(e.target.value); // call the callback function
        }}>
            <option value="all">All</option>
            <option value="terrestrial">Terrestrial</option>
            <option value="gas">Gas Giant</option>
        </select>
    );
}

export default Dropdown;