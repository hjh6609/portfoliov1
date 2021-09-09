import React from 'react'
import ImageOne from '../images/weather-app.jpg';
import ImageTwo from '../images/gallery.jpg';
import { Link } from 'react-router-dom'


const Portfolio = () => {
    return (
        <>
        <div className="portfolio"> {/*  bg-green-100 */ }
            <img src={ImageOne} alt="" className="h-full rounded 
            mb-20 shadow" />
            <div className="center-content font-bold">
                <h2 className="text-2xl mb-2">
                    Weather-App
                </h2>
                <p className="mb-2">
                    React &nbsp; html &nbsp; CSS 
                </p>
                <span className="pro-button">
                    <strong><Link to="https://weather-app-react-ebon.vercel.app/">View Site</Link></strong>
                </span>
                <span className="pro-button">
                    <strong><Link to="https://github.com/hjh6609/weather-re-act">View Github</Link></strong>
                </span>
            </div>
        </div>

        <div className="portfolio"> {/*  bg-green-100 */ }
            <img src={ImageTwo} alt="" className="h-full rounded 
            mb-20 shadow" />
            <div className="center-content font-bold">
                <h2 className="text-2xl mb-2">
                    Gallery-App
                </h2>
                <p className="mb-2">
                    React &nbsp; html &nbsp; Tailwind.CSS 
                </p>
                <span className="pro-button">
                    <strong><Link to="https://practical-goldwasser-933117.netlify.app/">View Site</Link></strong>
                </span>
                <span className="pro-button">
                    <strong><Link to="https://github.com/hjh6609/gallery-app">View Github</Link></strong>
                </span>
            </div>
        </div>

        <div className="h-screen">&nbsp;</div>
        </>
    )
}

export default Portfolio
