'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const teamMembers = [
  {
    name: 'Manvi Dhawan',
    title: 'Chief Executive Officer',
    description:
<<<<<<< HEAD
      'Manvi leads GTarang with a mission to fuse sustainability with innovation. An IIT Bombay (B.Tech + M.Tech) graduate with 3+ years in systems engineering and project management, she has spearheaded multi-disciplinary initiatives that unite nature-driven thinking with scalable technology. Her leadership philosophy focuses on developing intelligent, responsible, and eco-conscious systems that help industries evolve sustainably.',
=======
      'Manvi brings 12+ years of experience in project management and systems engineering, shaped through leading technical initiatives during her B.Tech + M.Tech at IIT Bombay. She believes that when businesses grow while embracing nature, nature supports us in achieving sustainable progress.',
>>>>>>> c8ec43fbab89f2a63e2d6355eb5aa47fea8de9f1
    image: '/images/manvi.png',
    linkedin: 'https://www.linkedin.com/in/manvidhawan/'
  },
  {
    name: 'Ratnesh Mishra',
    title: 'Chief Technology Officer',
    description:
<<<<<<< HEAD
      'Ratnesh, an IIT Bombay alumnus, brings over four years of advanced R&D and product development experience to GTarang. As a systems architect and innovation leader, he combines precision engineering with a visionary mindset to deliver dependable, scalable, and high-performance technologies. His approach is rooted in disciplined engineering, teamwork, and the belief that excellence emerges from consistent effort and curiosity.',
=======
      'An IIT Bombay alumnus with 13 years of hands-on experience in high-tech R&D, Ratnesh possesses deep technical acumen and team leadership skills. He champions the idea that success is earned not just through brilliance but through consistent hard work and unshakable dedication.',
>>>>>>> c8ec43fbab89f2a63e2d6355eb5aa47fea8de9f1
    image: '/images/ratnesh.jpg',
    linkedin: 'https://www.linkedin.com/in/ratnesh-mishra-26946179/'
  },
  {
    name: 'Amolika Soni',
    title: 'ADCS & Satellite Dynamics Expert',
    description:
      'A veteran aerospace engineer with 13+ years of experience, Amolika specializes in Attitude Determination and Control Systems (ADCS) and satellite flight software. She has worked with leading organizations including Pixxel, Honeywell, and Larsen & Toubro, contributing to multiple satellite missions. As part of the IIT Bombay Pratham satellite team, she developed robust control strategies that now inform her cutting-edge approach to satellite autonomy.',
    image: '/images/amolika.jpg',
    linkedin: 'https://www.linkedin.com/in/amolikasoni/'
  },
  {
    name: 'Devyesh Tandon',
    title: 'Artificial Intelligence & Machine Learning Expert',
    description:
      'Devyesh bridges AI, data science, and aerospace technology to design intelligent, high-impact systems. A former Qualcomm engineer, he brings 3+ years of experience in AI-driven software development along with a decade of engineering expertise. His focus lies in creating adaptive ML architectures that optimize complex processes, enhance real-time analytics, and transform how machines perceive and act within dynamic environments.',
    image: '/images/devyesh.jpg',
    linkedin: 'https://www.linkedin.com/in/devyesh-tandon-a6a24525/'
  },
  {
    name: 'Devang Dixit',
    title: 'Satellite Artificial Intelligence Engineer',
    description:
      'Devang leads AI integration efforts at GTarang, working on intelligent satellite analytics, geospatial inference, and signal interpretation models. His research and development focus is on SatAI — creating systems that enable autonomous satellite decision-making and real-time Earth observation. With a background in AI engineering and data systems, he is passionate about building the bridge between space technology and artificial intelligence.',
    image: '/images/devang.jpg',
    linkedin: 'https://www.linkedin.com/in/devdixit27/'
  }
];

const teamImages = [
  '/images/team.jpg',
  '/images/team2.jpg',
  '/images/team1.jpg'
];

export default function TeamPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % teamImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8">
      {/* Intro Section */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 mb-16">
        <div className="lg:w-1/2">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            At GTarang, we combine deep technical expertise with visionary innovation. Our mission is to leverage AI and satellite intelligence to create transformative, autonomous, and sustainable solutions — both on Earth and beyond. Together, our team pioneers advancements in AI systems, robotics, and space technology, driving the next generation of intelligent infrastructure.
          </p>
        </div>

        {/* Image Slideshow */}
        <div className="lg:w-1/2 w-full relative rounded-xl overflow-hidden shadow-lg">
          <div className="relative w-full aspect-[3/2]">
            <Image
              key={teamImages[currentImageIndex]}
              src={teamImages[currentImageIndex]}
              alt="GTarang Team"
              fill
              className="object-cover transition-all duration-700 ease-in-out rounded-xl"
            />
          </div>
        </div>
      </div>

      {/* Team Member Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 px-4 sm:px-6">
        {teamMembers.map((member) => (
          <div
            key={member.name}
            className="group bg-gradient-to-b from-gray-50 to-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-8 text-center border border-gray-100"
          >
            <div className="relative w-28 h-28 mx-auto mb-5">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="rounded-full object-cover border-4 border-white shadow-md group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h2 className="text-xl font-semibold text-gray-900">{member.name}</h2>
            <p className="text-sm text-indigo-600 font-medium mb-3">{member.title}</p>
            <p className="text-sm text-gray-700 leading-relaxed">{member.description}</p>
            {member.linkedin && (
              <Link
                href={member.linkedin}
                className="mt-4 inline-block text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                View LinkedIn →
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}