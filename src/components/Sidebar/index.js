import classes from "./sidebar.module.css"
import logo from "../../Assets/Group 1.png"
import Resume from "../../Assets/Marcus Tan - SWE Resume.pdf"
function Sidebar(props) {
    return ( 
        <div className={classes.sidebar}>
            <img className={classes.logo} src = {logo} />
            <div className={classes.options}>
                <a className={classes.option} onClick={props.handleClick}>
                    Home
                </a>
                <a className={classes.option} onClick={props.handleClick2}>
                    About
                </a>
                <a className={classes.option} onClick={props.handleClick3}>
                    Experience
                </a>
                <a className={classes.option} href="https://drive.google.com/file/d/1X4xNSUdZGlYMpDPd5qmK-Vg8XH8D747i/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                    Resume
                </a>
            </div>
        </div>
     );
}

export default Sidebar;