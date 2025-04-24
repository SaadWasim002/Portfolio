import { motion } from 'framer-motion';

const Education = () => {
  const educationItems = [
    {
      id: 1,
      school: "St. Joseph's School",
      degree: "10th ICSE",
      location: "Bhagalpur, Bihar",
      period: "2018 – 2019",
      logo: "/stjosephschool.jpg"
    },
    {
      id: 2,
      school: "Millia Convent English School",
      degree: "12th CBSE",
      location: "Purnea, Bihar",
      period: "2019 – 2021",
      logo: "/millia.jpg"
    },
    {
      id: 3,
      school: "Lovely Professional University",
      degree: "B.Tech CSE",
      location: "Phagwara, Punjab",
      period: "2022 – 2026",
      logo: "/lpu.jpg"
    }
  ];

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

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 10
      }
    },
    hover: {
      y: -5,
      transition: { type: "spring", stiffness: 300 }
    }
  };

  const logoVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { type: "spring", stiffness: 150 }
    },
    hover: {
      scale: 1.05,
      rotate: [0, 5, -5, 0],
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="career" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Education
        </motion.h2>
        
        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {educationItems.map((item) => (
            <motion.div 
              key={item.id}
              className="bg-white p-6 rounded-lg shadow-sm"
              variants={itemVariants}
              whileHover="hover"
            >
              <div className="flex flex-col items-center text-center">
                <motion.div 
                  className="w-24 h-24 mb-4 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center"
                  variants={logoVariants}
                  whileHover="hover"
                >
                  <img 
                    src={item.logo} 
                    alt={`${item.school} Logo`} 
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <motion.h3 
                  className="text-xl font-semibold mb-2"
                  whileHover={{ scale: 1.03 }}
                >
                  {item.degree}
                </motion.h3>
                <p className="text-lg font-medium mb-1">{item.school}</p>
                <p className="text-gray-600 mb-2">{item.location}</p>
                <p className="text-sm text-gray-500">{item.period}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Education;