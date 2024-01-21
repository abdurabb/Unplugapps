import React from 'react'

function Button(props) {
    return (
        <div>
            <button onClick={props.method} className='sideButtons bg-yellow-200 rounded' >{props.name}</button>
        </div>
    )
}

export default Button
