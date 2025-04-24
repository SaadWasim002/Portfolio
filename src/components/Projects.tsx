import { motion } from "framer-motion";
import { Code2, Server, Library, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Discourse",
      description: "A modern full-stack chat application featuring text, audio, and video calls, with dynamic features like attachments, message management, and an invite system. Built with secure authentication and dark mode support.",
      image: "/discourse.png",
      link: "https://github.com/SaadWasim002/Discourse",
      stack: [
        { name: "React", icon: Code2 },
        { name: "Prisma", icon: Server },
        { name: "Tailwind", icon: Library },
      ],
    },
    {
      id: 2,
      title: "ExpenseSync",
      description: "A web-based daily expense tracking system that helps users manage and track their expenditures efficiently. Features automated calculations and per-user expense tracking with detailed insights.",
      image: "/expensesync.png",
      link: "https://github.com/SaadWasim002/expensesync",
      stack: [{ name: "PHP", icon: Code2 }],
    },
    {
      id: 3,
      title: "Doorstep Delight",
      description: "A full-stack food delivery platform with real-time cart functionality and secure user authentication. Features responsive design and efficient database management.",
      image: "/doorstep.png",
      link: "https://github.com/SaadWasim002/Doorstep-Delight",
      stack: [
        { name: "Node.js", icon: Server },
        { name: "JavaScript", icon: Code2 },
        { name: "MongoDB", icon: Server },
      ],
    },
    {
      id: 4,
      title: "Password Generator",
      description: "A React-based password generator tool that creates secure and customizable passwords.",
      image: "/passwordGen.png",
      link: "https://github.com/SaadWasim002/Password-Generator",
      stack: [{ name: "React", icon: Code2 }],
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Projects
        </motion.h2>

        <motion.div
          className="grid md:grid-cols-2 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={item}
              className="flex flex-col h-full" // Ensure all cards take equal height
            >
              <Card className="group flex flex-col h-full">
                <motion.div
                  className="h-48 flex items-center justify-center bg-white"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="max-h-full w-auto object-contain"
                  />
                </motion.div>

                <CardHeader className="flex-grow">
                  <CardTitle className="text-xl font-semibold">
                    {project.title}
                  </CardTitle>
                  <div className="flex gap-2 mt-2 flex-wrap">
                    {project.stack.map((tech, i) => (
                      <motion.div
                        key={i}
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <Badge
                          variant="secondary"
                          className="flex items-center gap-1"
                        >
                          <tech.icon className="w-4 h-4" />
                          {tech.name}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardHeader>

                <CardContent className="flex-grow">
                  <CardDescription className="text-sm text-gray-600">
                    {project.description}
                  </CardDescription>
                </CardContent>

                <CardFooter className="flex-shrink-0">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full"
                  >
                    <Button
                      variant="outline"
                      className="w-full group-hover:bg-purple-600 group-hover:text-white transition-colors"
                    >
                      View Project
                    </Button>
                  </a>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <a href="https://github.com/SaadWasim002" target="_blank" rel="noopener noreferrer">
            <Button variant="default" size="lg" className="flex items-center gap-2">
              View More Projects
              <ArrowRight className="w-4 h-4" />
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
   