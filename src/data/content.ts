import type { LucideIcon } from 'lucide-react'
import {
  BarChart3,
  Cloud,
  Compass,
  Database,
  LineChart,
  Network,
  Server,
  Shield,
  Users,
} from 'lucide-react'

export const siteConfig = {
  name: 'NWC',
  fullName: 'Nicholas & Wayne Consultancy',
  tagline: 'Technology Consulting • IT Advisory • Digital Transformation',
  description:
    'NWC (Nicholas & Wayne Consultancy) helps SMEs, retail businesses and growing organisations strengthen infrastructure, protect business data, modernise operations and improve digital visibility through business-first technology consulting.',
  phone: '+65 9883 3303',
  email: 'hello@nwcconsultancy.sg',
  address: '60 Paya Lebar Road #07-54, Paya Lebar Square, Singapore 409051',
  serviceArea: 'Singapore',
}

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Projects', href: '#projects' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
]

export const trustMetrics = [
  { value: '15+', label: 'Years of hands-on technology experience' },
  { value: 'B2B', label: 'Support for SMEs, corporate teams and project work' },
  { value: '360°', label: 'From infrastructure to security and digital growth' },
  { value: 'SG', label: 'Singapore-based practical technology delivery' },
]

export const heroBadges = [
  'IT Advisory',
  'Infrastructure',
  'Cloud',
  'Data Center',
  'Cybersecurity',
  'Digital Marketing',
]

export interface ServiceSlide {
  title: string
  description: string
  image: string
  imageAlt: string
  tags: string[]
}

export const serviceSlides: ServiceSlide[] = [
  {
    title: 'Technology Consulting',
    description:
      'Practical guidance for business owners and management teams that need a clearer technology roadmap, vendor direction, system improvement plan or digital transformation strategy.',
    image:
      'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1600&q=80',
    imageAlt: 'Business technology advisory meeting with laptops and planning notes',
    tags: ['Technology Roadmap', 'IT Planning', 'Business Improvement'],
  },
  {
    title: 'Infrastructure',
    description:
      'Design, deploy and support the IT foundations that keep offices, retail outlets and project teams connected, productive and easier to manage.',
    image:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80',
    imageAlt: 'Computer hardware and infrastructure components for business IT support',
    tags: ['Servers', 'Networking', 'Workstations'],
  },
  {
    title: 'Cloud',
    description:
      'Support cloud adoption, hybrid infrastructure planning and migration decisions so your business can scale without unnecessary complexity.',
    image:
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=80',
    imageAlt: 'Cloud technology and global digital network concept',
    tags: ['Cloud Migration', 'Hybrid IT', 'AWS / Azure / GCP'],
  },
  {
    title: 'Data Center',
    description:
      'Server, NAS, RAID, backup and recovery support for business-critical systems where uptime, storage health and recoverability matter.',
    image:
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1600&q=80',
    imageAlt: 'Modern data center server racks with network equipment lights',
    tags: ['Servers', 'Storage', 'Backup & Recovery'],
  },
  {
    title: 'Cybersecurity',
    description:
      'Practical cyber hygiene, endpoint protection, firewall hardening and access control support to reduce common business technology risks.',
    image:
      'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1600&q=80',
    imageAlt: 'Cybersecurity monitoring screen and digital protection concept',
    tags: ['Security Advisory', 'Endpoint Protection', 'Firewall Hardening'],
  },
  {
    title: 'Digital Marketing',
    description:
      'Improve digital visibility, website enquiries and campaign performance through SEO, SEM, Google Ads, local search and analytics reporting.',
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80',
    imageAlt: 'Digital marketing analytics dashboard on laptop',
    tags: ['SEO', 'Google Ads', 'Analytics'],
  },
]

export interface ServiceCard {
  icon: LucideIcon
  title: string
  description: string
  features: string[]
  image: string
  imageAlt: string
  highlighted?: boolean
}

