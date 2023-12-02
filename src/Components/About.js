// import React from "react"; 
import pic1 from "../images/pic1.png"
import pic2 from "../images/pic2.jpg"

const About = () => {

    return(
        <div className="about">
            <h1>About Me</h1>

            {/* <img src="https://cdn.pixabay.com/photo/2023/11/08/07/24/gifts-8374059_1280.png" alt="Gifts Christmas Tree" /> */}
            
            <img src={pic2} alt="Gifts Christmas Tree" />
            

            <p>Hello everyone! I am thrilled to introduce myself as someone with a passion for software and a track record of success in the industry. With five years of experience working at prestigious companies like Amazon and Microsoft, as well as contributing to exciting startups like Think42 and Openhouse, I have honed my skills and gained invaluable knowledge along the way.
            Beyond my professional endeavors, I have also dedicated a significant portion of my career to teaching and mentoring aspiring software professionals. Over the past three years, I have had the privilege of instructing thousands of students across various institutions throughout India. It has been immensely rewarding to witness their growth and see them flourish in their own journeys.
            Currently, I am embarking on a new adventure by creating my own startup. This venture allows me to combine my technical expertise, entrepreneurial spirit, and desire to make a meaningful impact on the world of software. I am excited to tackle the challenges and opportunities that lie ahead, and I am eager to connect with like-minded individuals who share my passion for innovation and
            Thank you for this opportunity to introduce myself, and I look forward to engaging with all of you in the exciting world of software development and entrepreneurship.</p>
        </div>
    )
}

export default About;






// import pic2 from "../.././public/pic2.jpg"

// About.js  => images => pic1 


// ../ 

// ./images/pic1.png


// import ImageName from "../images/pic1.png"
