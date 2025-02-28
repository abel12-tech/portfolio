import React, { useState } from "react";
import { Github, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import Pagination from "../components/Pagination";
import Breadcrumb from "../components/Breadcrumb";
import dash1 from "../assets/images/photo_2023-12-04_10-37-54.jpg";
import dash2 from "../assets/images/photo_2024-09-02_11-32-50.jpg";
import betale from "../assets/images/Screenshotfrom2025-02-2810-27-45.png";
import kuno from "../assets/images/kuno.png";

const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description:
      "A full-featured e-commerce platform built with React, Node.js, and MongoDB. Includes user authentication, product management, cart functionality, and payment processing.",
    image: dash1,
    technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
    link: "https://project.com",
    github: "https://github.com",
  },
  {
    id: 2,
    title: "Social Media Dashboard",
    description:
      "Real-time social media analytics dashboard with data visualization, user engagement metrics, and automated reporting features.",
    image: dash2,
    technologies: ["React", "D3.js", "Firebase", "Material-UI"],
    link: "https://dashboard.com",
    github: "https://github.com",
  },
  {
    id: 3,
    title: "AI-Powered Task Manager",
    description:
      "Smart task management application that uses AI to prioritize tasks, suggest optimal scheduling, and provide productivity insights.",
    image: betale,
    technologies: ["React Native", "Python", "TensorFlow", "FastAPI"],
    link: "https://taskmanager.com",
    github: "https://github.com",
  },
  {
    id: 4,
    title: "Real Estate Platform",
    description:
      "Modern real estate platform with virtual tours, mortgage calculator, and AI-powered property recommendations.",
    image: kuno,
    technologies: ["Next.js", "Three.js", "PostgreSQL", "AWS"],
    link: "https://realestate.com",
    github: "https://github.com",
  },
  {
    id: 5,
    title: "Health & Fitness App",
    description:
      "Comprehensive fitness tracking application with workout plans, nutrition tracking, and progress visualization.",
    image:
      "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    technologies: ["React Native", "GraphQL", "Node.js", "MongoDB"],
    link: "https://fitness.com",
    github: "https://github.com",
  },
  {
    id: 6,
    title: "Educational Platform",
    description:
      "Interactive learning platform with video courses, quizzes, and real-time collaboration features.",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    technologies: ["Vue.js", "Django", "WebRTC", "Redis"],
    link: "https://education.com",
    github: "https://github.com",
  },
];

const ITEMS_PER_PAGE = 4;

const Projects = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(projects.length / ITEMS_PER_PAGE);

  const currentProjects = projects.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <div className="min-h-screen bg-white pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {currentProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-600 hover:text-black transition-colors duration-200"
                  >
                    <Github className="h-5 w-5" />
                    <span>Code</span>
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-600 hover:text-black transition-colors duration-200"
                  >
                    <ExternalLink className="h-5 w-5" />
                    <span>Live Demo</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        /> */}
      </div>
    </div>
  );
};

export default Projects;
