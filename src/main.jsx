import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowUpRight,
  Github,
  LinkedinIcon,
  Mail,
  MapPin,
  Download,
  Menu,
  X,
  ExternalLink
} from 'lucide-react';

import './styles.css';

const G = 'https://github.com/nithyasrid';
const L = 'https://www.linkedin.com/in/nithya-sri-d-b94b86281/';
const E = 'mailto:nithyasridevasenan9706@gmail.com';

const projects = [
  [
    '01',
    'ShopFlow',
    'Intelligent E-Commerce Data Platform',
    'An end-to-end e-commerce data platform for customer, order, payment, inventory, and product events across batch and real-time workflows.',
    [
      'Python',
      'SQL',
      'Java',
      'Spring Boot',
      'PostgreSQL',
      'Apache Kafka',
      'Apache Spark',
      'Apache Airflow',
      'BigQuery'
    ],
    'https://github.com/nithyasrid/shopflow-hybrid-enterprise',
    'DE'
  ],
  [
    '02',
    'CargoPulse 2.0',
    'Smart Supply Chain Intelligence Platform',
    'A supply-chain intelligence platform for shipment, inventory, warehouse, fleet, and delivery events and operational insights.',
    [
      'Python',
      'SQL',
      'Java',
      'Spring Boot',
      'PostgreSQL',
      'Apache Kafka',
      'Apache Spark',
      'Apache Airflow',
      'BigQuery',
      'Docker'
    ],
    'https://github.com/nithyasrid/cargopulse-2.0',
    'DE'
  ],
  [
    '03',
    'MediTrust',
    'Hospital Data Reliability & Patient Safety Platform',
    'A healthcare data reliability platform focused on duplicate, missing, invalid, and inconsistent healthcare records.',
    [
      'Python',
      'SQL',
      'Java',
      'Spring Boot',
      'PostgreSQL',
      'Apache Spark',
      'Apache Kafka',
      'Apache Airflow',
      'BigQuery'
    ],
    'https://github.com/nithyasrid/meditrust',
    'DE'
  ],
  [
    '04',
    'FlashScale',
    'Distributed Flash-Sale & Inventory Reservation Platform',
    'A high-concurrency backend platform built around the challenge of limited inventory and concurrent buyers.',
    [
      'Java 21',
      'Spring Boot',
      'PostgreSQL',
      'Redis',
      'Apache Kafka',
      'Docker',
      'JUnit',
      'Mockito'
    ],
    'https://github.com/nithyasrid/FlashScale-Distributed-Flash-Sale-Inventory-Reservation-Platform',
    'SDE'
  ],
  [
    '05',
    'EventMesh',
    'Distributed Job & Workflow Execution Platform',
    'A distributed job-execution platform for asynchronous submission, worker coordination, execution, and monitoring.',
    [
      'Java 21',
      'Spring Boot',
      'Apache Kafka',
      'PostgreSQL',
      'Docker',
      'JUnit',
      'Mockito'
    ],
    'https://github.com/nithyasrid/Eventmesh',
    'SDE'
  ],
  [
    '06',
    'Sentinel',
    'Distributed Identity & Access Management Platform',
    'A backend identity and access-management platform for secure authentication and authorization.',
    [
      'Java 21',
      'Spring Boot',
      'Spring Security',
      'JWT',
      'PostgreSQL',
      'Redis',
      'Docker',
      'JUnit',
      'Mockito'
    ],
    'https://github.com/nithyasrid/Sentinel-Distributed-Identity-Access-Management-Platform',
    'SDE'
  ]
];

const bullets = {
  ShopFlow: [
    'Designed an end-to-end e-commerce data platform across batch and real-time workflows.',
    'Built ETL pipelines using Python, Spark, and Airflow for analytics-ready datasets and KPIs.',
    'Developed Java Spring Boot services and REST APIs with JPA/PostgreSQL.'
  ],

  'CargoPulse 2.0': [
    'Designed a supply-chain intelligence platform for operational events.',
    'Developed batch and streaming pipelines using Python, Spark, Kafka, and Airflow.',
    'Developed Java Spring Boot services for shipment, warehouse, inventory, fleet, and delivery management.'
  ],

  MediTrust: [
    'Designed a healthcare data reliability platform for duplicate, missing, invalid, and inconsistent data.',
    'Built automated data-quality and ETL workflows using Python, SQL, Spark, and Airflow.',
    'Built Java Spring Boot backend modules for hospital workflows.'
  ],

  FlashScale: [
    'Designed a high-concurrency flash-sale platform with Java, Spring Boot, PostgreSQL, Redis, and Kafka.',
    'Implemented atomic inventory reservation, locking, idempotency, caching, asynchronous events, retries, and failure recovery.',
    'Developed secure REST APIs with validation, RBAC, logging, testing, and Docker.'
  ],

  EventMesh: [
    'Built a distributed job-execution platform using Java, Spring Boot, Kafka, and PostgreSQL.',
    'Implemented worker heartbeats, retries, timeouts, idempotent execution, dead-letter handling, and recovery.',
    'Developed REST APIs and concurrent worker services with validation, logging, and integration testing.'
  ],

  Sentinel: [
    'Developed an identity and access-management platform using Java, Spring Boot, PostgreSQL, and Redis.',
    'Implemented JWT token management, revocation, password hashing, rate limiting, account lockout, and RBAC.',
    'Built REST APIs with audit logging, validation, exception handling, Docker, and testing.'
  ]
};

