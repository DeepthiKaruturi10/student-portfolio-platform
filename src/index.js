import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Initialize demo data
const initializeDemoData = () => {
  if (!localStorage.getItem('users')) {
    const demoUsers = [
      {
        id: '1',
        name: 'John Student',
        email: 'student@test.com',
        password: 'password',
        role: 'student',
        institution: 'Demo University'
      },
      {
        id: '2',
        name: 'Jane Teacher',
        email: 'admin@test.com',
        password: 'password',
        role: 'admin',
        institution: 'Demo University'
      }
    ];
    localStorage.setItem('users', JSON.stringify(demoUsers));
  }

  if (!localStorage.getItem('projects')) {
    const demoProjects = [
      {
        id: '1',
        userId: '1',
        userName: 'John Student',
        title: 'E-Commerce Website',
        description: 'A full-stack e-commerce platform built with React and Node.js featuring user authentication, product catalog, shopping cart, and payment integration.',
        status: 'in-progress',
        progress: 65,
        milestones: ['Design UI/UX', 'Implement Authentication', 'Build Product Catalog', 'Add Shopping Cart', 'Payment Integration'],
        createdAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
        feedback: [
          {
            author: 'Jane Teacher',
            text: 'Great progress! The UI looks professional. Consider adding more error handling for the payment integration.',
            date: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString()
          }
        ]
      },
      {
        id: '2',
        userId: '1',
        userName: 'John Student',
        title: 'Machine Learning Image Classifier',
        description: 'An AI-powered image classification system using TensorFlow and Python. Trained on custom dataset with 95% accuracy.',
        status: 'completed',
        progress: 100,
        milestones: ['Data Collection', 'Model Training', 'Testing & Validation', 'Deployment'],
        createdAt: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString(),
        feedback: [
          {
            author: 'Jane Teacher',
            text: 'Excellent work! The model accuracy is impressive. Well documented and presented.',
            date: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString()
          }
        ]
      }
    ];
    localStorage.setItem('projects', JSON.stringify(demoProjects));
  }
};

initializeDemoData();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
