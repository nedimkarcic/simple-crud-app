import React, { useState } from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom'

export default function Sidebar() {

	const [isOpened, setIsOpened] = useState(false);

	
	const handleToggle = () => {
		setIsOpened(isOpened => !isOpened);
	}

    return(
        <>
            <ul className='nav'>
                <Link to="/"><li>SPOMENAR</li></Link>
                <li className='burger-button' onClick={handleToggle}>|||</li>
            </ul>
            <ul className={isOpened ? "show-sidebar" : "hide-sidebar"}>
                <Link to="/"><li>Početna</li></Link>
                <Link to="/form"><li>Upiši se</li></Link>
                <Link to="/people"><li>Upisani</li></Link>
                <Link to="#"><li>Kontakt</li></Link>
            </ul>
        </>
    )
}