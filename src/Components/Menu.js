import React, {useState} from 'react';
import { slide as HMenu } from 'react-burger-menu';
import "../App.css";

function MyCustomIcon({ isOpen, setIsOpen }) {
    const rotation = isOpen ? 90 : 0;

    return <img src={"./menu.png"} style={{transform: `rotate(${rotation}deg)`, transition: 'transform 0.2s ease-in-out'}} onClick={() => setIsOpen(!isOpen)} className={"img-btn"} />
}

function Menu() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <HMenu customCrossIcon={false} isOpen={isOpen} onStateChange={({isOpen})=> setIsOpen(isOpen)} customBurgerIcon={<MyCustomIcon isOpen={isOpen} setIsOpen={setIsOpen}/>}>
            <a className="bm-item amiri midtext mt-3 mt-md-4 pt-4 mx-1 mx-sm-2" href="/">
                Home
            </a>
            <a className="bm-item amiri midtext mx-1 mx-sm-2" href="/searchplanet">
                Planets
            </a>
            <a className="bm-item amiri midtext mx-1 mx-sm-2" href="/about">
                About
            </a>
        </HMenu>
    );
}

export default Menu;






