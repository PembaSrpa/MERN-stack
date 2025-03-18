import React from 'react'

const Button = ({text, colour}) => {
    return (
        <button style={{backgroundColor: '${colour}'}} className='hover:underline p-2 px-4 rounded-md border-1'>{text}</button>
    )
}

export default Button