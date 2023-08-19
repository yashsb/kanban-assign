import React from 'react'
import '../../App.css'

function Item({ data, color }) {
    return (
        <div className="item" style={{borderTop: `4px solid ${color}` }}>
        <div >{data.id}</div>
        <div><br></br></div>
        <div>{data.title}</div>
        <div><br></br></div>
        </div>
    )
}

export default Item;
