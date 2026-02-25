import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LogIn } from 'lucide-react';

const Login = ({ onLogin }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    role: 'student'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find(u => u.email === formData.email && u.password === formData.password && u.role === formData.role);
    
    if (user) {
      onLogin(user);
      navigate(user.role === 'admin' ? '/admin' : '/student');
    } else {
      alert('Invalid credentials. Try:\nStudent: student@test.com / password\nAdmin: admin@test.com / password');
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <LogIn size={48} color="#667eea" />
          <h2>Welcome Back</h2>
          <p>Login to access your portfolio</p>
        </div>

        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
            />
          </div>

          <div className="form-group">
            <label>Login As</label>
            <select name="role" value={formData.role} onChange={handleChange}>
              <option value="student">Student</option>
              <option value="admin">Admin/Teacher</option>
            </select>
          </div>

          <button type="submit" className="btn-submit">Login</button>
        </form>

        <div className="auth-footer">
          Don't have an account? <a href="/register">Register here</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
