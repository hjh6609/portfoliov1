import React from 'react'
//import ImageOne from '../images/weather-app.jpg';
import ImageTwo from '../images/gallery.jpg';
import ImageThree from '../images/quiz-app.jpg';
import ImageFour from '../images/star2.jpg';
import ImageFive from '../images/star1.jpg';
import ImageSix from '../images/adminapp.jpg';

const Portfolio = () => {
    return (
        <>
        <div className="portfolio"> {/*  bg-green-100 */ }
            <img src={ImageSix} alt="" className="h-full rounded 
            mb-20 shadow" />
            <div className="center-content font-bold">
                <h2 className="text-2xl mb-2">
                    Admin App
                </h2>
                <p className="mb-2">
                    React &nbsp; html &nbsp; CSS &nbsp; Material
                </p>
                <span className="pro-button">
                    <button onClick={() => window.open('https://keen-austin-519956.netlify.app/', '_blank')}><strong>View Site</strong></button>
                </span>
                <span className="pro-button">
                    <button onClick={() => window.open('https://github.com/hjh6609/admin-app', '_blank')}><strong>View Github</strong></button>
                </span>
            </div>
        </div>     

        <div className="portfolio"> {/*  bg-green-100 */ }
            <img src={ImageFive} alt="" className="h-full rounded 
            mb-20 shadow" />
            <div className="center-content font-bold">
                <h2 className="text-2xl mb-2">
                    Starbucks Site 1
                </h2>
                <p className="mb-2">
                    React &nbsp; html &nbsp; CSS 
                </p>
                <span className="pro-button">
                    <button onClick={() => window.open('https://modest-einstein-7d5d43.netlify.app/', '_blank')}><strong>View Site</strong></button>
                </span>
                <span className="pro-button">
                    <button onClick={() => window.open('https://github.com/hjh6609/starbucks2', '_blank')}><strong>View Github</strong></button>
                </span>
            </div>
        </div>

        <div className="portfolio"> {/*  bg-green-100 */ }
            <img src={ImageFour} alt="" className="h-full rounded 
            mb-20 shadow" />
            <div className="center-content font-bold">
                <h2 className="text-2xl mb-2">
                    Starbucks Site 2
                </h2>
                <p className="mb-2">
                    React &nbsp; html &nbsp; CSS &nbsp; Styled Components
                </p>
                <span className="pro-button">
                    <button onClick={() => window.open('https://compassionate-sinoussi-564d78.netlify.app/', '_blank')}><strong>View Site</strong></button>
                </span>
                <span className="pro-button">
                    <button onClick={() => window.open('https://github.com/hjh6609/starbucks', '_blank')}><strong>View Github</strong></button>
                </span>
            </div> 
        </div>
    
        {/* <div className="portfolio"> 
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
                    <button onClick={() => window.open('https://weather-app-react-ebon.vercel.app/', '_blank')}><strong>View Site</strong></button>
                </span>
                <span className="pro-button">
                    <button onClick={() => window.open('https://github.com/hjh6609/weather-re-act', '_blank')}><strong>View Github</strong></button>
                </span>
            </div>
        </div>  */}

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
                    <button onClick={() => window.open('https://practical-goldwasser-933117.netlify.app/', '_blank')}><strong>View Site</strong></button>
                </span>
                <span className="pro-button">
                    <button onClick={() => window.open('https://github.com/hjh6609/gallery-app', '_blank')}><strong>View Github</strong></button>
                </span>
            </div>
        </div>

        <div className="portfolio"> {/*  bg-green-100 */ }
            <img src={ImageThree} alt="" className="h-full rounded 
            mb-20 shadow" />
            <div className="center-content font-bold">
                <h2 className="text-2xl mb-2">
                    Quiz-App
                </h2>
                <p className="mb-2">
                    React &nbsp; html &nbsp; CSS 
                </p>
                <span className="pro-button">
                    <button onClick={() => window.open('https://vercel.com/blank2/quiz-app', '_blank')}><strong>View Site</strong></button>
                </span>
                <span className="pro-button">
                    <button onClick={() => window.open('https://github.com/hjh6609/quiz-app', '_blank')}><strong>View Github</strong></button>
                </span>
            </div>
            </div>  

        <div className="h-screen">&nbsp;</div>
        </>
    )
}

export default Portfolio
