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
  isActive?: boolean; 
}

export const sidebarData: SidebarItem[] = [
  { 
    icon: "home-2.svg", 
    text: "Dashboard", 
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
  },
  { 
    icon: "receipt-search.svg", 
    text: "Audit Trail", 
    link: "/AuditTrail",
    hasExpand: true 

  },
  { 
    icon: "arrange-square.svg", 
    text: "Customer Transactions", 
    link: "/CustomerTransactions",
    hasExpand: true 

  },
  { 
    icon: "briefcase.svg", 
    text: "Customer 360", 
    link: "/Customer360",
    hasExpand: true 

  },
  { 
    icon: "user-octagon.svg", 
    text: "Customer Onboarding", 
    link: "/CustomerOnboarding",
    hasExpand: true 

  },
  { 
    icon: "message-question.svg", 
    text: "Complaints Management", 
    link: "/ComplaintsManagement",
    hasExpand: true 

  },
  { 
    icon: "trade.svg", 
    text: "Trade Finance", 
    link: "/TradeFinance",
    hasExpand: true 

  },
  { 
    icon: "personalcard.svg", 
    text: "Lead Management", 
    link: "/LeadManagement",
    hasExpand: true 

  },
  { 
    icon: "money-send.svg", 
    text: "Loan Management", 
    link: "/LoanManagement",
    hasExpand: true 

  },
  { 
    icon: "book.svg", 
    text: "Knowledge Base", 
    link: "/KnowledgeBase",

  },
  { 
    icon: "key-square.svg", 
    text: "License Management", 
    link: "/LicenseManagement",
    hasExpand: true 

  },
  { 
    icon: "setting-3.svg", 
    text: "Admin Settings", 
    link: "/AdminSettings",
    hasExpand: true 

  },
];