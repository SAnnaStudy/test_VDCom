import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'
import './../styles/auth.scss'
import {Icon} from 'react-icons-kit'
import {eyeOff} from 'react-icons-kit/feather/eyeOff'
import {eye} from 'react-icons-kit/feather/eye'

function Auth(){
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [loginFalse, setLoginFalse] = useState('')
    const [passwordFalse, setPasswordFalse] = useState('')
    const [loginError, setLoginError] = useState('login cannot be empty')
    const [passwordError, setPasswordError] = useState('password cannot be empty')
    const[formValid, setFormValid] = useState(false)
    const [icon, setIcon] = useState(eyeOff)
    const [type, setType] = useState('password')
   
    useEffect(() => {
        if(loginError || passwordError){
            setFormValid(false)
        }
        else setFormValid(true)
    }, [loginError, passwordError])
    const loginHandler = (e) => {
        setLogin(e.target.value)
        const re = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
        if(!re.test(e.target.value)){
            setLoginError("login must have minimum 8 characters, at least 1 letter and number")
        }
        else setLoginError('')
    }
    const passwordHandler = (e) => {
        setPassword(e.target.value)
        const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/
        if(!re.test(e.target.value)){
            setPasswordError("password must have minimum 8 characters, at least 1 uppercase and lowercase letter and number")
        }
        else setPasswordError('')
    }
    const blurHandler = (e) => {
        switch (e.target.name){
            case 'login':
                setLoginFalse(true)
                break
            case 'password':
                setPasswordFalse(true)
            break
        }
    }
    const iconHandler = () => {
        if(type == 'password'){
            setIcon(eye)
            setType('text')
        }
        else{
            setIcon(eyeOff)
            setType('password')
        }
    }
    return (
        <div className='auth'>
            <div className='auth_container'>
                <p className='auth_logo'>LOGO</p>
                <div className='auth_form'>
                    <form>
                        <h2 className='auth_name'>Welcome To CRM System Sign In To Your Account</h2>
                        <label htmlFor="login">login</label>
                        <div className='auth_inputGroup1'>
                            <input className='auth_input' onChange={e => loginHandler(e)} value={login} onBlur={e => blurHandler(e)} id="login" type='text' name="login" placeholder='my_login'/>    
                            {(loginFalse && loginError) && <div style={{color:'darkred', fontSize:'11px', pointerEvents: 'none'}}>{loginError}</div>}
                        </div>
                        <div className='auth_inputGroup2'>
                            <label htmlFor="password">password</label>
                            <div className='auth_inputField'>
                                <input onChange={e => passwordHandler(e)} className='auth_input' value={password} onBlur={e => blurHandler(e)} id="password" type={type} name="password" placeholder='*********'/>
                            <span onClick={iconHandler} style={{ cursor: 'pointer'}}><Icon icon={eyeOff}/></span>
                            </div>
                            {(passwordFalse && passwordError) && <div style={{color:'darkred', fontSize:'11px', pointerEvents: 'none'}}>{passwordError}</div>}
                        </div>
                        {
                            formValid ?
                            <Link to="/main" style={{ textAlign: 'center', textDecoration: 'none', paddingTop: '5px'}} className='auth_button'>SIGN IN</Link>
                            :
                            <button style={{background: 'gray'}} disabled className='auth_button'>SIGN IN</button>

                        }
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Auth;