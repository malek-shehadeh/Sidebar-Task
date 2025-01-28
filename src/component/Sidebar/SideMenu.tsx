


// // // // // // import React from 'react';
// // // // // // import styles from '../../styles/Sidebar.module.scss';
// // // // // // import { MenuItem } from './MenuItem';
// // // // // // import { SearchBar } from './SearchBar';

// // // // // // const menuItems = [
// // // // // //   { icon: 'tiTiHomeI', text: 'Dashboard', hasExpand: true },
// // // // // //   { icon: 'tiTiUsersI', text: 'User Management', hasExpand: true },
// // // // // //   { icon: 'tiTiHierarchyI', text: 'Workflow Management' },
// // // // // //   { icon: 'tiTiFileSearchI', text: 'Audit Trail', hasExpand: true },
// // // // // //   { icon: 'tiTiLayoutGridI', text: 'Customer Transactions', hasExpand: true },
// // // // // //   { icon: 'tiTiBriefcaseI', text: 'Customer 360', hasExpand: true },
// // // // // //   { icon: 'tiTiUserI', text: 'Customer Onboarding', hasExpand: true },
// // // // // //   { icon: 'tiTiMessagesI', text: 'Complaints Management', hasExpand: true },
// // // // // //   { icon: 'tiTiChartArrowsI', text: 'Trade Finance', hasExpand: true },
// // // // // //   { icon: 'tiTiIdI', text: 'Lead Management', hasExpand: true },
// // // // // //   { icon: 'tiTiCashI', text: 'Loan Management', hasExpand: true },
// // // // // //   { icon: 'tiTiBookI', text: 'Knowledge Base' },
// // // // // //   { icon: 'tiTiKeyI', text: 'License Management', hasExpand: true },
// // // // // //   { icon: 'tiTiSettingsI', text: 'Admin Settings', hasExpand: true }
// // // // // // ];

// // // // // // export const SideMenu: React.FC = () => {
// // // // // //   return (
// // // // // //     <nav className={styles.sideMenuSingle} aria-label="Main Navigation">
// // // // // //       <div className={styles.sideMenuHeader}>
// // // // // //         <div className={styles.logoSection}>
// // // // // //           <div className={styles.arenaLogoContainer}>
// // // // // //             <img src="/src/assets/ArenaLogo.png" alt="" aria-hidden="true" />
// // // // // //             <div className={styles.arenaLogoText}>ARENA</div>
// // // // // //           </div>
// // // // // //           <button className={styles.collapseIcon} aria-label="Collapse Menu">
// // // // // //             <i className={styles.tiTiChevronLeft} aria-hidden="true" />
// // // // // //           </button>
// // // // // //         </div>
// // // // // //         <SearchBar />
// // // // // //       </div>
// // // // // //       <div className={styles.mainMenu}>
// // // // // //         <h2 className={styles.menuTitle}>Main Menu</h2>
// // // // // //         <div className={styles.menuItems} role="menu">
// // // // // //           {menuItems.map((item, index) => (
// // // // // //             <MenuItem
// // // // // //               key={index}
// // // // // //               icon={item.icon}
// // // // // //               text={item.text}
// // // // // //               hasExpand={item.hasExpand}
// // // // // //             />
// // // // // //           ))}
// // // // // //         </div>
// // // // // //       </div>
// // // // // //     </nav>
// // // // // //   );
// // // // // // };


// // // // // import React from 'react';
// // // // // import styles from '../../styles/Sidebar.module.scss';
// // // // // import { MenuItem } from './MenuItem';
// // // // // import { SearchBar } from './SearchBar';

