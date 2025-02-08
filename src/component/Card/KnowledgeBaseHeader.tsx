//header
import React from 'react';
import { KnowledgeBaseHeaderProps } from '../../types';
import '../../styles/Base.scss';

export const KnowledgeBaseHeader: React.FC<KnowledgeBaseHeaderProps> = () => {
  return (
    <>
      <div className="headerContent">
        <div className="headerTitle">
          <h1>Knowledge Base</h1>
        </div>
        <nav className="navigation">
          <a href="/" className="navigationItem">
            <img src="/Home.svg" alt="" aria-hidden="true" />
            <span>Home</span>
          </a>
          <a href="/notifications" className="navigationItem">
            <img src="/Notification.svg" alt="" aria-hidden="true" />
            <span>Notifications</span>
          </a>
          <div className="navigationItem">
            <img src="/Group.svg" alt="" aria-hidden="true" />
            <span>English</span>
          </div>
          <div className="navigationItem">
            <div className="imageWrapper">
              <img src="/Oval.svg" alt="" aria-hidden="true" className="backgroundImage" />
              <img src="/Profile.svg" alt="" aria-hidden="true" className="profileImage" />
            </div>
            <span>UserNames</span>
            <img src="/Chart graph 5.svg" alt="" aria-hidden="true" />
          </div>
        </nav>
      </div>

    </>
  );
};