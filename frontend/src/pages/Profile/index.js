import React from 'react';
import { Link } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';
import './styles.css';

import logoImg from '../../assets/logo.svg'

export default function Profile() {
    return(
        <div className="profile-container">
            <header>
                <img src={ logoImg } alt="Be The Hero" />
                <span>Bem vindo</span>

                <Link className="button" to="/incidents/new">Cadastrar Novo Caso</Link>
                <button type="button">
                    <FiPower size={18} color="#e02041" />
                </button>
            </header>

            <h1>Casos Cadastrados</h1>

            <ul>
                <li>
                    <strong>Caso:</strong>
                    <p>Caso Teste 1</p>

                    <strong>Descrição:</strong>
                    <p>Descrição detalhada do caso teste 1.</p>

                    <strong>Valor:</strong>
                    <p>R$125,00</p>

                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8b3" />
                    </button>
                </li>
                
                <li>
                    <strong>Caso:</strong>
                    <p>Caso Teste 2</p>

                    <strong>Descrição:</strong>
                    <p>Descrição detalhada do caso teste 2.</p>

                    <strong>Valor:</strong>
                    <p>R$255,00</p>

                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8b3" />
                    </button>
                </li>
                
                <li>
                    <strong>Caso:</strong>
                    <p>Caso Teste 3</p>

                    <strong>Descrição:</strong>
                    <p>Descrição detalhada do caso teste 3.</p>

                    <strong>Valor:</strong>
                    <p>R$225,00</p>

                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8b3" />
                    </button>
                </li>
                
                <li>
                    <strong>Caso:</strong>
                    <p>Caso Teste 4</p>

                    <strong>Descrição:</strong>
                    <p>Descrição detalhada do caso teste 4.</p>

                    <strong>Valor:</strong>
                    <p>R$155,00</p>

                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8b3" />
                    </button>
                </li>
            </ul>
        </div>
    );
}