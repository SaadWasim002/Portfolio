
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
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="group bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex flex-col items-center space-y-3">
                <i className={`${skill.icon} text-4xl text-gray-700 group-hover:text-purple-600 transition-colors`} />
                <span className="text-sm font-medium text-gray-600 group-hover:text-purple-600 transition-colors">
                  {skill.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
