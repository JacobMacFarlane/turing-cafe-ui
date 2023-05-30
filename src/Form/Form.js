import React, {useState } from "react";
import './Form.css';
const Form = ({props}) => {
    const [name, setName] = useState('')
    const [date, setDate] = useState('')
    const [time, setTime] = useState('')
    const [guests, setGuests] = useState('')

    const clearInputs = () => {
        setDate('')
        setName('')
        setTime('')
        setGuests('')
    }

    const submitRez = (event) => {
        event.preventDefault()
    const newRez = {
        id: Date.now(),
        name,
        date,
        time,
        guests
}
props(newRez)
clearInputs()
}

    return (
            <form className="newRez">
                <input
                className="form-item input"
                    type="text"
                    placeholder="Name"
                    name="name"
                    value={name}
                    onChange={event => setName(event.target.value)}
                    />
                    <input
                    className="form-item input"
                    type="text"
                    placeholder="Date (mm/dd)"
                    name="date"
                    value={date}
                    onChange={event => setDate(event.target.value)}
                    />
                     <input
                     className="form-item input"
                    type="text"
                    placeholder="Time"
                    name="time"
                    value={time}
                    onChange={event => setTime(event.target.value)}
                    />
                     <input
                     className="form-item input"
                    type="text"
                    placeholder="Number of Guests"
                    name="guests"
                    value={guests}
                    onChange={event => setGuests(event.target.value)}
                    />
                    <button className="button-7" onClick={submitRez}>Submit Reservation</button>
            </form>
    )
}

export default Form