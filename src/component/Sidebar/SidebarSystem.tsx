

// //sidebar system
// import { useState } from 'react';
// import { SideMenu } from './SideMenu';
// import { SubMenu } from './SubMenu';
// import { SidebarItem, SidebarSystemProps } from './Types';

// const SidebarSystem: React.FC<SidebarSystemProps> = ({
//   onSidebarToggle,
//   onSubmenuToggle
// }) => {
//   const [mainSidebarCollapsed, setMainSidebarCollapsed] = useState(false);
//   const [activeSubmenuItem, setActiveSubmenuItem] = useState<SidebarItem | null>(null);

//   const handleMainSidebarToggle = (collapsed: boolean) => {
//     setMainSidebarCollapsed(collapsed);
//     onSidebarToggle(collapsed);
    
//     if (!collapsed && activeSubmenuItem) {
//       setActiveSubmenuItem(null);
//       onSubmenuToggle(false);
//     }
//   };

//   const handleMenuItemClick = (item: SidebarItem) => {
//     if (item.hasExpand) {
//       setActiveSubmenuItem(item);
//       onSubmenuToggle(true);
//       setMainSidebarCollapsed(true);
//       onSidebarToggle(true);
//     } else {
//       // إغلاق السايد بار الفرعي عند النقر على عنصر عادي
//       setActiveSubmenuItem(null);
//       onSubmenuToggle(false);
//     }
//   };

//   const handleSubmenuClose = () => {
//     setActiveSubmenuItem(null);
//     onSubmenuToggle(false);
//   };

//   return (
//     <div className="sidebar-system">
//       <SideMenu
//         onToggle={handleMainSidebarToggle}
//         onMenuItemClick={handleMenuItemClick}
//         isCollapsed={mainSidebarCollapsed}
//         className={`main-sidebar ${activeSubmenuItem ? 'with-submenu' : ''}`}
//       />
//       {activeSubmenuItem && (
//         <SubMenu
//           parentItem={activeSubmenuItem}
//           onClose={handleSubmenuClose}
//         />
//       )}
//     </div>
//   );
// };

// export default SidebarSystem;


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
      // إذا كان العنصر لديه submenu
      setState({
        mainSidebarCollapsed: true,
        activeSubmenuItem: item
      });
      onSubmenuToggle(true);
      onSidebarToggle(true);
    } else {
      // إذا كان العنصر عادياً
      setState(state => ({
        mainSidebarCollapsed: state.mainSidebarCollapsed, // نحافظ على حالة الـ collapse
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