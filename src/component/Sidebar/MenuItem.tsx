


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