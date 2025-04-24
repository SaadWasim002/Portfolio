import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        when: "beforeChildren"
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  const sparkleVariants = {
    pulse: {
      scale: [1, 1.2, 1],
      rotate: [0, 10, -10, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "mirror"
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 15
      }
    },
    hover: {
      y: -5,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: { type: "spring", stiffness: 300 }
    }
  };

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-50 via-white to-gray-100">
      <div className="container mx-auto px-6">
        <motion.div
          className="flex flex-col items-center justify-center mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.h2 
            className="text-4xl font-bold text-center text-purple-700 flex items-center gap-2"
            variants={textVariants}
          >
            <motion.span variants={sparkleVariants} animate="pulse">
              <Sparkles className="w-6 h-6 text-purple-500" />
            </motion.span>
            About Me
          </motion.h2>
        </motion.div>

        <motion.div
          className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-xl border border-purple-100"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          whileHover="hover"
          viewport={{ once: true }}
        >
          <motion.div variants={containerVariants}>
            <motion.p
              className="text-lg text-gray-700 mb-6 leading-relaxed"
              variants={textVariants}
            >
              I'm a passionate <motion.span 
                className="font-semibold text-purple-600"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Full-Stack Developer
              </motion.span> with expertise in building scalable web applications using the <motion.span 
                className="font-semibold"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                MERN stack
              </motion.span>. I love crafting seamless user experiences and tackling complex problems through clean, efficient code.
            </motion.p>
            
            <motion.p
              className="text-lg text-gray-700 leading-relaxed"
              variants={textVariants}
            >
              With a strong foundation in both <motion.span 
                className="text-purple-600 font-semibold"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                front-end
              </motion.span> and <motion.span 
                className="text-purple-600 font-semibold"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                back-end
              </motion.span> technologies, I aim to create applications that are performant, maintainable, and impactful.
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;