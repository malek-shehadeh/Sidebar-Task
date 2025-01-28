// // // // // // src/components/sidebar/SearchBar.tsx
// // // // // import React from 'react';
// // // // // import styles from '../../styles/Sidebar.module.scss';
// // // // // import { SearchBarProps } from './Types';
// // // // // import { Search, Command } from 'lucide-react';

// // // // // export const SearchBar: React.FC<SearchBarProps> = ({ placeholder = 'Search' }) => {
// // // // //   return (
// // // // //     <div className={styles.searchBar} role="search">
// // // // //       <div className={styles.searchLeft}>
// // // // //         <Search size={16} />
// // // // //         <label className={styles['visually-hidden']} htmlFor="searchInput">
// // // // //           Search
// // // // //         </label>
// // // // //         <input
// // // // //           id="searchInput"
// // // // //           type="text"
// // // // //           className={styles.searchText}
// // // // //           placeholder={placeholder}
// // // // //         />
// // // // //       </div>
// // // // //       <div className={styles.searchRight}>
// // // // //         <div className={styles.cmdKey}>
// // // // //           <Command size={12} />
// // // // //         </div>
// // // // //         <div className={styles.cmdKey2}>K</div>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };



// // // // /////ok top

// // // // // src/components/sidebar/SearchBar.tsx
// // // // import React from 'react';
// // // // import styles from '../../styles/Sidebar.module.scss';
// // // // import { SearchBarProps } from './Types';
// // // // import { Search, Command } from 'lucide-react';

// // // // export const SearchBar: React.FC<SearchBarProps> = ({ 
// // // //   placeholder = 'Search',
// // // //   isCollapsed = false 
// // // // }) => {
// // // //   if (isCollapsed) return null;
  
// // // //   return (
// // // //     <div className={styles.searchBar} role="search">
// // // //       <div className={styles.searchLeft}>
// // // //         <Search size={16} />
// // // //         <label className={styles['visually-hidden']} htmlFor="searchInput">
// // // //           Search
// // // //         </label>
// // // //         <input
// // // //           id="searchInput"
// // // //           type="text"
// // // //           className={styles.searchText}
// // // //           placeholder={placeholder}
// // // //         />
// // // //       </div>
// // // //       <div className={styles.searchRight}>
// // // //         <div className={styles.cmdKey}>
// // // //           <Command size={12} />
// // // //         </div>
// // // //         <div className={styles.cmdKey2}>K</div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };



// // // // src/components/sidebar/SearchBar.tsx
// // // import React from 'react';
// // // import styles from '../../styles/Sidebar.module.scss';
// // // import { SearchBarProps } from './Types';
// // // import { Search, Command } from 'lucide-react';

// // // export const SearchBar: React.FC<SearchBarProps> = ({
// // //   placeholder = 'Search',
// // //   isCollapsed = false
// // // }) => {
// // //   return (
// // //     <div className={`${styles.searchBar} ${isCollapsed ? styles.searchBarCollapsed : ''}`} role="search">
// // //       <div className={styles.searchLeft}>
// // //         <Search size={16} />
// // //         <label className={styles['visually-hidden']} htmlFor="searchInput">
// // //           Search
// // //         </label>
// // //         {!isCollapsed && (
// // //           <input
// // //             id="searchInput"
// // //             type="text"
// // //             className={styles.searchText}
// // //             placeholder={placeholder}
// // //           />
// // //         )}
// // //       </div>
// // //       {!isCollapsed && (
// // //         <div className={styles.searchRight}>
// // //           <div className={styles.cmdKey}>
// // //             <Command size={12} />
// // //           </div>
// // //           <div className={styles.cmdKey2}>K</div>
// // //         </div>
// // //       )}
// // //     </div>
// // //   );
// // // };


// // import React from 'react';
// // import styles from '../../styles/Sidebar.module.scss';
// // import { SearchBarProps } from './Types';

// // export const SearchBar: React.FC<SearchBarProps> = ({
// //   placeholder = 'Search',
// //   isCollapsed = false
// // }) => {
// //   return (
// //     <div className={`${styles.searchBar} ${isCollapsed ? styles.searchBarCollapsed : ''}`} role="search">
// //       <div className={styles.searchLeft}>
// //         <img 
// //           src="/public/search-normal.svg" 
// //           alt="Search"
// //           className={styles.searchIcon} 
// //           width={24} 
// //           height={24}
// //         />
// //         <label className={styles['visually-hidden']} htmlFor="searchInput">
// //           Search
// //         </label>
// //         {!isCollapsed && (
// //           <input
// //             id="searchInput"
// //             type="text"
// //             className={styles.searchText}
// //             placeholder={placeholder}
// //           />
// //         )}
// //       </div>
// //       {!isCollapsed && (
// //         <div className={styles.searchRight}>
// //           <div className={styles.cmdKey}>
// //             <img 
// //               src="/public/command.svg" 
// //               alt="Command"
// //               className={styles.commandIcon} 
// //               width={18} 
// //               height={18}
// //             />
// //           </div>
// //           <div className={styles.cmdKey2}>
// //             <img 
// //               src="/public/Users.svg" 
// //               alt="Command"
// //               className={styles.commandIcon} 
// //               width={11} 
// //               height={13}
// //             />
// //           </div>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };


// import React from 'react';
// import { SearchBarProps } from './Types';

// export const SearchBar: React.FC<SearchBarProps> = ({
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
