import React from 'react';
import './components.css';

export default function StudentRegister() {

    function displayLoginBox(){
        var elementLoginBox = document.getElementById('boxLogin');
        elementLoginBox.classList.toggle('dontDisplay');
      }

    return (
        <form className= "registerBox dontDisplay" id="boxLogin">

            <div className="closeButton " onClick={displayLoginBox}>
                <div className="first"/>
                <div className="second"/>
            </div>

            <label></label>
            <input type="text" />
            <label></label>
            <input type="text" />
            <label></label>
            <input type="text" />
            <label></label>
            <input type="text" />
            <label></label>
            <input type="text" />
        </form>
    )
}
