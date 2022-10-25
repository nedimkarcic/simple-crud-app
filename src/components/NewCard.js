import React from 'react';
import './NewCard.css';
import { Link } from 'react-router-dom'

export default function NewCard(props) {

    const onDelete = () => {
        localStorage.clear();
        let card = document.querySelector('.new-card');
        card.remove();
    }

    return(
        <>
            <div className='new-card'>
                <p>{props.name}</p><hr></hr>
                <p>{props.city}</p><hr></hr>
                <p>{props.fruit}</p><hr></hr>
                <p>{props.animal}</p><hr></hr>
                <p>{props.moto}</p><hr></hr>
                <Link to="/update"><p className='edit-button'>{props.update}</p></Link>
                <p onClick={onDelete} className='delete-button'>{props.delete}</p>
            </div>
        </>
    )
}