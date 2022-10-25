import React from 'react';
import PeopleCard from '../components/PeopleCard';
import NewCard from '../components/NewCard';
import './PeopleList.css';



export default function PeopleList() {
    return(
        <>
            <div className='cards'>
                <PeopleCard 
                    name = "Solomon Bičakčić"
                    city = "Baščaršija"
                    fruit = "Drina sarajevska"
                    animal = "Labud"
                    moto = "Napravi razliku!"
                />
                <PeopleCard 
                    name = "Mima Šiš"
                    city = "Haj-nehaj"
                    fruit = "Trešnja"
                    animal = "Srna"
                    moto = "Samo hrabro!"
                />
                <PeopleCard 
                    name = "Semir Osmanagić"
                    city = "Visoko"
                    fruit = "Jagoda"
                    animal = "Zmija"
                    moto = "Nevjerovali ili da!"
                />
                <PeopleCard 
                    name = "Max Verstappen"
                    city = "Monte Carlo"
                    fruit = "Mango"
                    animal = "Bik"
                    moto = "Red Bull daje ti krila!"
                />
                {
                localStorage.length > 0 &&
                <NewCard
                    name = {localStorage.getItem('Name')}
                    city = {localStorage.getItem('City')}
                    fruit = {localStorage.getItem('Fruit')}
                    animal = {localStorage.getItem('Animal')}
                    moto = {localStorage.getItem('Moto')}
                    update = "IZMIJENI"
                    delete = "OBRIŠI"
                />
                }
            </div>
        </>
    )
}