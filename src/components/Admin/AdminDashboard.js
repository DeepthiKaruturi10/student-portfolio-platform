import React, { useState, useEffect } from 'react';
import { BookOpen, LogOut, Users, FolderOpen, MessageSquare, Eye, X } from 'lucide-react';

const AdminDashboard = ({ user, onLogout }) => {
  const [projects, setProjects] = useState([]);
  const [viewProject, setViewProject] = useState(null);
  const [feedbackText, setFeedbackText] = useState('');

  useEffect(() => {
    loadProjects();
  }, []);

  const loadProjects = () => {
    const allProjects = JSON.parse(localStorage.getItem('projects') || '[]');
    setProjects(allProjects);
  };

  const handleFeedback = (e) => {
    e.preventDefault();
    if (!feedbackText.trim()) return;

    const allProjects = JSON.parse(localStorage.getItem('projects') || '[]');
    const updatedProjects = allProjects.map(p => {
      if (p.id === viewProject.id) {
        const newFeedback = {
          author: user.name,
          text: feedbackText,
          date: new Date().toISOString()
        };
        return {
          ...p,
          feedback: [...(p.feedback || []), newFeedback]
        };
      }
      return p;
    });

    localStorage.setItem('projects', JSON.stringify(updatedProjects));
    setFeedbackText('');
    loadProjects();
    
    const updatedProject = updatedProjects.find(p => p.id === viewProject.id);
    setViewProject(updatedProject);
  };

  const getStudents = () => {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    return users.filter(u => u.role === 'student');
  };

  const stats = {
    totalProjects: projects.length,
    totalStudents: getStudents().length,
    pendingReview: projects.filter(p => !p.feedback || p.feedback.length === 0).length,
    completed: projects.filter(p => p.status === 'completed').length
  };

  return (
    <div className="dashboard">
      <nav className="dashboard-nav">
        <div className="dashboard-logo">
          <BookOpen size={28} />
          PortfolioHub Admin
        </div>
        <div className="dashboard-user">
          <div className="user-info">
            <div className="user-name">{user.name}</div>
            <div className="user-role">{user.role}</div>
          </div>
          <button className="btn-logout" onClick={onLogout}>
            <LogOut size={18} /> Logout
          </button>
        </div>
      </nav>

      <div className="dashboard-content">
        <div className="dashboard-header">
          <h1>Admin Dashboard</h1>
          <p>Review student projects and provide feedback</p>
        </div>

        <div className="dashboard-stats">
          <div className="stat-card">
            <div className="stat-icon blue">
              <FolderOpen size={28} />
            </div>
            <div className="stat-info">
              <h3>{stats.totalProjects}</h3>
              <p>Total Projects</p>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon purple">
              <Users size={28} />
            </div>
            <div className="stat-info">
              <h3>{stats.totalStudents}</h3>
              <p>Students</p>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon orange">
              <MessageSquare size={28} />
            </div>
            <div className="stat-info">
              <h3>{stats.pendingReview}</h3>
              <p>Pending Review</p>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon green">
              <FolderOpen size={28} />
            </div>
            <div className="stat-info">
              <h3>{stats.completed}</h3>
              <p>Completed</p>
            </div>
          </div>
        </div>

        {projects.length === 0 ? (
          <div className="empty-state">
            <div className="empty-state-icon">📂</div>
            <h3>No projects submitted yet</h3>
            <p>Student projects will appear here</p>
          </div>
        ) : (
          <div className="projects-grid">
            {projects.map(project => (
              <div key={project.id} className="project-card">
                <div className="project-image">
                  <FolderOpen size={64} />
                </div>
                <div className="project-content">
                  <div className="project-header">
                    <div>
                      <h3 className="project-title">{project.title}</h3>
                      <p style={{ fontSize: '0.9rem', color: '#666', marginTop: '0.3rem' }}>
                        by {project.userName}
                      </p>
                    </div>
                    <span className={`project-status status-${project.status}`}>
                      {project.status.replace('-', ' ')}
                    </span>
                  </div>
                  <p className="project-description">{project.description}</p>
                  <div className="project-meta">
                    <span>📅 {new Date(project.createdAt).toLocaleDateString()}</span>
                    <span>💬 {project.feedback?.length || 0} feedback</span>
                  </div>
                  <div className="progress-bar">
                    <div className="progress-fill" style={{ width: `${project.progress}%` }}></div>
                  </div>
                  <div className="project-actions">
                    <button className="btn-small btn-view" onClick={() => setViewProject(project)}>
                      <Eye size={16} /> View & Review
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {viewProject && (
        <div className="modal-overlay" onClick={() => setViewProject(null)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>{viewProject.title}</h2>
              <button className="btn-close" onClick={() => setViewProject(null)}>
                <X size={24} />
              </button>
            </div>
            <div className="modal-body">
              <div className="project-detail">
                <h3>Student</h3>
                <p>{viewProject.userName}</p>

                <h3>Description</h3>
                <p>{viewProject.description}</p>

                <h3>Status</h3>
                <span className={`project-status status-${viewProject.status}`}>
                  {viewProject.status.replace('-', ' ')}
                </span>

                <h3 style={{ marginTop: '1rem' }}>Progress</h3>
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: `${viewProject.progress}%` }}></div>
                </div>
                <p>{viewProject.progress}% Complete</p>

                {viewProject.milestones && viewProject.milestones.length > 0 && (
                  <div className="milestones-display">
                    <h3>Milestones</h3>
                    {viewProject.milestones.map((milestone, index) => (
                      milestone && (
                        <div key={index} className="milestone-display-item">
                          ✓ {milestone}
                        </div>
                      )
                    ))}
                  </div>
                )}

                <div className="feedback-section">
                  <h3>Provide Feedback</h3>
                  <form onSubmit={handleFeedback} style={{ marginBottom: '1.5rem' }}>
                    <div className="form-group">
                      <textarea
                        value={feedbackText}
                        onChange={(e) => setFeedbackText(e.target.value)}
                        placeholder="Write your feedback here..."
                        required
                      />
                    </div>
                    <button type="submit" className="btn-submit">Submit Feedback</button>
                  </form>

                  {viewProject.feedback && viewProject.feedback.length > 0 && (
                    <>
                      <h3>Previous Feedback</h3>
                      {viewProject.feedback.map((fb, index) => (
                        <div key={index} className="feedback-item">
                          <div className="feedback-header">
                            <span className="feedback-author">{fb.author}</span>
                            <span className="feedback-date">{new Date(fb.date).toLocaleDateString()}</span>
                          </div>
                          <p className="feedback-text">{fb.text}</p>
                        </div>
                      ))}
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
