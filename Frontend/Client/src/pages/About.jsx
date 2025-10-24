import React from 'react'
import './About.css'
import Profile from '../assets/profileImg.jpg'
import { FaGreaterThan } from "react-icons/fa6";

function About() {
  return (
    <div className='about-wrapper'>
      <div className='about'>
        <h2>About</h2>
        <p> I am a highly motivated graduate with a Master’s degree in Computer Applications, currently working as a Software Developer at Fidelsya Technologies. My work involves developing and maintaining full stack web applications using modern technologies to deliver efficient and scalable solutions. I am passionate about continuous learning, writing clean and maintainable code, and contributing to innovative projects that create real-world impact.</p>
      </div>
      <div className='details-container'>
        <img src={Profile} alt="profile" />
        <div className='details-body'>
          <h3>Personal Details</h3>
          <div className='details'>
            <ul className='list-items'>
              <li>
                <span><FaGreaterThan /></span><p className='title'>Birthday:</p><p className='val'>04-Jan-2001</p>
              </li>
              <li>
                <span><FaGreaterThan /></span><p className='title'>Phone:</p><p className='val'>+91-8917428510</p>
              </li>
              <li>
                <span><FaGreaterThan /></span><p className='title'>City:</p><p className='val'>Bhubaneswar, Odisha</p>
              </li>
              <li>
                <span><FaGreaterThan /></span><p className='title'>Age:</p><p className='val'>25</p>
              </li>
              <li>
                <span><FaGreaterThan /></span><p className='title'>Degree:</p><p className='val'>MCA</p>
              </li>
              <li>
                <span><FaGreaterThan /></span><p className='title'>Email:</p><p className='val'>ratnakargiri973@gmail.com</p>
              </li>
            </ul>
          </div>
          <div className='website'>
            <p>👉 I also write tech-blogs to share my experiences and knowledge.</p>
            <p>💻 <a href="https://medium.com/@ratnakargiri973">https://medium.com/@ratnakargiri973</a></p>
          </div>
        </div>
      </div>
      <div className='skills-container'>
        <h2>Skills Under The Belt</h2>
        <div className='skills'>
          <h3>Languages</h3>
          <ul className='skills-list'>
            <li>
              <span className='label'>
                <label htmlFor="">HTML5</label>
                <p>95%</p>
              </span>
              <input type="range" name="" id="" value="95" />
            </li>

            <li>
              <span className='label'>
                <label htmlFor="">CSS3</label>
                <p>90%</p>
              </span>
              <input type="range" name="" id="" value="90" />
            </li>
            <li>
              <span className='label'>
                <label htmlFor="">JAVASCRIPT</label>
                <p>85%</p>
              </span>
              <input type="range" name="" id="" value="85" />
            </li>
            <li>
              <span className='label'>
                <label htmlFor="">JAVA</label>
                <p>80%</p>
              </span>
              <input type="range" name="" id="" value="80" />
            </li>
          </ul>
        </div>

        <div className='skills'>
          <h3>Frameworks & Libraries</h3>
          <ul className='skills-list'>
            <li>
              <span className='label'>
                <label htmlFor="">REACT JS</label>
                <p>90%</p>
              </span>
              <input type="range" name="" id="" value="90" />
            </li>

            <li>
              <span className='label'>
                <label htmlFor="">EXPRESS JS</label>
                <p>93%</p>
              </span>
              <input type="range" name="" id="" value="93" />
            </li>
            <li>
              <span className='label'>
                <label htmlFor="">REDUX JS</label>
                <p>75%</p>
              </span>
              <input type="range" name="" id="" value="75" />
            </li>
            <li>
              <span className='label'>
                <label htmlFor="">TAILWIND</label>
                <p>98%</p>
              </span>
              <input type="range" name="" id="" value="98" />
            </li>
            <li>
              <span className='label'>
                <label htmlFor="">MATERIAL UI</label>
                <p>68%</p>
              </span>
              <input type="range" name="" id="" value="68" />
            </li>
          </ul>
        </div>

        <div className='skills'>
          <h3>Runtime Environment</h3>
          <ul className='skills-list'>
            <li>
              <span className='label'>
                <label htmlFor="">NODE JS</label>
                <p>88%</p>
              </span>
              <input type="range" name="" id="" value="88" />
            </li>
          </ul>
        </div>

        <div className='skills'>
          <h3>Database</h3>
          <ul className='skills-list'>
            <li>
              <span className='label'>
                <label htmlFor="">MONGODB</label>
                <p>85%</p>
              </span>
              <input type="range" name="" id="" value="85" />
            </li>
            <li>
              <span className='label'>
                <label htmlFor="">MySQL</label>
                <p>70%</p>
              </span>
              <input type="range" name="" id="" value="70" />
            </li>
          </ul>
        </div>

        <div className='skills'>
          <h3>Object Document Mapping</h3>
          <ul className='skills-list'>
            <li>
              <span className='label'>
                <label htmlFor="">MONGOOSE</label>
                <p>76%</p>
              </span>
              <input type="range" name="" id="" value="76" />
            </li>
          </ul>
        </div>

        <div className='skills'>
          <h3>Version Control</h3>
          <ul className='skills-list'>
            <li>
              <span className='label'>
                <label htmlFor="">GITHUB</label>
                <p>95%</p>
              </span>
              <input type="range" name="" id="" value="95" />
            </li>
          </ul>
        </div>

        <div className='skills'>
          <h3>Additional Course</h3>
          <ul className='skills-list'>
            <li>
              <span className='label'>
                <label htmlFor="">DSA WITH JAVA</label>
                <p>70%</p>
              </span>
              <input type="range" name="" id="" value="70" />
            </li>
            <li>
              <span className='label'>
                <label htmlFor="">FIREBASE</label>
                <p>65%</p>
              </span>
              <input type="range" name="" id="" value="65" />
            </li>
            <li>
              <span className='label'>
                <label htmlFor="">FIGMA</label>
                <p>70%</p>
              </span>
              <input type="range" name="" id="" value="70" />
            </li>
            <li>
              <span className='label'>
                <label htmlFor="">GIT</label>
                <p>60%</p>
              </span>
              <input type="range" name="" id="" value="60" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default About
