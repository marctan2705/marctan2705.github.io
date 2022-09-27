import classes from "./SongData.module.css"
import car from "../../Assets/car.png"
import mtan from "../../Assets/mtan.jpeg"
import heart from "../../Assets/heart.png"
import playgreen from "../../Assets/playgreen.png"
import download from "../../Assets/download.png"
import back from "../../Assets/Group 7.png"
function SongData(props) {
    const project = props.project;
    var i = 0;
    return ( 
        <div className={classes.data} style={{background: project.color}}>
            <div className={classes.backrow}>
            <img src = {back} className={classes.back} onClick={props.handleClick}/>
            </div>
            <div className={classes.info}>
                <img className={classes.img} src={project.image}></img>
                <div className={classes.header}>
                    <div className={classes.subheader}>Project</div>
                    <div className={classes.title}>
                        {project.name}
                    </div>
                    <div className={classes.artist}>
                        <span ><img className={classes.dp} src={mtan}></img></span> &nbsp;  Marcus • 2021 • {project.role}
                    </div>
                    
                </div>
            </div>
            <div className={classes.bar}>
                <a href={project.link}><img className={classes.mainimage} src={playgreen} /></a>
                <img className={classes.ld} src={heart} />
                <img className={classes.ld} src={download} />
            </div>
            <div className={classes.description}>
            {project.description}
            </div>
            <div className={classes.bar2}>
                <div className={classes.first}>#</div>
                <div className={classes.subsequent}>Technology</div>
                <div className={classes.subsequent}>Type</div>
            </div>
            <hr className={classes.barhr}></hr>
            {
                project.tech.map(
                    (e) => {
                        i = i + 1
                        return(
                            <div className={classes.row}>
                            <div className={classes.first}>{i}</div>
                            <div className={classes.subsequent}>{e.name}</div>
                            <div className={classes.subsequent}>{e.type}</div>
                            </div>
                        )
                    }
                )
            }
        
        </div>
     );
}

export default SongData;