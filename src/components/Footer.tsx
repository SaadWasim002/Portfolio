import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  const iconVariants = {
    hover: {
      y: -5,
      color: "#a855f7", // purple-400
      scale: 1.2,
      transition: { type: "spring", stiffness: 300 }
    },
    tap: {
      scale: 0.9
    }
  };

  const dividerVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: { duration: 0.5, ease: "circOut" }
    }
  };

  return (
    <motion.footer 
      className="bg-gray-900 text-white py-12"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={containerVariants}
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div 
            className="mb-6 md:mb-0"
            variants={itemVariants}
          >
            <h3 className="text-2xl font-bold mb-2">Saad Wasim</h3>
            <p className="text-gray-400">Full Stack Developer</p>
          </motion.div>
          
          <motion.div 
            className="flex space-x-4 mb-6 md:mb-0"
            variants={containerVariants}
          >
            {[
              { icon: Github, href: "#" },
              { icon: Linkedin, href: "#" },
              { icon: Mail, href: "#" }
            ].map(({ icon: Icon, href }, index) => (
              <motion.a 
                key={index}
                href={href}
                className="text-white hover:text-purple-400"
                variants={itemVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <motion.div variants={iconVariants}>
                  <Icon className="h-6 w-6" />
                </motion.div>
              </motion.a>
            ))}
          </motion.div>
        </div>
        
        <motion.hr 
          className="border-gray-800 my-8"
          variants={dividerVariants}
        />
        
        <motion.div 
          className="text-center text-gray-400 text-sm"
          variants={itemVariants}
        >
          <p>© {new Date().getFullYear()} Saad Wasim. All rights reserved.</p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;