import React from 'react';
import { Plus, Users } from 'lucide-react';
import './Project.css';

const Project = () => {
  const projects = [
    {
      id: 1,
      title: 'Ingeri Health',
      duration: '6 months',
      status: 'ON TRACK',
      statusColor: 'on-track',
      category: 'Expenses',
      revenue: 'Revenue generated',
      members: 6,
    },
    {
      id: 2,
      title: 'Ingeri Health',
      duration: '6 months',
      status: 'DELAYED',
      statusColor: 'delayed',
      category: '',
      revenue: '',
      members: 6,
    },
    {
      id: 3,
      title: 'Ingeri Health',
      duration: '6 months',
      status: 'COMPLETED',
      statusColor: 'completed',
      category: '',
      revenue: '',
      members: 6,
    },
    {
      id: 4,
      title: 'Ingeri Health',
      duration: '6 months',
      status: 'COMPLETED',
      statusColor: 'completed',
      category: '',
      revenue: '',
      members: 6,
    },
    {
      id: 5,
      title: 'Ingeri Health',
      duration: '6 months',
      status: 'ON TRACK',
      statusColor: 'on-track',
      category: '',
      revenue: '',
      members: 6,
    },
  ];

  const colors = ['#2563eb', '#ef4444', '#10b981', '#d946ef', '#2563eb'];

  return (
    <div className="project-container">
      <div className="project-header">
        <h1>Projects</h1>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={project.id} className="project-card">
            <div className="project-top">
              <div
                className="project-number"
                style={{ backgroundColor: colors[index % colors.length] }}
                aria-label={`Project ${project.id}`}
              >
                {project.id}
              </div>
              <button className="view-btn" type="button">
                View
              </button>
            </div>

            <h3 className="project-title">{project.title}</h3>

            <div className="project-duration">
              <span className="duration-label">Duration</span>
              <span className="duration-value">{project.duration}</span>
            </div>

            <div className="project-middle">
              <div>
                {project.category && (
                  <div className="project-category">{project.category}</div>
                )}
                {project.revenue && (
                  <div className="project-revenue">{project.revenue}</div>
                )}
              </div>
              <div className={`project-status status-${project.statusColor}`}>
                {project.status}
              </div>
            </div>

            <div className="project-bottom">
              <div className="members-avatars" aria-label="Project members">
                {Array.from({ length: project.members }).map((_, i) => (
                  <div key={`${project.id}-member-${i}`} className="member-avatar">
                    <Users size={14} aria-hidden="true" />
                  </div>
                ))}
              </div>
              <span className="members-count">{project.members} members</span>
            </div>
          </div>
        ))}

        <div className="project-card add-project-card">
          <div className="add-project-content">
            <Plus
              size={48}
              strokeWidth={1.5}
              style={{
                background: 'linear-gradient(135deg, #4f46e5 0%, #06b6d4 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
              aria-label="Add project"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
