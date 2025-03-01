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
    title: "DawaaFinder Admin Panel",
    description:
      " The DawaaFinder Admin Panel is a management dashboard for overseeing pharmacies and health organizations on the DawaaFinder platform. It enables admins to manage partner pharmacies, handle blogs, ads, and medicine products, and update information based on the medicine formulary.",
    image: dash2,
    technologies: [
      "React",
      "Redux",
      "Firebase",
      "Redux Toolkit",
      "Tailwind CSS",
    ],
    link: "https://dawaafinder.com/",
    github: "https://github.com/Yaidevs/new-dawafinder-system-admin",
  },
  {
    id: 2,
    title: "Betale",
    description:
      "Betale is a platform that allows users to rent, sell, and buy houses with ease. It features advanced filter options and a user-friendly UI, enabling users to search for properties based on location, price, and types.",
    image: betale,
    technologies: [
      "React",
      "Tailwind CSS",
      "Redux",
      "Redux Toolkit",
      "Firebase",
    ],
    link: "https://betale.et",
    github: "https://github.com/abel12-tech/Betale",
  },
  {
    id: 3,
    title: "Admin Panel for Hotel Management",
    description:
      "The Admin Panel for Hotel Management is a web-based dashboard for managing hotels registered on our booking platform. It allows admins to add, edit, and remove hotels, track bookings,and manage commission settings.",
    image: dash1,
    technologies: ["React", "Redux", "Redux Toolkit", "Tailwind CSS"],
    link: "https://github.com/Yaidevs/afroperia-hotel-admin",
    github: "https://github.com/Yaidevs/afroperia-hotel-admin",
  },
  {
    id: 4,
    title: "Kuno",
    description:
      "Kuno is an online shopping app that allows users to create their own shops, list products for sale, and connect with buyers through an in-app chat feature. ",
    image: kuno,
    technologies: ["React Native", "Expo"],
    link: "https://github.com/abel12-tech/kuno-online-shopping",
    github: "https://github.com/abel12-tech/kuno-online-shopping",
  },
  // {
  //   id: 5,
  //   title: "Kuno",
  //   description:
  //     "Kuno is an online shopping app that allows users to create their own shops, list products for sale, and connect with buyers through an in-app chat feature. ",
  //   image:
  //     "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  //   technologies: ["React Native", "GraphQL", "Node.js", "MongoDB"],
  //   link: "https://fitness.com",
  //   github: "https://github.com",
  // },
  // {
  //   id: 6,
  //   title: "Educational Platform",
  //   description:
  //     "Interactive learning platform with video courses, quizzes, and real-time collaboration features.",
  //   image:
  //     "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  //   technologies: ["Vue.js", "Django", "WebRTC", "Redis"],
  //   link: "https://education.com",
  //   github: "https://github.com",
  // },
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
              className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 flex flex-col h-full"
            >
              <div className="relative w-full pt-[50.25%]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute top-0 left-0 w-full h-full object-cover object-center"
                />
              </div>
              <div className="p-6 flex-grow">
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