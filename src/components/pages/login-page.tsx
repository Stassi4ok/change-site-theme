import './login-page.css'
import {Link} from 'react-router'

export function LoginPage(){

    return(
        <div className="login-container">
            <div className="title-container" >
                <h1 className="heading">Login here</h1>
                <p className="paragraph">Welcome back you’ve been missed!</p>
            </div>

            <div className="input-container">
                <input className="form-input" placeholder="Email"/>
                <input className="form-input" placeholder="Password"/>
            </div>

            <p>Forgot your password?</p>

            <button className="btn solid thin">Sign in</button>

            <Link to="/register" >Create new account</Link>
        </div>
    );
}