'use client';

import Image from 'next/image';
import { useState } from 'react';

type GalleryImage = {
  src: string;
  title: string;
  description: string;
};

type SelectedImage = GalleryImage | null;

const galleryImages: GalleryImage[] = [
  {
    src: '/images/gallery/meet1.jpg',
    title: 'In Conversation with ISRO Leadership',
    description: 'A moment of pride as we receive insights and encouragement from the Chairman of ISRO.'
  },
  {
    src: '/images/gallery/mn.jpg',
    title: 'Inspiring Future Innovators',
    description: 'Manvi engages with students, sparking curiosity and motivation to explore space science.'
  },
  {
    src: '/images/gallery/rocket.jpg',
    title: 'Maiden Rocket Launch',
    description: 'Our entry into space propulsion marked by the successful launch of our first test rocket.'
  },
  {
    src: '/images/gallery/workshop.jpg',
    title: 'Hands-on Satellite Workshop',
    description: 'Students immerse themselves in designing, building, and testing satellite systems.'
  },
  {
    src: '/images/gallery/hqdefault.jpg',
    title: 'Pratham Satellite Launched',
    description: 'Celebrating “Pratham” — IIT Bombay’s student-built satellite successfully launched into orbit.'
  },
  {
    src: '/images/gallery/dis.jpeg',
    title: 'Inclusive Space Education',
    description: 'Creating accessible learning experiences to empower differently-abled children in STEM.'
  },
  {
    src: '/images/gallery/eminent.jpg',
    title: 'Mission Validation by Experts',
    description: 'Our satellite designs undergo rigorous review by senior experts from academia and industry.'
  },
  {
    src: '/images/gallery/women.jpeg',
    title: 'Girls Reaching for the Stars',
    description: 'Encouraging young girls across India to explore STEM careers through space-tech initiatives.'
  },
  {
    src: '/images/gallery/agaNews.jpg',
    title: 'AGA in the Media Spotlight',
    description: 'Featured in major news outlets for pioneering work in space education and innovation.'
  }
];


const recognitionImages = {
  poweredAccelerator: [
    {
      src: '/images/recognition/powered1.jpg',
      title: 'Powered Accelerator Felicitation',
      description: 'Honored with the Powered Accelerator award for leading a high-impact, women-led business.'
    },
    {
      src: '/images/recognition/powered3.jpg',
      title: 'Pitching AGA’s Vision',
      description: 'Manvi presenting our space-tech vision to investors and mentors during the accelerator.'
    },
    {
      src: '/images/recognition/powered2.png',
      title: 'Selected Among Top Cohort',
      description: 'Chosen as part of an elite cohort of entrepreneurs driving innovation and change.'
    }
  ],
  iitBombay: [
    {
      src: '/images/team2.jpg',
      title: 'Guidance from ISRO at IITB',
      description: 'Receiving invaluable insights from ISRO’s Chairman during a visit to IIT Bombay.'
    },
    {
      src: '/images/gallery/Gtarang.png',
      title: 'IIT Bombay Recognition',
      description: 'Celebrated by IIT Bombay for impactful work in space-tech and community outreach.'
    }
  ]
};


export default function GalleryPage() {
  const [selected, setSelected] = useState<SelectedImage>(null);

  return (
    <>
      <div className="min-h-screen bg-white py-20">
        <div className="container-custom text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Journey in Frames</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore some of our most exciting milestones from educational outreach and space system development to community engagement and recognition. Journey from the IIT Bombay launch to our global presence. This gallery captures our innovation and impact in action.
          </p>
        </div>

        <div className="container-custom grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {galleryImages.map(({ src, title, description }, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg shadow hover:shadow-lg transition-shadow duration-300 cursor-pointer"
              onClick={() => setSelected({ src, title, description })}
            >
              <div className="relative w-full h-[220px]">
                <Image
                  src={src}
                  alt={title}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="mt-3 text-center">
                <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
                <p className="text-sm text-gray-600">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recognition Section */}
      <div className="bg-gray-50 py-20">
        <div className="container-custom text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Recognition</h2>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            Honoring the achievements and accolades that celebrate our mission and leadership.
          </p>
        </div>

        {/* Powered Accelerator */}
        <div className="container-custom mb-16">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">Powered Accelerator Award for Women-led Business</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {recognitionImages.poweredAccelerator.map((img, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-lg shadow hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                onClick={() => setSelected(img)}
              >
                <div className="relative w-full h-[220px]">
                  <Image
                    src={img.src}
                    alt={img.title}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <div className="mt-3 text-center">
                  <h3 className="text-lg font-semibold text-gray-900">{img.title}</h3>
                  <p className="text-sm text-gray-600">{img.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* IIT Bombay */}
        <div className="container-custom">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">IIT Bombay Recognition</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {recognitionImages.iitBombay.map((img, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-lg shadow hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                onClick={() => setSelected(img)}
              >
                <div className="relative w-full h-[220px]">
                  <Image
                    src={img.src}
                    alt={img.title}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <div className="mt-3 text-center">
                  <h3 className="text-lg font-semibold text-gray-900">{img.title}</h3>
                  <p className="text-sm text-gray-600">{img.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal Overlay */}
      {selected && (
        <div
          onClick={() => setSelected(null)}
          className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center p-4 z-50 cursor-pointer"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-auto p-6 relative"
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 text-2xl font-bold"
              aria-label="Close modal"
            >
              &times;
            </button>
            <Image
              src={selected.src}
              alt={selected.title}
              width={800}
              height={600}
              className="rounded-md mb-4 object-contain w-full"
            />
            <h2 className="text-2xl font-semibold mb-2">{selected.title}</h2>
            <p className="text-gray-700">{selected.description}</p>
          </div>
        </div>
      )}
    </>
  );
}
