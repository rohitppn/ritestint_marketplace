const menus = [
  {
    id: 1,
    name: "Home",
    children: [
      { id: 1, name: "Home V1", path: "/" },
      { id: 2, name: "Home V2", path: "/home-2" },
      { id: 3, name: "Home V3", path: "/home-3" },
      { id: 4, name: "Home V4", path: "/home-4" },
      { id: 5, name: "Home V5", path: "/home-5" },
      { id: 6, name: "Home V6", path: "/home-6" },
      { id: 7, name: "Home V7", path: "/home-7" },
      { id: 8, name: "Home V8", path: "/home-8" },
      { id: 9, name: "Home V9", path: "/home-9" },
      { id: 10, name: "Home V10", path: "/home-10" },
      { id: 11, name: "Home V11", path: "/home-11" },
      { id: 12, name: "Home V12", path: "/home-12" },
      { id: 13, name: "Home V13", path: "/home-13" },
      { id: 14, name: "Home V14", path: "/home-14" },
      { id: 15, name: "Home V15", path: "/home-15" },
      { id: 16, name: "Home V16", path: "/home-16" },
      { id: 17, name: "Home V17", path: "/home-17" },
      { id: 18, name: "Home V18", path: "/home-18" },
      { id: 19, name: "Home V19", path: "/home-19" },
      { id: 20, name: "Home V20", path: "/home-20" },
    ],
  },
  {
    id: 2,
    name: "Browse Jobs",
    children: [
      {
        id: 1,
        name: "Services",

        children: [
          { id: 1, name: "Service v1", path: "/service-1" },
          { id: 2, name: "Service v2", path: "/service-2" },
          { id: 3, name: "Service v3", path: "/service-3" },
          { id: 4, name: "Service v4", path: "/service-4" },
          { id: 5, name: "Service v5", path: "/service-5" },
          { id: 6, name: "Service v6", path: "/service-6" },
          { id: 7, name: "Service v7", path: "/service-7" },
          { id: 8, name: "Service All", path: "/service-all" },
          { id: 9, name: "Service Single v1", path: "/service-single" },
          { id: 10, name: "Service Single v2", path: "/service-single-v2" },
          { id: 11, name: "Service Single v3", path: "/service-single-v3" },
        ],
      },
      {
        id: 2,
        name: "Projects",
        children: [
          { id: 1, name: "Project v1", path: "/project-1" },
          { id: 1, name: "Project v2", path: "/project-2" },
          { id: 1, name: "Project v3", path: "/project-3" },
          { id: 1, name: "Project v4", path: "/project-4" },
          { id: 2, name: "Project Single v1", path: "/project-single" },
          { id: 3, name: "Project Single v2", path: "/project-single-v2" },
          { id: 4, name: "Project Single v3", path: "/project-single-v3" },
        ],
      },
      {
        id: 3,
        name: "Job View",
        children: [
          { id: 1, name: "Job list v1", path: "/job-1" },
          { id: 2, name: "Job list v2", path: "/job-2" },
          { id: 3, name: "Job list v3", path: "/job-3" },
          { id: 4, name: "Job Single", path: "/job-single" },
        ],
      },
    ],
  },
  {
    id: 3,
    name: "Users",
    children: [
      {
        id: 1,
        name: "Dashboard",
        children: [
          { id: 1, name: "Dashboard", path: "/dashboard" },
          { id: 2, name: "Proposal", path: "/proposal" },
          { id: 3, name: "Saved", path: "/saved" },
          { id: 4, name: "Message", path: "/message" },
          { id: 5, name: "Reviews", path: "/reviews" },
          { id: 6, name: "Invoice", path: "/invoice" },
          { id: 7, name: "Payouts", path: "/payouts" },
          { id: 8, name: "Statement", path: "/statements" },
          { id: 9, name: "Manage Service", path: "/manage-services" },
          { id: 10, name: "Add Services", path: "/add-services" },
          { id: 11, name: "Manage Jobs", path: "/manage-jobs" },
          {
            id: 12,
            name: "Manage Project",
            path: "/manage-projects",
          },
          {
            id: 13,
            name: "Create Project",
            path: "/create-projects",
          },
          { id: 14, name: "My Profile", path: "/my-profile" },
        ],
      },
      {
        id: 2,
        name: "Employee",
        children: [
          { id: 1, name: "Employee V1", path: "/employee-1" },
          { id: 2, name: "Employee V2", path: "/employee-2" },
          {
            id: 3,
            name: "Employee Single",
            path: "/employee-single",
          },
        ],
      },
      {
        id: 3,
        name: "Freelancer",
        children: [
          { id: 1, name: "Freelancer V1", path: "/freelancer-1" },
          { id: 2, name: "Freelancer V2", path: "/freelancer-2" },
          { id: 3, name: "Freelancer V3", path: "/freelancer-3" },
          {
            id: 4,
            name: "Freelancer Single v1",
            path: "/freelancer-single",
          },
          {
            id: 5,
            name: "Freelancer Single v2",
            path: "/freelancer-single-v2",
          },
          {
            id: 6,
            name: "Freelancer Single v3",
            path: "/freelancer-single-v3",
          },
        ],
      },
      {
        id: 4,
        name: "Become Seller",
        path: "/become-seller",
      },
    ],
  },
  {
    id: 4,
    name: "Pages",
    children: [
      {
        id: 1,
        name: "About",
        children: [
          { id: 1, name: "About v1", path: "/about-1" },
          { id: 2, name: "About v2", path: "/about-2" },
        ],
      },
      {
        id: 2,
        name: "Blog",
        children: [
          { id: 1, name: "List 1", path: "/blog-1" },
          { id: 2, name: "List 2", path: "/blog-2" },
          { id: 3, name: "List 3", path: "/blog-3" },
          { id: 4, name: "Single", path: "/blog-single" },
        ],
      },
      {
        id: 3,
        name: "Shop",
        children: [
          { id: 1, name: "List", path: "/shop-list" },
          { id: 2, name: "Single", path: "/shop-single" },
          { id: 3, name: "Cart", path: "/shop-cart" },
          { id: 4, name: "Checkout", path: "/shop-checkout" },
          { id: 5, name: "Order", path: "/shop-order" },
        ],
      },
      {
        id: 4,
        name: "Contact",
        path: "/contact",
      },
      {
        id: 5,
        name: "404",
        path: "/not-found",
      },
      {
        id: 6,
        name: "Faq",
        path: "/faq",
      },
      {
        id: 7,
        name: "Help",
        path: "/help",
      },
      {
        id: 8,
        name: "Invoices",
        path: "/invoices",
      },
      {
        id: 9,
        name: "Login",
        path: "/login",
      },
      {
        id: 10,
        name: "Pricing",
        path: "/pricing",
      },
      {
        id: 11,
        name: "Register",
        path: "/register",
      },
      {
        id: 12,
        name: "Terms",
        path: "/terms",
      },
      {
        id: 13,
        name: "UI Elements",
        path: "/ui-elements",
      },
    ],
  },
  {
    id: 5,
    name: "Contact",
    path: "/contact",
  },
];

export default menus;
