import React from 'react'
import './Resume.css';

const Resume = () => {
    return (
        <div className='resume'>

            <div className='heading'>
                <h3>Pramod Kumar Pant</h3>
                <div className='contact'>
                    <p>Email: pramodpant100@gmail.com</p>
                    <p>Mobile No: 7454983028</p>
                </div>
            </div>

            <div className='objective'>
                <b>
                    An ambitious & hardworking individual with excellent skills and the capability to manage
                    time effectively; targeting assignments in Software Development/Application Development
                    with an organization of repute, preferably in IT industry</b>
            </div>

            <div className='location'> Location Preference: Delhi / Noida</div>

            <div className='summary'>
                <p className='summary-heading'>Summary</p>
                <ul>
                    <li>Expertise with Web based applications in <b>React</b> and <b>Redux</b>.</li>
                    <li>Extensive knowledge of <b>Software Development Lifecycle (SDLC),</b> right from requirement analysis, documentation (functional specifications, technical design), coding and testing (preparation of test cases along with implementation) to maintenance of proposed applications</li>
                    <li>Expertise encompasses technical knowledge of <b>React, Redux, Javascript, ES6, web-based applications</b>.</li>
                    <li>Extensive understanding of Project Management tools like <b>Git</b> and development tools  Net beans, Notepad++,  VS Code</li>
                </ul>
            </div>

            <div className='training summary'>
                <p>ORGANIZATIONAL EXPERIENCE</p>
                <ul>
                    <li>2 Months Training in <b>Bharat Sanchar Nigam Limited (BSNL)</b> (Lohaghat, Dis-Champawat)</li>
                    <li>6 Months Training in <b>React JS</b> from Teach Vision (Tilak Nagar – Delhi)</li>
                    <li>3 Weeks Online Training in <b>Get Ahed With Frontend Development from Geeksforgeeks</b></li>
                </ul>
            </div>

            <div className='education summary'>
                <p>Education</p>
                <ul>
                    <li>B.Tech  in CSE from N.P.S.E.I  Pithoragarh, Uttarakhand in 2019</li>
                    <li>Diploma from in CE from Govt. Polytechnic  Lohaghat in CE in 2013</li>
                    <li>10+2 from Vivekanand Vidya Mandir Inter College Lohaghat in 2010</li>
                    <li>Highschool from  Vivekanand Vidya Mandir Inter College Lohaghat in 2008</li>
                </ul>
            </div>
            <div className='projects summary'>
                <p>Projects</p>
                <div className='project-title'>Social Media App</div>
                <div className='description'>
                    <b>Description:</b> It is like a soial media web app , where any person can create account .
                    it gives functionality of authentication. User can upload their post, with caption.
                    It provides realtime comment loading of all the users.
                    <br />
                    <a href="https://instagram-clone-react-6b064.web.app/ ">https://instagram-clone-react-6b064.web.app/ </a>
                    <ul>
                        <li><b>Technology</b>:React, JavaScript, JSX, firebase (authentication, firestore database)</li>
                    </ul>

                </div>

                <div className='project-title'>School Management System</div>
                <div className='description'>
                    <b>Description:</b>
                    Optimum Solution to solve the school management effectively.From Student admission, Updating Information, Attendence, and displaying all students information.
                    All data is saved in NoSQL database.
                    <br />
                    <a href="https://school-management-system-demo.web.app/">https://school-management-system-demo.web.app/</a>
                    <ul>
                        <li><b>Technology</b>:    Technology:React JS, Context API, Node JS, Express, Mongodb, mongoose</li>
                    </ul>

                </div>
            </div>

        </div>
    )
}

export default Resume
