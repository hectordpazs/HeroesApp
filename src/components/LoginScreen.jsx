import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../actions/auth';
import { useForm } from '../hooks/useForm';


export const LoginScreen = () => {

    const [values, handleInputChange] = useForm({name:''});
    const {name} = values;

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = (e)=>{
        e.preventDefault();
        if (name.length> 2){
            localStorage.setItem('user', name);
            dispatch(login(name))
            navigate('/marvel', {replace:true})
        }else{
            navigate('/login')
        }
    }

    return (
        <div className='container mt-5 w-75'>
            <h1>Login</h1>
            <hr />

            <form>
            <input 
                name='name' 
                onChange={handleInputChange} 
                className="form-control w25" 
                placeholder="Type your name to login"
                autoComplete='off'
            />
            <button
                className='btn btn-primary w-100 mt-2'
                onClick={handleLogin}
            >
                Login
            </button>
            </form>

            
        </div>
    )
}
