import React from 'react'

function Button(props) {
    return (
        <div>
            <button type={props.type} onClick={props.method} className='sideButtons mt-8 w-full p-2 bg-yellow-200 rounded' >{props.name}</button>
        </div>
    )
}

export default Button
