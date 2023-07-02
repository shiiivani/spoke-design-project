import './App.css';
import Logo from './assets/logo.svg'
import Search from './assets/search.png'
import SearchBlack from './assets/search-black.png'
import Close from './assets/close.png'
import Hamburger from './assets/hamburger.png'
import Logo2 from './assets/logo2.png'
import Github from './assets/github.png'
import financial from './assets/financial.png'
import latest from './assets/latest.png'
import healthcare from './assets/healthcarse.png'
import manufacturing from './assets/manufacture.png'
import marketing from './assets/marketing.png'
import insurance from './assets/insurance.png'
import quote from './assets/quote.png'
import reviewBg from './assets/review-bg.png'
import { useState } from 'react';
import Carousel from './Components/Carousel'
import { FaStar } from "react-icons/fa";
import { FaStarHalf } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaGitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";


function App() {
  const [showMobileViewNav, setshowMobileViewNav] = useState(false);
  const [showSearchEngine, setShowSearchEngine] = useState(false);
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor(true)
    } else {
      setColor(false)
    }
  }

  window.addEventListener('scroll', changeColor)

  return (
    <div className="App">
      <div className={color ? "nav-bar-bg" : "nav-bar"}>
        <div className={showMobileViewNav ? "mobile-nav-bar" : "desktop-nav-bar"}>
          <div className="logo">
            <img src={Logo} alt="Company Logo" width="30px" />
          </div>
          <div className={showMobileViewNav ? "mobile-nav-links" : "nav-links"}>
            <ul>
              <li>Platform</li>
              <li>Customers</li>
              <li>Events</li>
              <li>Company</li>
              <li>Resources</li>
              <li>
                <button className={showMobileViewNav ? "black-btn mobile-view-signin" : "signin-not-active"}>SIGN IN</button>
              </li>
            </ul>
          </div>
          <div className="Sign-up-btn">
            <img src={Search} alt="Search Icon" width="20px" onClick={() => setShowSearchEngine(!showSearchEngine)} />
            <p className={showSearchEngine ? "showSearchEngine" : "notShowSearchEngine"}>SEARCH HERE</p>
            <button className="btn">SIGN IN</button>

          </div>
          <div className={showMobileViewNav ? "mobile-search" : "search-not-active"}>

            <img src={SearchBlack} alt="" width="20px" />
            <p>SEARCH HERE</p>
            <button className="black-btn search-btn">SEARCH</button>
          </div>
          <div className='hamburger' onClick={() => setshowMobileViewNav(!showMobileViewNav)}>
            {showMobileViewNav ? <img src={Close} alt="" width="20px" /> :
              <img src={Hamburger} alt="" width="25px" />}   </div>
        </div>
      </div>


      <div className="section1">
        <div className="container1">
          <h1>ONE PLATFORM. ENDLESS SOLUTIONS.</h1>
          <p>Go beyond just building models. Automate the entire data science lifecycle including making AI with any type of data,<br /> operating and governing AI across the entire enterprise, and innovating by sharing and using AI applications to drive<br /> decisions.</p>
          <div className="boxes">

            <div className="box">
              <h2>MAKE</h2>
              <p>Make machine learning models and AI applications with accuracy, speed, and transparency.</p>
            </div>
            <div className="box">
              <h2>OPERATE</h2>
              <p>Streamline performance monitoring and rapidly adapt to changing conditions.</p>

            </div>
            <div className="box box3">
              <h2>INNOVATE</h2>
              <p>Simplify the delivery and consumption of complex solutions to business users with intuitive apps.</p>
            </div>
          </div>
        </div>
        <button className="yellow-btn">EXPLORE PLATFORM</button>
      </div>



      <div className="section2">
        <div className="container2">
          <img src={Logo2} alt="" className="logo2" width="450px" />
          <div className="small-container">
            <p>h2oGPT, a truly open-source generative AI, giving organizations like yours the<br /> power to create your own large language models while maintaining your data<br /> integrity.</p>
            <button className="yellow-btn chat-btn">START CHATTING</button>
            <button className="black-btn github-btn">
              <img src={Github} alt="Icon" className="github-icon" width="20px" />
              <span>ACCESS ON GITHUB</span>
            </button>
          </div>
        </div>
      </div>

      <div className="section3">
        <Carousel />
      </div>

      <div className="section4">
        <h2>USE CASES</h2>
        <div className="container3">
          <div className="small-boxes">
            <img src={latest} alt="Icon" width="180px" />
            <h3>LATEST USE CASES</h3>
          </div>
          <div className="small-boxes">
            <img src={financial} alt="Icon" width="180px" />
            <h3>FINANCIAL SERVICES USE CASES</h3></div>
          <div className="small-boxes">
            <img src={healthcare} alt="Icon" width="180px" />
            <h3>HEALTHCARE CASES</h3></div>
          <div className="small-boxes">
            <img src={marketing} alt="Icon" width="180px" />
            <h3>MARKETING CASES</h3></div>
          <div className="small-boxes">
            <img src={insurance} alt="Icon" width="180px" />
            <h3>INSURANCE CASES</h3></div>
          <div className="small-boxes">
            <img src={manufacturing} alt="Icon" width="180px" />
            <h3>MANUFACTURING CASES</h3></div>
        </div>
      </div>


      <div className="section5">
        <h2>WHAT OUR CUSTOMERS ARE SAYING</h2>
        <div className="review-container">

          <div className='reviews'>
            <img src={quote} alt="" width="40px" className="quote" />
            <FaStar style={{ color: '#FFD600' }} />
            <FaStar style={{ color: '#FFD600' }} />
            <FaStar style={{ color: '#FFD600' }} />
            <FaStar style={{ color: '#FFD600' }} />
            <FaStarHalf style={{ color: '#FFD600' }} />
            <p> H2O makes us feel comfortable with AI - thanks to its technology, people and leadership.</p>
          </div>

          <div className='reviews'>
            <img src={quote} alt="" width="40px" className="quote" />
            <FaStar style={{ color: '#FFD600' }} />
            <FaStar style={{ color: '#FFD600' }} />
            <FaStar style={{ color: '#FFD600' }} />
            <FaStar style={{ color: '#FFD600' }} />
            <FaStar style={{ color: '#FFD600' }} />
            <p> The H2O Driverless product has been highly regarded by our data scientists at the organization.</p>
          </div>
          <div className='reviews'>
            <img src={quote} alt="" width="40px" className="quote" />
            <FaStar style={{ color: '#FFD600' }} />
            <FaStar style={{ color: '#FFD600' }} />
            <FaStar style={{ color: '#FFD600' }} />
            <FaStar style={{ color: '#FFD600' }} />

            <p> It is possibly the best state of the art unique data science tool.</p>
          </div>
          <div className='reviews'>
            <img src={quote} alt="" width="40px" className="quote" />
            <FaStar style={{ color: '#FFD600' }} />
            <FaStar style={{ color: '#FFD600' }} />
            <FaStar style={{ color: '#FFD600' }} />
            <FaStar style={{ color: '#FFD600' }} />
            <p>Its ease of use, quick data ingestion and pre-canned solutions makes the team very efficient.</p>
          </div>
        </div>
        <button className="yellow-btn review-btn-yellow">READ GARTNER REVIEWS</button>
        <button className="black-btn review-btn">READ G2 REVIEWS</button>
      </div>



      <footer>
        <div className="footer-container">
          <div className="first">
            <h3>WHY H2O.AI</h3>
            <ul>
              <li>About us</li>
              <li>Team</li>
              <li>News</li>
              <li>Careers</li>
              <li>Customers</li>
              <li>Contact us</li>
              <li>Request Live Demo</li>
              <li>On-Demand Demos</li>
            </ul>
          </div>
          <div className="second">
            <h3>RESOURCES</h3>
            <ul>
              <li>H2O AI Cloud Datasheet</li>
              <li>Use Cases</li>
              <li>Resources Archive</li>
              <li>Documentation</li>
              <li>Downloads</li>
              <li>Events</li>
              <li>H2O.ai Brand Kit</li>
              <li>Security Bulletins</li>
              <li>Legal</li>
            </ul>
          </div>
          <div className="third">
            <h3>INSIGHTS</h3>
            <ul>
              <li>What is an AI Cloud?</li>
              <li>Strategic Transformation</li>
              <li>Democratizing AI</li>
              <li>Responsible AI</li>
              <li>AI Governance</li>
              <li>Be an AI Company</li>
              <li>AI 4 Good</li>
            </ul>
          </div>
          <div className="fourth">
            <h3>SUBSCRIBE</h3>
            <p>Get the latest products updates, community events and other news.</p>
            <input type="text" placeholder="Business Email Address" />
            <input type="text" placeholder="Country" />
            <input type="text" placeholder="Type of Content" />
            <p>By submitting your information to our website you agree to the terms outlined in our<a href="/"> Privacy Policy</a>.</p>
            <button className="yellow-btn">SIGN ME UP</button>
          </div>
        </div>
        <hr/>
        <div className="copyright-container">
          <div className="copyright">
            <p>Copyright © 2023 H2O.ai. All rights reserved | Privacy Policy | Cookie Preferences</p>
          </div>
          <div className="social-media">
            <FaGithubSquare className="icon" style={{ marginLeft: '12px' }} />
            <FaFacebookSquare className="icon" style={{ marginLeft: '12px' }}/>
            <FaYoutube className="icon" style={{ marginLeft: '12px' }}/>
            <FaGitter className="icon" style={{ marginLeft: '12px' }}/>
            <FaLinkedin className="icon" style={{ marginLeft: '12px' }}/>
            <FaInstagram className="icon" style={{ marginLeft: '12px' }}/>
            <FaTwitter className="icon" style={{ marginLeft: '12px' }}/>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
