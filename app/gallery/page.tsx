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
    src: '/images/gallery/aga1.jpg',
    title: 'Space Workshop at Schools',
    description: 'Igniting young minds with hands-on activities and interactive learning about space science.'
  },
  {
    src: '/images/gallery/rocket.jpg',
    title: 'First Rocket Launch',
    description: 'A landmark moment marking our entry into space experimentation and propulsion testing.'
  },
  {
    src: '/images/gallery/workshop.jpg',
    title: 'Satellite Systems Workshop',
    description: 'Students engage in building and testing satellite modules during our immersive training session.'
  },
  {
    src: '/images/gallery/meet1.jpg',
    title: 'Interaction with ISRO Chairman',
    description: 'A proud moment of receiving encouragement and insights from the head of India’s space agency.'
  },
  {
    src: '/images/gallery/hqdefault.jpg',
    title: 'Pratham Satellite Launch',
    description: 'Celebrating the successful launch of “Pratham” — our student-built satellite from IIT Bombay.'
  },
  {
    src: '/images/gallery/dis.jpeg',
    title: 'Accessible Space Education',
    description: 'Designing inclusive experiences to empower differently-abled children with space exploration tools.'
  },
  {
    src: '/images/gallery/eminent.jpg',
    title: 'Expert Reviews Before Launch',
    description: 'Collaborating with industry and academic experts to validate our satellite mission and payload design.'
  },
  {
    src: '/images/gallery/women.jpeg',
    title: 'Girls in Space STEM',
    description: 'Encouraging girls in rural and urban areas to explore STEM through space-focused workshops and mentorship.'
  },
  {
    src: '/images/gallery/Gtarang.png',
    title: 'IIT Bombay Recognition',
    description: 'Awarded and recognized by IIT Bombay for excellence in innovation and social impact through space technology.'
  }
];

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
