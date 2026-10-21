import { 
  PhoneCall, 
  ShieldCheck, 
  Users, 
  Building2, 
  Network, 
  UserCheck, 
  GraduationCap, 
  Sparkles 
} from 'lucide-react';
import { contactWallpaper } from '../../components/CloudinaryLinks';

export const DEFAULT_WALLPAPER = contactWallpaper;

export const HEADER_CONTENT = {
  title: 'Contact Us',
  lines: [
    'Connect directly with administrative officers, faculty, and departments.',
    'Access verified phone extensions, emails, and office locations.',
    'Select any directory below or ask our AI Assistant.'
  ]
};

export const AI_SUGGESTED_PILLS = [
  'Who is the Director?',
  'Admissions Enquiry Number',
  'CSE Department contact',
  'Hostel Office contact'
];

export const AI_KNOWLEDGE_BASE = [
  {
    keywords: ['officer', 'director', 'dean', 'administration', 'head'],
    reply: 'Dr. Rajesh Sharma (Director General) can be reached at Ext. 101 (director@institution.edu). Prof. Anita Verma (Dean Academic Affairs) is at Ext. 104.'
  },
  {
    keywords: ['enquiry', 'help', 'admission', 'desk', 'general', 'toll'],
    reply: 'Enquiry Centre operates 24/7. Central Toll-Free: 1800-123-4567 | Admissions Support: admissions@institution.edu | Office: Room 102, Admin Block.'
  },
  {
    keywords: ['branch', 'campus', 'location', 'office', 'city', 'park'],
    reply: 'We have 4 active branches: Main North Campus (HQ), City Center Campus, South Technology Park, and Western Zonal Office.'
  },
  {
    keywords: ['student', 'hostel', 'exam', 'council', 'affairs', 'placement'],
    reply: 'Student Council & Records Cell is at Ext. 205 (records@institution.edu). Hostel Affairs committee is reachable at Ext. 210.'
  },
  {
    keywords: ['dept', 'department', 'cse', 'engineering', 'computer', 'mechanical', 'electrical'],
    reply: 'Computer Science & Engineering is located in Block B, 3rd Floor (cse@institution.edu, Ext. 301). Electrical Engineering is in Block A, 2nd Floor.'
  },
  {
    keywords: ['employee', 'faculty', 'staff', 'hr', 'professor', 'library'],
    reply: 'Active employee records count: 450+ faculty & support staff. For HR inquiries, contact Sunita Reddy at hr@institution.edu.'
  },
  {
    keywords: ['former', 'alumni', 'retired', 'emeritus', 'past'],
    reply: 'Former employees and retired faculty archives are preserved in the Emeritus Registry. Contact alumni.staff@institution.edu.'
  }
];

