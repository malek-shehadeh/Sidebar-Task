// import React, { useState } from 'react';
// import { SideMenu } from '../Sidebar/SideMenu';
// import { KnowledgeBaseHeader } from './KnowledgeBaseHeader';
// import { KnowledgeBaseContent, SearchToolbar } from './KnowledgeBaseContent';
// import '../../styles/Layout.scss';
// import '../../styles/Base.scss';

// const KnowledgeBaseLayout: React.FC = () => {
//   const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [currentView, setCurrentView] = useState<'card' | 'list'>('card');
//   const [currentPage, setCurrentPage] = useState(1);

//   const mockData = Array.from({ length: 8 }, (_, i) => ({
//     id: `kb-${i + 1}`,
//     title: 'Collection Name',
//     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
//     image: `/collection-${i + 1}.jpg`,
//     sections: 12,
//     articles: 50,
//   }));

//   const filteredData = mockData.filter((card) =>
//     card.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     card.description.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className="layout">
//       <SideMenu onToggle={setIsSidebarCollapsed} />
//       <main className={`mainContent ${isSidebarCollapsed ? 'expanded' : ''}`}>
//         <div className="knowledgeBaseDashboard">
//           <div className="container">
//             <KnowledgeBaseHeader userName="User Name" />
//             <SearchToolbar
//               currentView={currentView}
//               onViewChange={setCurrentView}
//               onSearch={setSearchTerm}
//             />
//             <KnowledgeBaseContent
//               data={filteredData}
//               currentView={currentView}
//               currentPage={currentPage}
//               onPageChange={setCurrentPage}
//             />
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default KnowledgeBaseLayout;


// // KnowledgeBaseLayout.tsx
// import React, { useState } from 'react';
// import { KnowledgeBaseContent, SearchToolbar } from './KnowledgeBaseContent';
// import { KnowledgeBaseHeader } from './KnowledgeBaseHeader';
// import '../../styles/Base.scss';

// const KnowledgeBaseLayout: React.FC = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [currentView, setCurrentView] = useState<'card' | 'list'>('card');
//   const [currentPage, setCurrentPage] = useState(1);

//   const mockData = Array.from({ length: 8 }, (_, i) => ({
//     id: `kb-${i + 1}`,
//     title: 'Collection Name',
//     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
//     image: `/collection-${i + 1}.jpg`,
//     sections: 12,
//     articles: 50,
//   }));

//   const filteredData = mockData.filter((card) =>
//     card.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     card.description.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className="knowledgeBaseDashboard">
//       <div className="container">
//         <KnowledgeBaseHeader userName="User Name" />
//         <SearchToolbar
//           currentView={currentView}
//           onViewChange={setCurrentView}
//           onSearch={setSearchTerm}
//         />
//         <KnowledgeBaseContent
//           data={filteredData}
//           currentView={currentView}
//           currentPage={currentPage}
//           onPageChange={setCurrentPage}
//         />
//       </div>
//     </div>
//   );
// };

// export default KnowledgeBaseLayout;


// KnowledgeBaseLayout.tsx
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
   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
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