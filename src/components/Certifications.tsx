
const Certifications = () => {
  const certifications = [
    {
      id: 1,
      title: "CodeFest'25 Prelims — Rank 845",
      description: "Secured rank 845 in the CodeFest'25 Prelims, demonstrating outstanding problem-solving skills and technical proficiency.",
      organization: "IICPC",
      organizationDesc: "The Intercollegiate Informatic & Competitive Programming Camp (IICPC Pvt. Ltd.) runs CodeFest—India's premier contest on algorithms, data structures & optimization.",
      image: "/placeholder.svg"
    },
    {
      id: 2,
      title: "Competitive Programming – DSA Training",
      description: "Completed 'Competitive Programming – Data Structures & Algorithms' training (10 Jan 2025–20 Feb 2025), mastering algorithm optimization, complexity analysis & problem solving.",
      organization: "Coding Spoon",
      organizationDesc: "A top coding bootcamp offering interactive DSA masterclasses, mock contests & mentor-led sessions to ace technical interviews.",
      image: "/placeholder.svg"
    },
    {
      id: 3,
      title: "Data Structures & Algorithms",
      description: "Completed the 'Data Structures and Algorithms' program—hands-on projects & theory to become an excellent software engineer.",
      organization: "Programming Pathshala",
      organizationDesc: "An ed-tech initiative delivering modular CS courses with video lectures, quizzes & real-world assignments.",
      image: "/placeholder.svg"
    },
    {
      id: 4,
      title: "HP Power Lab Round 2 Participant",
      description: "Participated in Round 2: Executive Summary & Prototype Submission of HP Power Lab as Team 'sinha.khushi403.'",
      organization: "HPCL",
      organizationDesc: "Hindustan Petroleum Corporation Ltd. is a leading downstream oil company fostering innovation via its Power Lab challenges.",
      image: "/placeholder.svg"
    },
    {
      id: 5,
      title: "Infineon Hackathon Participant",
      description: "Took part in Infineon Technologies' 'Defend The Kingdom' hackathon at LPU on 9–10 Feb 2025.",
      organization: "Infineon",
      organizationDesc: "A global semiconductor leader powering automotive, industrial & security solutions; known for its innovative developer hackathons.",
      image: "/placeholder.svg"
    }
  ];

  return (
    <section id="certifications" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Certifications</h2>
        <div className="space-y-8">
          {certifications.map((cert) => (
            <div 
              key={cert.id}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col md:flex-row gap-6"
            >
              <div className="md:w-1/4 flex-shrink-0">
                <img 
                  src={cert.image} 
                  alt={cert.title} 
                  className="w-full h-auto rounded-md object-cover"
                />
              </div>
              <div className="md:w-3/4">
                <h3 className="text-xl font-semibold mb-3">{cert.title}</h3>
                <p className="text-gray-700 mb-4">
                  {cert.description}
                </p>
                <div className="bg-gray-50 p-4 rounded-md">
                  <p className="text-sm">
                    <strong>About {cert.organization}:</strong><br />
                    {cert.organizationDesc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
