import React from 'react'

export default function Module({ name, completion, icon}) {
    return (
        <div className='d-flex'>
            <div>
                {icon}
            </div>
            <div>
                <p>{name}</p>
                <small>Completion</small>
                <small>{completion}</small>
            </div>
        </div>
    )
}