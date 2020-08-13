import React, {useContext} from 'react';
import './category-card.style.scss';
import { withRouter } from  'react-router-dom';
import { CardsContext } from '../../../context/Context'
const CategoryCard = ({title, desc, count, imageUrl, linkUrl, history}) => {
    const {toggleState} = useContext(CardsContext);
    const toggleCard = {
        width: 'calc(100%)',
        margin: '10px 0'
    };
        
    return (  
        <div className='category-card' style={!toggleState ? toggleCard : null} onClick={() => history.push(`${linkUrl}`)}>
            {
                toggleState ? <div className='category-img-container'>
                                <img src={imageUrl} alt="case-studies-x-category-img" className='category-img'/>
                              </div>
                : ""
            }
            
            <div className='category-caption' style={!toggleState? {padding: '20px'}: null}>
                <p className='caption-title'>{title}</p>
                <p className='caption-desc'>{desc}</p>
            </div>
            <div className={!toggleState ? 'category-footer-toggle' : 'category-footer'}>
                <span className='category-footer-text'>{count} лекции</span>
            </div>
        </div>
    );
}
 
export default withRouter(CategoryCard);