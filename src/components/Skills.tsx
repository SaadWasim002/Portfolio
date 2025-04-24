import { motion } from 'framer-motion';

const skills = [
  { name: 'HTML5', icon: 'devicon-html5-plain' },
  { name: 'CSS3', icon: 'devicon-css3-plain' },
  { name: 'JavaScript', icon: 'devicon-javascript-plain' },
  { name: 'Node.js', icon: 'devicon-nodejs-plain' },
  { name: 'React', icon: 'devicon-react-original' },
  { name: 'Java', icon: 'devicon-java-plain' },
  { name: 'C', icon: 'devicon-c-plain' },
  { name: 'C++', icon: 'devicon-cplusplus-plain' },
  { name: 'Bootstrap', icon: 'devicon-bootstrap-plain' },
  { name: 'Tailwind', icon: 'devicon-tailwindcss-plain' },
  { name: 'MySQL', icon: 'devicon-mysql-plain' },
  { name: 'MongoDB', icon: 'devicon-mongodb-plain' },
  { name: 'Express.js', icon: 'devicon-express-original' },
  { name: 'jQuery', icon: 'devicon-jquery-plain' },
  { name: 'Laravel', icon: 'devicon-laravel-plain' },
  { name: 'PHP', icon: 'devicon-php-plain' },
  { name: 'VS Code', icon: 'devicon-visualstudio-plain' },
  { name: 'GitHub', icon: 'devicon-github-original' },
  { name: 'Material UI', icon: 'devicon-materialui-plain' },
  { name: 'Figma', icon: 'devicon-figma-plain' },
];

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        when: "beforeChildren"
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    },
    hover: {
      y: -5,
      scale: 1.05,
      transition: { type: "spring", stiffness: 300 }
    }
  };

  const iconVariants = {
    hover: {
      color: "#9333ea",
      scale: 1.2,
      transition: { duration: 0.3 }
    }
  };

  const textVariants = {
    hover: {
      color: "#9333ea",
      transition: { duration: 0.3 }
    }
  };

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Skills
        </motion.h2>
        
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              whileHover="hover"
              className="bg-white p-6 rounded-lg shadow-sm"
            >
              <div className="flex flex-col items-center space-y-3">
                <motion.i 
                  className={`${skill.icon} text-4xl text-gray-700`}
                  variants={iconVariants}
                  whileHover="hover"
                />
                <motion.span 
                  className="text-sm font-medium text-gray-600"
                  variants={textVariants}
                  whileHover="hover"
                >
                  {skill.name}
                </motion.span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;