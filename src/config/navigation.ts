import {
  XMarkIcon,
  ChevronDownIcon,
  ArrowUpIcon,
  CommandLineIcon,
  DevicePhoneMobileIcon,
  PaintBrushIcon,
  GlobeAltIcon,
  CreditCardIcon,
  BuildingOfficeIcon,
  ShoppingBagIcon,
  ChartBarIcon,
  UserGroupIcon,
  CpuChipIcon,
  CodeBracketIcon,
  CubeIcon,
  TruckIcon,
  NewspaperIcon,
  ChatBubbleLeftRightIcon,
  InformationCircleIcon,
  PhoneIcon,
  Bars3BottomRightIcon,
  BriefcaseIcon,
  EnvelopeIcon,
  ChevronRightIcon,
  AcademicCapIcon,
  RocketLaunchIcon,
  CurrencyRupeeIcon,
  HomeIcon,
  CakeIcon,
  ComputerDesktopIcon,
  ServerIcon,
  FingerPrintIcon,
  BoltIcon,
  QrCodeIcon,
  SignalIcon
} from "@heroicons/react/24/outline";

export const availablePages = [
  "/frontend-development",
  "/web-development",
  "/custom-software-development-services",
  "/crm-software-development",
  "/ecommerce-software-development",
  // "/grocery-software",
  "/real-estate-software-development",
  "/mlm-software-development-company",
  "/human-resource-management-software-development",
  "/fintech-software-development-company",
  "/hotel-management-software",
  "/android-mobile-app-development",
  "/enterprise-solutions",
  "/travel-booking",
  "/iphone-mobile-app-development",
  "/hybrid-app-development",
  "/on-demand-app-development",
  "/backend-development",
  "/full-stack-development",
  "/logo-graphic-design",
  // "/digital-marketing",
  "/billing-software",
  "/testimonials",
  "/blog",
  "/about",
  "/careers",
  "/contact",
  "/imps-upi-payout-services",
  "/press-events",
  "/coming-soon",
];

export const servicesMenuData = [
  {
    title: "App Development",
    items: [
      { title: "Android Mobile App Development", href: "/android-mobile-app-development", icon: DevicePhoneMobileIcon },
      { title: "IPhone Mobile App Development", href: "/iphone-mobile-app-development", icon: DevicePhoneMobileIcon },
      { title: "On-Demand App Development", href: "/on-demand-app-development", icon: TruckIcon },
      { title: "Hybrid App Development", href: "/hybrid-app-development", icon: CodeBracketIcon },
    ]
  },
  {
    title: "Custom Web Development",
    items: [
      { title: "Web Application Development", href: "/web-development", icon: GlobeAltIcon },
      { title: "Frontend Development", href: "/frontend-development", icon: CodeBracketIcon },
      { title: "Backend Development", href: "/backend-development", icon: ServerIcon },
      { title: "Full Stack Development", href: "/full-stack-development", icon: CommandLineIcon },
    ]
  },
  {
    title: "Logo & Graphic Designing",
    image: "/header/logo-graphic-designing.png",
    href: "/logo-graphic-design",
    items: []
  },
  {
    title: "Digital Marketing",
    image: "/header/fintech-software.jpg",
    // href: "/digital-marketing",
    href: "/coming-soon",
    items: []
  },
  {
    title: "Enterprise Solutions",
    image: "/header/fintech-software.jpg",
    href: "/enterprise-solutions",
    items: []
  }
];

