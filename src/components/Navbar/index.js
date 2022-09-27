import classes from "./navbar.module.css"
import logo from "../../Assets/Group 1.png"
function Navbar() {
    return ( 
        <>
        <div className={classes.navbar}>
            <img className={classes.logo} src={logo} />
        </div>
        </>
     );
}

export default Navbar;