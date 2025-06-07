import React from 'react';

const Products = ({ title, description, images = [], children }) => {
  return (
    <div className="px-6 py-12 max-w-7xl mx-auto">
      {/* Title */}
      <h1 className="text-4xl font-bold mb-6 text-primary">{title}</h1>

      {/* Description */}
      <p className="text-gray-700 mb-8 leading-relaxed">{description}</p>

      {/* Image Gallery */}
      {images.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {images.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`Product ${idx + 1}`}
              className="rounded-lg shadow-md object-cover"
            />
          ))}
        </div>
      )}

      {/* Custom Children (buttons, details...) */}
      <div>{children}</div>
    </div>
  );
};

export default Products;
