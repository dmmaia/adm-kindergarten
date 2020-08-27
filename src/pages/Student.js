import React from 'react';
import StudentRegister from '../components/StudentRegister';

export default function Student() {

    function displayLoginBox(){
        var elementLoginBox = document.getElementById('boxLogin');
        elementLoginBox.classList.toggle('dontDisplay');
      }

    return (
        <>
            <button class="btn" onClick={displayLoginBox}>Cadastrar Novo Aluno</button>
            <StudentRegister />
        </>
    )
}
