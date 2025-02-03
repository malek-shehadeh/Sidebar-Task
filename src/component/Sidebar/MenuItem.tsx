


// MenuItem.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { IMenuItem } from './Types';

interface MenuItemProps extends IMenuItem {
  isCollapsed?: boolean;
  isActive?: boolean;
  onExpandClick?: (item: IMenuItem) => void;
}

export const MenuItem: React.FC<MenuItemProps> = ({
  icon,
  text,
  link,
  hasExpand,
  isCollapsed,
  isActive,
  onExpandClick,
  submenuItems
}) => {
  const handleClick = (e: React.MouseEvent) => {
    // نمنع السلوك الافتراضي فقط إذا كان العنصر لديه submenu
    if (hasExpand) {
      e.preventDefault();
    }
    // نستدعي onExpandClick في جميع الحالات
    onExpandClick?.({ 
      icon, 
      text, 
      link, 
      hasExpand, 
      submenuItems 
    });
  };

  return (
    <Link
      to={link}
      className={`menuItem ${isActive ? 'active' : ''}`}
      onClick={handleClick}
    >
      <img src={`/${icon}`} alt={text} className="menuIcon" width={24} height={24} />
      {!isCollapsed && (
        <>
          <span className="menuItemText">{text}</span>
          {hasExpand && (
            <div className="menuItemExpand">
              <img src="/add.svg" alt="Expand" width={20} height={20} />
            </div>
          )}
        </>
      )}
    </Link>
  );
};