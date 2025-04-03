// Skeleton.jsx
import React from 'react';

const Skeleton = () => (
  <div className="animate-pulse space-y-4">
    <div className="bg-gray-200 h-48 rounded"></div>
    <div className="bg-gray-200 h-4 rounded w-3/4"></div>
    <div className="bg-gray-200 h-4 rounded w-1/2"></div>
    <div className="bg-gray-200 h-4 rounded w-1/4"></div>
  </div>
);

export default Skeleton;