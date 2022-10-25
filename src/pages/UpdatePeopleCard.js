import React, { useState, useId, useEffect } from 'react';
import './ScrapbookForm.css';
import { Link } from 'react-router-dom'

export default function ScrapbookForm() {
    const id = useId()
    const [name, setName] = useState('')
    const [city, setCity] = useState('')
    const [fruit, setFruit] = useState('')
    const [animal, setAnimal] = useState('')
    const [moto, setMoto] = useState('')

    const setData = () => {
        localStorage.setItem('ID', id);
        localStorage.setItem('Name', name);
        localStorage.setItem('City', city);
        localStorage.setItem('Fruit', fruit);
        localStorage.setItem('Animal', animal);
        localStorage.setItem('Moto', moto);
    }

    useEffect(() => {
        setName(localStorage.getItem('Name'))
        setCity(localStorage.getItem('City'))
        setFruit(localStorage.getItem('Fruit'))
        setAnimal(localStorage.getItem('Animal'))
        setMoto(localStorage.getItem('Moto'))
     }, []);

    return(
        <>
            <h1>SPOMENAR</h1>
            <form>
                <label htmlFor={id + "-name"}></label>
                <input type="text" id={id + "-name"} name="name" value={name} placeholder='Ime i prezime' required onChange={(e) => setName(e.target.value)} maxLength="20"></input>
                <label htmlFor={id + "-city"}></label>
                <input type="text" id={id + "-city"} name="city" value={city} placeholder='Grad' required onChange={(e) => setCity(e.target.value)}></input>
                <label htmlFor={id + "-fruit"}></label>
                <input type="text" id={id + "-fruit"} name="fruit" value={fruit} placeholder='Najdraže voće' required onChange={(e) => setFruit(e.target.value)}></input>
                <label htmlFor={id + "-animal"}></label>
                <input type="text" id={id + "-animal"} name="animal" value={animal} placeholder='Najdraža životinja' required onChange={(e) => setAnimal(e.target.value)}></input>
                <label htmlFor={id + "-moto"}></label>
                <input type="text" id={id + "-moto"} name="moto" value={moto} placeholder='Životni moto' required onChange={(e) => setMoto(e.target.value)}></input>

                <Link to="/people"><button type='submit' className='submit-button' onClick={setData}>IZMIJENI</button></Link>
            </form>
        </>
    )
}