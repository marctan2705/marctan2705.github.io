import classes from "./Playbar.module.css"
import play from "../../Assets/Play.png"
import prev from "../../Assets/prev.png"
import mtan from "../../Assets/mtan.jpeg"
import { useEffect, useState } from "react"
function Playbar() {
    const [scrollPosition, setScrollPosition] = useState(0);
    const handleScroll = () => {
        const position = window.pageYOffset;
        const height = document.documentElement.scrollHeight - window.innerHeight;
        setScrollPosition(Math.floor(100 * position / height))
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return ( 
        <div className={classes.playbar}>
            <div className={classes.album}>
                <img className={classes.art} src={mtan} />
                <div className={classes.info}>
                    <div className={classes.song}>
                        My Story
                    </div>
                    <div className={classes.artist}>
                        Tan Song Huang, Marcus
                    </div>
                </div>
            </div>
            <div className={classes.player}>
                <div className={classes.top}>
                    <img className={classes.prev} src={prev} />
                    <img className={classes.play} src={play} />
                    <img className={classes.next} src={prev} />
                </div>
                <div className={classes.tracker}>
                    <div className={classes.trackbar}>
                        <div className={classes.progressbar} style={{width: `${scrollPosition}%`}}></div>
                    </div>

                </div>
            </div>
            
            <div className={classes.additional}>
                Made with ❤️ ~ by Marcus
            </div>
        </div>
     );
}

export default Playbar;