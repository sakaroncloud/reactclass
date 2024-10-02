import React from 'react'

export const DecreaseButton = ({ counter, setCounter }) => {
    return (
        <button onClick={() => setCounter(counter - 1)} className="px-4 py-2 bg-red-500 text-white rounded-lg">Decrease</button>
    )
}
