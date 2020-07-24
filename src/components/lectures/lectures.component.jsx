import React, { useContext } from 'react';
import './lectures.style.scss';
import { CardsContext } from '../../context/Context'
import CategoryCard from '../category-card/category-card.component';
const Lectures = () => {
    const { initialCards } = useContext(CardsContext)
    return (  
        <div className='lectures'>
            <p className='lectures-title'>Филтрирај по категорија</p>
            <div className='lectures-filters'>
                <span className='filter-btn'>СИТЕ</span>
                <span className='filter-btn'>ДИЗАЈН</span>
                <span className='filter-btn'>МАРКЕТИНГ</span>
                <span className='filter-btn'>ПРОГРАМИРАЊЕ</span>
                <span className='filter-btn'>БИЗНИС</span>
                <span className='filter-btn'>UX/UI</span>
                <span className='filter-btn'>DATA SCIENCE</span>
            </div>
            <div className='lectures-menu'>
                {initialCards.map(({id, ...otherCardProps}) => {
                    return(
                        <CategoryCard key={id} {...otherCardProps}/>
                    )
                })}
            </div>
        </div>
    );
}
 
export default Lectures;