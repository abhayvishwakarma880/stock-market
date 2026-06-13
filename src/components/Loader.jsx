import React from 'react';

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-[60vh]">
      <div className="relative w-16 h-16">
        <div className="absolute inset-0 rounded-full border-4 border-card-hover"></div>
        <div className="absolute inset-0 rounded-full border-4 border-success border-t-transparent animate-spin"></div>
      </div>
    </div>
  );
};

export default Loader;
