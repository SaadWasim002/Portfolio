
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">Saad Wasim</h3>
            <p className="text-gray-400">Full Stack Developer</p>
          </div>
          
          <div className="flex space-x-4 mb-6 md:mb-0">
            <a href="#" className="hover:text-purple-400 transition-colors">
              <Github className="h-6 w-6" />
            </a>
            <a href="#" className="hover:text-purple-400 transition-colors">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="#" className="hover:text-purple-400 transition-colors">
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
        
        <hr className="border-gray-800 my-8" />
        
        <div className="text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Saad Wasim. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
