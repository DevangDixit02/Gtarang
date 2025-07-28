'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const teamMembers = [
  {
    name: 'Manvi Dhawan',
    title: 'CEO',
    description:
      'Manvi brings 12+ years of experience in project management and systems engineering, shaped through leading technical initiatives during her B.Tech + M.Tech at IIT Bombay. She believes that when businesses grow while embracing nature, nature supports us in achieving sustainable progress.',
    image: '/images/manvi.png',
    linkedin: 'https://www.linkedin.com/in/manvidhawan/'
  },
  {
    name: 'Ratnesh Mishra',
    title: 'CTO',
    description:
      'An IIT Bombay alumnus with 13 years of hands-on experience in high-tech R&D, Ratnesh possesses deep technical acumen and team leadership skills. He champions the idea that success is earned not just through brilliance but through consistent hard work and unshakable dedication.',
    image: '/images/ratnesh.jpg',
    linkedin: 'https://www.linkedin.com/in/ratnesh-mishra-26946179/'
  },
  {
    name: 'Devang Dixit',
    title: 'SatAI Engineer',
    description:
      'Devang is focused on pushing the frontier of artificial intelligence in the satellite domain. He works on developing intelligent SatAI dashboards, signal interpretation models, and geospatial inference pipelines that support autonomous satellite operations and Earth observation applications.',
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
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 mb-16">
        {/* Text Section */}
        <div className="lg:w-1/2">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h1>
          <p className="text-lg text-gray-600">
            At GTarang, our vision is to harness the power of AI and satellite intelligence to solve real world problems both on Earth and beyond. We are committed to building scalable, intelligent systems that transform whether through autonomous space analytics, AI-driven insights, or robotic innovation. Our team unites domain expertise and creative engineering to drive the next wave of space-tech innovation.
          </p>
        </div>

        {/* Slideshow Section */}
        <div className="lg:w-1/2 w-full relative rounded-lg overflow-hidden shadow-md">
          <div className="relative w-full aspect-[3/2]">
            <Image
              key={teamImages[currentImageIndex]}
              src={teamImages[currentImageIndex]}
              alt="GTarang Team"
              fill
              className="object-cover transition-opacity duration-500 rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* Team Member Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 sm:px-6">
        {teamMembers.map((member) => (
          <div key={member.name} className="bg-gray-50 rounded-lg shadow-md p-6 text-center">
            <Image
              src={member.image}
              alt={member.name}
              width={112}
              height={112}
              className="mx-auto rounded-full object-cover w-24 h-24 sm:w-28 sm:h-28"
            />
            <h2 className="mt-4 text-xl font-semibold text-gray-900">{member.name}</h2>
            <p className="text-sm text-gray-500 font-medium">{member.title}</p>
            <p className="text-sm text-gray-700 mt-3">{member.description}</p>
            {member.linkedin && (
              <Link
                href={member.linkedin}
                className="mt-4 inline-block text-blue-600 hover:underline text-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                View LinkedIn
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
