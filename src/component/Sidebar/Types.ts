

// Types.ts
export interface IMenuItem {
  icon: string;
  text: string;
  link: string;
  hasExpand?: boolean;
  submenuItems?: IMenuItem[]; 
}

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