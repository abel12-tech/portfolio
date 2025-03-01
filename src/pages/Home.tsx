import React from "react";
import { ArrowRight, Github, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import myimage from "../assets/images/me.jpeg";
import dash1 from "../assets/images/photo_2023-11-24_22-27-28.jpg";
import dash2 from "../assets/images/photo_2024-09-02_11-32-50.jpg";
import betale from "../assets/images/Screenshotfrom2025-02-2810-27-45.png";

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-20">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="md:w-1/2 mb-10 md:mb-0"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-5xl font-bold mb-6"
            >
              Hi, I'm <span className="text-black">Abel Kinfu</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl text-gray-600 mb-8"
            >
              Web and Mobile App Developer specializing in React, React Native,
              and modern technologies.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex items-center space-x-4"
            >
              <Link
                to="/contact"
                className="bg-black text-white px-6 py-3 rounded-lg flex items-center space-x-2 hover:bg-gray-800 transition-all duration-200 hover:scale-105"
              >
                <span>Get in touch</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <div className="flex space-x-4">
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://github.com/abel12-tech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-black transition-colors duration-200"
                >
                  <Github className="h-6 w-6" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://www.linkedin.com/in/abel-kinfu-690a29260/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-black transition-colors duration-200"
                >
                  <Linkedin className="h-6 w-6" />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="md:w-80"
          >
            <img
              src={myimage}
              alt="Developer workspace"
              className="rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            />
          </motion.div>
        </div>
      </div>

      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Projects</h2>
            <p className="text-gray-600">Some of my recent work</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <motion.div
              whileHover={{ y: -8 }}
              transition={{ duration: 0.2 }}
              className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full"
            >
              <div className="relative w-full pt-[50.25%]">
                <img
                  src={dash2}
                  alt="DawaaFinder Admin Panel"
                  className="absolute top-0 left-0 w-full h-full object-cover object-center"
                />
              </div>
              <div className="p-6 flex-grow">
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="text-xs font-medium bg-yellow-100 text-yellow-800 px-2 py-1 rounded">
                    React js
                  </span>
                  <span className="text-xs font-medium bg-red-100 text-red-800 px-2 py-1 rounded">
                    Tailwind CSS
                  </span>
                  <span className="text-xs font-medium bg-indigo-100 text-indigo-800 px-2 py-1 rounded">
                    Redux Toolkit
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  DawaaFinder Admin Panel
                </h3>
                <p className="text-gray-600 mb-4">
                  The DawaaFinder Admin Panel is a management dashboard for
                  overseeing pharmacies and health organizations on the
                  DawaaFinder platform. It enables admins to manage partner
                  pharmacies, handle blogs, ads, and medicine products, and
                  update information based on the medicine formulary.
                </p>
                <a
                  href="https://dawaafinder.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black font-medium hover:underline inline-flex items-center"
                >
                  View Project <ArrowRight className="h-4 w-4 ml-1" />
                </a>
              </div>
            </motion.div>
            <motion.div
              whileHover={{ y: -8 }}
              transition={{ duration: 0.2 }}
              className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full"
            >
              <div className="relative w-full pt-[50.25%]">
                <img
                  src={betale}
                  alt="Betale"
                  className="absolute top-0 left-0 w-full h-full object-cover object-center"
                />
              </div>
              <div className="p-6 flex-grow">
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="text-xs font-medium bg-pink-100 text-pink-800 px-2 py-1 rounded">
                    React Js
                  </span>
                  <span className="text-xs font-medium bg-orange-100 text-orange-800 px-2 py-1 rounded">
                    Tailwind CSS
                  </span>
                  <span className="text-xs font-medium bg-teal-100 text-teal-800 px-2 py-1 rounded">
                    Redux Toolkit
                  </span>
                  <span className="text-xs font-medium bg-green-100 text-green-800 px-2 py-1 rounded">
                    Redux
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Betale</h3>
                <p className="text-gray-600 mb-4">
                  Betale is a platform that allows users to rent, sell, and buy
                  houses with ease. It features advanced filter options and a
                  user-friendly UI, enabling users to search for properties
                  based on location, price, and types.
                </p>
                <a
                  href="https://betale.et"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black font-medium hover:underline inline-flex items-center"
                >
                  View Project <ArrowRight className="h-4 w-4 ml-1" />
                </a>
              </div>
            </motion.div>
            <motion.div
              whileHover={{ y: -8 }}
              transition={{ duration: 0.2 }}
              className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full"
            >
              <div className="relative w-full pt-[50.25%]">
                <img
                  src={dash1}
                  alt="Admin Panel For Hotel Management"
                  className="absolute top-0 left-0 w-full h-full object-cover object-center"
                />
              </div>
              <div className="p-6 flex-grow">
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="text-xs font-medium bg-blue-100 text-blue-800 px-2 py-1 rounded">
                    React
                  </span>
                  <span className="text-xs font-medium bg-green-100 text-green-800 px-2 py-1 rounded">
                    Redux
                  </span>
                  <span className="text-xs font-medium bg-purple-100 text-purple-800 px-2 py-1 rounded">
                    Redux Toolkit
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Admin Panel for Hotel Management
                </h3>
                <p className="text-gray-600 mb-4">
                  The Admin Panel for Hotel Management is a web-based dashboard
                  for managing hotels registered on our booking platform. It
                  allows admins to add, edit, and remove hotels, track bookings,
                  and manage commission settings.
                </p>
                <Link
                  to="/"
                  className="text-black font-medium hover:underline inline-flex items-center"
                >
                  View Project <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Link
              to="/projects"
              className="inline-flex items-center space-x-2 text-black font-medium hover:underline"
            >
              <span>View all projects</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;