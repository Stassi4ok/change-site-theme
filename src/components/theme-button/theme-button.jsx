import {useState, useEffect} from 'react'
import './theme-button.css'
export function ThemeButton(){
    const [toggled, setToggle] = useState(false);

    const [theme, setTheme] = useState("light");

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prev => prev === "light" ? "dark" : "light");
        setToggle(!toggled)
    };
    return(
        <button
            className={`toggle-btn ${toggled ? 'toggled' : ''}`}
            onClick={()=> toggleTheme()}
        >
            <div className="thumb"></div>
        </button>
    );
}