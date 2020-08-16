import React, { useContext, useEffect } from 'react';
import './lectures-collection.style.scss';
import { CardsContext } from '../../context/Context';
import CollectionCard from './collection-card/collection-card.component';




const LecturesCollection = ({ match }) => {
    const { createCollection, currentCollection } = useContext(CardsContext)
    useEffect(() => {
        createCollection(match.params, true);
    },[])
    return (
        <div className='lectures-collection'>
            <div className='lectures-container'>
                {currentCollection.lectures ? currentCollection.lectures.map(({ id, ...otherCardProps }) =>
                    <CollectionCard key={id} id={id} {...otherCardProps} />
                ) : <img src='/img/loading-icon.gif' className='loading-icon' alt='loading gif icon' />}
            </div>

            <div className='lectures-info-container'>
                {currentCollection ? 
                <div className='lectures-info'>
                    <p className='lectures-info-title'>{currentCollection.title}</p>
                    <p className='lectures-info-desc'>{currentCollection.desc}</p>
                    <a href='https://brainster.co' target='_blank' rel="noopener noreferrer" className='lectures-info-btn'>Повеќе <i className="fas fa-arrow-right"></i></a>
                </div> 
                : "" }
            </div>
        </div>

    );
}

export default LecturesCollection;