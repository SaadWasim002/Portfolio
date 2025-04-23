
import { Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold">
            Hey folks, I'm{' '}
            <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
              Saad Wasim
            </span>
          </h1>
          <p className="text-xl text-gray-600">
            I design and code beautifully simple things, and I love what I do.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg">
              Download Resume
            </Button>
            <div className="flex gap-4">
              <Button variant="outline" size="icon">
                <Github className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="icon">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="icon">
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
        <div className="relative animate-fade-in">
          <div className="relative w-full aspect-square max-w-md mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-500/20 rounded-full animate-pulse" />
            <img
              src="/placeholder.svg"
              alt="Saad Wasim"
              className="rounded-full object-cover w-full h-full relative z-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
