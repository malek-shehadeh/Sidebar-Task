
// src/types/index.ts

// Base Types
export interface BaseSearchBarProps {
    placeholder?: string;
    onSearch: (term: string) => void;
  }
  
  // Explicitly export type
  export type { BaseSearchBarProps as DashboardSearchBarProps };
  
  // Sidebar Types
  export interface SidebarItem {
    icon: string;
    text: string;
    link: string;
    hasExpand?: boolean;
  }
  
  export interface MenuItemProps extends SidebarItem {
    isCollapsed?: boolean;
  }
  

  export interface SideMenuProps {
    onToggle: (collapsed: boolean) => void;  
  }
  
  export interface SidebarSearchBarProps extends BaseSearchBarProps {
    isCollapsed?: boolean;
  }
  
  // Knowledge Base Types
  export interface KnowledgeBaseCardProps {
    id: string | number;
    title: string;
    description: string;
    image: string;
    sections: number;
    articles: number;
  }
  
  export interface ViewToggleProps {
    currentView: 'card' | 'list';
    onViewChange: (view: 'card' | 'list') => void;
  }
  
  export interface ToolbarProps {
    onSearch: (term: string) => void;
    currentView: 'card' | 'list';
    onViewChange: (view: 'card' | 'list') => void;
    onFilterClick?: () => void;
    onAddNewClick?: () => void;
  }
  
  export interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
    itemsPerPage?: number;
    totalItems?: number;
  }
  
  export interface KnowledgeBaseHeaderProps {
    userName: string;
  }
  
  // Layout Types
  export interface LayoutProps {
    children: React.ReactNode;
    isSidebarCollapsed?: boolean;
  }
  
  // Filter Types
  export interface FilterOption {
    id: string | number;
    label: string;
    value: string;
  }
  
  export interface FilterProps {
    options: FilterOption[];
    selectedFilters: string[];
    onFilterChange: (filters: string[]) => void;
  }
  
  // Grid Types
  export interface GridProps {
    children: React.ReactNode;
    columns?: number;
    gap?: string | number;
  }
  
  // Card Types
  export interface BaseCardProps {
    className?: string;
    children: React.ReactNode;
    onClick?: () => void;
  }
  
  // Button Types
  export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'small' | 'medium' | 'large';
    icon?: React.ReactNode;
    isLoading?: boolean;
    fullWidth?: boolean;
  }
  
  // Input Types
  export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
    helperText?: string;
    startAdornment?: React.ReactNode;
    endAdornment?: React.ReactNode;
  }
  
  // Modal Types
  export interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title?: string;
      subtitle?: string; 

    children: React.ReactNode;
    size?: 'small' | 'medium' | 'large';
    footer?: React.ReactNode;
    showCloseButton?: boolean; 

  }
  

  // Common Types
  export type Size = 'small' | 'medium' | 'large';
  export type Variant = 'primary' | 'secondary' | 'outline' | 'ghost';
  export type Status = 'idle' | 'loading' | 'success' | 'error';
  
  // Utility Types
  export type WithRequired<T, K extends keyof T> = T & { [P in K]-?: T[P] };
  export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
  export type DeepPartial<T> = {
    [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
  };

//addform
export interface AddNewCollectionProps {
    onClose: () => void;
  }
  
  export interface FormData {
    name: string;
    description: string;
    tags: string;
    accessLevel: string;
    thumbnail: File | null;
  }