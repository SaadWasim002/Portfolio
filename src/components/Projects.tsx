
import { useState } from 'react';
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  
  const projects = [
    {
      id: 1,
      title: "Discourse",
      description: "A modern full-stack chat application featuring text, audio, and video call channels with dynamic features like attachments, message editing/deletion, and an invite system with advanced member management.",
      tech: ["React", "Shadcn UI", "Prisma", "Tailwind CSS"],
      image: "/placeholder.svg",
      github: "https://github.com/yourusername/discourse",
      demo: "#",
      period: "Jul' 2024 - Present"
    },
    {
      id: 2,
      title: "ExpenseSync",
      description: "A web-based daily expense tracker that helps users manage and track their expenditures efficiently. Features automatic calculations, daily expense tracking, and personalized user accounts.",
      tech: ["React", "Node.js", "MongoDB", "Express"],
      image: "/placeholder.svg",
      github: "https://github.com/yourusername/expensesync",
      demo: "#",
      period: "Jun' 2024"
    },
    {
      id: 3,
      title: "Doorstep Delight",
      description: "A full-stack food delivery application with secure login and real-time cart functionality, featuring responsive design and efficient database management.",
      tech: ["JavaScript", "Node.js", "MongoDB", "Bootstrap"],
      image: "/placeholder.svg",
      github: "https://github.com/yourusername/doorstep-delight",
      demo: "#",
      period: "May' 2023 - May' 2024"
    },
    {
      id: 4,
      title: "Password Generator",
      description: "A secure password generator with customizable options for length and character types.",
      tech: ["React", "JavaScript", "CSS"],
      image: "/placeholder.svg",
      github: "https://github.com/yourusername/password-generator",
      demo: "#",
      period: "Apr' 2023"
    }
  ];

  const displayedProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 animate-fade-in">
          Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project, index) => (
            <Card 
              key={project.id}
              className="group transform hover:-translate-y-2 transition-all duration-300 animate-slide-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardHeader>
                <div className="h-48 overflow-hidden rounded-t-lg">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-xl font-semibold mt-4">{project.title}</h3>
                <p className="text-sm text-muted-foreground">{project.period}</p>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <a 
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-sm hover:text-primary"
                >
                  <Github className="w-4 h-4" />
                  <span>Code</span>
                </a>
                <a 
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-sm hover:text-primary"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Demo</span>
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        {projects.length > 3 && (
          <div className="text-center mt-12">
            <Button 
              onClick={() => setShowAll(!showAll)}
              variant="outline"
              className="animate-fade-in"
            >
              {showAll ? 'Show Less' : 'View More Projects'}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
