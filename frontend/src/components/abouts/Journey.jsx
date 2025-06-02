const journey = [
  {
    years: '2025-Present',
    role: 'Mern Stack Developer',
    company: 'Freelance',
  },
  {
    years: '2020-2023',
    role: 'Marketing Executive',
    company: 'Search Fleek',
  },
  {
    years: '2018-2020',
    role: 'Student',
    company: 'Solimullah University College',
  },
];

const Journey = () => {
  return <div className="flex flex-col">
    <h2 className="h2 mb-8">
      Education & <span className="text-accent">Experience</span>
    </h2>
    {journey.map((item, index) => {
      const { years, role, company } = item;
      return (
        <div key={index} className="flex items-center gap-12 w-full">
          {/* bullets */}
          <div className="flex flext-col w-max justify-center items-center">
            <div className="w-3 h-3 bg-accent rounded-full"></div>
            <div className="w-[1px] h-[180px] bg-white/10"></div>
          </div>
          {/* content */}
          <div className="max-w-[500px]">
            <p className="text-lg text-white/50 mb-6">{years}</p>
            <h3 className="h4 mb-2">{role}</h3>
            <p className="text-lg text-white/50">{company}</p>
          </div>
        </div>
      );
    }
    )}
  </div>;
};

export default Journey;
