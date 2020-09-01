import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header className="mainHeader">
            <ul>
                <li><Link to="/alunos" className= "linkHeader" >Alunos</Link></li>
                <li><Link to="/funcionarios" className= "linkHeader" >Funcionários</Link></li>
                <li><Link to="/biblioteca" className= "linkHeader" >Biblioteca</Link></li>
                <li><Link to="/contratos" className= "linkHeader" >Contratos</Link></li>
                <li><Link to="/contas" className= "linkHeader" >Contas</Link></li>
            </ul>
        </header>
    )
}
