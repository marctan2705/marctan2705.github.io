import classes from "./sidebar.module.css"
import logo from "../../Assets/Group 1.png"
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
                    Projects
                </a>
            </div>
        </div>
     );
}

export default Sidebar;