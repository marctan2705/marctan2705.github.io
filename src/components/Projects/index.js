import classes from "./projects.module.css"

import { useState } from "react"
import SongData from "../SongData"
import Page1 from "./Page1"
import list from "./List"
function Projects(props) {

    const [page, setPage] = useState(1);
    const [project, setProject] = useState(false)
    // console.log(project)
    return ( 
        <div ref={props.ref3} className={classes.page}>
            {page === 1 ? 
            <>
            <Page1 handleClick={()=>{setPage(2)}} setHover={setProject} setProject = {setProject}/>
            </> : <SongData project={list[project]} handleClick = {() =>setPage(1)}/>}
            {/* <div className={classes.title}>
                Projects
            </div> */}

        </div>
     );
}

export default Projects;