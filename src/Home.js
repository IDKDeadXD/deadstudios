// src/Home.js
import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <div className="title">
        <img src="/images/title-logo.png" alt="Dead Studios Logo" />
      </div>
      <div className="projects">
        <h2>Our Projects</h2>
        <div className="project-list">
          {/* Placeholder for project cards */}
          <div className="project-card">Project 1</div>
          <div className="project-card">Project 2</div>
          <div className="project-card">Project 3</div>
        </div>
      </div>
    </div>
  );
}

export default Home;