const skills = [
  ['Programming', 'Java, Python, SQL'],
  [
    'Data Engineering',
    'ETL / ELT, Data Quality, Data Validation, Data Modeling, Batch, Streaming'
  ],
  ['Big Data & Streaming', 'Apache Spark, PySpark, Apache Kafka'],
  ['Orchestration', 'Apache Airflow'],
  ['Backend', 'Spring Boot, Spring MVC, REST APIs, JPA, Hibernate'],
  [
    'Databases & Warehousing',
    'PostgreSQL, MySQL, Snowflake, Google BigQuery'
  ],
  ['Cloud & DevOps', 'Google Cloud Platform, AWS, Docker, Linux'],
  [
    'Software Engineering',
    'OOP, DSA, DBMS, Operating Systems, Computer Networks, System Design'
  ],
  [
    'Architecture',
    'Layered Architecture, RESTful Services, Event-Driven Architecture, Microservices Fundamentals'
  ],
  ['Security', 'JWT Authentication, Role-Based Access Control'],
  ['Tools', 'Git, GitHub, Postman, Pandas, JUnit, Mockito']
];

function Flow() {
  return (
    <div className="flow">
      <svg viewBox="0 0 700 400">
        <path d="M-20 290C120 40 220 350 350 150S560 70 720 270" />
        <path
          className="p2"
          d="M-20 315C120 80 220 370 365 175S565 95 720 300"
        />
      </svg>

      {['DATA', 'SYSTEMS', 'SERVICES', 'INSIGHTS'].map((x, i) => (
        <motion.span
          className="node"
          style={{
            left: `${8 + i * 28}%`,
            top: `${55 - (i % 2) * 28}%`
          }}
          animate={{ y: [0, -8, 0] }}
          transition={{
            duration: 4 + i,
            repeat: Infinity
          }}
          key={x}
        >
          {x}
        </motion.span>
      ))}
    </div>
  );
}

function Card({ p, open }) {
  return (
    <motion.article
      className="card"
      whileHover={{ y: -5 }}
    >
      <span className="num">{p[0]}</span>

      <div>
        <div className="cardhead">
          <div>
            <small>{p[1]}</small>
            <h3>{p[2]}</h3>
          </div>

          <button
            onClick={() => open(p)}
            aria-label={`View ${p[1]} project`}
          >
            <ArrowUpRight />
          </button>
        </div>

        <p>{p[3]}</p>

        <ul>
          {bullets[p[1]].map((x) => (
            <li key={x}>{x}</li>
          ))}
        </ul>

        <div className="chips">
          {p[4].map((x) => (
            <span key={x}>{x}</span>
          ))}
        </div>

        <a
          href={p[5]}
          target="_blank"
          rel="noreferrer"
        >
          GitHub <ExternalLink size={14} />
        </a>
      </div>
    </motion.article>
  );
}