export const navItems = [
  {
    title: "Our Company",
    href: "company",
    dropdown: true,
    items: [
      { title: "About Us", href: "/about", sub: "About our company", icon: InformationCircleIcon },
      { title: "Portfolio", href: "/portfolio", sub: "Explore our work", icon: BriefcaseIcon },
      { title: "Testimonials", href: "/testimonials", sub: "What clients say", icon: ChatBubbleLeftRightIcon },
      { title: "Press & Events", href: "/press-events", sub: "News & Events", icon: GlobeAltIcon },
      { title: "Blog", href: "/blog", sub: "Latest insights", icon: NewspaperIcon },
    ],
  },
  {
    title: "Services",
    href: "services",
    dropdown: true,
    isComplex: true,
    items: servicesMenuData
  },
  {
    title: "Industries",
    href: "industries",
    dropdown: true,
    isComplex: true,
    items: [
      {
        title: "Finance & Banking",
        color: "bg-orange-100 text-orange-800",
        items: [
          { title: "Fintech Softwares", href: "/fintech-software-development-company", desc: "Comprehensive financial tech", icon: CreditCardIcon },
        ]
      },
      {
        title: "Commerce & Retail",
        color: "bg-orange-100 text-orange-800",
        items: [
          { title: "E-commerce Software", href: "/ecommerce-software-development", desc: "Robust online store platforms", icon: ShoppingBagIcon },
          // { title: "Grocery Software", href: "/grocery-software", desc: "Delivery & management systems", icon: ShoppingBagIcon },
          // { title: "Food Delivery Software", href: "/coming-soon", desc: "Order tracking & logistics", icon: CakeIcon },
        ]
      },
      {
        title: "Healthcare",
        color: "bg-orange-100 text-orange-800",
        items: [
          { title: "Healthcare Software", href: "/coming-soon", desc: "Patient management systems", icon: UserGroupIcon },
          { title: "ART Banking Software", href: "/coming-soon", desc: "Specialized fertility tools", icon: UserGroupIcon }
        ]
      },
      {
        title: "Education",
        color: "bg-orange-100 text-orange-800",
        items: [
          { title: "Education Software", href: "/education-software-development", desc: "Streamlined administration", icon: AcademicCapIcon },
          // { title: "School Management", href: "/coming-soon", desc: "Streamlined administration", icon: AcademicCapIcon },
          // { title: "Online Education", href: "/coming-soon", desc: "Virtual classrooms & LMS", icon: AcademicCapIcon },
          // { title: "Learning Management", href: "/coming-soon", desc: "Course delivery platforms", icon: AcademicCapIcon }
        ]
      },
      {
        title: "Travel & Hospitality",
        color: "bg-orange-100 text-orange-800",
        items: [
          { title: "Travel Booking Software", href: "/travel-booking", desc: "Complete travel, hotel & cab booking systems", icon: RocketLaunchIcon }
        ]
      },
      {
        title: "Real Estate",
        color: "bg-orange-100 text-orange-800",
        items: [
          { title: "Real Estate Software", href: "/real-estate-software-development", desc: "Property listings & CRM", icon: HomeIcon }
        ]
      },
    ],
  },
  {
    title: "Solutions",
    href: "solutions",
    dropdown: true,
    isComplex: true,
    items: [
      {
        title: "Human Resources",
        color: "bg-orange-100 text-orange-800",
        items: [
          // { title: "Employee Tracking", href: "/coming-soon", desc: "Monitor workforce efficiency", icon: UserGroupIcon },
          { title: "HRMS Software", href: "/human-resource-management-software-development", desc: "Complete HR management", icon: BriefcaseIcon },
        ]
      },
      {
        title: "Finance & Commerce",
        color: "bg-orange-100 text-orange-800",
        items: [
          { title: "Billing Software", href: "/billing-software", desc: "Invoicing & accounts", icon: CreditCardIcon },
          { title: "Reseller Software", href: "/coming-soon", desc: "Manage reseller networks", icon: UserGroupIcon },
        ]
      },
      {
        title: "Customer Relations",
        color: "bg-orange-100 text-orange-800",
        items: [
          { title: "CRM Software", href: "/crm-software-development", desc: "Customer relationship tools", icon: UserGroupIcon },
          { title: "MLM Software", href: "/mlm-software-development-company", desc: "Multi-level marketing", icon: ChartBarIcon },
        ]
      },
      {
        title: "Operations & Inventory",
        color: "bg-orange-100 text-orange-800",
        items: [
          { title: "Inventory Management", href: "/coming-soon", desc: "Stock tracking systems", icon: BriefcaseIcon },
        ]
      },
      {
        title: "Hospitality & Food",
        color: "bg-orange-100 text-orange-800",
        items: [
          { title: "Restaurant Management", href: "/coming-soon", desc: "POS & kitchen mgmt", icon: ShoppingBagIcon },
        ]
      },
      {
        title: "Software & Transport",
        color: "bg-orange-100 text-orange-800",
        items: [
          { title: "Customized Software", href: "/custom-software-development-services", desc: "Tailored IT solutions", icon: CommandLineIcon },
          // { title: "Cab Booking", href: "/coming-soon", desc: "Taxi dispatch system", icon: TruckIcon },
        ]
      },
    ],
  },

  {
    title: "Fintech Software",
    href: "fintech-software",
    dropdown: true,
    isComplex: true,
    items: [
      {
        title: "Banking Services",
        color: "bg-orange-100 text-orange-800",
        items: [
          { title: "Aadhaar Enabled Payment System (AEPS)", href: "/coming-soon", desc: "High secure payments", icon: FingerPrintIcon },
          { title: "M-ATM/POS", href: "/coming-soon", desc: "Mobile ATM & POS Access", icon: DevicePhoneMobileIcon },
        ]
      },
      {
        title: "Money Transfer",
        color: "bg-orange-100 text-orange-800",
        items: [
          { title: "Payout (IMPS/UPI)", href: "/imps-upi-payout-services", desc: "Seamless UPI payments", icon: QrCodeIcon },
        ]
      },
      {
        title: "Payment Systems",
        color: "bg-orange-100 text-orange-800",
        items: [
          { title: "Credit Card Bill Payment", href: "/coming-soon", desc: "Easy bill settlements", icon: CreditCardIcon },
        ]
      },
      {
        title: "Utility Services",
        color: "bg-orange-100 text-orange-800",
        items: [
          { title: "Bharat Bill Payment System (BBPS)", href: "/coming-soon", desc: "Bill payment system", icon: BuildingOfficeIcon },
          { title: "Pancard (UTI/NSDL)", href: "/coming-soon", desc: "Pan card services", icon: InformationCircleIcon },
        ]
      },
      {
        title: "Recharge Solutions",
        color: "bg-orange-100 text-orange-800",
        items: [
          { title: "Mobile Recharge", href: "/coming-soon", desc: "Mobile & DTH", icon: BoltIcon },
        ]
      },
      {
        title: "Offline Services",
        color: "bg-orange-100 text-orange-800",
        items: [
          { title: "Offline Services", href: "/coming-soon", desc: "Offline transactions", icon: SignalIcon },
        ]
      },
    ],
  },
  {
    title: "Hire Talent",
    href: "hireateam",
    dropdown: true,
    isComplex: true,
    items: [
      {
        title: "Dedicated Teams",
        color: "bg-orange-100 text-orange-800",
        items: [
          { title: "Hire Developers", href: "/coming-soon", desc: "Build your dream team", icon: CodeBracketIcon },
        ]
      },
      {
        title: "Web Engineering",
        color: "bg-orange-100 text-orange-800",
        items: [
          { title: "Hire Front-End Developers", href: "/coming-soon", desc: "UI/UX implementation", icon: ComputerDesktopIcon },
          { title: "Hire Back-End Developers", href: "/coming-soon", desc: "Robust server logic", icon: ServerIcon },
        ]
      },
      {
        title: "CMS Solutions",
        color: "bg-orange-100 text-orange-800",
        items: [
          { title: "Hire CMS Developers", href: "/coming-soon", desc: "WordPress & more", icon: CommandLineIcon },
        ]
      },
      {
        title: "Advanced Tech",
        color: "bg-orange-100 text-orange-800",
        items: [
          { title: "Hire AI Engineers", href: "/coming-soon", desc: "AI & ML integration", icon: CpuChipIcon },
        ]
      },
      {
        title: "Digital Marketing",
        color: "bg-orange-100 text-orange-800",
        items: [
          { title: "Hire Digital Marketing Experts", href: "/coming-soon", desc: "Grow your reach", icon: ChartBarIcon },
        ]
      },
      {
        title: "Creative Design",
        color: "bg-orange-100 text-orange-800",
        items: [
          { title: "Hire Graphic Designers", href: "/coming-soon", desc: "Creative visuals", icon: PaintBrushIcon },
        ]
      },
    ],
  },
];

export const socialIcons = [
  {
    title: "Facebook",
    href: "https://www.facebook.com/camleniosoftware/mentions/?_rdr",
  },
  {
    title: "Twitter",
    href: "https://x.com/camlenio",
  },
  {
    title: "Instagram",
    href: "https://www.instagram.com/camleniosoftware/",
  },
  {
    title: "Linkedin",
    href: "https://www.linkedin.com/posts/camlenio_camlenio_softwaredevelopment",
  },
];
