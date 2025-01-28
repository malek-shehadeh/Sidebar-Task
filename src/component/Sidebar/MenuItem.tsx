// // // // // // src/components/sidebar/MenuItem.tsx
// // // // // import React from 'react';
// // // // // import styles from '../../styles/Sidebar.module.scss';
// // // // // import { MenuItemProps } from './Types';
// // // // // import { 
// // // // //   Home,
// // // // //   Users,
// // // // //   Plus
// // // // // } from 'lucide-react';

// // // // // const iconComponents: { [key: string]: React.ComponentType } = {
// // // // //   tiTiHomeI: Home,
// // // // //   tiTiUsersI: Users,

// // // // // };

// // // // // export const MenuItem: React.FC<MenuItemProps> = ({ icon, text, hasExpand = false }) => {
// // // // //   const IconComponent = iconComponents[icon];

// // // // //   return (
// // // // //     <div className={styles.menuItem} role="button" tabIndex={0}>
// // // // //       {IconComponent && <IconComponent />}
// // // // //       <span className={styles.menuItemText}>{text}</span>
// // // // //       {hasExpand && (
// // // // //         <div className={styles.menuItemExpand}>
// // // // //           <Plus size={16} />
// // // // //         </div>
// // // // //       )}
// // // // //     </div>
// // // // //   );
// // // // // };



// // // // /////ok top


// // // // // src/components/sidebar/MenuItem.tsx
// // // // import React from 'react';
// // // // import styles from '../../styles/Sidebar.module.scss';
// // // // import { MenuItemProps } from './Types';
// // // // import { Plus } from 'lucide-react';

// // // // export const MenuItem: React.FC<MenuItemProps> = ({ 
// // // //   icon, 
// // // //   text, 
// // // //   link, 
// // // //   hasExpand = false,
// // // //   isCollapsed = false 
// // // // }) => {
// // // //   return (
// // // //     <div className={styles.menuItem} role="button" tabIndex={0}>
// // // //       <img src={`/public/${icon}`} alt={text} className={styles.menuIcon} />
// // // //       {!isCollapsed && (
// // // //         <>
// // // //           <span className={styles.menuItemText}>{text}</span>
// // // //           {hasExpand && (
// // // //             <div className={styles.menuItemExpand}>
// // // //               <Plus size={16} />
// // // //             </div>
// // // //           )}
// // // //         </>
// // // //       )}
// // // //     </div>
// // // //   );
// // // // };



// // // // import React from 'react';
// // // // import styles from '../../styles/Sidebar.module.scss';
// // // // import { MenuItemProps } from './Types';

// // // // export const MenuItem: React.FC<MenuItemProps> = ({ 
// // // //   icon, 
// // // //   text, 
// // // //   link, 
// // // //   hasExpand = false,
// // // //   isCollapsed = false 
// // // // }) => {
// // // //   return (
// // // //     <div className={styles.menuItem} role="button" tabIndex={0}>
// // // //       <img src={`/public/${icon}`} alt={text} className={styles.menuIcon} />
// // // //       {!isCollapsed && (
// // // //         <>
// // // //           <span className={styles.menuItemText}>{text}</span>
// // // //           {hasExpand && (
// // // //             <div className={styles.menuItemExpand}>
// // // //               <img 
// // // //                 src="/public/add.svg" 
// // // //                 alt="Expand" 
// // // //                 className={styles.expandIcon}
// // // //               />
// // // //             </div>
// // // //           )}
// // // //         </>
// // // //       )}
// // // //     </div>
// // // //   );
// // // // };



// // // import React from 'react';
// // // import { MenuItemProps } from './Types';

// // // export const MenuItem: React.FC<MenuItemProps> = ({ 
// // //   icon, 
// // //   text, 
// // //   link, 
// // //   hasExpand = false,
// // //   isCollapsed = false 
// // // }) => {
// // //   return (
// // //     <div className="menuItem" role="button" tabIndex={0}>
// // //       <img src={`/public/${icon}`} alt={text} className="menuIcon" />
// // //       {!isCollapsed && (
// // //         <>
// // //           <span className="menuItemText">{text}</span>
// // //           {hasExpand && (
// // //             <div className="menuItemExpand">
// // //               <img 
// // //                 src="/public/add.svg" 
// // //                 alt="Expand" 
// // //                 className="expandIcon"
// // //               />
// // //             </div>
// // //           )}
// // //         </>
// // //       )}
// // //     </div>
// // //   );
// // // };



// // // MenuItem.tsx
// // import React from 'react';
// // import { MenuItemProps } from './Types';

// // export const MenuItem: React.FC<MenuItemProps> = ({
// //   icon,
// //   text,
// //   link,
// //   hasExpand = false,
// //   isCollapsed = false
// // }) => {
// //   return (
// //     <div className="menuItem" role="button" tabIndex={0}>
// //       <img src={`/${icon}`} alt={text} className="menuIcon" />
// //       {!isCollapsed && (
// //         <>
// //           <span className="menuItemText">{text}</span>
// //           {hasExpand && (
// //             <div className="menuItemExpand">
// //               <img
// //                 src="/add.svg"
// //                 alt="Expand"
// //                 className="expandIcon"
// //               />
// //             </div>
// //           )}
// //         </>
// //       )}
// //     </div>
// //   );
// // };

// /////nnnn


// // MenuItem.tsx
// import React from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { MenuItemProps } from './Types';

// export const MenuItem: React.FC<MenuItemProps> = ({
//   icon,
//   text,
//   link,
//   hasExpand = false,
//   isCollapsed = false
// }) => {
//   const location = useLocation();
//   const isActive = location.pathname === link;

//   return (
//     <Link 
//       to={link}
//       className={`menuItem ${isActive ? 'active' : ''}`}
//       role="menuitem"
//     >
//       <img src={`/${icon}`} alt={text} className="menuIcon" />
//       {!isCollapsed && (
//         <>
//           <span className="menuItemText">{text}</span>
//           {hasExpand && (
//             <div className="menuItemExpand">
//               <img
//                 src="/add.svg"
//                 alt="Expand"
//                 className="expandIcon"
//               />
//             </div>
//           )}
//         </>
//       )}
//     </Link>
//   );
// };



// MenuItem.tsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MenuItemProps } from './Types';

export const MenuItem: React.FC<MenuItemProps> = ({
  icon,
  text,
  link,
  hasExpand,
  isCollapsed = false
}) => {
  const location = useLocation();
  
  return (
    <Link 
      to={link}
      className={`menuItem ${location.pathname === link ? 'active' : ''}`}
    >
      <img src={`/${icon}`} alt={text} className="menuIcon" />
      {!isCollapsed && (
        <>
          <span className="menuItemText">{text}</span>
          {hasExpand && (
            <div className="menuItemExpand">
              <img
                src="/add.svg"
                alt="Expand"
                className="expandIcon"
              />
            </div>
          )}
        </>
      )}
    </Link>
  );
};