import React, { useState } from "react";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Pagination from "../components/Pagination";
import Breadcrumb from "../components/Breadcrumb";
import { Link } from "react-router-dom";

const posts = [
  {
    id: 1,
    title: "Building Scalable React Applications",
    excerpt:
      "Learn the best practices for building large-scale React applications with modern architecture and state management patterns.",
    date: "2024-03-15",
    readTime: "5 min",
    category: "React",
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  },
  // {
  //   id: 2,
  //   title: "The Future of Web Development with WebAssembly",
  //   excerpt:
  //     "Exploring how WebAssembly is revolutionizing web performance and enabling new possibilities for web applications.",
  //   date: "2024-03-10",
  //   readTime: "7 min",
  //   category: "WebAssembly",
  //   image:
  //     "https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1474&q=80",
  // },
  // {
  //   id: 3,
  //   title: "Mastering TypeScript: Advanced Patterns",
  //   excerpt:
  //     "Deep dive into advanced TypeScript patterns and techniques for building type-safe applications.",
  //   date: "2024-03-05",
  //   readTime: "8 min",
  //   category: "TypeScript",
  //   image:
  //     "https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  // },
  // {
  //   id: 4,
  //   title: "The Rise of Edge Computing in Web Development",
  //   excerpt:
  //     "Understanding how edge computing is changing the landscape of web development and improving user experience.",
  //   date: "2024-03-01",
  //   readTime: "6 min",
  //   category: "Edge Computing",
  //   image:
  //     "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80",
  // },
  // {
  //   id: 5,
  //   title: "Building Accessible Web Applications",
  //   excerpt:
  //     "Essential practices and techniques for creating inclusive and accessible web experiences for all users.",
  //   date: "2024-02-28",
  //   readTime: "9 min",
  //   category: "Accessibility",
  //   image:
  //     "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
  // },
  // {
  //   id: 6,
  //   title: "Optimizing React Performance",
  //   excerpt:
  //     "Advanced techniques for improving React application performance and user experience.",
  //   date: "2024-02-25",
  //   readTime: "7 min",
  //   category: "Performance",
  //   image:
  //     "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
  // },
];

const POSTS_PER_PAGE = 4;

const Blog = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);

  const currentPosts = posts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
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
          {currentPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                  <span className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {new Date(post.date).toLocaleDateString()}
                  </span>
                  <span className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {post.readTime} read
                  </span>
                  <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>
                <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <Link
                  to={`/blog/${post.id}`}
                  className="text-black font-medium hover:underline inline-flex items-center space-x-2"
                >
                  <span>Read more</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.article>
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

export default Blog;
