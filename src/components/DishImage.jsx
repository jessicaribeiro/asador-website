import React from 'react';

function DishImage({order, src, name}) {
    return (
        <figure className={`gallery__item gallery__item--${order}`}>
            <img src={src} className="gallery__img"
                 alt={name}/>
        </figure>
    );
}

export default DishImage;