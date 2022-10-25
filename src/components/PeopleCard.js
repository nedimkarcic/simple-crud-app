import React from 'react';
import './PeopleCard.css';

export default function PeopleCard(props) {
    return(
        <>
            <div className='people-card'>
                <p>{props.name}</p><hr></hr>
                <p>{props.city}</p><hr></hr>
                <p>{props.fruit}</p><hr></hr>
                <p>{props.animal}</p><hr></hr>
                <p>{props.moto}</p><hr></hr>
            </div>
        </>
    )
}