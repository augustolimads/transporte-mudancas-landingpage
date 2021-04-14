import React from 'react';

export default function Titulo({ children, className }) {
  return (
    <h2
      className={`
      p-1 text-2xl font-semibold 
      md:text-3xl
      ${className}`}
      style={{ borderBottom: '2px solid var(--primary)' }}
    >
      {children}
    </h2>
  );
}
