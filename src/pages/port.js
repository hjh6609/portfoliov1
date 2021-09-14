import React from "react"

const port = ({ key2, url, title,describe,viewsite,viewgit }) => {
    //console.log("qqq");
    return (
    <>
        {key2 === undefined ? ('') : (    
            <div className="portfolio" id="portfolio2">
                <img src={url} alt="" className="h-full rounded
                mb-20 shadow" />
                <div className="center-content font-bold">
                    <h2 className="text-2xl mb-2">
                        {title}
                    </h2>
                    <p className="mb-2">
                        {describe}
                    </p>
                    <span className="pro-button">
                        <button onClick={() => window.open( viewsite , '_blank')}><strong>View Site</strong></button>
                    </span>
                    <span className="pro-button">
                        <button onClick={() => window.open( viewgit , '_blank')}><strong>View Github</strong></button>
                    </span>
                </div>
            </div> 
        )}  
    </>    
    )
}

export default port