// // // // // const menuItems = [
// // // // //   { icon: 'tiTiHomeI', text: 'Dashboard', hasExpand: true },
// // // // //   { icon: 'tiTiUsersI', text: 'User Management', hasExpand: true },
// // // // //   { icon: 'tiTiHierarchyI', text: 'Workflow Management' },
// // // // //   { icon: 'tiTiFileSearchI', text: 'Audit Trail', hasExpand: true },
// // // // //   { icon: 'tiTiLayoutGridI', text: 'Customer Transactions', hasExpand: true },
// // // // //   { icon: 'tiTiBriefcaseI', text: 'Customer 360', hasExpand: true },
// // // // //   { icon: 'tiTiUserI', text: 'Customer Onboarding', hasExpand: true },
// // // // //   { icon: 'tiTiMessagesI', text: 'Complaints Management', hasExpand: true },
// // // // //   { icon: 'tiTiChartArrowsI', text: 'Trade Finance', hasExpand: true },
// // // // //   { icon: 'tiTiIdI', text: 'Lead Management', hasExpand: true },
// // // // //   { icon: 'tiTiCashI', text: 'Loan Management', hasExpand: true },
// // // // //   { icon: 'tiTiBookI', text: 'Knowledge Base' },
// // // // //   { icon: 'tiTiKeyI', text: 'License Management', hasExpand: true },
// // // // //   { icon: 'tiTiSettingsI', text: 'Admin Settings', hasExpand: true }
// // // // // ];

// // // // // export const SideMenu: React.FC = () => {
// // // // //   return (
// // // // //     <nav className={styles.sideMenuSingle} aria-label="Main Navigation">
// // // // //       <div className={styles.sideMenuHeader}>
// // // // //         <div className={styles.logoSection}>
// // // // //           <div className={styles.arenaLogoContainer}>
// // // // //             <img 
// // // // //               src="/src/assets/ArenaLogo.png" 
// // // // //               alt="" 
// // // // //               aria-hidden="true"
// // // // //               style={{ width: '39.78px', height: '42.09px' }}
// // // // //             />
// // // // //             <div className={styles.arenaLogoText}>ARENA</div>
// // // // //           </div>
// // // // //           <button className={styles.collapseIcon} aria-label="Collapse Menu">
// // // // //             <i className={styles.tiTiChevronLeft} aria-hidden="true" />
// // // // //           </button>
// // // // //         </div>
// // // // //         <SearchBar />
// // // // //       </div>
// // // // //       <div className={styles.mainMenu}>
// // // // //         <h2 className={styles.menuTitle}>Main Menu</h2>
// // // // //         <div className={styles.menuItems} role="menu">
// // // // //           {menuItems.map((item, index) => (
// // // // //             <MenuItem
// // // // //               key={index}
// // // // //               icon={item.icon}
// // // // //               text={item.text}
// // // // //               hasExpand={item.hasExpand}
// // // // //             />
// // // // //           ))}
// // // // //         </div>
// // // // //       </div>
// // // // //     </nav>
// // // // //   );
// // // // // };

// // // // // src/components/sidebar/SideMenu.tsx
// // // // import React from 'react';
// // // // import styles from '../../styles/Sidebar.module.scss';
// // // // import { MenuItem } from './MenuItem';
// // // // import { SearchBar } from './SearchBar';


// // // // const menuItems = [
// // // //   { icon: 'tiTiHomeI', text: 'Dashboard', hasExpand: true },
// // // //   { icon: 'tiTiUsersI', text: 'User Management', hasExpand: true },

// // // // ];

// // // // export const SideMenu: React.FC = () => {
// // // //   return (
// // // //     <nav className={styles.sideMenuSingle} aria-label="Main Navigation">
// // // //       <div className={styles.sideMenuHeader}>
// // // //         <div className={styles.logoSection}>
// // // //           <div className={styles.arenaLogoContainer}>
// // // //             <img 
// // // //               src="/src/assets/ArenaLogo.png" 
// // // //               alt="Arena Logo" 
// // // //               className={styles.arenaLogo}
// // // //             />
// // // //             <div className={styles.arenaLogoText}>ARENA</div>
// // // //           </div>
// // // //           <button className={styles.collapseIcon} aria-label="Collapse Menu">
// // // //             {/* <i className={styles.tiTiChevronLeft} aria-hidden="true" /> */}

