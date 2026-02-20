import './register-page.css'
import {Link} from 'react-router'
import {PasswordInput} from '../passwordInput/passwordInput'
import Apple from '../../assets/svg/Apple.svg?react'
import Facebook from '../../assets/svg/Facebook.svg?react'
import Google from '../../assets/svg/Google.svg?react'
export function RegisterPage(){

    return(
        <div className="register-container">
            <div className="title-container" >
                <h1 className="heading">Create Account</h1>
                <p className="paragraph">Create an account so you can explore all the existing jobs</p>
            </div>

            <div className="input-container">
                <input className="form-input" placeholder="Email"/>
                <PasswordInput 
                    placeholder='Password'
                />
                <PasswordInput 
                    placeholder='Confirm Password'
                />
            </div>



            <button className="btn solid thin">Sign up</button>

            <Link to="/login" >Already have an account</Link>

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