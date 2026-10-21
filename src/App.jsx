import "./App.css";
import React from "react";

// Importing icons from react-icons (Lu / Fi / Fa / Fa6 / Bs / Hi)
import { 
  LuCode, 
  LuTerminal, 
  LuSparkles, 
  LuGraduationCap, 
  LuMail, 
  LuMapPin, 
  LuPhone, 
  LuBriefcase 
} from "react-icons/lu";
import { 
  FiArrowRight, 
  FiArrowUpRight, 
  FiArrowDownRight 
} from "react-icons/fi";
import { 
  FaGithub, 
  FaLinkedin, 
  FaRobot, 
  FaWrench 
} from "react-icons/fa6";

// Update the path to your image location (e.g. ./profile.jpg or /profile.jpg if in public folder)
import profileImg from "./assets/profile.png";

const skills = [
  { title: "Frontend", icon: LuCode, items: ["React", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap"] },
  { title: "Backend", icon: LuTerminal, items: ["Node.js", "Express.js", "MongoDB", "Mongoose", "JWT", "REST APIs"] },
  { title: "AI & GenAI", icon: FaRobot, items: ["Gemini API", "LangChain", "LangGraph", "RAG", "Vector Databases", "Prompt Engineering"] },
  { title: "Tools & Cloud", icon: FaWrench, items: ["Git", "GitHub", "Docker", "Postman", "VS Code", "Linux"] }
];

const projects = [
  {
    name: "InterviewIQ",
    type: "AI-powered interview preparation",
    description: "Upload a resume and target job description to generate a match report, interview questions, skill gaps, and a focused 7-day roadmap.",
    tech: ["React", "Node.js", "MongoDB", "Gemini API"],
    demo: "https://interviewiq-frontend-9omn.onrender.com",
    github: "https://github.com/ujjwaltayal017-lang/InterviewIQ",
    mark: "IQ",
    tone: "violet"
  },
  {
    name: "TasteGo",
    type: "Food discovery & delivery UI",
    description: "A food delivery experience with a responsive interface and core browsing, cart, and user-flow features.",
    tech: ["React", "JavaScript", "Tailwind CSS", "API"],
    demo: "https://tastygo-food-delivery-website.netlify.app",
    github: "https://github.com/ujjwaltayal017-lang/TastyGo",
    mark: "TG",
    tone: "orange"
  },
  {
    name: "WeatherApp",
    type: "Real-time Weather & Forecast",
    description: "A responsive weather application fetching real-time meteorology data, city searches, interactive forecast metrics, and current atmospheric conditions.",
    tech: ["React", "JavaScript", "OpenWeather API", "CSS3"],
    demo: "https://weather-app-o06u.onrender.com",
    github: "https://github.com/ujjwaltayal017-lang/WeatherApp",
    mark: "WA",
    tone: "sky"
  },
  {
    name: "Wanderlust Stays",
    type: "Travel & stays platform",
    description: "A travel listing application built around accommodation discovery, user authentication, image hosting, and maps.",
    tech: ["EJS", "Node.js", "MongoDB", "Mapbox"],
    demo: "",
    github: "",
    mark: "WS",
    tone: "cyan"
  }
];

function App() {
  return (
    <div className="site-shell">
      {/* Top Navbar */}
      <header className="topbar">
        <a className="brand" href="#home" aria-label="Ujjwal Tayal home">
          <span className="brand-mark"><LuCode size={24} /></span>
          <span>Ujjwal <b>Tayal</b></span>
        </a>

        <nav className="nav-links">
          <a className="active" href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="nav-social">
          <a href="https://github.com/ujjwaltayal017-lang" target="_blank" rel="noreferrer" aria-label="GitHub">
            <FaGithub size={18} />
          </a>
          <a href="https://www.linkedin.com/in/ujjwal-tayal-79380732b/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <FaLinkedin size={18} />
          </a>
          <a href="mailto:ujjwaltayal017@gmail.com" aria-label="Email">
            <LuMail size={18} />
          </a>
        </div>
      </header>

      <main>
        {/* HERO SECTION */}
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="status-dot"></span> AVAILABLE FOR OPPORTUNITIES
            </div>
            <p className="hello">Hey there, I'm</p>
            <h1>Ujjwal <span>Tayal.</span></h1>
            <h2>Full Stack Developer <em>(MERN)</em> <span className="plus">+</span> AI</h2>
            <p className="hero-desc">
              I build modern web applications and bring AI into useful, real-world products. 
              From clean React interfaces to secure APIs and intelligent AI features, 
              I enjoy turning ideas into things people can use.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#projects">
                Explore Projects <FiArrowRight size={17} />
              </a>
              <a className="button secondary" href="#contact">
                <LuMail size={16} /> Let's Connect
              </a>
            </div>
            <div className="hero-social">
              <a href="https://github.com/ujjwaltayal017-lang" target="_blank" rel="noreferrer">
                <FaGithub size={14} /> GitHub
              </a>
              <a href="https://www.linkedin.com/in/ujjwal-tayal-79380732b/" target="_blank" rel="noreferrer">
                <FaLinkedin size={14} /> LinkedIn
              </a>
              <a href="tel:+919027399867">
                <LuPhone size={14} /> +91 9027399867
              </a>
            </div>
          </div>

          {/* Hero Art / Clean Cropped Profile */}
          <div className="hero-art">
            <div className="orbit orbit-one"></div>
            <div className="orbit orbit-two"></div>

            <div className="hero-avatar-wrapper">
              <img 
                src={profileImg} 
                alt="Ujjwal Tayal" 
                className="hero-avatar-img"
              />
            </div>

            <div className="code-card">
              <span className="dots">● ● ●</span>
              <p><i>const</i> developer = {'{'}</p>
              <p className="indent">stack: <b>"MERN"</b>,</p>
              <p className="indent">focus: <b>"AI + Web"</b>,</p>
              <p className="indent">mindset: <b>"Keep building"</b></p>
              <p>{'}'};</p>
              <div className="terminal-status"><span></span> ready_to_build()</div>
            </div>

            <div className="floating-chip chip-top"><LuSparkles size={16} /> AI-powered ideas</div>
            <div className="floating-chip chip-bottom"><LuCode size={16} /> Build · Learn · Ship</div>
          </div>
          <a className="scroll-cue" href="#about"><FiArrowDownRight size={16} /> SCROLL TO EXPLORE</a>
        </section>

        {/* INTRO STRIP */}
        <section className="intro-strip">
          <div>
            <span className="strip-icon"><LuMapPin size={18} /></span>
            <div><small>BASED IN</small><strong>Jewar, Uttar Pradesh</strong></div>
          </div>
          <div>
            <span className="strip-icon"><LuGraduationCap size={20} /></span>
            <div><small>EDUCATION</small><strong>B.Tech · Computer Science</strong></div>
          </div>
          <div>
            <span className="strip-icon"><LuBriefcase size={18} /></span>
            <div><small>LOOKING FOR</small><strong>Fresher roles & internships</strong></div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section className="content-section section-wrap" id="about">
          <div className="section-heading">
            <div>
              <p className="section-kicker">A LITTLE INTRO</p>
              <h2>About <span>Me</span></h2>
            </div>
            <span className="section-number">01 / ABOUT</span>
          </div>
          <div className="about-grid">
            <div className="about-text">
              <p className="large-copy">I’m a developer who likes building things that are <span>useful, thoughtful, and a little smarter.</span></p>
              <p>My core focus is the MERN stack, with a growing focus on Generative AI and agentic workflows. I enjoy understanding how the frontend, backend, database, and AI layer work together—not just making a page look good.</p>
              <p>Currently sharpening my skills through hands-on projects, exploring RAG and AI agents, and looking for an opportunity to contribute to a real engineering team.</p>
            </div>
            <div className="principles">
              <div className="principle">
                <span>01</span>
                <div><h3>Build end-to-end</h3><p>From responsive UI to APIs, authentication, and database design.</p></div>
              </div>
              <div className="principle">
                <span>02</span>
                <div><h3>Make AI practical</h3><p>Use LLMs to solve clear problems, not just add a chatbot.</p></div>
              </div>
              <div className="principle">
                <span>03</span>
                <div><h3>Keep improving</h3><p>Learn by shipping projects, debugging, and iterating.</p></div>
              </div>
            </div>
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section className="content-section skills-section" id="skills">
          <div className="section-wrap">
            <div className="section-heading">
              <div>
                <p className="section-kicker">MY TOOLKIT</p>
                <h2>Skills & <span>Technologies</span></h2>
              </div>
              <span className="section-number">02 / SKILLS</span>
            </div>
            <div className="skills-grid">
              {skills.map(({ title, icon: Icon, items }) => (
                <article className="skill-card" key={title}>
                  <div className="skill-card-title">
                    <span><Icon size={19} /></span>
                    <h3>{title}</h3>
                  </div>
                  <div className="skill-tags">
                    {items.map(item => <span key={item}>{item}</span>)}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section className="content-section section-wrap" id="projects">
          <div className="section-heading">
            <div>
              <p className="section-kicker">THINGS I'VE BUILT</p>
              <h2>Featured <span>Projects</span></h2>
            </div>
            <span className="section-number">03 / WORK</span>
          </div>
          <div className="projects-grid">
            {projects.map((project, idx) => (
              <article className="project-card" key={project.name}>
                <div className={`project-visual ${project.tone}`}>
                  <div className="project-window">
                    <div className="window-top">
                      <span></span><span></span><span></span>
                      <i>{project.name}</i>
                    </div>
                    <div className="window-content">
                      <div className="window-symbol">{project.mark}</div>
                      <div className="window-lines"><b></b><b></b><b></b></div>
                      <div className="window-mini"><span></span><span></span><span></span></div>
                    </div>
                  </div>
                  <span className="project-index">PROJECT / 0{idx + 1}</span>
                </div>
                <div className="project-body">
                  <p className="project-type">{project.type}</p>
                  <h3>{project.name}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tags">
                    {project.tech.map(t => <span key={t}>{t}</span>)}
                  </div>
                  <div className="project-links">
                    {project.demo ? (
                      <a href={project.demo} target="_blank" rel="noreferrer">
                        Live Demo <FiArrowUpRight size={15} />
                      </a>
                    ) : (
                      <span className="coming-soon">Demo link to be added</span>
                    )}
                    {project.github && (
                      <a className="github-link" href={project.github} target="_blank" rel="noreferrer">
                        <FaGithub size={13} style={{ marginRight: 5 }} /> Source Code
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section className="contact-section" id="contact">
          <div className="section-wrap contact-inner">
            <div>
              <p className="section-kicker">HAVE A ROLE OR IDEA?</p>
              <h2>Let's build something<br /><span>meaningful together.</span></h2>
              <p className="contact-copy">
                I’m open to entry-level opportunities, internships, and collaborative projects in Full Stack Development and AI-powered applications.
              </p>

              <div className="contact-quick-list">
                <a href="mailto:ujjwaltayal017@gmail.com" className="quick-item">
                  <LuMail size={16} /> ujjwaltayal017@gmail.com
                </a>
                <a href="tel:+919027399867" className="quick-item">
                  <LuPhone size={16} /> +91 9027399867
                </a>
              </div>
            </div>

            <div className="contact-actions">
              <a className="button primary" href="mailto:ujjwaltayal017@gmail.com">
                <LuMail size={17} /> Email Me <FiArrowUpRight size={16} />
              </a>
              <a className="button secondary" href="tel:+919027399867">
                <LuPhone size={16} /> Call Me Direct
              </a>
              <a href="https://www.linkedin.com/in/ujjwal-tayal-79380732b/" target="_blank" rel="noreferrer" className="contact-link">
                <FaLinkedin size={15} /> Connect on LinkedIn
              </a>
              <a href="https://github.com/ujjwaltayal017-lang" target="_blank" rel="noreferrer" className="contact-link">
                <FaGithub size={15} /> Explore GitHub
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer>
        <a className="brand" href="#home">
          <span className="brand-mark"><LuCode size={21} /></span>
          <span>Ujjwal <b>Tayal</b></span>
        </a>
        <p>Designed & built with React <span>♥</span> · © {new Date().getFullYear()} Ujjwal Tayal</p>
        <a href="#home" className="back-top">Back to top ↑</a>
      </footer>
    </div>
  );
}

export default App;