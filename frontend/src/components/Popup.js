import React from 'react'
import './Popup.css'
import FoodSubmitForm from "./FoodSubmitForm";

function Popup(props) {
  return (props.trigger) ? (
    <div className='popup bgs'>
        <div className='popup-inner'>
            <button className='close-btn btn bgs' onClick={() => props.setTrigger(false)}>X</button>
            {/* <h1>adding a meal</h1> */}
            <FoodSubmitForm setTrigger={props.setTrigger}/>
        </div>
    </div>
  ) : "";
}

export default Popup
