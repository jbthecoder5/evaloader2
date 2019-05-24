import React from 'react';
import logo from './logo.svg';
import './Nav.css';
import './Header.css';
import './Reset.css';
import './index.css';
import './Section.css';


function App() {
  return (
    <div class="index-header">
      <nav class="fluid-nav">
          <ul class="ul-wrapper">
              <li class="nav-links"><a href="whyus.html">Why Us?</a></li>
              <li class="nav-links"><a href="whatwedo.html">Services</a></li>
              <li class="nav-links"><a href="index.html">evaload</a></li>
              <li class="nav-links"><a href="#">444-444-4444</a></li>
              <li class="nav-links"><a href="login.html">Login</a></li>
              <li class="nav-links"><a href="signup.html">Get Started</a></li>
          </ul>
      </nav>
      <div class="hd-idx-wrapper">
          <div class="hd-msg">
              <h1>Work. Life. Synergy</h1>
              <h3>US-based Virtual Assistants for entrepreneurs,
                  professionals, and startups.
              </h3>
          </div>
          <div class="hd-btn-wrapper">
              <div class="btn-holder">
                  <button class="btn-consult">
                      <a href="contact.html">
                          Request a Consultation
                      </a>
                  </button>
              </div>
              <div class="btn-holder">
                  <button class="btn-pricing">
                      <a href="#">
                          View Pricing
                      </a>
                  </button>
              </div>
          </div>
      </div>
  </div>
  );
}

export default App;
