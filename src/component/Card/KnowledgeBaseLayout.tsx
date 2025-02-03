
// Layout.tsx
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

 const staticData = Array(8).fill({
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
       
       <KnowledgeBaseContent
         data={staticData}
         currentView={currentView}
         currentPage={currentPage}
         onPageChange={setCurrentPage}
       />
     </div>
   </div>
 );
};

export default KnowledgeBaseLayout;