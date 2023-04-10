import { NavLink } from "react-router-dom";
import "./NavBar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function NavBar({ id }) {
    const handleGithubClick = () => {
        window.open('https://github.com/tapiocaba', '_blank');
      };
    
      const handleLinkedinClick = () => {
        window.open('https://www.linkedin.com/in/lisazzlin', '_blank');
      };

    return (
        <div id={id}>
            <nav className="navbar">
                <NavLink className="nav-item" to="/">home</NavLink>
                {id === "navbar-side" && <br />}
                <NavLink className="nav-item" to="/about">about</NavLink>
                {id === "navbar-side" && <br />}
                <NavLink className="nav-item" to="/projects">projects</NavLink>
                {id === "navbar-side" && <br />}
                <NavLink className="nav-item" to="/journal">journal</NavLink>
                {id === "navbar-side" && <br />}
                <NavLink className="nav-item" to="/resume">resume</NavLink>
                {id === "navbar-side" && <br />}
            </nav>
            
            <div className="social-icons">
                <FontAwesomeIcon icon={faGithub} className="icon" onClick={handleGithubClick} />
                <FontAwesomeIcon icon={faLinkedin} className="icon" onClick={handleLinkedinClick} />
            </div>
        </div>
    );
}

export default NavBar;