
import { Code, Database, BookOpen, ArrowRight } from "lucide-react";
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
      image: "/placeholder.svg",
      link: "https://github.com/yourusername/discourse",
      stack: [
        { name: "React", icon: Code },
        { name: "Prisma", icon: Database },
        { name: "Tailwind", icon: Code }
      ]
    },
    {
      id: 2,
      title: "ExpenseSync",
      description: "A web-based daily expense tracking system that helps users manage and track their expenditures efficiently. Features automated calculations and per-user expense tracking with detailed insights.",
      image: "/placeholder.svg",
      link: "https://github.com/yourusername/expensesync",
      stack: [{ name: "PHP", icon: Code }]
    },
    {
      id: 3,
      title: "Doorstep Delight",
      description: "A full-stack food delivery platform with real-time cart functionality and secure user authentication. Features responsive design and efficient database management.",
      image: "/placeholder.svg",
      link: "https://github.com/yourusername/doorstep-delight",
      stack: [
        { name: "Node.js", icon: Database },
        { name: "JavaScript", icon: Code },
        { name: "MongoDB", icon: Database }
      ]
    },
    {
      id: 4,
      title: "Password Generator",
      description: "A React-based password generator tool that creates secure and customizable passwords.",
      image: "/placeholder.svg",
      link: "https://github.com/yourusername/password-generator",
      stack: [{ name: "React", icon: Code }]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 animate-fade-in">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.id}
              className="group hover:shadow-xl transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl font-semibold">{project.title}</CardTitle>
                <div className="flex gap-2 mt-2">
                  {project.stack.map((tech, i) => (
                    <Badge key={i} variant="secondary" className="flex items-center gap-1">
                      <tech.icon className="w-4 h-4" />
                      {tech.name}
                    </Badge>
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm text-gray-600">
                  {project.description}
                </CardDescription>
              </CardContent>
              <CardFooter>
                <a 
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <Button variant="outline" className="w-full group-hover:bg-purple-600 group-hover:text-white transition-colors">
                    View Project
                  </Button>
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
          <a 
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="default" size="lg" className="animate-fade-in flex items-center gap-2">
              View More Projects
              <ArrowRight className="w-4 h-4" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
