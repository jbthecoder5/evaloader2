import React from 'react';
import logo, { ReactComponent } from './logo.svg';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './Nav.css';
import './Header.css';
import './Reset.css';
import './index.css';
import './Section.css';

function Index() {
    return (
        <div>this is index</div>
    );
}

function About() {
    return (
        <div>this is the about page</div>
    );
}

function Services() {
    return (
        <div>this is the service page</div>
    );
}

function App() {
    return (
    <div class="index-header">
            <Router>
                <nav class="fluid-nav">
                <ul class="ul-wrapper">
                    <li class="nav-links"><Link to="/about">Why Us?</Link></li>
                    <li class="nav-links"><Link to="/services">Services</Link></li>
                    <li class="nav-links"><Link to="/">evaload</Link></li>
                    <li class="nav-links"><a href="#">444-444-4444</a></li>
                    <li class="nav-links"><a href="login.html">Login</a></li>
                    <li class="nav-links"><a href="signup.html">Get Started</a></li>
                </ul>
                </nav>

                <Route path="/" component={Index} />
                <Route path="/about" component={About} />
                <Route path="/services" component={Services} />
            </Router>
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
