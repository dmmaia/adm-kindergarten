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

            <label>Nome:</label>
            <input type="text" />
            <label>Nascimento:</label>
            <input type="date" />
            <label>Mãe: </label>
            <input type="text" />
            <label>Pai: </label>
            <input type="text" />
        </form>
    )
}
