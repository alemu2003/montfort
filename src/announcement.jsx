import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Announcement = () => {
  useEffect(() => {
    AOS.init({ duration: 2000, easing: "ease-in-out", once: true });
  }, []);

  const announcements = [
    {
      id: 1,
      title: "Amatangazo 2025-2026",
      description: "Ubuyobozi bwa MONTFORT SECONDARY SCHOOL NYAMATA buramenyesha ababyeyi bose ko bwatangaje amabwiriza yo kwakira abanyeshuri bashya mu mwaka w'amashuri 2025-2026.",
      fileUrl: "/files/AMATANGAZO.pdf",
    },
    /*
    {
      id: 2,
      title: "Parents’ Day Scheduled for August 10",
      description: "Parents are invited to meet teachers and discuss students' progress. Please collect your invitation letters in the admin office.",
      fileUrl: "/files/parents-day-invitation.pdf",
    },
    {
      id: 3,
      title: "Prefect Campaigns Begin Next Week",
      description: "All candidates are required to submit campaign posters by Monday. Campaigns will run throughout the following week.",
      fileUrl: "/files/prefect-campaign-rules.pdf",
    },
    */
  ];

  return (
    <div
      className="announcement-container px-4 py-8 md:py-12 bg-white"
      data-aos="fade-up"
    >
      {/* Title */}
      <h2 className="text-center text-3xl md:text-4xl font-bold mb-8 text-gray-800 font-sulphur">
        Announcements
      </h2>

      {/* Announcement Boxes */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {announcements.map((item) => (
          <div
            key={item.id}
            className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            data-aos="zoom-in"
          >
            {/* Title */}
            <h3 className="text-xl font-bold text-blue-700 text-center mb-2 font-sulphur">
              {item.title}
            </h3>

            {/* Subtitle / Description */}
            <p className="text-gray-700 text-sm mb-4 text-center font-sulphur">
              {item.description}
            </p>

            {/* Read More Button */}
            <div className="flex justify-center">
              <a
                href={item.fileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-900 hover:bg-yellow-500 text-white px-4 py-2 rounded-lg transition-colors duration-300 text-sm font-semibold"
              >
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Announcement;