export const DIRECTORY_APPS = [
  {
    id: 'enquiry',
    name: 'Enquiry Centre',
    shortName: 'Enquiry',
    icon: PhoneCall,
    bg: 'bg-gradient-to-tr from-sky-500 to-blue-600',
    shadow: 'shadow-sky-500/35',
    badge: '24/7 Desk',
    description: 'General Enquiries, Admissions & Helpdesk Assistance',
    contacts: [
      { name: 'Central Helpdesk', role: 'Toll-free Enquiry', phone: '1800-123-4567', email: 'helpdesk@institution.edu' },
      { name: 'Admissions Officer', role: 'Student Admissions Desk', phone: '+91 98765 43210', email: 'admissions@institution.edu' },
      { name: 'Public Relations Office', role: 'Media & Public Affairs', phone: '+91 98765 43211', email: 'pro@institution.edu' },
      { name: 'Information Center', role: 'Visitor Pass & Guidance', phone: 'Ext. 102', email: 'info@institution.edu' }
    ]
  },
  {
    id: 'officers',
    name: 'Officers Directory',
    shortName: 'Officers',
    icon: ShieldCheck,
    bg: 'bg-gradient-to-tr from-amber-500 to-orange-600',
    shadow: 'shadow-amber-500/35',
    badge: 'Executive',
    description: 'Executive Leadership, Deans & Administrative Officers',
    contacts: [
      { name: 'Dr. Rajesh Sharma', role: 'Director General', phone: 'Ext. 101', email: 'director@institution.edu' },
      { name: 'Prof. Anita Verma', role: 'Dean of Academic Affairs', phone: 'Ext. 104', email: 'dean.acad@institution.edu' },
      { name: 'Col. Vikram Singh', role: 'Registrar & Chief Administrator', phone: 'Ext. 108', email: 'registrar@institution.edu' },
      { name: 'Dr. Meera Iyer', role: 'Finance & Accounts Officer', phone: 'Ext. 112', email: 'finance@institution.edu' }
    ]
  },
  {
    id: 'employee',
    name: 'Employee Directory',
    shortName: 'Employees',
    icon: Users,
    bg: 'bg-gradient-to-tr from-emerald-500 to-teal-600',
    shadow: 'shadow-emerald-500/35',
    badge: '450+ Staff',
    description: 'Active Faculty Members, Technical & Operations Staff',
    contacts: [
      { name: 'Dr. Alok Nath', role: 'Senior Professor (CS Dept)', phone: '+91 98111 22334', email: 'alok.cs@institution.edu' },
      { name: 'Sunita Reddy', role: 'Human Resources Manager', phone: '+91 98222 33445', email: 'hr@institution.edu' },
      { name: 'Kavita Menon', role: 'Chief Librarian', phone: '+91 98333 44556', email: 'library@institution.edu' },
      { name: 'Arun Patel', role: 'Senior Network Engineer', phone: '+91 98444 55667', email: 'itops@institution.edu' }
    ]
  },
  {
    id: 'branch',
    name: 'Branch Directory',
    shortName: 'Branches',
    icon: Building2,
    bg: 'bg-gradient-to-tr from-indigo-500 to-blue-700',
    shadow: 'shadow-indigo-500/35',
    badge: '4 Campuses',
    description: 'Regional Campuses, Branch Offices & Research Hubs',
    contacts: [
      { name: 'North Campus (HQ)', role: 'Central Administration Block', phone: '+91 11 2700 1000', email: 'north@institution.edu' },
      { name: 'City Center Hub', role: 'Executive Education Campus', phone: '+91 11 2300 2000', email: 'city@institution.edu' },
      { name: 'South Tech Park', role: 'Incubation & Innovation Lab', phone: '+91 11 2600 3000', email: 'techpark@institution.edu' },
      { name: 'Western Zonal Office', role: 'Regional Liaison Center', phone: '+91 22 2800 4000', email: 'west@institution.edu' }
    ]
  },
  {
    id: 'department',
    name: 'Department Directory',
    shortName: 'Departments',
    icon: Network,
    bg: 'bg-gradient-to-tr from-violet-600 to-purple-600',
    shadow: 'shadow-purple-500/35',
    badge: '18 Depts',
    description: 'Academic Departments, Centers of Excellence & Labs',
    contacts: [
      { name: 'Computer Science & Engineering', role: 'Block B, 3rd Floor', phone: 'Ext. 301', email: 'cse@institution.edu' },
      { name: 'Electrical Engineering', role: 'Block A, 2nd Floor', phone: 'Ext. 305', email: 'ee@institution.edu' },
      { name: 'Mechanical & Aerospace Sciences', role: 'Workshop Complex', phone: 'Ext. 310', email: 'mech@institution.edu' },
      { name: 'Management Studies (MBA)', role: 'Executive Block, 1st Floor', phone: 'Ext. 320', email: 'dms@institution.edu' }
    ]
  },
  {
    id: 'former',
    name: 'Former Employees Directory',
    shortName: 'Former Staff',
    icon: UserCheck,
    bg: 'bg-gradient-to-tr from-slate-600 to-neutral-800',
    shadow: 'shadow-slate-600/35',
    badge: 'Emeritus',
    description: 'Retired Faculty, Former Staff & Emeritus Directory',
    contacts: [
      { name: 'Prof. K. R. Narayanan (Retd.)', role: 'Professor Emeritus (Physics)', phone: 'Archived Record', email: 'krn.emeritus@institution.edu' },
      { name: 'Dr. S. Radhakrishnan', role: 'Former Dean (1998-2015)', phone: 'Archived Record', email: 'alumni.staff@institution.edu' },
      { name: 'Shri B. P. Roy', role: 'Former Registrar (2002-2018)', phone: 'Archived Record', email: 'roy.alumni@institution.edu' },
      { name: 'Dr. Vandana Rao', role: 'Former HOD Chemistry', phone: 'Archived Record', email: 'v.rao@institution.edu' }
    ]
  },
  {
    id: 'student',
    name: 'Student Directory',
    shortName: 'Students',
    icon: GraduationCap,
    bg: 'bg-gradient-to-tr from-rose-500 to-pink-600',
    shadow: 'shadow-rose-500/35',
    badge: 'Student Body',
    description: 'Student Enrollment, Council Representatives & Affairs',
    contacts: [
      { name: 'Student Council President', role: 'Representative 2024-25', phone: '+91 99000 11223', email: 'president@student.edu' },
      { name: 'Academic Records Cell', role: 'Transcripts & Grade Sheets', phone: 'Ext. 205', email: 'records@institution.edu' },
      { name: 'Hostel Affairs Committee', role: 'Hostel Wardens Office', phone: 'Ext. 210', email: 'hostels@institution.edu' },
      { name: 'Placement & Career Cell', role: 'Corporate Internships', phone: 'Ext. 220', email: 'placements@institution.edu' }
    ]
  },
  {
    id: 'ai',
    name: 'Ai Assistance',
    shortName: 'AI Assist',
    icon: Sparkles,
    bg: 'bg-gradient-to-tr from-cyan-400 via-indigo-500 to-fuchsia-500',
    shadow: 'shadow-purple-500/40',
    badge: 'Live AI',
    description: 'Intelligent Directory Search, Live Q&A and Smart Routing',
    isAi: true,
    contacts: []
  }
];
