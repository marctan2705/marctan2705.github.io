import nftuc from "../../Assets/NFTUC.png"
import car from "../../Assets/car.png"
import Fundergrad from "../../Assets/fundergrad.png"
import ss from "../../Assets/ss.png"
import Excelerate from "../../Assets/Excelerate.png"
import parku from "../../Assets/parku.png"


const list = [
    {
        name : "ParkU",
        role:"Frontend Developer & Product Manager",
        link: "https://parku-cz2006.web.app/",
        image: parku,
        color: "linear-gradient(rgba(256, 256, 256, 0.5),rgb(0,0,0,0), black)",
        description: "ParkU is a web application designed to help users streamline the process of finding parking lots in Singapore. With ParkU, users can find parking lots with available lots, distance from desired location, directions to desired parking lot, and directions from desired parking lots to location of interest. This project was developed on the MERN stack, and I served as a Frontend Developer cum Product Manager, developing the user interface, integrating GoogleMaps APIs, and managing the product roadmap and agile processes.",
        tech: [
            {
                name: "MongoDB",
                type: "Database"
            },
            {
                name: "ExpressJS",
                type: "API Framework"
            },
            {
                name: "ReactJS",
                type: "Frontend"
            },
            {
                name: "NodeJS",
                type: "Environment"
            }
        ]
    },
    {
        name : "NFTUC",
        role:"Frontend Developer & Product Manager",
        image: nftuc,
        color: "linear-gradient(#EC8FAB,rgb(0,0,0,0), black)",
        link: "https://github.com/joellje/BlockchainInnovationPitch",
        description: "NFTUC is a web3 voucher ecosystem where users can mint vouchers from different companies. Vouchers are NFTs built on ERC721 contracts and we integrated it using packages such as EtherJS and Web3JS.",
        tech: [
            {
                name: "Web3JS",
                type: "Framework"
            },
            {
                name: "EtherJS",
                type: "Framework"
            },
            {
                name: "ReactJS",
                type: "Frontend"
            },
            {
                name: "ERC721",
                type: "Smart Contract"
            }
        ]
    },
    {
        name : "Fundergrad",
        role:"Frontend Developer",
        image: Fundergrad,
        link: "https://github.com/WB99/fundergrad-frontend/tree/master/",
        color: "linear-gradient(rgba(56, 135, 185, 1),rgb(0,0,0,0), black)",
        description: "Frontend prototype of a crowdfunding platform for less fortunate Singaporeans. The goal of this project is to promote inclusion by getting richer members of society to fund the education of those of a lower SES. Built on ReactJS",
        tech: [
            {
                name: "ReactJS",
                type: "Frontend"
            }
        ]
    },
    {
        name : "Secret Shop",
        role:"Frontend Developer & Product Manager",
        link: "https://github.com/secret-shop-sg/main",
        image: ss,
        color: "linear-gradient(#f9434d,rgb(0,0,0,0), black)",
        description: "E-commerce platform for users to buy/sell, rent and trade videogames. Users can look for video games they are interested in, and make offers for transactions, rental and trade. I was responsible for developing the frontend and managing product direction and workflows.",
        tech: [
            {
                name: "MongoDB",
                type: "Database"
            },
            {
                name: "ExpressJS",
                type: "API Framework"
            },
            {
                name: "ReactJS",
                type: "Frontend"
            },
            {
                name: "NodeJS",
                type: "Environment"
            }
        ]
    },
    {
        name : "Excelerate (In progress)",
        role:"Full Stack Developer & Product Manager",
        image:Excelerate,
        color: "linear-gradient(rgba(256, 256, 256, 0.5),rgb(0,0,0,0), black)",
        link: "https://parku-cz2006.web.app/",
        description: "Platform for users to share their internship experiences, resumes, interview tips with other users. I am currently developing the entire website from scratch using a MERN framework. This project is still in progress.",
        tech: [
            {
                name: "MongoDB",
                type: "Database"
            },
            {
                name: "ExpressJS",
                type: "API Framework"
            },
            {
                name: "ReactJS",
                type: "Frontend"
            },
            {
                name: "NodeJS",
                type: "Environment"
            }
        ]
    }

]

export default list