export const services: ServiceCard[] = [
  {
    icon: Compass,
    title: 'Enterprise Technology Consulting & IT Advisory',
    description:
      'Assess current systems, identify gaps, prioritise projects and create a practical roadmap for better technology operations.',
    features: [
      'Technology roadmap and IT planning',
      'Business process and system improvement',
      'Vendor, solution and project advisory',
    ],
    image:
      'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Business technology consulting meeting',
    highlighted: true,
  },
  {
    icon: Network,
    title: 'IT Infrastructure, Networking & Cloud Services',
    description:
      'Design, deploy and support the hardware, network and cloud foundations that keep business teams connected and productive.',
    features: [
      'Server, workstation and network setup',
      'Wi-Fi, firewall, switch and VPN support',
      'Cloud and hybrid infrastructure support',
    ],
    image:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Computer hardware and infrastructure components',
  },
  {
    icon: Database,
    title: 'Data Center, Servers, Storage & Recovery',
    description:
      'Support business-critical servers, NAS, RAID, backup, disaster recovery and urgent data recovery situations.',
    features: [
      'Windows Server and virtualisation',
      'NAS, RAID and backup planning',
      'Data recovery and recovery readiness',
    ],
    image:
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Data center server racks',
  },
  {
    icon: Shield,
    title: 'Cybersecurity & IT Security Advisory',
    description:
      'Improve everyday cyber hygiene with practical security reviews, endpoint protection, firewall hardening and access control support.',
    features: [
      'Security best-practice advisory',
      'Endpoint and access control support',
      'Firewall and network hardening',
    ],
    image:
      'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Cybersecurity technology screen',
  },
  {
    icon: LineChart,
    title: 'Digital Marketing & Analytics',
    description:
      'Generate visibility and enquiries through SEO, SEM, Google Ads, local search, analytics reporting and conversion-focused campaigns.',
    features: [
      'SEO and local search improvement',
      'Google Ads and campaign setup',
      'Analytics and performance reporting',
    ],
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Digital marketing analytics dashboard',
  },
  {
    icon: Users,
    title: 'About NWC',
    description:
      'A Singapore-based technology consulting and IT services brand built around practical delivery, clear explanation and business outcomes.',
    features: [
      'Founder-led technology experience',
      'Project-based support model',
      'Clear communication for management',
    ],
    image:
      'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Business handshake representing trusted technology partnership',
  },
]

export const approachSteps = [
  {
    step: '01',
    title: 'Understand the business problem',
    description: 'Review current pain points, operations, users, systems, risk and budget.',
  },
  {
    step: '02',
    title: 'Recommend the right technology path',
    description:
      'Prioritise the solution that improves reliability, productivity, security or growth.',
  },
  {
    step: '03',
    title: 'Deploy, document and support',
    description:
      'Implement with clear handover notes so future support and scaling are easier.',
  },
]

export const outcomes = [
  {
    title: 'Less downtime',
    description:
      'Better infrastructure, backup and recovery planning for smoother daily operations.',
  },
  {
    title: 'Clearer IT direction',
    description:
      'A practical roadmap for upgrades, projects, cloud adoption and vendor decisions.',
  },
  {
    title: 'Stronger security posture',
    description:
      'Improved cyber hygiene, access control and protection against common business risks.',
  },
  {
    title: 'More digital visibility',
    description:
      'Marketing and analytics support to improve enquiries, traffic and campaign performance.',
  },
]

export const industries = [
  'Retail & POS',
  'SMEs',
  'Corporate Offices',
  'Engineering Firms',
  'Professional Services',
  'Project Teams',
  'Legacy System Support',
  'Cloud & Security Upgrades',
]

export const whyChoose = [
  'Practical advice from real IT, infrastructure, data recovery and digital project experience',
  'Clear explanation for both technical users and business decision makers',
  'Ability to support both legacy systems and modern cloud / cybersecurity needs',
  'Balanced focus on reliability, cost control, security and business growth',
  'Singapore-based support for companies that value responsive communication',
]

export const team = [
  {
    name: 'Wayne Yong',
    role: 'Founder & Managing Director, NWC',
    bio: 'Singapore-based technology professional with experience across telecommunications, IT infrastructure, system administration, cloud, data recovery, cybersecurity and digital marketing.',
    tags: ['Technology Consulting', 'IT Advisory', 'Digital Transformation'],
    image:
      'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Nicholas Lim',
    role: 'Technical Lead | Project-based, NWC',
    bio: 'Supports project-based technical delivery with experience in cloud infrastructure, DevOps, automation and secure cloud operations across AWS and GCP environments.',
    tags: ['Cloud Infrastructure', 'DevOps', 'AWS & GCP'],
    image:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=600&q=80',
  },
]

export interface Project {
  category: string
  title: string
  description: string
  image: string
  imageAlt: string
}

