import './register-page.css'
import {Link} from 'react-router'
export function RegisterPage(){

    return(
        <div className="register-container">
            <div className="title-container" >
                <h1 className="heading">Create Account</h1>
                <p className="paragraph">Create an account so you can explore all the existing jobs</p>
            </div>

            <div className="input-container">
                <input className="form-input" placeholder="Email"/>
                <input className="form-input" placeholder="Password" />
                <input className="form-input" placeholder="Confirm Password" />
            </div>



            <button className="btn solid thin">Sign up</button>

            <Link to="/login" >Already have an account</Link>
        </div>
    );

}