// // // //             <img 
// // // //               src="/src/assets/sidebar-left.svg" 
// // // //               alt="Logo" 
// // // //               className={styles.collapseIcon}
// // // //             />
// // // //           </button>
// // // //         </div>
// // // //         <SearchBar />
// // // //       </div>
// // // //       <div className={styles.mainMenu}>
// // // //         <h2 className={styles.menuTitle}>Main Menu</h2>
// // // //         <div className={styles.menuItems} role="menu">
// // // //           {menuItems.map((item, index) => (
// // // //             <MenuItem
// // // //               key={index}
// // // //               icon={item.icon}
// // // //               text={item.text}
// // // //               hasExpand={item.hasExpand}
// // // //             />
// // // //           ))}
// // // //         </div>
// // // //       </div>
// // // //     </nav>
// // // //   );
// // // // };


// // // ////ok top

// // // // // src/components/sidebar/SideMenu.tsx
// // // // import React, { useState } from 'react';
// // // // import styles from '../../styles/Sidebar.module.scss';
// // // // import { MenuItem } from './MenuItem';
// // // // import { SearchBar } from './SearchBar';
// // // // import { sidebarData } from '../data/sidebarData';

// // // // export const SideMenu: React.FC = () => {
// // // //   const [isCollapsed, setIsCollapsed] = useState(false);

// // // //   const toggleSidebar = () => {
// // // //     setIsCollapsed(!isCollapsed);
// // // //   };
// // // //   return (
// // // //     <nav className={`${styles.sideMenuSingle} ${isCollapsed ? styles.collapsed : ''}`} 
// // // //          aria-label="Main Navigation">
// // // //       <div className={styles.sideMenuHeader}>
// // // //         <div className={styles.logoSection}>
// // // //           <div className={styles.arenaLogoContainer}>
// // // //             <img
// // // //               src="/src/assets/ArenaLogo.png"
// // // //               alt="Arena Logo"
// // // //               className={styles.arenaLogo}
// // // //             />
// // // //             {!isCollapsed && <div className={styles.arenaLogoText}>ARENA</div>}
// // // //           </div>
// // // //           {/* <button 
// // // //             className={styles.collapseIcon} 
// // // //             aria-label="Toggle Menu"
// // // //             onClick={toggleSidebar}
// // // //           >
// // // //             <img
// // // //               src="/src/assets/sidebar-left.svg"
// // // //               alt="Toggle sidebar"
// // // //               className={`${styles.collapseIcon} ${isCollapsed ? styles.rotated : ''}`}
// // // //             />
// // // //           </button> */}

// // // // <img
// // // //   src="/src/assets/sidebar-left.svg"
// // // //   alt="Toggle sidebar"
// // // //   onClick={toggleSidebar}
// // // //   className={`${styles.collapseIcon} ${isCollapsed ? styles.rotated : ''}`}
// // // //   role="button"
// // // //   aria-label="Toggle Menu"
// // // // />

// // // //         </div>
// // // //         <SearchBar isCollapsed={isCollapsed} />
// // // //       </div>
// // // //       <div className={styles.mainMenu}>
// // // //         {!isCollapsed && <h2 className={styles.menuTitle}>Main Menu</h2>}
// // // //         <div className={styles.menuItems} role="menu">
// // // //           {sidebarData.map((item, index) => (
// // // //             <MenuItem
// // // //               key={index}
// // // //               icon={item.icon}
// // // //               text={item.text}
// // // //               link={item.link}
// // // //               hasExpand={item.hasExpand}
// // // //               isCollapsed={isCollapsed}
// // // //             />
// // // //           ))}
// // // //         </div>
// // // //       </div>
// // // //     </nav>
// // // //   );
// // // // };


// // // import '../../styles/Sidebar.scss';
// // // import React, { useState } from 'react';
// // // import { MenuItem } from './MenuItem';
// // // import { SearchBar } from './SearchBar';
// // // import { sidebarData } from '../data/sidebarData';

// // // export const SideMenu: React.FC = () => {
// // //   const [isCollapsed, setIsCollapsed] = useState(false);

// // //   const toggleSidebar = () => {
// // //     setIsCollapsed(!isCollapsed);
// // //   };

