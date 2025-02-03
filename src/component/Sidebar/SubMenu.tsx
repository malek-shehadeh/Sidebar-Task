

// SubMenu.tsx
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { IMenuItem } from './Types';

interface SubMenuProps {
  parentItem: IMenuItem;
  onClose: () => void;
}

export const SubMenu: React.FC<SubMenuProps> = ({ parentItem, onClose }) => {
  const submenuItems = parentItem.submenuItems || [];
  const location = useLocation();
  const [activeSubItem, setActiveSubItem] = useState<string | null>(null);

  const handleItemClick = (link: string) => {
    setActiveSubItem(link);
  };

  return (
    <nav className="sideMenuSingle submenu" aria-label="Sub Navigation">
      <div className="sideMenuHeader">
        <div className="logoSection">
          <div className="submenuTitle">
            <img
              src={`/${parentItem.icon}`}
              alt=""
              className="menuIcon"
              width={24}
              height={24}
            />
            <span>{parentItem.text}</span>
          </div>
          <img
            src="/src/assets/sidebar-left.svg"
            alt="Back"
            onClick={onClose}
            className="collapseIcon"
            role="button"
            aria-label="Close Submenu"
            width={28}
            height={28}
          />
        </div>
      </div>
      <div className="mainMenu">
        <div className="menuItems">
          {submenuItems.map((item) => (
            <Link
              key={item.text}
              to={item.link}
              className={`menuItem ${location.pathname === item.link || activeSubItem === item.link ? 'active' : ''}`}
              onClick={() => handleItemClick(item.link)}
            >
              {item.icon && (
                <img
                  src={`/${item.icon}`}
                  alt=""
                  className="menuIcon"
                  width={24}
                  height={24}
                />
              )}
              <span className="menuItemText">{item.text}</span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};