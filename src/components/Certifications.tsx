import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Certifications = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const certifications = [
    {
      id: 1,
      title: "CodeFest'25 Prelims — Rank 845",
      description: "Secured rank 845 in the CodeFest'25 Prelims, demonstrating outstanding problem-solving skills and technical proficiency.",
      organization: "IICPC",
      organizationDesc: "Runs CodeFest—India's premier contest on algorithms, data structures & optimization.",
      image: "/iicpc.png"
    },
    {
      id: 2,
      title: "Competitive Programming – DSA Training",
      description: "Completed 'Competitive Programming – DSA' training, mastering algorithm optimization & complexity analysis.",
      organization: "Coding Spoon",
      organizationDesc: "Top bootcamp offering DSA masterclasses & mock contests.",
      image: "/codingspoon.png"
    },
    {
      id: 3,
      title: "Data Structures & Algorithms",
      description: "Completed comprehensive 'Data Structures & Algorithms' program with hands-on projects.",
      organization: "Programming Pathshala",
      organizationDesc: "Ed-tech with modular CS courses & real-world assignments.",
      image: "/programmingpathshala.png"
    },
    {
      id: 4,
      title: "HP Power Lab Round 2",
      description: "Submitted prototype in Round 2 of HP Power Lab as Team 'sinha.khushi403.'",
      organization: "HPCL",
      organizationDesc: "HP's innovation lab fostering breakthrough tech challenges.",
      image: "/hppowerlab.png"
    },
    {
      id: 5,
      title: "Infineon Hackathon",
      description: "Participated in 'Defend The Kingdom' hackathon by Infineon at LPU.",
      organization: "Infineon",
      organizationDesc: "Global semiconductor leader empowering future tech via hackathons.",
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
