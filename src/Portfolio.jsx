import React, { useState, useEffect } from 'react';
import './Portfolio.css';

const Portfolio = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  const [isNavActive, setIsNavActive] = useState(false);

  // Theme toggle handler
  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  // Mobile nav toggle handler
  const toggleNav = () => {
    setIsNavActive(!isNavActive);
  };

  // Close mobile menu on link click
  const handleNavLinkClick = () => {
    setIsNavActive(false);
  };

  // Scroll animation handler
  useEffect(() => {
    const scrollElements = document.querySelectorAll('.animate-on-scroll');

    const elementInView = (el, dividend = 1) => {
      const elementTop = el.getBoundingClientRect().top;
      return (
        elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend
      );
    };

    const displayScrollElement = (element) => {
      element.classList.add('visible');
    };

    const handleScrollAnimation = () => {
      scrollElements.forEach((el) => {
        if (elementInView(el, 1.25)) {
          displayScrollElement(el);
        }
      });
    };

    handleScrollAnimation();
    window.addEventListener('scroll', handleScrollAnimation);

    return () => window.removeEventListener('scroll', handleScrollAnimation);
  }, []);

  return (
    <div>
      <header className="navbar">
        <div className="container navbar-container">
          <a href="#home" className="nav-logo">MSJ</a>
          <nav className={`nav-menu ${isNavActive ? 'active' : ''}`}>
            <a href="#home" onClick={handleNavLinkClick}>Home</a>
            <a href="#about" onClick={handleNavLinkClick}>About</a>
            <a href="#skills" onClick={handleNavLinkClick}>Skills</a>
            <a href="#timeline" onClick={handleNavLinkClick}>Timeline</a>
            <a href="#testimonials" onClick={handleNavLinkClick}>Testimonials</a>
            <a href="#contact" onClick={handleNavLinkClick}>Contact</a>
          </nav>
          <div className="nav-actions">
            <button onClick={toggleTheme} className="theme-toggle-btn">
              {theme === 'dark' ? '☀️' : '🌙'}
            </button>
            <button onClick={toggleNav} className="nav-toggle-btn">☰</button>
          </div>
        </div>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="container hero-content">
            <h1 className="animate-on-scroll">Hi, I’m Makam Sai Jeevan</h1>
            <p className="hero-subtitle animate-on-scroll">A web developer and student.</p>
            <div className="hero-buttons animate-on-scroll">
              <a href="#skills" className="btn btn-primary">View Skills</a>
              <a href="resume.pdf" download="./Makam_Sai_Jeevan_Resume.pdf" className="btn btn-secondary">Download Resume</a>
            </div>
          </div>
        </section>

        <section id="about" className="about">
          <div className="container about-content">
            <h2 className="section-title animate-on-scroll">About Me</h2>
            <p className="animate-on-scroll">
              I’m currently pursuing B.Tech at Amrita Vishwa Vidyapeetham (2023–2027). I’m a full-stack web developer with a strong foundation in front-end and back-end development, and an active learner always exploring new tools and frameworks. I’m confident in HTML, CSS, JavaScript, and modern libraries like React and Node.js.
            </p>
            <div className="tech-list animate-on-scroll">
              <h3>Technologies I work with:</h3>
              <div className="tech-tags">
                <span>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>
                <span>React.js</span>
                <span>Angular.js</span>
                <span>Node.js</span>
                <span>Express.js</span>
                <span>MongoDB</span>
                <span>MySQL</span>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="skills">
          <div className="container">
            <h2 className="section-title animate-on-scroll">Skills</h2>
            <div className="skills-grid">
              <div className="skill-category animate-on-scroll">
                <h3>Technical Skills</h3>
                <ul>
                  <li>HTML, CSS, JavaScript</li>
                  <li>Responsive Design (Bootstrap, Tailwind CSS)</li>
                  <li>APIs & RESTful services</li>
                  <li>Databases (MongoDB, MySQL)</li>
                  <li>Deployment (Netlify, Vercel, GitHub Pages)</li>
                </ul>
              </div>
              <div className="skill-category animate-on-scroll">
                <h3>Personal Skills</h3>
                <ul>
                  <li>Effective Communication</li>
                  <li>Critical Thinking & Problem Solving</li>
                  <li>Strong Work Ethic</li>
                  <li>Time Management</li>
                  <li>Team Collaboration</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="timeline" className="timeline">
          <div className="container">
            <h2 className="section-title animate-on-scroll">My Learning Journey</h2>
            <div className="timeline-items">
              <div className="timeline-item animate-on-scroll">
                <h4>2023 – 2027 (Continuing)</h4>
                <p><strong>B.Tech</strong>, Amrita Vishwa Vidyapeetham, Coimbatore</p>
              </div>
              <div className="timeline-item animate-on-scroll">
                <h4>2021 – 2023</h4>
                <p><strong>Intermediate</strong>, Narayana Junior College, Hyderabad</p>
              </div>
              <div className="timeline-item animate-on-scroll">
                <h4>2018 – 2021</h4>
                <p><strong>High School</strong>, Narayana School, Ananthapur</p>
              </div>
              <div className="timeline-item animate-on-scroll">
                <h4>2011 – 2018</h4>
                <p><strong>Primary & Middle School</strong>, Montessori School, Ananthapur</p>
              </div>
            </div>
          </div>
        </section>

        <section id="testimonials" className="testimonials">
          <div className="container">
            <h2 className="section-title animate-on-scroll">Testimonials</h2>
            <div className="testimonial-cards">
              <div className="card animate-on-scroll">
                <p>"Sai Jeevan is a fast learner who’s constantly improving. His passion for full-stack web development is inspiring."</p>
                <span>– Peer Developer</span>
              </div>
              <div className="card animate-on-scroll">
                <p>"Though early in his journey, Sai Jeevan shows great discipline and technical curiosity. Looking forward to his future work!"</p>
                <span>– University Professor</span>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="contact">
          <div className="container">
            <h2 className="section-title animate-on-scroll">Get In Touch</h2>
            <p className="animate-on-scroll">I'm always open to discussing new projects, creative ideas, or opportunities. Feel free to reach out!</p>
            <div className="contact-links animate-on-scroll">
              <a href="mailto:makamsaijeevan06@gmail.com" className="btn btn-primary">makamsaijeevan06@gmail.com</a>
            </div>
            <div className="social-links animate-on-scroll">
              <a href="https://github.com/saijeevan06" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://www.linkedin.com/in/sai-jeevan-65463033b" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <div className="languages">
            <span>English</span> | <span>Telugu</span>
          </div>
          <p>&copy; 2024 Makam Sai Jeevan. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;