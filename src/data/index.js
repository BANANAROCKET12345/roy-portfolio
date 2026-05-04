import { Cpu, Globe } from 'lucide-react';

// --- 个人信息 ---
export const personalInfo = {
  name: "Roy Yang Sisong",
  chineseName: "杨思淞",
  title: "Software Engineer",
  email: "royyang8040@gmail.com",
  phone: "+60 11-1143 8153",
  location: "Kajang, Selangor, Malaysia",
  status: "Open to Work (Software Engineer)",
  resumeUrl: "/Roy_Yang_Resume.pdf",
  about: "I'm a software engineer who builds web applications with Python and Django. I work with AI models like YOLO and RAG, turning them into practical tools that actually solve problems. My focus is on making technology work in the real world, not just on paper."
};

// --- 技能列表 ---
export const skillsData = [
  {
    category: "Technical Expertise",
    icon: Cpu,
    colorClass: "text-indigo-600",
    bgClass: "bg-indigo-50",
    hoverBorder: "hover:border-indigo-300",
    hoverText: "hover:text-indigo-600",
    items: [
      'Python Language',
      'Machine Learning',
      'Deep Learning',
      'Build iOS and Android Applications',
      'Web Design',
      'HTML',
      'SQL'
    ]
  },
  {
    category: "Languages",
    icon: Globe,
    colorClass: "text-rose-600",
    bgClass: "bg-rose-50",
    hoverBorder: "hover:border-rose-300",
    hoverText: "hover:text-rose-600",
    items: ['Chinese', 'Malay', 'English']
  }
];

// --- 工作经历 ---
export const experienceData = [
  {
    title: "Printing & Customer Support Specialist",
    company: "PIN PRESS PTE LTD (Singapore)",
    period: "Jun 2021 - Jun 2023",
    description: [
      "Improved the packaging workflow to make sure all orders shipped on time.",
      "Held regular client reviews that helped increase contract renewals by <strong>10%</strong>.",
      "Trained 3 new sales team members and helped them get better at customer communication.",
      "Fixed coordination issues between design and printing teams, which cut down on mistakes and wasted materials."
    ]
  }
];

// --- 教育背景 ---
export const educationData = [
  {
    period: "2023 - 2025",
    title: "Diploma in Information Technology",
    institution: "New Era Institute of Vocational & Continuing Education"
  },
  {
    period: "Aug 2025 Awarded",
    title: "OTHM Level 4 & 5 Diploma in IT",
    institution: "UK Regulated Qualification"
  }
];

// --- 项目经验 ---
export const projectsData = [
  {
    title: "Coal Fire Prediction System",
    description: "Built an early warning system for coal fires using thermal cameras and YOLOv8. The system analyzes heat patterns in real-time and shows alerts on a Django dashboard, helping teams respond faster to potential fires.",
    tags: ["Django", "YOLOv8", "Thermal Analysis"],
    icon: null, // Use Image
    colorClass: "group-hover:text-red-500",
    hoverBorder: "hover:border-red-300",
    hoverShadow: "hover:shadow-red-500/10",
    tagColor: "bg-red-50 text-red-700 border-red-100",
    image: "/coal-fire.jpg"
  },
  {
    title: "Image Anti-Counterfeiting",
    description: "Created a system to detect fake or manipulated images. It uses YOLO for object detection and Google's image search API to verify authenticity. Added a RAG-based agent in Django that checks image metadata to catch inconsistencies.",
    tags: ["RAG Pipeline", "Google Vision API", "Django"],
    icon: null, // Use Image
    colorClass: "group-hover:text-blue-500",
    hoverBorder: "hover:border-blue-300",
    hoverShadow: "hover:shadow-blue-500/10",
    tagColor: "bg-blue-50 text-blue-700 border-blue-100",
    image: "/anti-counterfeit.jpg"
  },
  {
    title: "Robotic Arm Grabbing (2025)",
    description: "Programmed a 6-axis robotic arm to pick and place objects automatically. Used OpenCV to track objects and calculate the arm movements in real-time, which made the sorting process pretty accurate.",
    tags: ["Python", "OpenCV", "Inverse Kinematics"],
    icon: null, // Use Image
    colorClass: "group-hover:text-purple-500",
    hoverBorder: "hover:border-purple-300",
    hoverShadow: "hover:shadow-purple-500/10",
    tagColor: "bg-purple-50 text-purple-700 border-purple-100",
    image: "/robotic-arm.jpg"
  }
];
