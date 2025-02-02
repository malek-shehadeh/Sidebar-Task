
// // // types.ts
// // export interface SubMenuData {
// //   icon: string;
// //   text: string;
// //   link: string;
// // }

// // export interface SidebarData {
// //   icon: string;
// //   text: string;
// //   link: string;
// //   hasExpand?: boolean;
// //   submenuItems?: SubMenuData[];
// // }

// // export interface BaseMenuItem {
// //   text: string;
// //   link: string;
// //   icon: string;
// //   hasExpand?: boolean;
// // }

// // export interface SubMenuItem {
// //   icon: string;
// //   text: string;
// //   link: string;
// // }

// // export interface SidebarItem {
// //   icon: string;
// //   text: string;
// //   link: string;
// //   hasExpand?: boolean;
// //   submenuItems?: SubMenuItem[];
// // }

// // export interface MenuItemProps extends BaseMenuItem {
// //   isCollapsed?: boolean;
// //   isActive?: boolean;
// //   onExpandClick?: (item: SidebarItem) => void;
// //   submenuItems?: SubMenuItem[];
// // }

// // export interface SideMenuProps {
// //   onToggle: (collapsed: boolean) => void;
// //   onMenuItemClick: (item: SidebarItem) => void;
// //   isCollapsed: boolean;
// //   style?: React.CSSProperties;
// //   className?: string; // Add this line

// // }

// // export interface SidebarSearchBarProps {
// //   placeholder?: string;
// //   isCollapsed?: boolean;
// //   onSearch: (term: string) => void;
// // }

// // export interface SidebarSystemProps {
// //   onSidebarToggle: (collapsed: boolean) => void;
// //   onSubmenuToggle: (show: boolean) => void;
// // }



// // Types.ts
// export interface IMenuItem {  // تغيير الاسم من MenuItem إلى IMenuItem
//   icon: string;
//   text: string;
//   link: string;
//   hasExpand?: boolean;
//   submenuItems?: IMenuItem[]; 
// }

// export interface SideMenuProps {
//   onToggle: (collapsed: boolean) => void;
//   onMenuItemClick: (item: IMenuItem) => void;
//   isCollapsed: boolean;
//   style?: React.CSSProperties;
//   className?: string;
// }

// export interface SidebarSearchBarProps {
//   placeholder?: string;
//   isCollapsed?: boolean;
//   onSearch: (term: string) => void;
// }

// export interface SidebarSystemProps {
//   onSidebarToggle: (collapsed: boolean) => void;
//   onSubmenuToggle: (show: boolean) => void;
// }

// export interface SubMenuProps {
//   parentItem: IMenuItem;
//   onClose: () => void;
// }



////ثققققق

// Types.ts
export interface IMenuItem {
  icon: string;
  text: string;
  link: string;
  hasExpand?: boolean;
  submenuItems?: IMenuItem[]; 
}

// نضيف هذه التعريفات الجديدة
export type SidebarData = IMenuItem;
export type SidebarItem = IMenuItem;

export interface SideMenuProps {
  onToggle: (collapsed: boolean) => void;
  onMenuItemClick: (item: IMenuItem) => void;
  isCollapsed: boolean;
  style?: React.CSSProperties;
  className?: string;
}

export interface SidebarSearchBarProps {
  placeholder?: string;
  isCollapsed?: boolean;
  onSearch: (term: string) => void;
}

export interface SidebarSystemProps {
  onSidebarToggle: (collapsed: boolean) => void;
  onSubmenuToggle: (show: boolean) => void;
}

export interface SubMenuProps {
  parentItem: IMenuItem;
  onClose: () => void;
}