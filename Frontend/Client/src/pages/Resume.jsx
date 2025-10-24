import React from 'react'
import './Resume.css'
import ResumeDoc from '../assets/Ratnakar Giri.pdf'

function Resume() {

  function handleDownload(){
    const ulr = ResumeDoc;
    const link = document.createElement('a');
    link.href = ulr;
    link.setAttribute('download', 'Ratnakar Giri.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  return (
    <div className='resume-wrapper'>
      <h1>RESUME</h1>
      <div className='head'>
          <h2>Ratnakar Giri</h2>
          <div className='contact'>
               <span>
                  <label htmlFor="">Email:</label>
                  <p>ratnakargiri973@gmail.com</p>
                </span>
                <span>
                  <label htmlFor="">Phone No.:</label>
                  <p>8917428510</p>
                </span>
                <span>
                  <label htmlFor="">GitHub:</label>
                  <a href="https://github.com/ratnakargiri973">ratnakargiri</a>
                </span>
                <span>
                  <label htmlFor="">LinkedIn:</label>
                  <a href="https://www.linkedin.com/in/ratnakar-giri-195998244/">ratnakrgiri</a>
                </span>
          </div>
      </div>

      <div className='certification'>
          <div className='title'>
            <h3>Certifications</h3>
            <a href="https://drive.google.com/file/d/1AaxVXH3LGo2iZkjAgujfp9LuYL8KVyx2/view?usp=drive_link">[Link]</a>
          </div>
          <h4>Geekster | Geekster Bootcamp</h4>
          <ul>
            <li>Achieved expertise in DSA by successfully solving over 250 coding questions on the Geekster platform.</li>
            <li>Demonstrated coding skills by actively participating in various coding contests organized by the Geekster platform.</li>
            <li>Worked on various projects like <span>E-Commerce Project, </span> <span>File Sharing Application, </span> <span>Google Drive Clone,</span> <span> Gemini AI,</span> <span>Thread Clone</span>.</li>
            <li>Proficient in technical skills such as <span>HTML, </span> <span>CSS, </span> <span>JavaScript, </span> <span>Tailwind, </span> <span>React.JS, </span> <span>Node.JS,</span> <span>Express.JS, </span> <span>MongoDB</span> and <span>Java</span>.</li>
          </ul>
      </div>

      <div className='projects'>
          <h3>Projects</h3>
            <div className='project'>
              <span className='name'>
                <h4>E-Commerce Project</h4>
                <a href="https://e-commerce-1-34e1.onrender.com/">[Link]</a>
              </span>
              <ul>
                <li>
                    Developed e-Commerce full stack project. The project uses the MVC architecture pattern, which makes the code more readable, 
                    modular, and less complex.
                </li>
                <li>
                    Key Features: Implemented security measures, including validations, to ensure application safety. Sign Up for regular users,
                    Sign in for admin as well as regular users, forgot and reset password. Enabled admins to perform CRUD operations on product 
                    while regular users can order product, add product to wishlist, add product to cart, Payment integration.
              </li>
                <li>
                    <p>Tech Stack: <span>Node.Js, </span> <span>Express.Js, </span> <span>React.Js, </span> <span>MongoDB, </span> <span>Postman, </span> <span>MVC Architecture, </span>  <span>Render, </span> <span>Git version control</span>.</p>
                </li>
              </ul>
            </div>
      
            <div className='project'>
              <span className='name'>
                <h4>Twist Talk Thread</h4>
                <a href="https://e-commerce-1-34e1.onrender.com/">[Link]</a>
              </span>
              <ul>
                <li>
                Developed a professional thread  application. The project uses the MVC architecture pattern, which makes code modular, 
                readable and less complex.
                </li>
                <li>
                Key Features: User authentication, User can send message to another user, follower and followings, profile picture, posts, 
                comments, like and unlike etc.
              </li>
                <li>
                    <p>Tech Stack: <span>Node.Js, </span> <span>Express.Js, </span> <span>React.Js, </span> <span>MongoDB, </span> <span>Postman, </span> <span>MVC Architecture, </span>  <span>Multer, </span> <span>cloudinary, </span><span>Render, </span> <span>Git version control</span>.</p>
                </li>
              </ul>
            </div>

            <div className='project'>
              <span className='name'>
                <h4>Google Drive</h4>
                <a href="https://google-drive-theta.vercel.app/login">[Link]</a>
              </span>
              <ul>
                <li>
                Developed a google drive  application using firebase. And the project uses MVC architecture pattern which makes code modular.
                </li>
                <li>
                Key Features: User authentication using firebase, User can store, delete, update files in firebase.
              </li>
                <li>
                    <p>Tech Stack: <span>React.Js, </span> <span>TailWind, </span> <span>Firebase, </span> <span>MVC Architecture, </span>  <span>Vercel, </span> <span>Git version control</span>.</p>
                </li>
              </ul>
            </div>
  
      </div>

      <div className='skills-content'>
          <h3>Skills</h3>
          <ul>
            <li>
              <span>
              <label htmlFor="">Computer Language: </label>
              <p>Java, Html5, CSS3, JavaScript</p>
              </span>
            </li>
            <li>
              <span>
            <label htmlFor="">Frameworks & Libraries: </label>
            <p>ReactJS, Redux, Express.JS , Tailwind CSS, Material UI</p>
            </span>
            </li>
            <li>
              <span>
            <label htmlFor="">Run Time Environmen: </label>
            <p>Node.JS</p>
            </span>
            </li>
            <li>
              <span>
            <label htmlFor="">Database: </label>
            <p>MongoDB, MySQL</p>
            </span>
            </li>
            <li>
              <span>
            <label htmlFor="">Additional Courses: </label>
            <p>Data Structure and Algorithms, OOPs , Figma</p>
            </span>
            </li>
            <li>
              <span>
            <label htmlFor="">Tools & Technologies: </label>
            <p>GIT, VS code, Firebase, GitHub, Vercel, Render</p>
            </span>
            </li>
          </ul>
      </div>
      <div className='education'>
          <h3>Education</h3>
          <table>
            <tr>
              <th>Year</th>
              <th>Degree/Education</th>
              <th>Institution/Board</th>
              <th>CGPA/Percentage</th>
            </tr>
            <tr>
              <td>2023</td>
              <td>MCA</td>
              <td>Cambridge Institute of Technology</td>
              <td>8.67</td>
            </tr>
            <tr>
              <td>2021</td>
              <td>BSC</td>
              <td>North Orissa University</td>
              <td>9.12</td>
            </tr>
            <tr>
              <td>2018</td>
              <td>12th</td>
              <td>CHSC</td>
              <td>64.33%</td>
            </tr>
            <tr>
              <td>2016</td>
              <td>10th</td>
              <td>HSCE</td>
              <td>74.83</td>
            </tr>
          </table>
      </div>
      <div  className='achievement'>
        <h3>Achievements and Co-Curricular Activities</h3>
        <ul>
          <li>Top Solved 100+ questions on LeetCode.</li>
          <li>Received 4 stars on Hacker-Rank in Problem Solving.</li>
        </ul>
      </div>
      <div className='Btn'>
      <button className='dwnd-btn' onClick={handleDownload}>Download</button>
      </div>
    </div>
  )
}

export default Resume
