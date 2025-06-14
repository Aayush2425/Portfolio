import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const openGmail = () => {
    window.open(
      "https://mail.google.com/mail/?view=cm&fs=1&to=aayushgandhi2611@gmail.com&su=Hello%20Aayush&body=Hi%20Aayush,%0A%0AI%20would%20like%20to%20get%20in%20touch%20with%20you.",
      "_blank"
    );
  };

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/Aayush2425",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/aayush-gandhi-076256260/",
      label: "LinkedIn",
    },
    {
      icon: Mail,
      action: openGmail,
      label: "Email",
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-secondary-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center space-y-8">
          {/* Logo/Name */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <button
              onClick={scrollToTop}
              className="text-3xl font-bold text-white hover:text-primary-400 transition-colors duration-200"
            >
              Alex Johnson
            </button>
            <p className="text-secondary-400 mt-2">Full Stack Developer</p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex space-x-6"
          >
            {socialLinks.map((link) =>
              link.href ? (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-secondary-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-all duration-300 hover:scale-110"
                  aria-label={link.label}
                >
                  <link.icon className="w-5 h-5" />
                </a>
              ) : (
                <button
                  key={link.label}
                  onClick={link.action}
                  className="w-12 h-12 bg-secondary-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-all duration-300 hover:scale-110"
                  aria-label={link.label}
                >
                  <link.icon className="w-5 h-5" />
                </button>
              )
            )}
          </motion.div>

          {/* Navigation Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap justify-center space-x-8 text-sm"
          >
            {["About", "Skills", "Projects", "Experience", "Contact"].map(
              (item) => (
                <button
                  key={item}
                  onClick={() => {
                    const element = document.getElementById(item.toLowerCase());
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="text-secondary-400 hover:text-white transition-colors duration-200"
                >
                  {item}
                </button>
              )
            )}
          </motion.div>

          {/* Divider */}
          <div className="w-full max-w-md h-px bg-secondary-700" />

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center text-sm text-secondary-400"
          >
            <p className="flex items-center justify-center space-x-1">
              <span>© {currentYear} Aayush Gandhi. Made with</span>
              <Heart className="w-4 h-4 text-red-500" />
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
