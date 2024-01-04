import React from 'react'
import { ProgressBar } from 'react-bootstrap'

function About() {
  return (
    <section className="about" id="about">
          <div className="container about-content">
            <div className="row">
              <div className="col-md-12">
                <div className="shadow-lg">
                  <div className="row p-5">
                    <div className="col-md-6">
                      <div className="about-info">
                        <p>
                          <span className="title">Name:</span>
                          <span>Fathima Afna</span>
                        </p>
                        <p>
                          <span className="title">Email:</span>
                          <span>afnafathima121@gmail.com</span>
                        </p>
                        <p>
                          <span className="title">Phone:</span>
                          <span>8714796328</span>
                        </p>
                        
                      </div>
                      <div className="skills">
                        <p className="title">SKILL</p>
                        <span>HTML & CSS </span>
                          <ProgressBar animated now={80} label={'80%'}/>
                          <span>JAVASCRIPT</span>
                          <ProgressBar animated now={75} label={'75%'}/>
                          <span>REACTJS</span>
                          <ProgressBar animated now={70} label={'70%'}/>
                          <span>BACKEND</span>
                          <ProgressBar animated now={70} label={'70%'}/>   
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="text">
                        <div className="title d-flex">
                          <h2>About me</h2>
                        </div>
                        <div className="text-justify">
                          <p>I'am a full stack developer with an associate's degree in Computer Science. Proven skills in <strong>HTML, CSS, JAVASCRIPT, REACTJS, NODEJS, EXPRESSJS, MONGODB and etc...</strong> I have the ability to work independently and collaborate effectively with a team. </p>
                          <p>As a MERN stack developer, I'm passionate about crafting dynamic and responsive web applications. With proficiency in MongoDB, Express.js, React, and Node.js, I have the expertise to design and implement user-friendly, data-driven solutions. My goal is to create engaging and efficient web experiences that meet the needs of both clients and end-users.</p>
                        </div>
                        
                      </div>
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>

        </section>
  )
}

export default About