// // //   return (
// // //     <nav className={`sideMenuSingle ${isCollapsed ? 'collapsed' : ''}`} aria-label="Main Navigation">
// // //       <div className="sideMenuHeader">
// // //         <div className="logoSection">
// // //           <div className="arenaLogoContainer">
// // //             <img
// // //               src="/src/assets/ArenaLogo.png"
// // //               alt="Arena Logo"
// // //               className="arenaLogo"
// // //             />
// // //             {!isCollapsed && <div className="arenaLogoText">ARENA</div>}
// // //           </div>
// // //           <img
// // //             src="/src/assets/sidebar-left.svg"
// // //             alt="Toggle sidebar"
// // //             onClick={toggleSidebar}
// // //             className={`collapseIcon ${isCollapsed ? 'rotated' : ''}`}
// // //             role="button"
// // //             aria-label="Toggle Menu"
// // //           />
// // //         </div>
// // //         <SearchBar isCollapsed={isCollapsed} />
// // //       </div>
// // //       <div className="mainMenu">
// // //         {!isCollapsed && <h2 className="menuTitle">Main Menu</h2>}
// // //         <div className="menuItems" role="menu">
// // //           {sidebarData.map((item, index) => (
// // //             <MenuItem
// // //               key={index}
// // //               icon={item.icon}
// // //               text={item.text}
// // //               link={item.link}
// // //               hasExpand={item.hasExpand}
// // //               isCollapsed={isCollapsed}
// // //             />
// // //           ))}
// // //         </div>
// // //       </div>
// // //     </nav>
// // //   );
// // // };



// // // SideMenu.tsx
// // import '../../styles/Sidebar.scss';
// // import React, { useState } from 'react';
// // import { MenuItem } from './MenuItem';
// // import { sidebarData } from '../data/sidebarData';
// // import { SearchBarProps } from './Types';

// // const SearchBar: React.FC<SearchBarProps> = ({
// //   placeholder = 'Search',
// //   isCollapsed = false
// // }) => {
// //   return (
// //     <div className={`searchBar ${isCollapsed ? 'searchBarCollapsed' : ''}`} role="search">
// //       <div className="searchLeft">
// //         <img
// //           src="/search-normal.svg"
// //           alt="Search"
// //           className="searchIcon"
// //           width={24}
// //           height={24}
// //         />
// //         <label className="visually-hidden" htmlFor="searchInput">
// //           Search
// //         </label>
// //         {!isCollapsed && (
// //           <input
// //             id="searchInput"
// //             type="text"
// //             className="searchText"
// //             placeholder={placeholder}
// //           />
// //         )}
// //       </div>
// //       {!isCollapsed && (
// //         <div className="searchRight">
// //           <div className="cmdKey">
// //             <img
// //               src="/command.svg"
// //               alt="Command"
// //               className="commandIcon"
// //               width={18}
// //               height={18}
// //             />
// //           </div>
// //           <div className="cmdKey2">
// //             <img
// //               src="/Users.svg"
// //               alt="Command"
// //               className="commandIcon"
// //               width={11}
// //               height={13}
// //             />
// //           </div>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export const SideMenu: React.FC = () => {
// //   const [isCollapsed, setIsCollapsed] = useState(false);

// //   const toggleSidebar = () => {
// //     setIsCollapsed(!isCollapsed);
// //   };

// //   return (
// //     <nav className={`sideMenuSingle ${isCollapsed ? 'collapsed' : ''}`} aria-label="Main Navigation">
// //       <div className="sideMenuHeader">
// //         <div className="logoSection">
// //           <div className="arenaLogoContainer">
// //             <img
// //               src="/src/assets/ArenaLogo.png"
// //               alt="Arena Logo"
// //               className="arenaLogo"
// //             />
// //             {!isCollapsed && <div className="arenaLogoText">ARENA</div>}
// //           </div>
// //           <img
// //             src="/src/assets/sidebar-left.svg"
// //             alt="Toggle sidebar"
// //             onClick={toggleSidebar}
// //             className={`collapseIcon ${isCollapsed ? 'rotated' : ''}`}
// //             role="button"
// //             aria-label="Toggle Menu"
// //           />
// //         </div>
// //         <SearchBar isCollapsed={isCollapsed} />
// //       </div>
// //       <div className="mainMenu">
// //         {!isCollapsed && <h2 className="menuTitle">Main Menu</h2>}
// //         <div className="menuItems" role="menu">
// //           {sidebarData.map((item, index) => (
// //             <MenuItem
// //               key={index}
// //               icon={item.icon}
// //               text={item.text}
// //               link={item.link}
// //               hasExpand={item.hasExpand}
// //               isCollapsed={isCollapsed}
// //             />
// //           ))}
// //         </div>
// //       </div>
// //     </nav>
// //   );
// // };

