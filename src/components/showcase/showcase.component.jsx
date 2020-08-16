import React, { useContext} from 'react';
import './showcase.style.scss';
import {CardsContext} from '../../context/Context'

const Showcase = () => {
    const {setSignUpEmail, signUpEmail, setToggleForm} = useContext(CardsContext);
    return (
        <div className='showcase'>
            <p className='showcase-title'>Приклучи се на 1350 ентузијасти и учи дигитални вештини.</p>
            <p className='showcase-title'>Бесплатно.</p>
            <form>
                <input type="text" onChange={(e) => setSignUpEmail(e.target.value)} value={signUpEmail} placeholder="Емаил Адреса" className='showcase-input' />
                <div className='showcase-btn'onClick={() => setToggleForm(true)}>Пријави Се</div>
            </form>
            <p className='showcase-caption'>Можеш да се вклучиш во листата на ентузијасти во секое време!</p>
        </div>
    );
}

export default Showcase;