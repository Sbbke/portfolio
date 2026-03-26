
import './cv.css'
// src/routes/cv.tsx



export default function CvPost() {
  return (
     <div className="cv-container">
        <article className="cv-article">
          {/* Header */}
          <header className="cv-header">
            <h1 className="cv-title">Andrew Hou's CV</h1>
            <div className="cv-contact-grid">
              <div className="cv-contact-item">
                <span className="cv-contact-label">Email:</span>
                <a href="mailto:andrew.weian.hou@gmail.com" className="cv-link">
                  andrew.weian.hou@gmail.com
                </a>
              </div>
              <div className="cv-contact-item">
                <span className="cv-contact-label">Location:</span>
                <span>Ames, IA</span>
              </div>
              <div className="cv-contact-item">
                <span className="cv-contact-label">Website:</span>
                <a href="https://sbbke.github.io/" className="cv-link" target="_blank" rel="noopener noreferrer">
                  sbbke.github.io
                </a>
              </div>
              <div className="cv-contact-item">
                <span className="cv-contact-label">LinkedIn:</span>
                <a href="https://linkedin.com/in/andrew-hou-522423280" className="cv-link" target="_blank" rel="noopener noreferrer">
                  andrew-hou-522423280
                </a>
              </div>
              <div className="cv-contact-item">
                <span className="cv-contact-label">GitHub:</span>
                <a href="https://github.com/Sbbke" className="cv-link" target="_blank" rel="noopener noreferrer">
                  Sbbke
                </a>
              </div>
            </div>
          </header>

          {/* Education */}
          <section className="cv-section">
            <h2 className="cv-section-title">Education</h2>
            
            <div className="cv-entry">
              <div className="cv-entry-header">
                <div>
                  <h3 className="cv-entry-title">Iowa State University</h3>
                  <p className="cv-entry-subtitle">Master in Computer Science</p>
                </div>
                <div className="cv-entry-meta">
                  <p>Ames, Iowa</p>
                  <p className="cv-entry-date">Jan 2026 – present</p>
                </div>
              </div>
            </div>

            <div className="cv-entry">
              <div className="cv-entry-header">
                <div>
                  <h3 className="cv-entry-title">National Taichung University of Education</h3>
                  <p className="cv-entry-subtitle">Master in Computer Science</p>
                </div>
                <div className="cv-entry-meta">
                  <p>Taichung, TW</p>
                  <p className="cv-entry-date">Feb 2022 – June 2024</p>
                </div>
              </div>
              <ul className="cv-list">
                <li>Thesis: Exploring Security Strategies on Migration Approaches from Monolithic Systems to Microservices Architecture through Systematic Literature Review</li>
                <li>Advisor: Dr. Kuo-Hsun Hsu</li>
              </ul>
            </div>

            <div className="cv-entry">
              <div className="cv-entry-header">
                <div>
                  <h3 className="cv-entry-title">National Taichung University of Education</h3>
                  <p className="cv-entry-subtitle">Bachelor in Computer Science</p>
                </div>
                <div className="cv-entry-meta">
                  <p>Taichung, TW</p>
                  <p className="cv-entry-date">July 2017 – June 2021</p>
                </div>
              </div>
              <ul className="cv-list">
                <li>Capstone (team): Implementing Heterogeneous Container Technologies in Kubernetes</li>
                <li>Advisor: Dr. Kuan-Chou Lai</li>
              </ul>
            </div>
          </section>

          {/* Experience */}
          <section className="cv-section">
            <h2 className="cv-section-title">Experience</h2>
            
            <div className="cv-entry">
              <div className="cv-entry-header">
                <div>
                  <h3 className="cv-entry-title">Hyvee</h3>
                  <p className="cv-entry-subtitle">Wine & Spirit crew member</p>
                </div>
                <div className="cv-entry-meta">
                  <p>Ames, Iowa</p>
                  <p className="cv-entry-date">July 2025 – present</p>
                  <p className="cv-entry-duration">7 months</p>
                </div>
              </div>
            </div>

            <div className="cv-entry">
              <div className="cv-entry-header">
                <div>
                  <h3 className="cv-entry-title">Medicrowd Smart Healthcare</h3>
                  <p className="cv-entry-subtitle">AI Software Engineer</p>
                </div>
                <div className="cv-entry-meta">
                  <p>Taipei, TW</p>
                  <p className="cv-entry-date">Nov 2024 – Dec 2024</p>
                  <p className="cv-entry-duration">2 months</p>
                </div>
              </div>
              <ul className="cv-list">
                <li>Integrated Large Language Models (LLMs) into the customer service system, enhancing customer experience and reducing costs</li>
                <li>Implemented Retrieval-Augmented Generation (RAG) and Multi-agent Systems</li>
              </ul>
            </div>

            <div className="cv-entry">
              <div className="cv-entry-header">
                <div>
                  <h3 className="cv-entry-title">Department of Computer Science, NTCUE</h3>
                  <p className="cv-entry-subtitle">Graduate assistant</p>
                </div>
                <div className="cv-entry-meta">
                  <p>Taichung, TW</p>
                  <p className="cv-entry-date">Feb 2022 – Feb 2024</p>
                  <p className="cv-entry-duration">2 years 1 month</p>
                </div>
              </div>
              <ul className="cv-list">
                <li>Assisted in organizing the Collegiate Programming Examination (CPE) for 40+ participants</li>
                <li>Managed DHCP IP tables, NAT configurations, and firewall rules</li>
                <li>Maintained rack servers, blade servers, and network switches</li>
              </ul>
            </div>

            <div className="cv-entry">
              <div className="cv-entry-header">
                <div>
                  <h3 className="cv-entry-title">Software Engineering Lab, NTCUE</h3>
                  <p className="cv-entry-subtitle">Research Assistant</p>
                </div>
                <div className="cv-entry-meta">
                  <p>Taichung, TW</p>
                  <p className="cv-entry-date">Feb 2022 – June 2024</p>
                  <p className="cv-entry-duration">2 years 5 months</p>
                </div>
              </div>
              <ul className="cv-list">
                <li>Participated in research on applying design patterns through AOP (Aspect-Oriented Programming) for system refactoring</li>
                <li>Evaluated system improvements using the Goal-Question-Metric (GQM) approach</li>
                <li>Researched microservices architecture, focusing on monolith-to-microservices migration strategies and security mechanisms</li>
              </ul>
            </div>

            <div className="cv-entry">
              <div className="cv-entry-header">
                <div>
                  <h3 className="cv-entry-title">Department of Digital Content and Technology, NTCUE</h3>
                  <p className="cv-entry-subtitle">Research assistant</p>
                </div>
                <div className="cv-entry-meta">
                  <p>Taichung, TW</p>
                  <p className="cv-entry-date">Feb 2024 – June 2024</p>
                  <p className="cv-entry-duration">5 months</p>
                </div>
              </div>
              <ul className="cv-list">
                <li>Applied AI-based pose recognition to sports performance analysis</li>
              </ul>
            </div>

            <div className="cv-entry">
              <div className="cv-entry-header">
                <div>
                  <h3 className="cv-entry-title">Department of Computer Science, NTCUE</h3>
                  <p className="cv-entry-subtitle">Teaching assistant</p>
                </div>
                <div className="cv-entry-meta">
                  <p>Taichung, TW</p>
                  <p className="cv-entry-date">Feb 2024 – June 2024</p>
                  <p className="cv-entry-duration">5 months</p>
                </div>
              </div>
              <ul className="cv-list">
                <li>Guided 30+ undergraduates in implementing CI/CD pipelines using Git, Maven, and Jenkins</li>
                <li>Evaluated coursework on low-level design (LLD) and software development life cycle (SDLC) methodologies</li>
              </ul>
            </div>

            <div className="cv-entry">
              <div className="cv-entry-header">
                <div>
                  <h3 className="cv-entry-title">Data Systems Consulting</h3>
                  <p className="cv-entry-subtitle">Software Engineer Internship</p>
                </div>
                <div className="cv-entry-meta">
                  <p>Taichung, TW</p>
                  <p className="cv-entry-date">July 2019 – Aug 2019</p>
                  <p className="cv-entry-duration">2 months</p>
                </div>
              </div>
              <ul className="cv-list">
                <li>Participated in the software development life cycle (SDLC)</li>
                <li>Analyzed user requirements through user stories</li>
                <li>Created product prototypes and designed onboarding pages</li>
              </ul>
            </div>
          </section>

          {/* Projects */}
          <section className="cv-section">
            <h2 className="cv-section-title">Projects</h2>
            
            <div className="cv-entry">
              <div className="cv-entry-header">
                <h3 className="cv-entry-title">[team] STEM education NSTC 112-2410-H-142-027-MY3</h3>
                <p className="cv-entry-date">June 2023 – Oct 2023</p>
              </div>
              <p className="cv-entry-description">Interactive application aims to ease the data processing and llm fine-tuning</p>
              <ul className="cv-list">
                <li>Designed software architecture and implemented a Python-based backend for data preprocessing and LLM model fine-tuning</li>
              </ul>
            </div>

            <div className="cv-entry">
              <div className="cv-entry-header">
                <h3 className="cv-entry-title">
                  <a href="https://github.com/Sbbke/phantom_mask" className="cv-link" target="_blank" rel="noopener noreferrer">
                    [personal] phantom_mask
                  </a>
                </h3>
                <p className="cv-entry-date">June 2025 – June 2025</p>
              </div>
              <p className="cv-entry-description">A backend service for tracking pharmacies, masks, and user purchases using Golang, PostgreSQL, and Docker.</p>
              <ul className="cv-list">
                <li>Developed a Go-based backend for a pharmacy management system, implementing an ETL pipeline and containerized deployment</li>
                <li>Designed and implemented an ETL pipeline in Go to preprocess and load user and pharmacy data from JSON files into a PostgreSQL database</li>
                <li>Built a modular backend application using Cobra CLI, defining API endpoints, DTOs, and validation for pharmacy-related functionality, with middleware for error handling and recovery</li>
                <li>Configured a Dockerized environment with Docker Compose, optimizing image reuse across services for schema migrations, data preprocessing, and application runtime</li>
                <li>Developed unit and integration tests to validate ETL processes and API functionality, enhancing system reliability</li>
              </ul>
            </div>

            <div className="cv-entry">
              <div className="cv-entry-header">
                <h3 className="cv-entry-title">
                  <a href="https://github.com/Sbbke/StableDiffusion-containerization" className="cv-link" target="_blank" rel="noopener noreferrer">
                    [personal] StableDiffusion-containerization
                  </a>
                </h3>
                <p className="cv-entry-date">June 2023 – present</p>
              </div>
              <p className="cv-entry-description">Ongoing practice of containerize Stable-diffusion service</p>
              <ul className="cv-list">
                <li>Configured a Dockerized environment with NVIDIA GPU support</li>
                <li>Used Python UV for dependency management</li>
              </ul>
            </div>
          </section>

          {/* Publications */}
          <section className="cv-section">
            <h2 className="cv-section-title">Publications</h2>
            
            <div className="cv-entry">
              <h3 className="cv-publication-title">
                An AI-based posture recognition system for analyzing the impact of core muscle strength on the forehand loop against backspin in table tennis
              </h3>
              <p className="cv-publication-date">Oct 2025</p>
              <p className="cv-publication-authors">Wu, C.-H., Chen, Y.-X., Hou, A. W., Chen, P.-Y., Chou, M.-T.</p>
              <a href="https://doi.org/10.1177/17479541251389701" className="cv-publication-doi" target="_blank" rel="noopener noreferrer">
                10.1177/17479541251389701
              </a>
            </div>

            <div className="cv-entry">
              <h3 className="cv-publication-title">
                Addressing security issues during decomposing golang monolithic applications into microservices through code analysis
              </h3>
              <p className="cv-publication-date">Apr 2024</p>
              <p className="cv-publication-authors"><em>Hou, A. W.</em>, Hsu, K. H, Chen, Y. Y.</p>
              <a href="https://doi.org/10.1109/ICASI60819.2024.10547752" className="cv-publication-doi" target="_blank" rel="noopener noreferrer">
                10.1109/ICASI60819.2024.10547752
              </a>
            </div>

            <div className="cv-entry">
              <h3 className="cv-publication-title">
                MAT: Automating Go monolithic applications transform into microservices through dependency analysis and AST
              </h3>
              <p className="cv-publication-date">Apr 2023</p>
              <p className="cv-publication-authors"><em>Chen, Y. Y.</em>, Hsu, K. H., Hou, A. W</p>
              <a href="https://doi.org/10.1109/ICASI57738.2023.10179517" className="cv-publication-doi" target="_blank" rel="noopener noreferrer">
                10.1109/ICASI57738.2023.10179517
              </a>
            </div>

            <div className="cv-entry">
              <h3 className="cv-publication-title">
                The Evaluation of Aspect-Based Refactoring Method with Design Patterns Through GQM
              </h3>
              <p className="cv-publication-date">Sept 2023</p>
              <p className="cv-publication-authors">Hsu, K. H., <em>Meng, Z. D.</em>, Hou, A. W</p>
              <a href="https://doi.org/10.6688/JISE.202309_39(5).0002" className="cv-publication-doi" target="_blank" rel="noopener noreferrer">
                10.6688/JISE.202309_39(5).0002
              </a>
              <span className="cv-publication-journal">(JISE 2023)</span>
            </div>
          </section>
        </article>
      </div>
  );
}