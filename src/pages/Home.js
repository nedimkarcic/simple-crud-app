import React from 'react';
import { Link } from 'react-router-dom'
import './Home.css';

export default function Home() {
    return(
        <>
            <Link to="/form">
                <div className='button'>UPIŠI SE</div>
            </Link>
        </>
    )
}