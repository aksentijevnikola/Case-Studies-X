import React, { useContext } from 'react';
import './toggle-button.style.scss'
import {CardsContext} from '../../context/Context'

const ToggleButton = () => {
    const {toggleState, setToggleState} = useContext(CardsContext)
    return (  
            <label className="toggle-control" >
                <input type="checkbox" checked={toggleState} onChange={()=> setToggleState(!toggleState)}/>
                <span className="control"></span>
            </label>
    );
}
 
export default ToggleButton;