import React from 'react';
import NotFoundImage from '../assets/NotFoundImage.jpg';
import '../Style.scss';

export function NotFound() {
  return (
    <div className="Notfound">
      <img src={NotFoundImage} alt="Not found Image" />
    </div>
  );
}
