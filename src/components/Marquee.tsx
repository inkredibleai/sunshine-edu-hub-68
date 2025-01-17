const Marquee = () => {
  const announcements = [
    "Admissions open for academic year 2024-25",
    "New batch starting for IIT-JEE preparation",
    "Excellent results in board examinations",
    "State-level sports competition winners",
  ];

  return (
    <div className="bg-primary text-white py-2 overflow-hidden">
      <div className="animate-marquee-horizontal whitespace-nowrap">
        <span className="inline-block px-4">
          {announcements.map((text, index) => (
            <span key={index} className="mx-8">
              ★ {text}
            </span>
          ))}
        </span>
      </div>
    </div>
  );
};

export default Marquee;