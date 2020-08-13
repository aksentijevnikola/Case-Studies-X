import React, { useContext } from 'react';
import './sign-up.style.scss'
import {CardsContext} from '../../context/Context'

const SignUp = () => {
    const {toggleForm,setToggleForm} = useContext(CardsContext)
    
    return (
        
        <div className="modal-bg-opacity">
            <div className={`modal ${toggleForm ? 'modal-slide-in' : ''}`}>
                <div className="modal-title">
                    <p className="title-text">Пријави се</p>
                    <i className="fa fa-times-circle form-close" aria-hidden="true" onClick={()=> setTimeout(function(){ setToggleForm(false) }, 400)}></i>
                </div>
                <form>
                    <div className="form-group">
                        <div className="label-container">
                            <label htmlFor="name">Име и Презиме (задолжително)</label>
                            <label htmlFor="warning" className="name-warning warning">Внесете Име и Презиме</label>
                        </div>
                        <input type="text" htmlFor="name" className="join-name-input" placeholder="Внесете Име и Презиме" />
                    </div>
                    <div className="form-group">
                        <div className="label-container">
                            <label htmlFor="company">Eмаил Адреса (задолжително)</label>
                            <label htmlFor="warning" className="email-warning warning">Внесете Eмаил Адреса</label>
                        </div>
                        <input type="mail" htmlFor="email" className="join-email-input" placeholder="Внесете ја вашата Емаил адреса"/>
                    </div>
                    
                    <div className="form-buttons">
                        <button className="form-close" onClick={() => setToggleForm(false)}>ИСКЛУЧИ</button>
                        <button className="form-send join-form-submit"><i className="fa fa-arrow-right" aria-hidden="true"></i> ИСПРАТИ ФОРМA</button>
                    </div>
                </form>
            </div>
        </div>
     );
}
 
export default SignUp;