import React from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, Share2 } from "lucide-react";
import { motion } from "framer-motion";

const posts = [
  {
    id: 1,
    title: "Building Scalable React Applications",
    excerpt:
      "Learn the best practices for building large-scale React applications with modern architecture and state management patterns.",
    content: `
      Building scalable React applications requires careful consideration of architecture, state management, and performance optimization. In this comprehensive guide, we'll explore the best practices and patterns that help create maintainable and efficient React applications.

      ## Architecture Patterns

      When building large-scale applications, it's crucial to establish a clear and consistent architecture. Here are some key patterns to consider:

      1. **Component Organization**
         - Feature-based structure
         - Shared components library
         - Clear separation of concerns

      2. **State Management**
         - Choose appropriate state management solutions
         - Implement proper data flow
         - Handle side effects efficiently

      ## Performance Optimization

      Performance is critical for user experience. Here are essential optimization techniques:

      1. **Code Splitting**
         - Route-based splitting
         - Component-based splitting
         - Dynamic imports

      2. **Rendering Optimization**
         - Proper use of React.memo
         - useCallback and useMemo hooks
         - Virtual list for large datasets

      ## Testing Strategies

      A comprehensive testing strategy ensures application reliability:

      1. **Unit Testing**
         - Component testing
         - Hook testing
         - Utility function testing

      2. **Integration Testing**
         - Feature testing
         - User flow testing
         - API integration testing

      ## Deployment and Monitoring

      Proper deployment and monitoring are crucial for production applications:

      1. **CI/CD Pipeline**
         - Automated testing
         - Build optimization
         - Deployment automation

      2. **Monitoring**
         - Performance monitoring
         - Error tracking
         - User analytics
    `,
    date: "2024-03-15",
    readTime: "5 min",
    category: "React",
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    author: {
      name: "John Doe",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      role: "Senior React Developer",
    },
  },
];

const BlogDetail = () => {
  const { id } = useParams();
  const post = posts.find((p) => p.id === Number(id));

  if (!post) {
    return (
      <div className="min-h-screen bg-white pt-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1>Post not found</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white pt-24">
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link
            to="/blog"
            className="inline-flex items-center space-x-2 text-gray-600 hover:text-black mb-8"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Back to Blog</span>
          </Link>

          <div className="relative w-full pt-[56.25%] rounded-xl overflow-hidden mb-8">
            <img
              src={post.image}
              alt={post.title}
              className="absolute top-0 left-0 w-full h-full object-cover object-center"
            />
          </div>

          {/* <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-4">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="h-12 w-12 rounded-full"
              />
              <div>
                <h3 className="font-medium">{post.author.name}</h3>
                <p className="text-gray-600 text-sm">{post.author.role}</p>
              </div>
            </div>
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200">
              <Share2 className="h-5 w-5 text-gray-600" />
            </button>
          </div> */}

          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>

          <div className="flex items-center space-x-4 text-sm text-gray-500 mb-8">
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

          <div className="prose prose-lg max-w-none">
            {post.content.split("\n").map((paragraph, index) => {
              if (paragraph.startsWith("##")) {
                return (
                  <h2 key={index} className="text-2xl font-bold mt-8 mb-4">
                    {paragraph.replace("##", "").trim()}
                  </h2>
                );
              }
              if (paragraph.trim().startsWith("1.")) {
                return (
                  <div key={index} className="my-4">
                    <strong className="block mb-2">
                      {paragraph.split("**")[1].split("**")[0]}
                    </strong>
                    <ul className="list-disc pl-6">
                      {paragraph
                        .split("\n")
                        .filter((line) => line.trim().startsWith("-"))
                        .map((line, i) => (
                          <li key={i} className="text-gray-600">
                            {line.trim().replace("-", "").trim()}
                          </li>
                        ))}
                    </ul>
                  </div>
                );
              }
              return (
                paragraph.trim() && (
                  <p key={index} className="text-gray-600 mb-4">
                    {paragraph.trim()}
                  </p>
                )
              );
            })}
          </div>
        </motion.div>
      </article>
    </div>
  );
};

export default BlogDetail;