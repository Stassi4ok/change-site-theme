import './login-page.css'
import {Link} from 'react-router'
import Apple from '../../assets/svg/Apple.svg?react'
import Facebook from '../../assets/svg/Facebook.svg?react'
import Google from '../../assets/svg/Google.svg?react'
import {PasswordInput} from '../passwordInput/passwordInput'

export function LoginPage(){

    return(
        <div className="login-container">
            <div className="title-container" >
                <h1 className="heading">Login here</h1>
                <p className="paragraph">Welcome back you’ve been missed!</p>
            </div>

            <div className="input-container">
                <input className="form-input" placeholder="Email"/>
                
                <PasswordInput 
                    placeholder='Password'
                />
            </div>
            
            

            <p className="blue">Forgot your password?</p>

            <button className="btn solid thin">Sign in</button>

            <Link to="/register" >Create new account</Link>

            <div className="align-center">
                <p className="blue">Or continue with</p>
                <div className='icon-container'>
                    <div className="icon-box">
                        <Google  />
                    </div>
                    <div className="icon-box">
                        <Facebook />
                    </div>
                    <div className="icon-box">
                        <Apple />
                    </div>
                </div>
            </div>
        </div>
    );
}