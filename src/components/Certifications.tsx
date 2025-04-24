import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Certifications = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const certifications = [
    {
      id: 1,
      title: "CodeFest'25 Prelims — Rank 845",
      description: "Secured an All-India Rank of 845 out of 50,000 participants in CodeFest'25 Prelims, showcasing exceptional problem-solving abilities and strong algorithmic proficiency.",
      organization: "IICPC (Indian Invitational Competitive Programming Championship)",
      organizationDesc: "IICPC organizes CodeFest, India’s flagship nationwide programming competition focused on algorithms, data structures, and optimization. It brings together the brightest minds from across the country to solve challenging problems under pressure, fostering innovation, logical thinking, and technical excellence.",
      image: "/iicpc.png"
    },
    {
      id: 2,
      title: "Competitive Programming – DSA Training",
      description: "Completed 'Competitive Programming – DSA' training, mastering algorithm optimization & complexity analysis.",
      organization: "Coding Spoon",
      organizationDesc: "Coding Spoon is a top-tier coding bootcamp known for its structured DSA masterclasses, regular mock contests, and expert mentorship. It helps students and professionals strengthen their problem-solving skills and prepare for competitive programming, coding interviews, and top tech roles.",
      image: "/codingspoon.png"
    },
    {
      id: 3,
      title: "Data Structures & Algorithms",
      description: "Completed comprehensive 'Data Structures & Algorithms' program with hands-on projects.",
      organization: "Programming Pathshala",
      organizationDesc: "Programming Pathshala is a leading ed-tech platform offering modular computer science courses designed with industry relevance in mind. It emphasizes conceptual clarity, real-world assignments, and interview-focused learning, making it ideal for aspiring software engineers preparing for tech placements and coding interviews.",
      image: "/programmingpathshala.png"
    },
    {
      id: 4,
      title: "HP Power Lab Round 2",
      description: "Selected for Round 2 of HP Power Lab as part of a team, where we submitted a prototype showcasing innovative solutions for advanced technology challenges.",
      organization: "HPCL",
      organizationDesc: "HPCL’s innovation lab is at the forefront of fostering breakthrough technological solutions. The lab focuses on solving complex tech challenges across various industries, driving digital transformation, and creating innovative, sustainable solutions that align with global standards. ",
      image: "/hppowerlab.png"
    },
    {
      id: 5,
      title: "Infineon Hackathon",
      description: "Participated in 'Defend The Kingdom' hackathon by Infineon at LPU.",
      organization: "Infineon",
      organizationDesc: "Infineon is a global leader in semiconductor solutions, playing a key role in shaping the future of automotive, industrial, energy-efficient, and consumer electronics sectors. The company is deeply invested in fostering innovation through initiatives like hackathons, where talented engineers collaborate to solve complex challenges and create cutting-edge technologies. Infineon’s products and solutions drive digital transformation, enhance sustainability, and enable smart mobility, positioning the company at the forefront of powering the future of technology.",
      image: "/infineon.png"
    }
  ];

  return (
    <section id="certifications" className="py-20 relative bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl font-extrabold text-center mb-16"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Certifications
        </motion.h2>

        <div className="space-y-10">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row gap-6"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="md:w-1/4 flex-shrink-0">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-auto rounded-md cursor-pointer hover:scale-105 transition-transform duration-300 shadow"
                  onClick={() => setSelectedImage(cert.image)}
                />
              </div>
              <div className="md:w-3/4">
                <h3 className="text-xl font-bold mb-2 text-blue-800">{cert.title}</h3>
                <p className="text-gray-700 mb-3">{cert.description}</p>
                <div className="bg-blue-50 p-4 rounded-md border-l-4 border-blue-400">
                  <p className="text-sm">
                    <strong>About {cert.organization}:</strong><br />
                    {cert.organizationDesc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal with animation */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50"
            onClick={() => setSelectedImage(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="max-w-3xl w-full p-4"
              initial={{ scale: 0.6 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.6 }}
              transition={{ type: "spring", stiffness: 100 }}
            >
              <img
                src={selectedImage}
                alt="Certification Zoom"
                className="w-full h-auto rounded-lg shadow-2xl border-4 border-white"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certifications;
