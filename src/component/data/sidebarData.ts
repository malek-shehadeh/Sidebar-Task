// // src/components/data/sidebarData.ts
// export interface SidebarItem {
//     icon: string;
//     text: string;
//     link: string;
//     hasExpand?: boolean;  
//   }
  
//   export const sidebarData: SidebarItem[] = [
//     { icon: "home-2.svg", text: "Home", link: "/home", hasExpand: true },
//     { icon: "profile-2user.svg", text: "User Management", link: "/dashboard", hasExpand: true },
//     { icon: "hierarchy-square-3.svg", text: "Workflow Management", link: "/projects" }  ,
    
//   ];


// src/components/data/sidebarData.ts
export interface SidebarItem {
  icon: string;
  text: string;
  link: string;
  hasExpand?: boolean;
  isCollapsed?: boolean;
  isActive?: boolean;  // Added this line
}

export const sidebarData: SidebarItem[] = [
  { 
    icon: "home-2.svg", 
    text: "Home", 
    link: "/home", 
    hasExpand: true 
  },
  { 
    icon: "profile-2user.svg", 
    text: "User Management", 
    link: "/users", 
    hasExpand: true 
  },
  { 
    icon: "hierarchy-square-3.svg", 
    text: "Workflow Management", 
    link: "/workflow"
  }
];