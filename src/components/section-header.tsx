import React from 'react';

export default function SectionHeader({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <>
      <h2 className="font-serif text-3xl md:text-5xl text-center text-sky-700 mt-6">
        {title}
      </h2>
      <p className="text-center md:text-lg lg:text-xl text-sky-700/90 mt-4 max-w-md mx-auto">
        {description}
      </p>
    </>
  );
};
