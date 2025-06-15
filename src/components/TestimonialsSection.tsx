'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    content: "ShiftSwift made our office relocation completely hassle-free. Their team was professional, efficient, and careful with all our equipment. Couldn't recommend them more!",
    author: "Sarah Johnson",
    role: "Operations Manager",
    company: "Tech Solutions Inc."
  },
  {
    content: "The best moving experience I've ever had. They were punctual, professional, and took great care of our belongings during our interstate move.",
    author: "Michael Chen",
    role: "Homeowner",
    company: "Happy Customer"
  },
  {
    content: "Their international moving service was exceptional. They handled all the customs paperwork and delivered everything safely to our new home abroad.",
    author: "Emma Thompson",
    role: "Executive Director",
    company: "Global Ventures Ltd."
  },
];

export default function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const next = () => {
    setCurrentTestimonial((current) => (current + 1) % testimonials.length);
  };

  const previous = () => {
    setCurrentTestimonial((current) => (current - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-primary-600">Testimonials</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            What Our Customers Say
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24">
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col items-center"
              >
                <div className="text-center text-xl leading-8 text-gray-600">
                  "{testimonials[currentTestimonial].content}"
                </div>
                <div className="mt-8 text-base">
                  <div className="font-semibold text-gray-900">{testimonials[currentTestimonial].author}</div>
                  <div className="mt-1 text-gray-500">
                    {testimonials[currentTestimonial].role} • {testimonials[currentTestimonial].company}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <button
                type="button"
                onClick={previous}
                className="rounded-full bg-white p-2 text-gray-400 shadow-sm hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
              >
                <span className="sr-only">Previous testimonial</span>
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                type="button"
                onClick={next}
                className="rounded-full bg-white p-2 text-gray-400 shadow-sm hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
              >
                <span className="sr-only">Next testimonial</span>
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
