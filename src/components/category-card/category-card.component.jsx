import React from 'react';
import './category-card.style.scss';
import { withRouter } from  'react-router-dom';

const CategoryCard = ({title, desc, count, imageUrl, linkUrl, history}) => {
    return (  
        <div className='category-card' onClick={() => history.push(`${linkUrl}`)}>
            <div className='category-img-container'>
                <img src={imageUrl} alt="case-studies-x-category-img" className='category-img'/>
            </div>
            <div className='category-caption'>
                <p className='caption-title'>{title}</p>
                <p className='caption-desc'>{desc}</p>
            </div>
            <div className='category-footer'>
                <span className='category-footer-text'>{count} лекции</span>
            </div>
        </div>
    );
}
 
export default withRouter(CategoryCard);