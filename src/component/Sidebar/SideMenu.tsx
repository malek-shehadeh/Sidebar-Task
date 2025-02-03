

 // SideMenu.tsx
 
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MenuItem } from './MenuItem';
import { sidebarData } from '../data/sidebarData';
import { SideMenuProps, SidebarSearchBarProps, SidebarItem, SidebarData } from './Types';
import '../../styles/Sidebar.scss';

const SearchBar: React.FC<SidebarSearchBarProps> = ({
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

export const SideMenu: React.FC<SideMenuProps> = ({ 
  onToggle, 
  onMenuItemClick,
  isCollapsed,
  style,
  className 
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeItem, setActiveItem] = useState<SidebarData | null>(null);
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/');
    setActiveItem(null);
  };

  const handleSearch = (term: string) => {
    setSearchTerm(term.toLowerCase());
  };

  const handleToggle = () => {
    onToggle(!isCollapsed);
  };

  const handleMenuItemClick = (item: SidebarItem) => {
    setActiveItem(item as SidebarData); 
    
    if (item.hasExpand) {
      onMenuItemClick(item);
    } else {
      onMenuItemClick({...item, hasExpand: false, submenuItems: undefined});
      navigate(item.link);
    }
  };

  const filteredMenuItems = sidebarData.filter(item =>
    item.text.toLowerCase().includes(searchTerm)
  );

  return (
    <nav 
      className={`sideMenuSingle ${isCollapsed ? 'collapsed' : ''} ${className || ''}`}
      aria-label="Main Navigation"
      style={style}
    >
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
            onClick={handleToggle}
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
          {(filteredMenuItems as SidebarData[]).map((item: SidebarData) => (
            <MenuItem
              key={item.text}
              icon={item.icon}
              text={item.text}
              link={item.link}
              hasExpand={item.hasExpand}
              submenuItems={item.submenuItems}
              isCollapsed={isCollapsed}
              isActive={activeItem?.text === item.text}
              onExpandClick={handleMenuItemClick}
            />
          ))}
        </div>
      </div>
    </nav>
  );
};