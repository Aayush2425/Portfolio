import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Code, TerminalSquare, Lightbulb, ScrollText } from "lucide-react";

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    { icon: Code, label: "Projects Completed", value: "5+" },
    { icon: TerminalSquare, label: "Leetcode", value: "240+" },
    { icon: ScrollText, label: "Certificates", value: "10+" },
    { icon: Lightbulb, label: "Creative Solutions", value: "5+" },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-4">
            About Me
          </h2>
          <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
            Passionate developer with a love for creating innovative solutions
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-secondary-900 mb-6">
              Hello! I'm Aayush Gandhi
            </h3>
            <div className="space-y-4 text-secondary-600 leading-relaxed">
              <p>
                I'm a passionate full-stack developer creating digital solutions
                that make a difference. My journey in web development started
                with a curiosity about how things work behind the scenes, and it
                has evolved into a career I absolutely love.
              </p>
              <p>
                I specialize in modern JavaScript frameworks, AI/ML , and
                creating user experiences that are both beautiful and
                functional. When I'm not coding, you can find me exploring new
                technologies, creating projects, or enjoying a mangas/animes.
              </p>
              <p>
                I believe in writing clean, maintainable code and collaborating
                with teams to bring ideas to life. Every project is an
                opportunity to learn something new and push the boundaries of
                what's possible.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="bg-gradient-to-br from-primary-50 to-secondary-100 p-6 rounded-xl text-center hover:shadow-lg transition-shadow duration-300"
              >
                <stat.icon className="w-8 h-8 text-primary-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-secondary-900 mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-secondary-600">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
