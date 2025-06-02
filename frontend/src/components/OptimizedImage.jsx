import React, { useState } from 'react';

const OptimizedImage = ({
  src,
  alt,
  className = '',
  fill = false,
  objectFit = 'cover',
  ...props
}) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  const imageStyles = fill
    ? {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        objectFit,
      }
    : {};

  return (
    <div className={`relative ${fill ? 'w-full h-full' : ''}`}>
      <img
        src={error ? '/placeholder.jpg' : src}
        alt={alt}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        onError={() => setError(true)}
        className={`transition-opacity duration-500 ${
          loaded ? 'opacity-100' : 'opacity-0'
        } ${className}`}
        style={imageStyles}
        {...props}
      />
    </div>
  );
};

export default OptimizedImage;
