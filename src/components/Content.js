import React from 'react'
import ImageOne from '../images/turtles.jpg';

const Content = () => {
    return (
    <>
        <div className="menu-card">
            <img src={ImageOne} alt="" className="h-full rounded 
            mb-20 shadow" />
            <div className="center-content font-bold">
                <h2 className="text-2xl mb-2">
                    Hi! I'm Lucy 😊
                </h2>
                <p className="mb-2">
                    I'm a Jr.front-end developer.
                </p>
                <span className="text-center"><u>My skills is</u> &nbsp;
                    <strong>
                        javascript, React.js, php,html, css(tailwind CSS)<br />
                        C#, .NET, Visual Studio <br />
                        MS-SQL,MySQL <br />
                        A little bit photoshop and Illustrator<br />
                    </strong>
                    </span>
            </div>
        </div>
        <div className="h-screen"></div>
    </>
    )
}

export default Content
