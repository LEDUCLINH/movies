import React from 'react'
import './Button.scss'

export default ({ onGoback }) => {
    return (
        <button className="goback" onClick={onGoback}>Back</button>
    )
}  