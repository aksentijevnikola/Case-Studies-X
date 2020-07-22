import React from 'react';
import './showcase.style.scss';

const Showcase = () => {
    return (
        <div className='showcase'>
            <p className='showcase-title'>Приклучи се на 1350 ентузијасти и учи дигитални вештини.</p>
            <p className='showcase-title'>Бесплатно.</p>
            <form>
                <input type="text" placeholder="Емаил Адреса" className='showcase-input' />
                <button className='showcase-btn'>Пријави Се</button>
            </form>
            <p className='showcase-caption'>Можеш да се вклучиш во листата на ентузијасти во секое време!</p>
        </div>
    );
}

export default Showcase;