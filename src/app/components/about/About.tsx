import React from 'react';

export const About = () => {
  return (
    <section id="about" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto">
        <div className="mx-auto w-full max-w-3xl text-center">
          <p className="mb-4 font-semibold text-indigo-600 md:mb-6">About Us</p>
          <h2 className="mb-6 text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
            Transforming businesses with AI
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600 md:text-xl">
            We're on a mission to make artificial intelligence accessible and practical for businesses of all sizes. Our platform combines cutting-edge technology with intuitive design to deliver powerful AI solutions.
          </p>
        </div>
      </div>
    </section>
  );
};