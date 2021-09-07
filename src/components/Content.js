import React from 'react'
import ImageOne from '../images/najae.jpg';

const Content = () => {
    return (
    <>
        <div className="menu-card">
            <img src={ImageOne} alt="" className="h-full rounded 
            mb-20 shadow" />
            <div className="center-content">
                <h2 className="text-2xl mb-2">
                    Lucy Profile
                </h2>
                <p className="mb-2">
                    I'm a front-end developer.
                </p>
                <span>And I like Jaemin-Na</span>
            </div>
        </div>
    </>
    )
}

export default Content
