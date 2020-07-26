import React, { useContext} from 'react';
import './lectures.style.scss';
import { CardsContext } from '../../context/Context'
import CategoryCard from '../category-card/category-card.component';
const Lectures = () => {
    const { initialCards, filterButtons, toggleLecturesFilter, lecturesFilter} = useContext(CardsContext)

    return (  
    
        <div className='lectures'>
            <p className='lectures-title'>Филтрирај по категорија</p>
            <div className='lectures-filters'>
                {filterButtons.map(button => {
                    return(
                    <button
                    key={button.id}
                    className={`filter-btn ${(lecturesFilter.activeBtn === button.label && lecturesFilter.active === true) ? ' active-filter' : ''}`}
                    onClick={toggleLecturesFilter}
                    value={button.label}>
                    {button.label}
                    </button>
                    )
                })}
            </div>
            <div className='lectures-menu'>
                {lecturesFilter.activeBtn === 'СИТЕ' ? initialCards.map(({id, ...otherCardProps}) => <CategoryCard key={id} {...otherCardProps}/>) 
                 : lecturesFilter.activeCard.map(({id, ...otherCardProps}) => <CategoryCard key={id} {...otherCardProps}/>)}
            </div>
        </div>
    );
}
 
export default Lectures;