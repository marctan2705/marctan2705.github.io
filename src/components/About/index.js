import classes from "./about.module.css"
import album from "../../Assets/album.jpg"
import mountain from "../../Assets/image 5.png"
import berke from "../../Assets/berke.png"
import { useEffect, useState } from "react";
function About(props) {
    const [pic, setpic] = useState(0)
    return ( 
        <div ref={props.ref2} className={classes.page}>
            <div className={classes.header}>
                About
            </div>
            <div className={classes.about}>
                {pic === 0 ? 
                <div className={classes.lyrics}>
                <h1 className={classes.h1}>My vibe</h1>
                <div> I am an outgoing and sociable person, and I love meeting new people and having exchanges ranging from light hearted banters to deep, thought provoking talks.
                </div>
                <div> I also love being dynamic, be it solving problems or interacting with people, and I enjoy diving into unfamiliar environments and learning to swim!
                </div>
                <div> Despite my affinity to interactions, however, I enjoy finding the balance between being a thinking and a feelings person. I often find myself finding the balance between logic and people to create working environments where everyone can thrive as individuals and a team.
                </div>
                </div> : pic === 1 ? <div className={classes.lyrics}>
                <h1 className={classes.h1}> My work ethic</h1>
                <div>I am an individual passionate about the tech industry! Whether it be product management, development, or strategy, I take great pride in creating user-centric products that have a strong impact.</div>
                <div>I have a diverse plate of experiences, ranging from traditional management consultancy at boutique consultancy firms to product management and development at exciting tech startups to product management at large corporations. Through these experiences, I have developed a keen sense of product and strategy, and also a strong technical foundation in software/data engineering.</div>
                <div>I have a strong sense of responsibility and take great pride in the things I do! But most importantly, I work extremely well regardless of the team I am in. I thrive in dynamic environments and love working with a variety of people!</div>
                </div> :  null
                }
                
                <div className={classes.pinkbox} >
                    {
                        pic == 0 ? <img onClick={() => {setpic((pic + 1)%2)}} className={`${classes.album} ${pic == 0 ? classes.fadeIn : classes.fadeOut}`} src = {album}></img>
                        :
                        pic == 1 ? <img onClick={() => {setpic((pic + 1)%2)}} className={`${classes.album1} ${pic == 1 ? classes.fadeIn : classes.fadeOut}`} src = { mountain} /> : null
                        // : <img onClick={() => {setpic((pic + 1)%3)}}className={`${classes.album2} ${pic == 2 ? classes.fadeIn : classes.fadeOut}`} src = { berke} />
                        
                    }
                </div>
            </div>
        </div>
     );
}

export default About;