import React, { useState } from 'react'

export default function Validation() {
    const [val, setVal] = useState('')
    const [err, setErr] = useState(false)
    const [texts, setTexts] = useState([])
    function handleChange(e) {
        setVal(e.target.value)
        if (e.target.value.trim() === '' ||
            e.target.value.length < 5 ||
            !e.target.value.match(/.*[A-Z].*/g)) {
            setErr(true)
        }
        else {
            setErr(false)

        }
    }
    const handleClick = () => {
        setTexts([...texts, val])
        setVal("")
    }
    return (
        <>
            <input
                value={val}
                onChange={(e) => handleChange(e)}
                type='text'
            />
            <p style={{ color: 'red', visibility: !err && 'hidden' }}>input can not be empty</p>
            <button disabled={err} onClick={handleClick}>Add</button>
            <ul>
                {
                    texts.map((elem, key) => (
                        <li key={key}>{elem}</li>
                    ))
                }
            </ul>
        </>
    )
}