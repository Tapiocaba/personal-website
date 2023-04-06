import { NavLink } from "react-router-dom";
import "./NavBar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function NavBar() {
    const handleGithubClick = () => {
        window.open('https://github.com/tapiocaba', '_blank');
      };
    
      const handleLinkedinClick = () => {
        window.open('https://www.linkedin.com/in/lisazzlin', '_blank');
      };

    return (
        <div>
            <nav>
                <NavLink to="/">home</NavLink> <br />
                <NavLink to="/about">about</NavLink> <br />
                <NavLink to="/projects">projects</NavLink> <br />
                <NavLink to="/journal">journal</NavLink> <br />
                <NavLink to="/resume">resume</NavLink> <br />
            </nav>
            
            <div className="social-icons">
                <FontAwesomeIcon icon={faGithub} className="icon" onClick={handleGithubClick} />
                <FontAwesomeIcon icon={faLinkedin} className="icon" onClick={handleLinkedinClick} />
            </div>
        </div>
    );
}

export default NavBar;