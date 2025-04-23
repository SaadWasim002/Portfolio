
const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Discourse",
      description: "A React + Shadcn UI chat app with audio/video calls and secure Prisma-based auth.",
      image: "/placeholder.svg",
      link: "#"
    },
    {
      id: 2,
      title: "ExpenseSync",
      description: "Daily Expense Tracker: web-based app to log & calculate users' daily expenses automatically and store them per user for easy review.",
      image: "/placeholder.svg",
      link: "#"
    },
    {
      id: 3,
      title: "Doorstep Delight",
      description: "A responsive Bootstrap frontend with Node.js/Express backend and real-time cart.",
      image: "/placeholder.svg",
      link: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <a 
                  href={project.link}
                  className="inline-block px-6 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
