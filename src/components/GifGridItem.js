import React from 'react'

export const GifGridItem = ({ title, url }) => {

    console.log(title, url);

    return (
        <div className="card animate__bounceInDown">
            <img src={url} alt={title} />
            <p>{title}</p>
        </div>
    )
}
