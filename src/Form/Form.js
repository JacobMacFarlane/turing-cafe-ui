import React, {useState } from "react";

const Form = ({props}) => {
    const [name, setName] = useState('')
    const [date, setDate] = useState('')
    const [time, setTime] = useState('')
    const [guests, setGuests] = useState(0)

    const clearInputs = () => {
        setDate('')
        setName('')
        setTime('')
        setGuests(0)
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
console.log(newRez, 'in form')
props(newRez)
clearInputs()
}

    return (
            <form>
                <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    value={name}
                    onChange={event => setName(event.target.value)}
                    />
                    <input
                    type="text"
                    placeholder="Date (mm/dd)"
                    name="date"
                    value={date}
                    onChange={event => setDate(event.target.value)}
                    />
                     <input
                    type="text"
                    placeholder="Time"
                    name="time"
                    value={time}
                    onChange={event => setTime(event.target.value)}
                    />
                     <input
                    type="number"
                    placeholder="Number of Guests"
                    name="guests"
                    value={guests}
                    onChange={event => setGuests(event.target.value)}
                    />
                    <button onClick={submitRez}></button>
            </form>
    )
}

export default Form