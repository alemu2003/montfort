import React,{useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';


const MissionVision = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); 
  }, []);
  return (
    <section className="bg-gray-50 py-16 px-4 md:px-8 mt-20" >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 font-sulphur">
          Our Mission & Vision Statement
        </h2>
        <div className="flex flex-col md:flex-row items-start md:items-center space-y-8 md:space-y-0 md:space-x-12">
          {/* Mission */}
          <div className="w-full md:w-1/2 p-6 bg-white shadow-lg rounded-lg" data-aos="fade-down">
            <h3 className="text-2xl font-semibold text-blue-700 mb-4 font-sulphur">
              Mission Statement
            </h3>
            <p className="text-gray-500 leading-relaxed text-lg font-sulphur">
            Montfort secondary school's mission is to educate students in a Christ- centered environment with an emphasis on Catholic teachings and traditions.	In God the creator of everything, in Jesus, his Son and the Holy Spirit and develops a personal relationship with Jesus and lives every day according to his teachings and values. The school is guided by Montfort values and spirituality. The teachers strive to guide their students in the personal acceptance of faith and a respect of a life-long educational process. Individual potential is nurtured to be a person for others.
            </p>
          </div>

          {/* Vision */}
          <div className="w-full md:w-1/2 p-6 bg-white shadow-lg rounded-lg" data-aos="fade-down">
            <h3 className="text-2xl font-semibold text-blue-700 mb-4 font-sulphur">
              Vision Statement
            </h3>
            <p className="text-gray-500 leading-relaxed text-lg font-sulphur">
            A person for others, a scholar, a sports person, gentle person and a leader is our vision. Montfort secondary is committed to a nurturing approach to education and faith through Catholic education. 
The following are embraced: 
i.	 Staff and students will be held to high standards of intellectual and moral development
ii.	 Encouragement of critical thinking, technological skills, leadership and active teaching and learning to a full potential
iii.	Holistic approach to education through Catholic values
iv.	 Personal goals in self-discipline, respect, academic excellence progressing to the future

            </p>
          </div>
        </div>
      </div>
    </section>
    
  );
};

export default MissionVision;
