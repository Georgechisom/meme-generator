import React from "react"

function Star(props) {
    const starIcon = props.isFilled ? <box-icon name='star' onClick="toggleFavorite" className="card-star" size="xs"></box-icon> : <box-icon type='solid' name='star' color="hsl(43, 88%, 46%)" size="xs"></box-icon>
    return (
        <div onClick={props.handleClick}>{starIcon}</div>
    )
}

export default Star;