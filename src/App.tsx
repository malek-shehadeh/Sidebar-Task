

import { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import SidebarSystem from './component/Sidebar/SidebarSystem';
import KnowledgeBaseLayout from './component/Card/KnowledgeBaseLayout';
import '../src/styles/Layout.scss';
import "./index.css"

function App() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [showSubmenu, setShowSubmenu] = useState(false);

  const handleSidebarToggle = (collapsed: boolean) => {
    setIsSidebarCollapsed(collapsed);
  };

  const handleSubmenuToggle = (show: boolean) => {
    setShowSubmenu(show);
  };

  return (
    <BrowserRouter>
      <div className="app-container">
        <SidebarSystem 
          onSidebarToggle={handleSidebarToggle}
          onSubmenuToggle={handleSubmenuToggle}
        />
        <main className={`mainContent ${isSidebarCollapsed ? 'expanded' : ''} ${showSubmenu ? 'with-submenu' : ''}`}>
          <Routes>
            <Route path="/home" element={<Navigate to="/" />} />
            <Route path="/" element={<KnowledgeBaseLayout />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;