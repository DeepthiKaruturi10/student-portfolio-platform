import React, { useState, useEffect } from 'react';
import { BookOpen, LogOut, Plus, FolderOpen, TrendingUp, Award, Edit, Trash2, Eye, X } from 'lucide-react';

const StudentDashboard = ({ user, onLogout }) => {
  const [projects, setProjects] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [viewProject, setViewProject] = useState(null);
  const [editingProject, setEditingProject] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    status: 'in-progress',
    progress: 0,
    milestones: ['']
  });

  useEffect(() => {
    loadProjects();
  }, [loadProjects]);

  const loadProjects = () => {
    const allProjects = JSON.parse(localStorage.getItem('projects') || '[]');
    const userProjects = allProjects.filter(p => p.userId === user.id);
    setProjects(userProjects);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const allProjects = JSON.parse(localStorage.getItem('projects') || '[]');

    if (editingProject) {
      const updatedProjects = allProjects.map(p =>
        p.id === editingProject.id ? { ...p, ...formData, updatedAt: new Date().toISOString() } : p
      );
      localStorage.setItem('projects', JSON.stringify(updatedProjects));
    } else {
      const newProject = {
        id: Date.now().toString(),
        userId: user.id,
        userName: user.name,
        ...formData,
        createdAt: new Date().toISOString(),
        feedback: []
      };
      allProjects.push(newProject);
      localStorage.setItem('projects', JSON.stringify(allProjects));
    }

    loadProjects();
    resetForm();
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this project?')) {
      const allProjects = JSON.parse(localStorage.getItem('projects') || '[]');
      const filtered = allProjects.filter(p => p.id !== id);
      localStorage.setItem('projects', JSON.stringify(filtered));
      loadProjects();
    }
  };

  const handleEdit = (project) => {
    setEditingProject(project);
    setFormData({
      title: project.title,
      description: project.description,
      status: project.status,
      progress: project.progress,
      milestones: project.milestones
    });
    setShowModal(true);
  };

  const resetForm = () => {
    setFormData({
      title: '',
      description: '',
      status: 'in-progress',
      progress: 0,
      milestones: ['']
    });
    setEditingProject(null);
    setShowModal(false);
  };

  const addMilestone = () => {
    setFormData({ ...formData, milestones: [...formData.milestones, ''] });
  };

  const updateMilestone = (index, value) => {
    const newMilestones = [...formData.milestones];
    newMilestones[index] = value;
    setFormData({ ...formData, milestones: newMilestones });
  };

  const removeMilestone = (index) => {
    const newMilestones = formData.milestones.filter((_, i) => i !== index);
    setFormData({ ...formData, milestones: newMilestones });
  };

  const stats = {
    total: projects.length,
    inProgress: projects.filter(p => p.status === 'in-progress').length,
    completed: projects.filter(p => p.status === 'completed').length,
    avgProgress: projects.length > 0 ? Math.round(projects.reduce((sum, p) => sum + parseInt(p.progress), 0) / projects.length) : 0
  };

  return (
    <div className="dashboard">
      <nav className="dashboard-nav">
        <div className="dashboard-logo">
          <BookOpen size={28} />
          PortfolioHub
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
          <h1>My Portfolio</h1>
          <p>Manage your projects and track your progress</p>
        </div>

        <div className="dashboard-stats">
          <div className="stat-card">
            <div className="stat-icon blue">
              <FolderOpen size={28} />
            </div>
            <div className="stat-info">
              <h3>{stats.total}</h3>
              <p>Total Projects</p>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon orange">
              <TrendingUp size={28} />
            </div>
            <div className="stat-info">
              <h3>{stats.inProgress}</h3>
              <p>In Progress</p>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon green">
              <Award size={28} />
            </div>
            <div className="stat-info">
              <h3>{stats.completed}</h3>
              <p>Completed</p>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon purple">
              <TrendingUp size={28} />
            </div>
            <div className="stat-info">
              <h3>{stats.avgProgress}%</h3>
              <p>Avg Progress</p>
            </div>
          </div>
        </div>

        <div className="action-buttons">
          <button className="btn-action" onClick={() => setShowModal(true)}>
            <Plus size={20} /> Add New Project
          </button>
        </div>

        {projects.length === 0 ? (
          <div className="empty-state">
            <div className="empty-state-icon">📁</div>
            <h3>No projects yet</h3>
            <p>Start by creating your first project</p>
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
                      <Eye size={16} /> View
                    </button>
                    <button className="btn-small btn-edit" onClick={() => handleEdit(project)}>
                      <Edit size={16} /> Edit
                    </button>
                    <button className="btn-small btn-delete" onClick={() => handleDelete(project.id)}>
                      <Trash2 size={16} /> Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {showModal && (
        <div className="modal-overlay" onClick={resetForm}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>{editingProject ? 'Edit Project' : 'Add New Project'}</h2>
              <button className="btn-close" onClick={resetForm}>
                <X size={24} />
              </button>
            </div>
            <div className="modal-body">
              <form className="modal-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Project Title</label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    placeholder="Enter project title"
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Description</label>
                  <textarea
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    placeholder="Describe your project"
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Status</label>
                  <select
                    value={formData.status}
                    onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                  >
                    <option value="pending">Pending</option>
                    <option value="in-progress">In Progress</option>
                    <option value="completed">Completed</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Progress ({formData.progress}%)</label>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={formData.progress}
                    onChange={(e) => setFormData({ ...formData, progress: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label>Milestones</label>
                  <div className="milestones-list">
                    {formData.milestones.map((milestone, index) => (
                      <div key={index} className="milestone-item">
                        <input
                          type="text"
                          value={milestone}
                          onChange={(e) => updateMilestone(index, e.target.value)}
                          placeholder={`Milestone ${index + 1}`}
                        />
                        {formData.milestones.length > 1 && (
                          <button
                            type="button"
                            className="btn-remove"
                            onClick={() => removeMilestone(index)}
                          >
                            <X size={16} />
                          </button>
                        )}
                      </div>
                    ))}
                  </div>
                  <button type="button" className="btn-add-milestone" onClick={addMilestone}>
                    <Plus size={16} /> Add Milestone
                  </button>
                </div>

                <button type="submit" className="btn-submit">
                  {editingProject ? 'Update Project' : 'Create Project'}
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

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

                {viewProject.feedback && viewProject.feedback.length > 0 && (
                  <div className="feedback-section">
                    <h3>Feedback</h3>
                    {viewProject.feedback.map((fb, index) => (
                      <div key={index} className="feedback-item">
                        <div className="feedback-header">
                          <span className="feedback-author">{fb.author}</span>
                          <span className="feedback-date">{new Date(fb.date).toLocaleDateString()}</span>
                        </div>
                        <p className="feedback-text">{fb.text}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StudentDashboard;
