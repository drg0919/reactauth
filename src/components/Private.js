import React from 'react'

export const Private = () => {
    return (
        <div>
            <h2>This is a private route 1, you are authenticated</h2>
        </div>
    )
}

export const Protected = () => {
    return (
        <div>
            <h2>This is a private route 2, you are authenticated</h2>
        </div>
    )
}