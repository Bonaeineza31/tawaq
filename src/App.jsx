import React, { useState } from 'react';
import SignIn from './pages/signin';
import SignUp from './pages/signup';
import Layout from './components/Layout';
import Dashboard from './components/Dashboard';
import Project from './components/project';
import Transaction from './components/transaction';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('signin');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleNavigate = (page) => {
    const normalizedPage = page.toLowerCase();
    
    if (normalizedPage === 'dashboard' || normalizedPage === 'project') {
      setIsAuthenticated(true);
      setCurrentPage(normalizedPage);
    } else if (normalizedPage === 'signin' || normalizedPage === 'signup') {
      setCurrentPage(normalizedPage);
    } else {
      setIsAuthenticated(true);
      setCurrentPage(normalizedPage);
    }
  };

  // If authenticated, show content with layout
  if (isAuthenticated) {
    return (
      <Layout activeItem={currentPage} setActiveItem={handleNavigate}>
        {currentPage === 'dashboard' && <Dashboard />}
        {currentPage === 'project' && <Project />}
        {currentPage === 'transaction' && <Transaction />}
      </Layout>
    );
  }

  // Otherwise show sign in or sign up
  return (
    <div>
      {currentPage === 'signin' ? (
        <SignIn onNavigate={handleNavigate} />
      ) : (
        <SignUp onNavigate={handleNavigate} />
      )}
    </div>
  );
}

export default App;