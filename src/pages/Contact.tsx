import React, { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import Breadcrumb from "../components/Breadcrumb";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false); // Track loading state

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true); // Set loading state

    const serviceID = "service_ngkbjya"; 
    const templateID = "template_cge19xr"; 
    const userID = "zGjv1sX2gtyWt7vIN"; 

    emailjs
      .send(serviceID, templateID, formData, userID)
      .then(() => {
        toast.success("Email sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        console.error("Email failed to send:", error);
        toast.error("Failed to send email. Try again later.");
      })
      .finally(() => setLoading(false)); // Reset loading state
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-white pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb />
        <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <div className="space-y-6 ml-8">
              <div className="flex items-start space-x-4">
                <Mail className="h-6 w-6 text-gray-600" />
                <div>
                  <h3 className="font-medium">Email</h3>
                  <p className="text-gray-600">abelkinfu678@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Phone className="h-6 w-6 text-gray-600" />
                <div>
                  <h3 className="font-medium">Phone</h3>
                  <p className="text-gray-600">+251936722187</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <MapPin className="h-6 w-6 text-gray-600" />
                <div>
                  <h3 className="font-medium">Location</h3>
                  <p className="text-gray-600">Ethiopia, Jimma</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full outline-none px-4 py-2 border border-gray-300 rounded-lg focus:ring-black focus:border-black"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full outline-none px-4 py-2 border border-gray-300 rounded-lg focus:ring-black focus:border-black"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full outline-none px-4 py-2 border border-gray-300 rounded-lg focus:ring-black focus:border-black"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-800 transition-colors duration-200"
                disabled={loading} // Disable button while sending
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
