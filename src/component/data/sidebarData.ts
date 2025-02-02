// // // src/components/data/sidebarData.ts
// // export interface SidebarItem {
// //     icon: string;
// //     text: string;
// //     link: string;
// //     hasExpand?: boolean;  
// //   }
  
// //   export const sidebarData: SidebarItem[] = [
// //     { icon: "home-2.svg", text: "Home", link: "/home", hasExpand: true },
// //     { icon: "profile-2user.svg", text: "User Management", link: "/dashboard", hasExpand: true },
// //     { icon: "hierarchy-square-3.svg", text: "Workflow Management", link: "/projects" }  ,
    
// //   ];

///////////////////////////////////////////////////////////////////////////////
// // src/components/data/sidebarData.ts
// export interface SidebarItem {
//   icon: string;
//   text: string;
//   link: string;
//   hasExpand?: boolean;
//   isCollapsed?: boolean;
//   isActive?: boolean; 
// }

// export const sidebarData: SidebarItem[] = [
//   { 
//     icon: "home-2.svg", 
//     text: "Dashboard", 
//     link: "/home", 
//     hasExpand: true 
//   },
//     {
//     icon: "profile-2user.svg", 
//     text: "User Management", 
//     link: "/users", 
//     hasExpand: true 
//   },
//   { 
//     icon: "hierarchy-square-3.svg", 
//     text: "Workflow Management", 
//     link: "/workflow"
//   },
//   { 
//     icon: "receipt-search.svg", 
//     text: "Audit Trail", 
//     link: "/AuditTrail",
//     hasExpand: true 

//   },
//   { 
//     icon: "arrange-square.svg", 
//     text: "Customer Transactions", 
//     link: "/CustomerTransactions",
//     hasExpand: true 

//   },
//   { 
//     icon: "briefcase.svg", 
//     text: "Customer 360", 
//     link: "/Customer360",
//     hasExpand: true 

//   },
//   { 
//     icon: "user-octagon.svg", 
//     text: "Customer Onboarding", 
//     link: "/CustomerOnboarding",
//     hasExpand: true 

//   },
//   { 
//     icon: "message-question.svg", 
//     text: "Complaints Management", 
//     link: "/ComplaintsManagement",
//     hasExpand: true 

//   },
//   { 
//     icon: "trade.svg", 
//     text: "Trade Finance", 
//     link: "/TradeFinance",
//     hasExpand: true 

//   },
//   { 
//     icon: "personalcard.svg", 
//     text: "Lead Management", 
//     link: "/LeadManagement",
//     hasExpand: true 

//   },
//   { 
//     icon: "money-send.svg", 
//     text: "Loan Management", 
//     link: "/LoanManagement",
//     hasExpand: true 

//   },
//   { 
//     icon: "book.svg", 
//     text: "Knowledge Base", 
//     link: "/KnowledgeBase",

//   },
//   { 
//     icon: "key-square.svg", 
//     text: "License Management", 
//     link: "/LicenseManagement",
//     hasExpand: true 

//   },
//   { 
//     icon: "setting-3.svg", 
//     text: "Admin Settings", 
//     link: "/AdminSettings",
//     hasExpand: true 

//   },
// ];


////add menu

// sidebarData.ts
export interface SidebarItem {
  icon: string;
  text: string;
  link: string;
  hasExpand?: boolean;
  isCollapsed?: boolean;
  isActive?: boolean;
  submenuItems?: Array<{
    icon?: string;
    text: string;
    link: string;
  }>;
}

export const sidebarData: SidebarItem[] = [
  { 
    icon: "home-2.svg", 
    text: "Dashboard", 
    link: "/", 
    hasExpand: true,
    submenuItems: [
      { text: "Analytics Dashboard", link: "/" },
      { text: "MAlek", link: "/homes" },
      { text: "Operations Dashboard", link: "/home/operations" }
    ]
  },
  {
    icon: "profile-2user.svg", 
    text: "User Management", 
    link: "/users", 
    hasExpand: true,
    submenuItems: [
      { text: "User List", link: "/users/list" },
      { text: "User Groups", link: "/users/groups" },
      { text: "Permissions", link: "/users/permissions" },
      { text: "Roles", link: "/users/roles" }
    ]
  },
  { 
    icon: "hierarchy-square-3.svg", 
    text: "Workflow Management", 
    link: "/"
  },
  { 
    icon: "receipt-search.svg", 
    text: "Audit Trail", 
    link: "/AuditTrail",
    hasExpand: true,
    submenuItems: [
      { text: "System Logs", link: "/audit/system" },
      { text: "User Activity", link: "/audit/activity" },
      { text: "Security Logs", link: "/audit/security" }
    ]
  },
  { 
    icon: "arrange-square.svg", 
    text: "Customer Transactions", 
    link: "/CustomerTransactions",
    hasExpand: true,
    submenuItems: [
      { text: "Transaction History", link: "/transactions/history" },
      { text: "Pending Transactions", link: "/transactions/pending" },
      { text: "Transaction Reports", link: "/transactions/reports" }
    ]
  },
//////////////////////
{ 
  icon: "briefcase.svg", 
  text: "Customer 360", 
  link: "/Customer360",
  hasExpand: true ,
  submenuItems: [
    { text: "Transaction History", link: "/transactions/history" },
    { text: "Pending Transactions", link: "/transactions/pending" },
    { text: "Transaction Reports", link: "/transactions/reports" }
  ]

},
{ 
  icon: "user-octagon.svg", 
  text: "Customer Onboarding", 
  link: "/CustomerOnboarding",
  hasExpand: true ,
  submenuItems: [
    { text: "Transaction History", link: "/transactions/history" },
    { text: "Pending Transactions", link: "/transactions/pending" },
    { text: "Transaction Reports", link: "/transactions/reports" }
  ]

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
  hasExpand: true ,
  submenuItems: [
    { text: "Transaction History", link: "/transactions/history" },
    { text: "Pending Transactions", link: "/transactions/pending" },
    { text: "Transaction Reports", link: "/transactions/reports" }
  ]

},
];
