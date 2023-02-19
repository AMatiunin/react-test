import Header from "./Header";
import {useState} from "react";
import '../styles/edit.css'

export default function Edit() {
    const initialPersons = [
        {
            name: 'John',
            city: 'New-York',
            age: 20
        },
        {
            name: 'Alex',
            city: 'Kiev',
            age: 30
        },
        {
            name: 'Kate',
            city: 'Paris',
            age: 24
        }
    ]

    let [persons, setPersons] = useState([...initialPersons])
    const [input, setInput] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInput(values => ({...values, [name]: value}))
    }

    function handleSubmit(event) {
        event.preventDefault();
        setPersons([...persons, input])
    }

    function removePerson(index) {
        setPersons(persons.filter((_, i) => i !== index))
    }

    return (
        <div className='block-initial'>
            <Header/>
            <div className='edit-page'>Here is persons! Remember, they stores in variable, so after refresh all changes
                gone
                <form onSubmit={handleSubmit} className='edit-persons'>
                    <div className='input-field'>Enter new person name:
                        <input className='form-control'
                               type="text"
                               name="name"
                               value={input.name || ""}
                               onChange={handleChange}
                        />
                    </div>
                    <div className='input-field'>City of the person:
                        <input className='form-control'
                               type="text"
                               name="city"
                               value={input.city || ""}
                               onChange={handleChange}
                        />
                    </div>
                    <div className='input-field'>Age:
                        <input className='form-control'
                               type="number"
                               name="age"
                               value={input.age || ""}
                               onChange={handleChange}
                        />
                    </div>
                    <div className='input-field'>
                        <button type="submit" className='btn input-field btn-success'>Add</button>
                    </div>
                </form>

                <div className="show-persons">
                    {
                        persons.map((person, index) => (
                            <div className='person' key={index}>
                                <div className='person-data'>{person.name}, city: {person.city}, age: {person.age}</div>
                                <button onClick={() => removePerson(index)} className="btn btn-danger">remove</button>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
