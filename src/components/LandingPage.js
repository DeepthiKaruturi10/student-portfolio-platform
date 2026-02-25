import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen, Upload, TrendingUp, Users, Award, Target } from 'lucide-react';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-page">
      <nav className="landing-nav">
        <div className="landing-logo">
          <BookOpen size={32} />
          PortfolioHub
        </div>
        <div className="landing-nav-buttons">
          <button className="btn-nav" onClick={() => navigate('/login')}>Login</button>
          <button className="btn-nav" onClick={() => navigate('/register')}>Register</button>
        </div>
      </nav>

      <div className="landing-hero">
        <h1>Showcase Your Academic Journey</h1>
        <p>A comprehensive platform for students to display projects, track progress, and build impressive portfolios</p>
        <button className="btn-primary-large" onClick={() => navigate('/register')}>Get Started</button>
      </div>

      <div className="landing-features">
        <div className="feature-card">
          <div className="feature-icon">
            <Upload size={48} />
          </div>
          <h3>Upload Projects</h3>
          <p>Easily upload and manage your academic projects with descriptions and media files</p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">
            <TrendingUp size={48} />
          </div>
          <h3>Track Progress</h3>
          <p>Monitor project milestones and visualize your progress with intuitive tracking tools</p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">
            <Users size={48} />
          </div>
          <h3>Get Feedback</h3>
          <p>Receive valuable feedback from teachers and mentors to improve your work</p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">
            <Award size={48} />
          </div>
          <h3>Build Portfolio</h3>
          <p>Create a professional portfolio showcasing your best work and achievements</p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">
            <Target size={48} />
          </div>
          <h3>Set Milestones</h3>
          <p>Break down projects into manageable milestones and track completion</p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">
            <BookOpen size={48} />
          </div>
          <h3>Organize Work</h3>
          <p>Keep all your academic work organized in one centralized platform</p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
