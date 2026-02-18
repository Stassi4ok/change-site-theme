import image from "../../assets/image.png";
import {Link} from "react-router"
import "./home-page.css"
export function HomePage(){

    return(
        <div className="home-container">
            <img className="home-img" src={image} alt="Home" />
            <div>
                <h1 className="heading">Discover Your Dream Job here</h1>
            <p className="paragraph">Explore all the existing job roles based on your interest and study major</p>
            </div>
            
            <div className="btn-container">
                <Link to="/login"><button className="btn solid">Login</button></Link>
                <Link to="/register"><button className="btn">Register</button></Link>    
            </div>
            
        </div>
    );
}
