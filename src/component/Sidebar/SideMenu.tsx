

// SideMenu.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MenuItem } from './MenuItem';
import { sidebarData } from '../data/sidebarData';
import { SearchBarProps } from './Types';

import '../../styles/Sidebar.scss';

const SearchBar: React.FC<SearchBarProps & { onSearch: (term: string) => void }> = ({
  placeholder = 'Search',
  isCollapsed = false,
  onSearch
}) => {
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(e.target.value);
  };

  return (
    <div className={`searchBar ${isCollapsed ? 'searchBarCollapsed' : ''}`} role="search">
      <div className="searchLeft">
        <img
          src="/search-normal.svg"
          alt="Search"
          className="searchIcon"
          width={24}
          height={24}
        />
        <label className="visually-hidden" htmlFor="searchInput">
          Search
        </label>
        {!isCollapsed && (
          <input
            id="searchInput"
            type="text"
            className="searchText"
            placeholder={placeholder}
            onChange={handleSearch}
          />
        )}
      </div>
      {!isCollapsed && (
        <div className="searchRight">
          <div className="cmdKey">
            <img
              src="/command.svg"
              alt="Command"
              className="commandIcon"
              width={18}
              height={18}
            />
          </div>
          <div className="cmdKey2">
            <img
              src="/Users.svg"
              alt="Command"
              className="commandIcon"
              width={11}
              height={13}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export const SideMenu: React.FC = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const handleLogoClick = () => {
    navigate('/');
  };

  const handleSearch = (term: string) => {
    setSearchTerm(term.toLowerCase());
  };

  // Filter menu items based on search term
  const filteredMenuItems = sidebarData.filter(item =>
    item.text.toLowerCase().includes(searchTerm)
  );

  return (
    <nav className={`sideMenuSingle ${isCollapsed ? 'collapsed' : ''}`} aria-label="Main Navigation">
      <div className="sideMenuHeader">
        <div className="logoSection">
          <div 
            className="arenaLogoContainer" 
            onClick={handleLogoClick}
            style={{ cursor: 'pointer' }}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && handleLogoClick()}
          >
            <img
              src="/src/assets/ArenaLogo.png"
              alt="Arena Logo"
              className="arenaLogo"
            />
            {!isCollapsed && <div className="arenaLogoText">ARENA</div>}
          </div>
          <img
            src={isCollapsed ? "/src/assets/sidebar-right.svg" : "/src/assets/sidebar-left.svg"}
            alt="Toggle sidebar"
            onClick={toggleSidebar}
            className="collapseIcon"
            role="button"
            aria-label="Toggle Menu"
          />
        </div>
        <SearchBar 
          isCollapsed={isCollapsed} 
          onSearch={handleSearch}
          placeholder="Search"
        />
      </div>
      <div className="mainMenu">
        {!isCollapsed && <h2 className="menuTitle">Main Menu</h2>}
        <div className="menuItems" role="menu">
          {filteredMenuItems.map((item) => (
            <MenuItem
              key={item.text}
              {...item}
              isCollapsed={isCollapsed}
            />
          ))}
        </div>
      </div>
    </nav>
  );
};