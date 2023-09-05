import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='loginDiv'>
            <h1>LOGIN</h1>
            <form className='loginForm'>
                <label htmlFor='USERNAME'>USERNAME</label>
                <input className='inputSubmit' id='USERNAME' name='USERNAME' type='text'></input>
                <label htmlFor='PASSWORD'>PASSWORD</label>
                <input className='inputSubmit' id='PASSWORD' name='PASSWORD' type='password'></input>
                <button className='inputSubmit'>SUBMIT</button>
            </form>

        </div>
    )
}
export default Login