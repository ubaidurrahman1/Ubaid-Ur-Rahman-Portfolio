/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { Project, TimelineItem } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'p1',
    name: 'Badminton Pro League',
    tagline: '3D Android Game.',
    description: 'A 3D badminton game created using Unity with realistic mechanics, opponent AI, and multiplayer support for Android.',
    longDescription: 'Developed as a Final Year Project, this 3D mobile game utilizes the Unity engine to deliver an immersive badminton experience. It features realistic physics mechanics, an intelligent AI opponent for single-player modes, and multiplayer functionality for competitive play on Android devices.',
    category: 'Other',
    imageUrl: 'https://images.unsplash.com/photo-1613918108466-292b78a8ef95?auto=format&fit=crop&q=80&w=1000',
    techStack: ['Unity', 'C#', 'Android', 'Game Development'],
    features: ['Realistic Physics', 'Opponent AI', 'Multiplayer Support', '3D Graphics']
  },
  {
    id: 'p2',
    name: 'EduManage',
    tagline: 'Education Management System.',
    description: 'A lightweight system to manage students, courses, attendance, and grades for schools.',
    longDescription: 'EduManage is a comprehensive desktop application designed to streamline school administration. It includes modules for easy student registration, attendance tracking, performance monitoring, and generating automated academic reports. Built to ensure data integrity and ease of use for educational staff.',
    category: 'Desktop',
    imageUrl: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=1000',
    techStack: ['C#', 'SQL', 'Desktop Application', '.NET'],
    features: ['Student Registration', 'Attendance Tracking', 'Performance Monitoring', 'Automated Reports']
  },
  {
    id: 'p3',
    name: 'AI Chatbot',
    tagline: 'Natural Language Processing.',
    description: 'A simple chatbot using NLP libraries such as NLTK and spaCy to answer user queries intelligently.',
    longDescription: 'This Python-based project leverages Natural Language Processing (NLP) libraries like NLTK and spaCy. It is designed to understand human language input and provide intelligent, context-aware responses, demonstrating proficiency in AI and string processing.',
    category: 'AI/ML',
    imageUrl: 'https://images.unsplash.com/photo-1535378433864-14be46a035a7?auto=format&fit=crop&q=80&w=1000',
    techStack: ['Python', 'NLTK', 'spaCy', 'NLP'],
    features: ['Natural Language Processing', 'Intent Recognition', 'Intelligent Queries']
  }
];

export const TIMELINE_ITEMS: TimelineItem[] = [
    {
        id: 1,
        title: "Freelance Web Developer",
        subtitle: "Self-Employed",
        date: "2024 - Present",
        type: "Experience",
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1000",
        content: React.createElement(React.Fragment, null,
            React.createElement("ul", { className: "list-disc pl-5 space-y-2 text-[#5D5A53]" },
                React.createElement("li", null, "Designed and developed responsive websites for eCommerce, education, and portfolio use cases."),
                React.createElement("li", null, "Specialized in WordPress customization, theme development, and CMS integration."),
                React.createElement("li", null, "Utilized HTML, CSS, and JavaScript to build user-friendly, SEO-optimized websites."),
                React.createElement("li", null, "Delivered projects focused on UX, performance, and cross-device compatibility.")
            )
        )
    },
    {
        id: 2,
        title: "Intern | CodeAlpha",
        subtitle: "Full Stack Development Internship",
        date: "1 Month (2025)",
        type: "Internship",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1000",
        content: React.createElement(React.Fragment, null,
             React.createElement("ul", { className: "list-disc pl-5 space-y-2 text-[#5D5A53]" },
                React.createElement("li", null, "Completed intensive training in both front-end and back-end web development."),
                React.createElement("li", null, "Gained practical experience with modern web technologies, responsive design, and website performance optimization.")
             )
        )
    },
    {
        id: 3,
        title: "BS Software Engineering",
        subtitle: "City University of Science & IT",
        date: "2021 - 2025",
        type: "Education",
        image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=1000",
        content: React.createElement(React.Fragment, null,
            React.createElement("p", { className: "mb-6 text-[#5D5A53]" },
                "Specializing in front-end development, WordPress, and SQA. Gained strong programming skills in Python, C#, and C++."
            )
        )
    },
    {
        id: 4,
        title: "FSc Pre-Engineering",
        subtitle: "Services Public School & College Mardan",
        date: "2019 - 2021",
        type: "Education",
        image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=1000",
        content: React.createElement(React.Fragment, null,
            React.createElement("p", { className: "mb-6 text-[#5D5A53]" },
                "Completed Higher Secondary School Certificate with a focus on Pre-Engineering subjects."
            )
        )
    },
    {
        id: 5,
        title: "Matric",
        subtitle: "Services Public School & College Mardan",
        date: "2017 - 2019",
        type: "Education",
        image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=1000",
        content: React.createElement(React.Fragment, null,
            React.createElement("p", { className: "mb-6 text-[#5D5A53]" },
                "Completed Secondary School Certificate."
            )
        )
    }
];

export const SKILLS = {
    programming: ["Python", "C++", "C#", "Basic PHP"],
    web: ["HTML5", "CSS3", "JavaScript", "WordPress", "Web Development"],
    database: ["MySQL", "SQL"],
    qa_testing: ["Manual Testing", "SDLC/STLC", "Bug Reporting", "Test Link (Basic)"],
    tools: ["Jira", "Postman", "Git & Version Control", "VS Code"],
    methodologies: ["Agile & Scrum", "Sprint Planning", "Backlog Management"]
};

export const BRAND_NAME = 'Ubaid Ur Rahman';
export const PRIMARY_COLOR = 'stone-900'; 
export const ACCENT_COLOR = 'stone-500';