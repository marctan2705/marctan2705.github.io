import classes from "./projects.module.css"
import car from "../../Assets/car.png"
import mountain from "../../Assets/mountain.png"
import play from "../../Assets/Group 6.png"
import shopee from "../../Assets/Shopee.png"
import treehouse from "../../Assets/treehouse.jpg"
import rsm from "../../Assets/Group 8.png"
import ga from "../../Assets/global-angle.jpg"
import esg from "../../Assets/image 8.png"
import bloomberg from "../../Assets/bloomberg.jpg"
import nftuc from "../../Assets/NFTUC.png"
import Fundergrad from "../../Assets/fundergrad.png"
import ss from "../../Assets/ss.png"
import Excelerate from "../../Assets/Excelerate.png"
import parku from "../../Assets/parku.png"
import list from "./List"


import { useState } from "react"
function Page1(props) {
    const [isHovering, setIsHovering] = useState(false);
    return ( 
    <div className={classes.list}>
        <p className={classes.newhits}>Popular projects</p>
        <div className={classes.row}>
            <div className={classes.song} onMouseOver={() => {props.setProject(0); setIsHovering(1)}} onMouseLeave={() => {setIsHovering(0)}} onClick={props.handleClick}>
                <div className={classes.artname}>
                <img className={classes.art} src={parku} ></img>
                <div className={classes.name}>ParkU</div>
                </div>

            {isHovering == 1 ? <a href={list[isHovering - 1].link}><img src={play} className={classes.play}/> </a>: null}
            </div>
            <div className={classes.song} onMouseOver={() => {props.setProject(1); setIsHovering(2)}} onMouseLeave={() => {setIsHovering(0)}} onClick={props.handleClick}>
                <div className={classes.artname}>
                <img className={classes.art} src={nftuc} ></img>
                <div className={classes.name}>NFTUC</div>
                </div>

                {isHovering == 2 ? <a href={list[isHovering - 1].link}><img src={play} className={classes.play}/> </a>: null}
            </div>
        </div>
        <div className={classes.row}>
           <div className={classes.song} onMouseOver={() => {props.setProject(2); setIsHovering(3)}} onMouseLeave={() => {setIsHovering(0)}} onClick={props.handleClick}>
                <div className={classes.artname}>
                <img className={classes.art} src={Fundergrad} ></img>
                <div className={classes.name}>Fundergrad</div>
                </div>

                {isHovering == 3 ? <a href={list[isHovering - 1].link}><img src={play} className={classes.play}/> </a>: null}
            </div>
           <div className={classes.song} onMouseOver={() => {props.setProject(3); setIsHovering(4)}} onMouseLeave={() => {setIsHovering(0)}} onClick={props.handleClick}>
                <div className={classes.artname}>
                <img className={classes.art} src={ss} ></img>
                <div className={classes.name}>Secret Shop</div>
                </div>

                {isHovering == 4 ? <a href={list[isHovering - 1].link}><img src={play} className={classes.play}/> </a>: null}
            </div>
        </div>
        <div className={classes.row}>
           <div className={classes.song} onMouseOver={() => {props.setProject(4); setIsHovering(5)}} onMouseLeave={() => {setIsHovering(0)}} onClick={props.handleClick}>
                <div className={classes.artname}>
                <img className={classes.art} src={Excelerate} ></img>
                <div className={classes.name}>Excelerate (In Progress)</div>
                </div>

                {isHovering == 5 ? <a href={list[isHovering - 1].link}><img src={play} className={classes.play}/> </a>: null}
            </div>
            <div className={classes.song2} onMouseOver={() => {props.setProject(4); setIsHovering(4)}} onMouseLeave={() => {setIsHovering(0)}} onClick={props.handleClick}>
            </div>
        </div>
        <p className={classes.newhits}>Industry Experience</p>
        <div className={classes.row2}>
            <div className={classes.industry}>
                    <img className={classes.industryPicture} src={shopee} />
                    <img className={classes.industryPictureMini} src={shopee} />
                <div className={classes.industryTitle}>
                    Product Management Intern
                </div>
                <div  className={classes.industrySubTitle}>
                    Shopee
                    <div>May 2022 - Aug 2022</div>
                </div>
            </div>
            <div className={classes.industry}>
                <img className={classes.industryPicture} src={treehouse} />
                <img className={classes.industryPictureMini} src={treehouse} />
                <div className={classes.industryTitle}>
                    Product Management/ Data Intern
                </div>
                <div  className={classes.industrySubTitle}>
                    Treehouse Finance
                    <div>Feb 2022 - Apr 2022</div>
                </div>
            </div>
            <div className={classes.industry}>
                <img className={classes.industryPicture} src={rsm} />
                <img className={classes.industryPictureMini} src={rsm} />

                <div className={classes.industryTitle}>
                    Restructuring & Liquidation Intern
                </div>
                <div  className={classes.industrySubTitle}>
                    RSM
                    <div>May 2022 - Aug 2022</div>
                </div>
            </div>
        </div>
        <div className={classes.row2}>
            <div className={classes.industry}>
            <img className={classes.industryPicture} src={ga} />
                <img className={classes.industryPictureMini} src={ga} />
                <div className={classes.industryTitle}>
                    Management Consultancy Intern
                </div>
                <div  className={classes.industrySubTitle}>
                    Global Angle/ AAIC
                    <div>May 2022 - Aug 2022</div>
                </div>
            </div>
            <div className={classes.industry}>
                <img className={classes.industryPicture} src={esg} />
                <img className={classes.industryPictureMini} src={esg} />
                <div className={classes.industryTitle}>
                    Technology Intern
                </div>
                <div  className={classes.industrySubTitle}>
                    Enterprise Singapore Group
                    <div>May 2022 - Aug 2022</div>
                </div>
            </div>
            <div className={classes.industry}>
            <img className={classes.industryPicture} src={bloomberg} />
                    <img className={classes.industryPictureMini} src={bloomberg} />
                <div className={classes.industryTitle}>
                    Bloomberg Market Concepts
                </div>
                <div  className={classes.industrySubTitle}>
                    Bloomberg
                    <div>Certificate</div>
                </div>
            </div>
        </div>
    </div> 
    );
}

export default Page1;