import { useState } from "react";

export function Login() {
    const [login, setLogin] = useState('');
    const [key, setKey] = useState('');

    const handleOnClick = () => {
        if (!login || !key) {
            console.log('usuario ou senha invalida')
        } else {
            console.log(login, key)
        }
    }

    const clearFilds = () => {
        setLogin('');
        setKey('');
        console.log('limpou...')
    }

    return (
        <div>
            <label htmlFor="">Usuário</label>
            <input type="text" placeholder="Usuário" onChange={ (e) => setLogin(e.target.value) }/>

            <label htmlFor="">Senha</label>
            <input type="text" placeholder="Senha" onChange={ (e) => setKey(e.target.value) }/>

            <button onClick={handleOnClick}>Entrar</button>
            <button onClick={ () => clearFilds()}>limpar</button>
        </div>
    )
}