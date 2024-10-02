import React from 'react'

export const Card = ({ name, email }) => {
    return (
        <div className="shadow-md rounded-lg w-80 border bg-slate-50 p-8 text-center">
            <h1 className="text-2xl font-bold text-slate-800">
                {name}
            </h1>
            <p className="text-lg text-slate-600">
                {email}
            </p>
        </div>
    )
}
