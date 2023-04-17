import React from 'react'

function AboutMe() {
    return (
    <div>
        <div id="profileGrid">
            {/* <!-- AVATAR --> */}
        <div id="avatar">
            <img 
            id="profileAvatar"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO3IdcslE8nXeq6Yfeq5hQVKKx43hOFRKxgA&usqp=CAU" 
            alt=""/>
            <h4>Alex Wilkisnon</h4>            
        </div>            
            
            {/* <!-- ABOUT ME SECTION --> */}
        <div id="aboutMe">
            <h1>About me</h1>
            <p>Building highest quality websites and applications with HTML CCS and JavaScript</p>
        </div>  

            {/* <!-- PREVIOUS WORKS TITLE  --> */}
        <div id="previousWorksTitle">
            <h1>Previous Works</h1>
        </div>

            {/* <!-- PERVIOUS WORK --> */}
        <div id="work">
          <div>Project goes here</div>
          <div>Project goes here</div>
          <div>Project goes here</div>
        </div>
</div>
</div>
    )
}

export default AboutMe