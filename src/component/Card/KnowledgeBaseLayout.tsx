//baselayout
import React, { useState } from 'react';
import { KnowledgeBaseContent, SearchToolbar } from './KnowledgeBaseContent';
import { KnowledgeBaseHeader } from './KnowledgeBaseHeader';
import '../../styles/Base.scss';

const HeaderSearchBox = () => {
  return (
    <div className="headerSearchBox">
    </div>
  );
};

const KnowledgeBaseLayout: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentView, setCurrentView] = useState<'card' | 'list'>('card');
  const [currentPage, setCurrentPage] = useState(1);

  const initialData = Array(8).fill({
    id: 1,
    title: 'Collection Name',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore aliqua.',
    image: '/Knowledge Base Thumbnil11.svg',
    sections: 12,
    articles: 50
  }).map((item, index) => ({
    ...item,
    id: `kb-${index + 1}`
  }));

  const filteredData = initialData.filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="knowledgeBaseDashboard">
      <div className="container">
        <KnowledgeBaseHeader userName="User Name" />
        <HeaderSearchBox />
        <SearchToolbar
          currentView={currentView}
          onViewChange={setCurrentView}
          onSearch={setSearchTerm}
        />
        <div className="contentWrapper">
          <KnowledgeBaseContent
            data={filteredData}  
            currentView={currentView}
            currentPage={currentPage}
            onPageChange={setCurrentPage}
          />
        </div>
      </div>
    </div>
  );
};

export default KnowledgeBaseLayout;