function Modal({ p, close }) {
  return (
    <AnimatePresence>
      {p && (
        <motion.div
          className="back"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={close}
        >
          <motion.div
            className="modal"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 30, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="close"
              onClick={close}
              aria-label="Close project details"
            >
              <X />
            </button>

            <small>{p[1]}</small>

            <h2>{p[2]}</h2>

            <p>{p[3]}</p>

            <h4>ENGINEERING CHALLENGES</h4>

            <div className="chips">
              {p[4].map((x) => (
                <span key={x}>{x}</span>
              ))}
            </div>

            <div className="arch">
              CLIENT → API → SERVICES →{' '}
              {p[1] === 'FlashScale'
                ? 'REDIS / POSTGRESQL'
                : p[1] === 'EventMesh'
                ? 'KAFKA / WORKERS'
                : 'SPRING SECURITY / JWT'}{' '}
              → RELIABLE SYSTEM
            </div>

            <a
              className="cta dark"
              href={p[5]}
              target="_blank"
              rel="noreferrer"
            >
              Open GitHub <Github size={16} />
            </a>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function App() {
  const [menu, setMenu] = useState(false);
  const [sel, setSel] = useState(null);

  const go = (id) => {
    setMenu(false);

    document
      .getElementById(id)
      ?.scrollIntoView({
        behavior: 'smooth'
      });
  };

  return (
    <>
      <nav>
        <button
          className="logo"
          onClick={() => go('home')}
          aria-label="Go to home"
        >
          N<span>·</span>SD
        </button>

        <div className={`links ${menu ? 'show' : ''}`}>
          {[
            'about',
            'engineering',
            'projects',
            'skills',
            'achievements',
            'contact'
          ].map((x) => (
            <button
              key={x}
              onClick={() => go(x)}
            >
              {x}
            </button>
          ))}
        </div>

        <div className="navright">
          <a
            href={G}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>

          <button
            className="hamb"
            onClick={() => setMenu(!menu)}
            aria-label="Toggle navigation"
          >
            {menu ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      <main>
        <section id="home" className="hero">
          <div>
            <small>DATA ENGINEER · SOFTWARE ENGINEER</small>

            <h1>
              Nithya
              <br />
              <em>Sri D</em>
            </h1>

            <div className="tag">
              Pursuit of Kairos
            </div>

            <p className="lead">
              Building data platforms, distributed systems,
              and production-style backend software.
            </p>

            <p className="muted">
              I like understanding how things move — data,
              systems, services, and ideas.
            </p>

            <div className="actions">
              <button
                className="cta dark"
                onClick={() => go('projects')}
              >
                Explore my work
                <ArrowUpRight size={16} />
              </button>

              <a
                className="cta light"
                href="/resume.pdf"
                download
              >
                Download resume
                <Download size={16} />
              </a>
            </div>

            <div className="meta">
              <MapPin size={14} />
              Tamil Nadu, India · Currently building in Data
              Engineering + Java Backend
            </div>
          </div>

          <Flow />
        </section>

        <section id="about" className="split">
          <aside>01 / ABOUT</aside>

          <div>
            <small>A LITTLE ABOUT ME</small>

            <h2>
              Curious about what happens{' '}
              <em>underneath.</em>
            </h2>

            <p>
              I am a B.E. Electronics and Communication
              Engineering student at KGiSL Institute of
              Technology, focused primarily on Data Engineering
              while building strong Java Backend and Software
              Engineering capabilities.
            </p>

            <p>
              My work sits at the intersection of data and
              software — from ETL pipelines and streaming
              systems to APIs, backend services, and distributed
              architectures.
            </p>

            <p>
              I enjoy understanding systems from the inside:
              how data moves, how services communicate, what
              happens when something fails, and how software
              can remain reliable as it grows.
            </p>
          </div>
        </section>

        <section
          id="engineering"
          className="darksec split"
        >
          <aside>02 / KAIROS</aside>

          <div>
            <small>PURSUIT OF KAIROS</small>

            <h2>
              The right moment to{' '}
              <em>understand.</em>
            </h2>

            <p>
              Kairos is about the right moment — not simply
              time passing, but recognizing when curiosity,
              opportunity, and action align.
            </p>

            <p>
              For me, engineering is a pursuit of those
              moments: the moment a difficult concept becomes
              clear, a system begins to work, or an idea turns
              into something real.
            </p>

            <div className="steps">
              {[
                'CURIOUS',
                'LEARN',
                'BUILD',
                'UNDERSTAND',
                'CREATE'
              ].map((x, i) => (
                <div key={x}>
                  <b>0{i + 1}</b>
                  {x}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="split">
          <aside>03 / PRINCIPLES</aside>

          <div>
            <small>
              HOW I THINK ABOUT ENGINEERING
            </small>

            <div className="principles">
              {[
                [
                  'Understand First',
                  'I prefer understanding the problem before reaching for a technology.'
                ],
                [
                  'Build Real Systems',
                  'I learn best by building systems with real constraints, trade-offs, and failure cases.'
                ],
                [
                  'Keep It Simple',
                  'Good engineering should make complexity manageable, not make it look impressive.'
                ],
                [
                  'Keep Exploring',
                  'Technology keeps changing. Curiosity is the part worth keeping.'
                ]
              ].map((x, i) => (
                <div key={x[0]}>
                  <span>0{i + 1}</span>

                  <h3>{x[0]}</h3>

                  <p>{x[1]}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="projects">
          <div className="wrap">
            <small>04 / WORK</small>

            <h2>
              Where data meets{' '}
              <em>systems.</em>
            </h2>

            <p className="intro">
              Six systems built around data movement,
              reliability, concurrency, security, and
              distributed architecture.
            </p>

            <div className="cat">
              <h3>01 · DATA ENGINEERING</h3>
              <p>
                Platforms that turn events into reliable data.
              </p>
            </div>

            {projects
              .filter((x) => x[6] === 'DE')
              .map((p) => (
                <Card
                  key={p[1]}
                  p={p}
                  open={setSel}
                />
              ))}

            <div className="cat sde">
              <h3>
                02 · SOFTWARE ENGINEERING / SDE
              </h3>

              <p>
                Backend systems where software gets
                interesting.
              </p>
            </div>

            {projects
              .filter((x) => x[6] === 'SDE')
              .map((p) => (
                <Card
                  key={p[1]}
                  p={p}
                  open={setSel}
                />
              ))}
          </div>
        </section>

        <section id="skills" className="split">
          <aside>05 / TOOLKIT</aside>

          <div>
            <small>TOOLS I BUILD WITH</small>

            <h2>
              A stack with a{' '}
              <em>reason.</em>
            </h2>

            <div className="skillgrid">
              {skills.map((s) => (
                <div key={s[0]}>
                  <h4>{s[0]}</h4>
                  <p>{s[1]}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="achievements"
          className="split"
        >
          <aside>06 / MILESTONES</aside>

          <div>
            <small>
              A FEW MOMENTS WORTH KEEPING
            </small>

            <div className="mile">
              <b>2024</b>

              <div>
                <h3>
                  Advanced Level Winner — PyExpo24
                </h3>

                <p>
                  KGiSL Institute of Technology
                </p>
              </div>
            </div>

            <div className="mile">
              <b>2026</b>

              <div>
                <h3>
                  Upcoming TEDxKGCAS Speaker
                </h3>

                <p>
                  Officially selected to deliver a TEDx
                  talk on 17 August 2026.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="split current">
          <aside>07 / NOW</aside>

          <div>
            <small>CURRENTLY EXPLORING</small>

            <h2>
              Two paths, one{' '}
              <em>curiosity.</em>
            </h2>

            <div className="paths">
              <div>
                <b>PRIMARY</b>

                <h3>Data Engineering</h3>

                <p>
                  Python → SQL → Spark → Kafka →
                  Airflow → Cloud → Data Architecture
                </p>
              </div>

              <div>
                <b>SECONDARY</b>

                <h3>Java Backend / SDE</h3>

                <p>
                  Java → DSA → Spring Boot →
                  PostgreSQL → Redis → Kafka →
                  Distributed Systems → System Design
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="nature">
          <div className="land">
            <i />
          </div>

          <div>
            <small>OUTSIDE THE STACK</small>

            <h2>
              Not everything needs to live inside a{' '}
              <em>terminal window.</em>
            </h2>

            <p>
              Technology is a big part of what I build,
              but I don't want my entire identity to live
              inside a terminal window.
            </p>

            <p>
              I like keeping space for curiosity,
              calmness, and the things that make ideas
              feel alive.
            </p>
          </div>
        </section>

        <section
          id="contact"
          className="contact"
        >
          <small>08 / CONTACT</small>

          <h2>
            Let's build something{' '}
            <em>meaningful.</em>
          </h2>

          <p>
            Whether it's a data platform, backend system,
            or simply an interesting engineering problem,
            I'm always open to thoughtful conversations
            and opportunities to build.
          </p>

          <div className="contactline">
            <a href={E}>
              <Mail />
              nithyasridevasenan9706@gmail.com
            </a>

            <a href="tel:+919345712616">
              +91 9345712616
            </a>

            <span>
              <MapPin />
              Tamil Nadu, India
            </span>
          </div>

          <div className="actions">
            <a
              className="cta dark"
              href={E}
            >
              Email me
              <Mail size={16} />
            </a>

            <a
              className="cta light"
              href={L}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
              <LinkedinIcon size={16} />
            </a>

            <a
              className="cta light"
              href={G}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
              <Github size={16} />
            </a>

            <a
              className="cta light"
              href="/resume.pdf"
              download
            >
              Download resume
              <Download size={16} />
            </a>
          </div>
        </section>
      </main>

      <footer>
        <div>
          <b>NITHYA SRI D</b>
          <span>
            Data Engineer · Software Engineer
          </span>
        </div>

        <i>Pursuit of Kairos</i>

        <small>
          Built with curiosity, patience, and a little
          bit of code. © 2026
        </small>
      </footer>

      <Modal
        p={sel}
        close={() => setSel(null)}
      />
    </>
  );
}

createRoot(
  document.getElementById('root')
).render(
  <App />
);
