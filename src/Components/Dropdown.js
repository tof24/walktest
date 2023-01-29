import React, { useState } from 'react';
import './../App.css';
function Dropdown({ onSelect }) {
    const [selectedOption, setSelectedOption] = useState('option1');

    return (
        <select className="custom-dropdown text-white" value={selectedOption}  onChange={e => {
            setSelectedOption(e.target.value);
            onSelect(e.target.value); // call the callback function
        }}>
            <option value="story">Story</option>
            <option value="closer">Closer</option>
            <option value="further">Further</option>
        </select>
    );
}

export default Dropdown;