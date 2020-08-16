import React, {useContext, useState} from 'react';
import './sign-up.style.scss'
import {CardsContext} from '../../context/Context'


const SignUp = () => {
    const emailRegex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    const {toggleForm, slideUp, handleFormClose, signUpName, signUpEmail, setSignUpName, setSignUpEmail} = useContext(CardsContext)
    const [showNameWarning, setShowNameWarning] = useState(false)
    const [showEmailWarning, setShowEmailWarning] = useState(false)
    const handleSignUpSubmit = (e) => {
        e.preventDefault()
        if(emailRegex.test(signUpEmail) && signUpName !== '') {
            alert('congratulations you successfully signed up')
            setShowNameWarning(false);
            setShowEmailWarning(false);
        } else{
            if(signUpName === '') {
                setShowNameWarning(true);
            } else {
                setShowNameWarning(false);
            }
            if(!emailRegex.test(signUpEmail)){
                setShowEmailWarning(true);
            } else {
                setShowEmailWarning(false);
            }
        }
    }
    return (
        
        <div className="modal-bg-opacity">
            <div className={`modal ${toggleForm ? 'modal-slide-in' : ''} ${slideUp ? 'modal-slide-out' : ''}`}>
                <div className="modal-title">   
                    <p className="title-text">Пријави се</p>
                    <i className='fa fa-times-circle form-close' aria-hidden="true" onClick={handleFormClose}></i>
                </div>
                <form>
                    <div className="form-group">
                        <div className="label-container">
                            <label htmlFor="name">Име и Презиме (задолжително)</label>
                            <label htmlFor="warning" style={showNameWarning ? {display: 'block'} : {display: 'none'}} className="name-warning warning">Внесете Име и Презиме</label>
                        </div>
                        <input type="text" htmlFor="name" className="join-name-input" onChange={(e) => setSignUpName(e.target.value)} value={signUpName} placeholder="Внесете Име и Презиме" />
                    </div>
                    <div className="form-group">
                        <div className="label-container">
                            <label htmlFor="company">Eмаил Адреса (задолжително)</label>
                            <label htmlFor="warning" style={showEmailWarning ? {display: 'block'} : {display: 'none'}} className="email-warning warning">Внесете Eмаил Адреса</label>
                        </div>
                        <input type="mail" htmlFor="email" className="join-email-input" onChange={(e) => setSignUpEmail(e.target.value)} value={signUpEmail} placeholder="Внесете ја вашата Емаил адреса"/>
                    </div>
                    
                    <div className="form-buttons">
                        <button className="form-close" onClick={handleFormClose}>ИСКЛУЧИ</button>
                        <button className="form-send join-form-submit" onClick={handleSignUpSubmit}><i className="fa fa-arrow-right" aria-hidden="true"></i> ИСПРАТИ ФОРМA</button>
                    </div>
                </form>
            </div>
        </div>
     );
}
 
export default SignUp;