export const projects: Project[] = [
  {
    category: 'Infrastructure',
    title: 'SME IT Infrastructure Refresh',
    description:
      'Workstation upgrade, data migration, network improvement, backup planning and daily IT support for a growing SME.',
    image:
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Modern office IT infrastructure',
  },
  {
    category: 'Retail Technology',
    title: 'POS & Outlet Technology Setup',
    description:
      'POS hardware, cashier workflow, printer, scanner, payment device and outlet connectivity setup for retail operations.',
    image:
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Retail POS technology setup',
  },
  {
    category: 'Cloud',
    title: 'Cloud & Hybrid Infrastructure Planning',
    description:
      'Cloud adoption, Microsoft 365, remote access, backup strategy and hybrid infrastructure roadmap.',
    image:
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Cloud and hybrid infrastructure',
  },
  {
    category: 'Data Center',
    title: 'Server, NAS, Storage & Backup',
    description:
      'Server refresh, NAS deployment, RAID planning, backup verification and disaster recovery readiness.',
    image:
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Server and storage infrastructure',
  },
  {
    category: 'Cybersecurity',
    title: 'Security Review & Hardening',
    description:
      'Cyber hygiene review, firewall hardening, endpoint protection, access control and risk reduction.',
    image:
      'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Cybersecurity review and hardening',
  },
  {
    category: 'Digital Marketing',
    title: 'Website, SEO & Google Ads Growth',
    description:
      'Website improvement, landing pages, local SEO, Google Ads and analytics reporting.',
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Digital marketing growth dashboard',
  },
]

export interface TechCategory {
  icon: LucideIcon
  title: string
  items: string[]
}

export const techStack: TechCategory[] = [
  {
    icon: Cloud,
    title: 'Cloud & Productivity',
    items: ['Microsoft 365', 'AWS', 'Azure', 'GCP', 'Hybrid IT'],
  },
  {
    icon: Server,
    title: 'Infrastructure & Servers',
    items: [
      'Windows Server',
      'Active Directory',
      'Hyper-V',
      'Synology & QNAP NAS',
      'RAID & Backup',
    ],
  },
  {
    icon: Network,
    title: 'Networking & Security',
    items: ['Firewall & VPN', 'Wi-Fi', 'Endpoint Protection', 'MFA & Access Control'],
  },
  {
    icon: BarChart3,
    title: 'Digital Growth',
    items: ['SEO & Local Search', 'Google Ads', 'Analytics', 'Conversion Tracking'],
  },
]

export const testimonials = [
  {
    quote:
      'NWC gave us a clear technology roadmap instead of just selling hardware. We finally understand what to upgrade first and why.',
    author: 'Operations Manager',
    company: 'Professional Services Firm',
    outcome: 'Clearer IT direction',
  },
  {
    quote:
      'After our server issues, they rebuilt our backup workflow and documented everything. Downtime is no longer our biggest worry.',
    author: 'Business Owner',
    company: 'Growing SME',
    outcome: 'Less downtime',
  },
  {
    quote:
      'The security review was practical and easy to follow. We improved firewall rules, endpoint protection and user access within weeks.',
    author: 'IT Coordinator',
    company: 'Corporate Office',
    outcome: 'Stronger security posture',
  },
  {
    quote:
      'Our Google Ads and SEO campaigns are now tied to real enquiries. Reporting is clear enough for management to act on.',
    author: 'Marketing Lead',
    company: 'Retail Business',
    outcome: 'More digital visibility',
  },
]

export const faqs = [
  {
    question: 'What happens during an initial consultation?',
    answer:
      'We discuss your business goals, current IT problems, urgency, budget range, users, systems and expected outcomes to understand where technology can help most.',
  },
  {
    question: 'How does your consulting engagement work?',
    answer:
      'We review your current infrastructure, identify gaps and risks, prepare a prioritised roadmap, then support implementation, vendor coordination and handover documentation.',
  },
  {
    question: 'Do you support both legacy systems and modern cloud?',
    answer:
      'Yes. We help businesses maintain reliable legacy systems while planning practical upgrades to cloud, hybrid infrastructure, Microsoft 365 and modern security practices.',
  },
  {
    question: 'Who do you typically work with?',
    answer:
      'SMEs, retail businesses, corporate offices, engineering firms, professional services and project teams across Singapore that need practical IT support without unnecessary complexity.',
  },
]

export const serviceOptions = [
  'Enterprise Technology Consulting / IT Advisory',
  'IT Infrastructure / Support / Networking / Cloud',
  'Data Center / Servers / Storage / Data Recovery',
  'Cybersecurity - IT Security Advisory',
  'Digital Marketing Services',
]