// //////nnnn


// // SideMenu.tsx
// import React, { useState } from 'react';
// import { useLocation } from 'react-router-dom';
// import { MenuItem } from './MenuItem';
// import { sidebarData } from '../data/sidebarData';
// import { SearchBarProps } from './Types';

// import '../../styles/Sidebar.scss';


// // SearchBar component remains the same
// const SearchBar: React.FC<SearchBarProps> = ({
//   placeholder = 'Search',
//   isCollapsed = false
// }) => {
//   return (
//     <div className={`searchBar ${isCollapsed ? 'searchBarCollapsed' : ''}`} role="search">
//       <div className="searchLeft">
//         <img
//           src="/search-normal.svg"
//           alt="Search"
//           className="searchIcon"
//           width={24}
//           height={24}
//         />
//         <label className="visually-hidden" htmlFor="searchInput">
//           Search
//         </label>
//         {!isCollapsed && (
//           <input
//             id="searchInput"
//             type="text"
//             className="searchText"
//             placeholder={placeholder}
//           />
//         )}
//       </div>
//       {!isCollapsed && (
//         <div className="searchRight">
//           <div className="cmdKey">
//             <img
//               src="/command.svg"
//               alt="Command"
//               className="commandIcon"
//               width={18}
//               height={18}
//             />
//           </div>
//           <div className="cmdKey2">
//             <img
//               src="/Users.svg"
//               alt="Command"
//               className="commandIcon"
//               width={11}
//               height={13}
//             />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export const SideMenu: React.FC = () => {
//   const [isCollapsed, setIsCollapsed] = useState(false);
//   const location = useLocation();

//   const toggleSidebar = () => {
//     setIsCollapsed(!isCollapsed);
//   };

//   return (
//     <nav className={`sideMenuSingle ${isCollapsed ? 'collapsed' : ''}`} aria-label="Main Navigation">
//       <div className="sideMenuHeader">
//         <div className="logoSection">
//           <div className="arenaLogoContainer">
//             <img
//               src="/src/assets/ArenaLogo.png"
//               alt="Arena Logo"
//               className="arenaLogo"
//             />
//             {!isCollapsed && <div className="arenaLogoText">ARENA</div>}
//           </div>
//           <img
//             src="/src/assets/sidebar-left.svg"
//             alt="Toggle sidebar"
//             onClick={toggleSidebar}
//             className={`collapseIcon ${isCollapsed ? 'rotated' : ''}`}
//             role="button"
//             aria-label="Toggle Menu"
//           />
//         </div>
//         <SearchBar isCollapsed={isCollapsed} />
//       </div>
//       <div className="mainMenu">
//         {!isCollapsed && <h2 className="menuTitle">Main Menu</h2>}
//         <div className="menuItems" role="menu">
//           {sidebarData.map((item, index) => (
//             <MenuItem
//               key={index}
//               icon={item.icon}
//               text={item.text}
//               link={item.link}
//               hasExpand={item.hasExpand}
//               isCollapsed={isCollapsed}
//             />
//           ))}
//         </div>
//       </div>
//     </nav>
//   );
// };

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
            src="/src/assets/sidebar-left.svg"
            alt="Toggle sidebar"
            onClick={toggleSidebar}
            className={`collapseIcon ${isCollapsed ? 'rotated' : ''}`}
            role="button"
            aria-label="Toggle Menu"
          />
        </div>
        <SearchBar 
          isCollapsed={isCollapsed} 
          onSearch={handleSearch}
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