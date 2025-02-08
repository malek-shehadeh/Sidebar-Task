// SidebarSystem.tsx
import { useState } from 'react';
import { SideMenu } from './SideMenu';
import { SubMenu } from './SubMenu';
import { IMenuItem, SidebarSystemProps } from './Types';

const SidebarSystem: React.FC<SidebarSystemProps> = ({
  onSidebarToggle,
  onSubmenuToggle
}) => {
  const [state, setState] = useState({
    mainSidebarCollapsed: false,
    activeSubmenuItem: null as IMenuItem | null
  });

  const handleMainSidebarToggle = (collapsed: boolean) => {
    setState(prev => ({
      ...prev,
      mainSidebarCollapsed: collapsed,
      activeSubmenuItem: !collapsed ? null : prev.activeSubmenuItem
    }));
    onSidebarToggle(collapsed);
    if (!collapsed) onSubmenuToggle(false);
  };

  const handleMenuItemClick = (item: IMenuItem) => {
    if (item.hasExpand) {
      setState({
        mainSidebarCollapsed: true,
        activeSubmenuItem: item
      });
      onSubmenuToggle(true);
      onSidebarToggle(true);
    } else {
      setState(state => ({
        mainSidebarCollapsed: state.mainSidebarCollapsed, 
        activeSubmenuItem: null
      }));
      onSubmenuToggle(false);
    }
  };

  return (
    <div className="sidebar-system">
      <SideMenu
        onToggle={handleMainSidebarToggle}
        onMenuItemClick={handleMenuItemClick}
        isCollapsed={state.mainSidebarCollapsed}
        className={`main-sidebar ${state.activeSubmenuItem ? 'with-submenu' : ''}`}
      />
      {state.activeSubmenuItem && (
        <SubMenu
          parentItem={state.activeSubmenuItem}
          onClose={() => {
            setState(prev => ({ ...prev, activeSubmenuItem: null }));
            onSubmenuToggle(false);
          }}
        />
      )}
    </div>
  );
};

export default SidebarSystem;