import React from 'react';
import { FaFacebook, FaImage, FaInstagram, FaLinkedin, FaSearch, FaYoutube } from "react-icons/fa";
import { FaSackDollar, FaWebAwesome } from 'react-icons/fa6';
import { MdEmail } from "react-icons/md";
import { RiTwitterXFill } from "react-icons/ri";
import { Link } from 'react-router-dom';


const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="w-full mt-10">
     

       

      {/* Footer Content Section */}
      <div className="bg-gray-900 text-white py-4 px-6 md:px-6 flex flex-wrap justify-between">
        {/* Logo Section */}
        <div className="w-full flex md:w-1/4 mb-4 md:mb-0">
          <img
              src="/image/logo.jpg"
              alt="Logo"
              className="w-10 h-16 md:w-16 rounded-full"
            />
            <h4 className="text-1xl font-small ml-3 mt-5 font-sulphur">Montfort Secondary School</h4>
        </div>

        {/* Brand Section */}
        <div className="w-full md:w-1/4 mb-6 md:mb-0">
          <h4 className="text-1xl font-small font-sulphur">CORE VALUES</h4>
          <p className="text-gray-400 my-2 cursor-pointer text-sm font-sulphur">Faith in God</p>
          <p className="text-gray-400 my-2 cursor-pointer text-sm font-sulphur">Efficiency</p>
          <p className="text-gray-400 my-2 cursor-pointer text-sm font-sulphur">Integrity</p>
          <p className="text-gray-400 my-2 cursor-pointer text-sm font-sulphur">Humility</p>
          <p className="text-gray-400 my-2 cursor-pointer text-sm font-sulphur">Professionalism</p>
          <p className="text-gray-400 my-2 cursor-pointer text-sm font-sulphur">Punctuality</p>
          <p className="text-gray-400 my-2 cursor-pointer text-sm font-sulphur">Transparency</p>
          <p className="text-gray-400 my-2 cursor-pointer text-sm font-sulphur">Respect</p>
          <p className="text-gray-400 my-2 cursor-pointer text-sm font-sulphur">Love</p>
        </div>

        {/* News Section */}
        <div className="w-full md:w-1/4 mb-6 md:mb-0">
          <h4 className="text-1xl font-small font-sulphur">SCHOOL FEATURES</h4>
          <p className="text-gray-400 my-2 cursor-pointer text-sm font-sulphur">Religious Foundation and Values</p>
          <p className="text-gray-400 my-2 cursor-pointer text-sm"> Academic Excellence</p>
          <p className="text-gray-400 my-2 cursor-pointer text-sm">Extracurricular Activities</p>
          <p className="text-gray-400 my-2 cursor-pointer text-sm">Community Engagement</p>
          <p className="text-gray-400 my-2 cursor-pointer text-sm">Facilities</p>
          <p className="text-gray-400 my-2 cursor-pointer text-sm">Reputation</p>
          <p className="text-gray-400 my-2 cursor-pointer text-sm">Classrooms</p>
          <p className="text-gray-400 my-2 cursor-pointer text-sm">Teachers and Staff</p>
          <p className="text-gray-400 my-2 cursor-pointer text-sm">Library</p>
        </div>

        {/* Social Media Section */}
        <div className="w-full md:w-1/4 flex justify-between items-center space-x-6">
        <Link 
    to={'https://www.flickr.com/people/202054527@N02/'} 
    target='_blank'
    className="hover:text-yellow-500"
  >
    <FaImage color="#FEFEFE" size={100} cursor={'pointer'} />
  </Link>
  <Link 
    to={'https://www.facebook.com/profile.php?id=100076708597194'} 
    target='_blank'
    className="hover:text-yellow-500"
  >
    <FaFacebook color="#FEFEFE" size={30} cursor={'pointer'} />
  </Link>

  <Link 
    to={'https://www.instagram.com/direct/t/27025452247099422/'} 
    target='_blank'
    className="hover:text-yellow-100"
  >
    <FaInstagram color="#FEFEFE" size={30} cursor={'pointer'} />
  </Link>

  <Link 
    to={'https:www.montfortss99@gmail.com'} 
    target='_blank'
    className="hover:text-yellow-500"
  >
    <MdEmail color="#FEFEFE" size={30} cursor={'pointer'} />
  </Link>

  <Link 
    to={'https://www.youtube.com/@MontfortRwanda1'} 
    target='_blank'
    className="hover:text-yellow-500"
  >
    <FaYoutube color="#FEFEFE" size={30} cursor={'pointer'} />
  </Link>
  
</div>
      </div>

      {/* Footer Bottom Section */}
      <div className="bg-gray-900 py-2 text-center border-t border-gray-600">
        <p className="text-gray-400 text-sm font-small font-sulphur">
          &copy; {currentYear} Montfort Secondary School Nyamata.Conceptualized by Mugabe. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
