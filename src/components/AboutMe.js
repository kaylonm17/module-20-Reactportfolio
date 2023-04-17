import React from 'react'

function AboutMe() {
    return (
    <div>
        <div id="profileGrid">
            {/* <!-- AVATAR --> */}
        <div id="avatar">
            <img 
            id="profileAvatar"
            src="https://th.bing.com/th/id/OIP.kfw9TxTpYu3RwKawludZjwHaHa?pid=ImgDet&rs=1" 
            alt=""/>
            <h4>Kaylon Myers</h4>            
        </div>            
            
            {/* <!-- ABOUT ME SECTION --> */}
        <div id="aboutMe">
            <h1>About me</h1>
            <p>Creating ideas that stand out and building applications that change the </p>
        </div>  

            {/* <!-- PREVIOUS WORKS TITLE  --> */}
        <div id="previousWorksTitle">
            <h1>Previous Works</h1>
        </div>

            {/* <!-- PERVIOUS WORK --> */}
        <div id="work">
        <a href="https://github.com/bravenbright/WeatherMe.git" target="_blank" rel="noopener noreferrer">
            <div>WeatherMe</div>
        </a>
        <a href="https://github.com/TMortara/Travel-Blog.git" target="_blank" rel="noopener noreferrer">
            <div>Travel Blog</div>
        </a>
        <a href="https://github.com/kaylonm17/Aim-Trainer.git" target="_blank" rel="noopener noreferrer">
            <div>Aim Trainer</div>
        </a>
        </div>
</div>
</div>
    )
}

export default AboutMe