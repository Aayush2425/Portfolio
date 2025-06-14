import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Briefcase, Calendar } from "lucide-react";

const Experience: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      title: "Teaching Assistant",
      subtitle: "Web Technologies",
      University: "Darshan University",
      period: "June 2024 - Sept 2025",
      description:
        "Assisted in teaching web technologies including JavaScript and MERN stack. Provided support to students in understanding concepts and completing assignments.",
      achievements: [
        "Conducted weekly lab sessions for hands-on learning",
        "Developed supplementary materials to enhance student understanding",
        "Received positive feedback from students for clarity in explanations",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="py-20 bg-gradient-to-b from-secondary-50 to-white"
    >
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-4">
            Work Experience
          </h2>
          <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
            My professional journey and the experiences that shaped my career
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative"
            >
              {/* Timeline line */}
              {index < experiences.length - 1 && (
                <div className="absolute left-8 top-16 w-0.5 h-full bg-primary-200 z-0" />
              )}

              <div className="flex items-start mb-12 relative z-10">
                <div className="flex-shrink-0 w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mr-6">
                  <Briefcase className="w-8 h-8 text-white" />
                </div>

                <div className="flex-grow bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-secondary-900 mb-1">
                        {experience.title} - {experience.subtitle}
                      </h3>
                      <p className="text-primary-600 font-semibold">
                        {experience.University}
                      </p>
                    </div>
                    <div className="flex items-center text-secondary-500 mt-2 md:mt-0">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span className="text-sm">{experience.period}</span>
                    </div>
                  </div>

                  <p className="text-secondary-600 mb-4 leading-relaxed">
                    {experience.description}
                  </p>

                  <div>
                    <h4 className="font-semibold text-secondary-900 mb-2">
                      Key Achievements:
                    </h4>
                    <ul className="space-y-1">
                      {experience.achievements.map(
                        (achievement, achievementIndex) => (
                          <li
                            key={achievementIndex}
                            className="text-secondary-600 text-sm flex items-start"
                          >
                            <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                            {achievement}
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
