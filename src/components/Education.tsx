
const Education = () => {
  const educationItems = [
    {
      id: 1,
      school: "St. Joseph's School",
      degree: "10th ICSE",
      location: "Bhagalpur, Bihar",
      period: "2018 – 2019",
      logo: "/placeholder.svg"
    },
    {
      id: 2,
      school: "Millia Convent English School",
      degree: "12th CBSE",
      location: "Purnea, Bihar",
      period: "2019 – 2021",
      logo: "/placeholder.svg"
    },
    {
      id: 3,
      school: "Lovely Professional University",
      degree: "B.Tech CSE",
      location: "Phagwara, Punjab",
      period: "2022 – 2026",
      logo: "/placeholder.svg"
    }
  ];

  return (
    <section id="career" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Education</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {educationItems.map((item) => (
            <div 
              key={item.id}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-24 h-24 mb-4 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center">
                  <img 
                    src={item.logo} 
                    alt={`${item.school} Logo`} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.degree}</h3>
                <p className="text-lg font-medium mb-1">{item.school}</p>
                <p className="text-gray-600 mb-2">{item.location}</p>
                <p className="text-sm text-gray-500">{item.period}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
