import React from 'react';
import './collection-card.style.scss'

const CollectionCard = ({ id, title, date, desc, linkUrl }) => {
    return (
        <a href={linkUrl} rel="noopener noreferrer" target='_blank'>
            <div className='collection-card'>
                <p className='collection-card-title'><span><span className='lecture-number'>{id}#</span> {title}</span> <span className='lecture-date'>{date}</span> </p>
                <p className='collection-card-desc'>{desc}</p>
            </div>
        </a>
    );
}

export default CollectionCard;