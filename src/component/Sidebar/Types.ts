


// Types.ts
export interface SidebarItem {
  icon: string;
  text: string;
  link: string;
  hasExpand?: boolean;
}

export interface MenuItemProps extends SidebarItem {
  isCollapsed?: boolean;
}

export interface SearchBarProps {
  placeholder?: string;
  isCollapsed?: boolean;
  onSearch?: (term: string) => void;

}