import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 120 }
  }
};

const floatingVariants = {
  float: {
    y: [-10, 10],
    transition: {
      y: {
        duration: 2,
        repeat: Infinity,
        repeatType: 'mirror',
        ease: 'easeInOut'
      }
    }
  }
};

const rotateVariants = {
  rotate: {
    rotate: 360,
    transition: {
      duration: 15,
      repeat: Infinity,
      ease: 'linear'
    }
  }
};

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          className="space-y-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-4xl md:text-6xl font-bold"
            variants={itemVariants}
          >
            Hey folks, I'm{' '}
            <motion.span
              className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              Saad Wasim
            </motion.span>
          </motion.h1>

          <motion.p className="text-xl text-gray-600" variants={itemVariants}>
            I design and code beautifully simple things, and I love what I do.
          </motion.p>

          <motion.div className="flex flex-wrap gap-4" variants={itemVariants}>
            <a href="/resume.pdf" download>
              <Button
                size="lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                asChild
              >
                <motion.div>Download Resume</motion.div>
              </Button>
            </a>
            <motion.div className="flex gap-4" variants={containerVariants}>
              {[
                { icon: Github, href: 'https://github.com/SaadWasim002' },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/saadwasim002/' },
                { icon: Mail, href: 'mailto:saadwasim444@gmail.com' }
              ].map(({ icon: Icon, href }, index) => (
                <motion.a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={itemVariants}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <Button variant="outline" size="icon">
                    <Icon className="h-5 w-5" />
                  </Button>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative w-full aspect-square max-w-md mx-auto">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-500/20 rounded-full"
              variants={rotateVariants}
              animate="rotate"
            />
            <motion.img
              src="/prof.jpg"
              alt="Saad Wasim"
              className="rounded-full object-cover w-full h-full relative z-10"
              variants={floatingVariants}
              animate="float"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;